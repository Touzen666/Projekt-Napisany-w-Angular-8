# Build the core environment
FROM smokserwis/build:node10 AS core
WORKDIR /app
ADD package.json /app/package.json
ADD package-lock.json /app/package-lock.json
RUN npm install -g @angular/cli@latest && \
    npm install
STOPSIGNAL SIGKILL
LABEL Node.Version=10
EXPOSE 80

# Build only the backend
FROM smokserwis/build:node10 AS backend
WORKDIR /app
COPY --from=core /app/node_modules /app/node_modules
COPY --from=core /app/package.json /app/package.json
COPY --from=core /app/package-lock.json /app/package-lock.json
ADD backend/server.js /app/server.js
ENTRYPOINT ["/usr/bin/node", "server.js"]


# Build only the frontend
FROM smokserwis/build:node10 AS frontend
USER root
WORKDIR /app

COPY --from=core /app/node_modules /app/node_modules
COPY --from=core /app/package.json /app/package.json
COPY --from=core /app/package-lock.json /app/package-lock.json
RUN ng set --global warnings.packageDeprecation=false && \
    mkdir -p /usr/lib/node_modules/angular-cli/node_modules/node-sass/vendor && \
    npm install --unsafe-perm -g angular-cli && \
    npm install -g @angular/cli
ADD . /app
WORKDIR /app
ENTRYPOINT ["/usr/bin/ng", "serve", "--port", "80", "--host", "0.0.0.0"]


