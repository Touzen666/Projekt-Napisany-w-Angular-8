FROM mysql:5.7.9
# Baza danych, która umie sobie załadować dane, jak ich nie ma

ENV MYSQL_ROOT_PASSWORD=testpassword
ENV MYSQL_DATABASE=outsourcing.pl
ADD outsourcing_pl.sql /docker-entrypoint-initdb.d/outsourcing_pl.sql
EXPOSE 3306
