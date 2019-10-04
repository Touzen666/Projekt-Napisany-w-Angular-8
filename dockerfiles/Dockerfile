FROM node:slim AS core
WORKDIR /app
ADD package.json /app/package.json
ADD angular.json /app/angular.json
ADD package-lock.json /app/package-lock.json
RUN npm install -g @angular/cli@latest
RUN npm install
ADD . /app


FROM node:slim AS prefrontend
RUN npm install --unsafe-perm -g angular-cli
RUN npm install -g @angular/cli
RUN mkdir -p /usr/lib/node_modules/angular-cli/node_modules/node-sass/vendor
WORKDIR /app
COPY --from=core /app /app
RUN npm run build -- -c production


FROM nginx AS frontend
# Reverse proxy : rozdziela zapytania zaczynające się od /v1/ na backend, a resztę na frontend
ADD dockerfiles/frontend/nginx.conf /etc/nginx/nginx.conf
ADD dockerfiles/frontend/entrypoint.sh /entrypoint.sh
RUN chmod ugo+x /entrypoint.sh
COPY --from=prefrontend /app/dist /usr/share/nginx/html

ENTRYPOINT ["/entrypoint.sh"]

# ale zamień ten hostname na jakiś bardziej użyteczny, proszę
# ENV HOSTNAME=<will be as default as reported by system's hostname command>

EXPOSE 80

FROM node:slim AS backend
WORKDIR /app
COPY --from=core /app/node_modules /app/mode_modules
ADD dockerfiles/backend/server.js /app/server.js
ENTRYPOINT ["/usr/bin/node", "server.js"]
EXPOSE 80
# Port that the backend will listen on. Don't fix it.
ENV PORT=80
