# Compile the frontend here
FROM node:slim AS frontend_temp
ARG tagname
# Seeing as this is only a temporary image, we need to make as many layers to improve caching :D


# And place the compiled frontend onto a real frontend :D
FROM nginx:latest AS frontend
COPY --from=frontend_temp /app/dist/outsourcing-pl-app /usr/share/nginx/html
EXPOSE 80

