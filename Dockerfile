# Build the core environment
FROM node:12 AS core
WORKDIR /app
ADD package.json /app/package.json
ADD angular.json /app/angular.json
ADD package-lock.json /app/package-lock.json
RUN npm install -g @angular/cli@latest && \
    npm install
ADD . /app

# Build only the backend
FROM node:12 AS backend
WORKDIR /app
COPY --from=core /app /app
ADD dockerfiles/backend /app/server.js
ENTRYPOINT ["/usr/bin/node", "server.js"]
EXPOSE 80

# Compile the frontend here
FROM node:12 AS frontend_temp

COPY --from=core /app /app
WORKDIR /app
RUN npm install --unsafe-perm -g angular-cli && \
    npm install -g @angular/cli && \
    ng set --global warnings.packageDeprecation=false && \
    mkdir -p /usr/lib/node_modules/angular-cli/node_modules/node-sass/vendor && \
    npm run build -- -c production

# And place the compiled frontend onto a real frontend :D
FROM nginx:latest AS frontend
COPY --from=frontend_temp /app/dist /usr/share/nginx/html
EXPOSE 80

