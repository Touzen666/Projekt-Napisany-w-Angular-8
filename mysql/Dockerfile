FROM mysql:5.7.9

ENV MYSQL_ROOT_PASSWORD=testpassword
ENV MYSQL_DATABASE=outsourcing.pl
ADD outsourcing_pl.sql /docker-entrypoint-initdb.d/outsourcing_pl.sql

