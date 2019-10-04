# Bazówka, z której rozgrywać będziemy backend i frontend
FROM node:slim AS core
WORKDIR /app
ADD package.json /app/package.json
ADD angular.json /app/angular.json
ADD package-lock.json /app/package-lock.json
RUN npm install -g @angular/cli@latest
RUN npm install
RUN mkdir -p /usr/lib/node_modules/angular-cli/node_modules/node-sass/vendor
ADD . /app
RUN npm run build -- -c production

# Reverse proxy : rozdziela zapytania zaczynające się od /v1/ na backend, a resztę na frontend
FROM nginx AS frontend
ADD dockerfiles/frontend/nginx.conf /etc/nginx/nginx.conf
COPY --from=core /app/dist /usr/share/nginx/html
ENTRYPOINT ["/usr/sbin/nginx"]
EXPOSE 80

FROM node:slim AS backend
WORKDIR /app
COPY --from=core /app /app
ADD dockerfiles/backend/server.js /app/server.js
ENTRYPOINT ["/usr/local/bin/node", "server.js"]
EXPOSE 8080
