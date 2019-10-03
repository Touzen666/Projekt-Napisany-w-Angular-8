# Build the core environment
FROM node:12 AS core
WORKDIR /app
ADD package.json /app/package.json
ADD package-lock.json /app/package-lock.json
RUN npm install -g @angular/cli@latest && \
    npm install
STOPSIGNAL SIGKILL
EXPOSE 80

# Build only the backend
FROM node:12 AS backend
WORKDIR /app
COPY --from=core /app/node_modules /app/node_modules
COPY --from=core /app/package.json /app/package.json
COPY --from=core /app/package-lock.json /app/package-lock.json
ADD backend/server.js /app/server.js
ENTRYPOINT ["/usr/bin/node", "server.js"]

# Build only the frontend
FROM node:12 AS frontend_temp
USER root
WORKDIR /app

COPY --from=core /app/node_modules /app/node_modules
COPY --from=core /app/package.json /app/package.json
COPY --from=core /app/package-lock.json /app/package-lock.json
RUN npm install --unsafe-perm -g angular-cli && \
    npm install -g @angular/cli && \
    ng set --global warnings.packageDeprecation=false && \
    mkdir -p /usr/lib/node_modules/angular-cli/node_modules/node-sass/vendor && \

RUN npm run build -- c- production

FROM nginx:latest AS frontend
COPY --from=frontend_temp /app/dist /usr/share/nginx/html
EXPOSE 80

