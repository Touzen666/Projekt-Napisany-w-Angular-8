# Główna architektura aplikacji składa się z trzech części

1. Baza danych [MySQL](https://www.mysql.com/) - jedyny element nieruchomy. I tak przy pierwszym uruchomieniu trzeba 
ją [załadować danymi](/docs/outsourcing_pl.sql) przed użyciem. Obraz to klasyczny, powszechnie dostępny `mysql:5.7.9`.
2. [Backendy](backend/README.md) - mogą być skalowalne dowolnie, jedynie wykonują dynamiczne polecenia (tzn. zaczynające się od _/v1/_). Wykonują na
sobie całą machinerię NodeJS. Obrazy to `touzen666/projekt8:backend`. Backend wydaje się być [cięższą partią](https://hub.docker.com/r/touzen666/projekt8/tags)
od frontendu.
3. Frontendy oraz reverse proxy - serwuje zarówno statyczy, skompilowany portal Angular, jak i przekierowuje żądania
dynamiczne do backendów. Obraz to `touzen666/projekt8:frontend`. Troszę szerzej [tu](frontend/README.md).

W katalogu tym nie napotkasz punktu (1), gdyż jest on definiowany bezpośrednio w pliku [docker-compose.yml](/docker-compose.yml).

# Dockerfile
Zastosowany Dockerfile do stworzenia frontendu, backendu najpierw tworzy przejściową, wspólną, odrzuconą półscenę **core**,
z której następnie kopiuje pliki do zdrowszych już scen. `frontend` nie potrzebuje już całej otoczki NodeJS, wystarczy
mu [nginx](https://www.nginx.com/) z [reverse proxy](https://blogs.technet.microsoft.com/plitpro/2013/05/14/reverse-proxy-w-iis/) i 
skompilowany Angular
 
Dlatego różne punkty odnacza się w nim _targetami_ proszę spojrzeć, jak targety nazywają się przy słowach kluczowych `FROM szablon AS target`,
a jak wyglądają one przy `COPY` lub `ADD`. W ten sposób możliwe jest nawet skopiowanie zupełnie innego kawałka obrazu przy użyciu odpowiedniej nazwy,
np. 
 
```dockerfile
COPY --from=portainer/portainer:latest /bin /mybin
````
 
Tak więc takie _targety_ dają duże możliwości, ą żeby się nie poprawiać przy tych _Dockerfile'ach_.
