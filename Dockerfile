# Build the core environment
FROM node:slim AS core
WORKDIR /app
ADD package.json /app/package.json
ADD angular.json /app/angular.json
ADD package-lock.json /app/package-lock.json
RUN npm install -g @angular/cli@latest
RUN npm install
ADD . /app

# Build only the backend
FROM node:slim AS backend
WORKDIR /app
COPY --from=core /app/node_modules /app/mode_modules
ADD dockerfiles/backend/server.js /app/server.js
ENTRYPOINT ["/usr/bin/node", "server.js"]
EXPOSE 80

# Compile the frontend here
FROM node:slim AS frontend_temp
# Seeing as this is only a temporary image, we need to make as many layers to improve caching :D
WORKDIR /app
COPY --from=core /app/package.json /app/package.json
COPY --from=core /app/angular.json /app/angular.json
COPY --from=core  /app/package-lock.json /app/package-lock.json
RUN npm install --unsafe-perm -g angular-cli
RUN npm install -g @angular/cli
RUN ng set --global warnings.packageDeprecation=false
RUN mkdir -p /usr/lib/node_modules/angular-cli/node_modules/node-sass/vendor
COPY --from=core /app /app
RUN npm run build -- -c production

# And place the compiled frontend onto a real frontend :D
FROM nginx:latest AS frontend
COPY --from=frontend_temp /app/dist/outsourcing-pl-app /usr/share/nginx/html
EXPOSE 80

