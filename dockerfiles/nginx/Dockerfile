FROM nginx

ADD nginx.conf /etc/nginx/nginx.conf
ADD entrypoint.sh /entrypoint.sh
RUN chmod ugo+x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]

ENV HOSTNAME=localhost

EXPOSE 80

