# Główna architektura aplikacji składa się z trzech części:

1. Baza danych MySQL - jedyny element nieruchomy. [Tutaj znajduje się schema](/docs/outsourcing_pl.sql), którą
i tak przy pierwszym uruchomieniu trzeba załadować danymi. Obraz: `touzen666/projekt8:mysql`
2. [Backendy](backend/README.md) - mogą być skalowalne dowolnie, jedynie wykonują dynamiczne polecenia (tzn. zaczynające się od _/v1/_). Wykonują na
sobie całą machinerię NodeJS. Obrazy to `touzen666/projekt8:backend`
3. Frontendy oraz reverse proxy - serwuje zarówno statyczy, skompilowany portal Angular, jak i przekierowuje żądania
dynamiczne do backendów. Obrazy to Obrazy to `touzen666/projekt8:frontend`. Troszę szerzej [tu](frontend/README.md).

W katalogu tym nie napotkasz punktu (1), gdyż jest on definiowany bezpośrednio w pliku [docker-compose.yml](/docker-compose.yml).

# Dockerfile
Zastosowany Dockerfile do stworzenia frontendu, backendu najpierw tworzy przejściową, wspólną, odrzuconą półscenę,
 z której następnie kopiuje pliki do zdrowszych już scen. `frontend` nie potrzebuje już całej otoczki NodeJS, wystarczy
 mu [nginx](https://www.nginx.com/) z [reverse proxy](https://blogs.technet.microsoft.com/plitpro/2013/05/14/reverse-proxy-w-iis/).
 
 Dlatego różne punkty odnacza się w nim _targetami_ proszę spojrzeć, jak targety nazywają się przy słowach kluczowych `FROM`,
 a jak wyglądają one przy `COPY` lub `ADD`. W ten sposób możliwe jest nawet skopiowanie kawałka obrazu przy użyciu odpowiedniej nazwy,
 np. 
 
```dockerfile
COPY --from=portainer/portainer:latest /bin /mybin
````
 
