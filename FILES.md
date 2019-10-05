# angular.json

[angular.json](/angular.json) zawiera zasadniczy opis aplikacji Androidowej, a także działań, które
można za jej pomocą wykonać.

# [Pliki E2E](e2e/README.md)

Nie ma po co wpadać

# Pliki .MD

MD to specjalny format tekstu, tzw. markdown, który pozwala na wpisywanie tekstu rozumianego zarówno
przez ludzi i maszyny, choć mógł tutaj również wejść ułamek niedoskonałości maszyn, który wymusza
na nas akurat taki typ pisania.

# package.json i package-lock.json

Dwa pliki będące listą modułów, które mają być zainstalowane i tych, które rzeczywiście są zarejestrowane.

# docker-compose.yml

[Schemat budowy naszego systemu](/docker-compose.yml). Zawiera on trzy sekcje `services`, z których każda opisuje zasady, z jakim
dany komponent ma działać. Proszę zwrócić na przełączenie portu 80 na dostęp światowy sekwencją "80:80".
Należy zwrócić uwagę, że takiemu samemu problemowi podlega baza danych, do której przed użytkiem należy bezwzględnie 
wgrać plik [/docs/outsourcing_pl.sql](/docs/outsourcing_pl.sql).

# travis.yml

Plik [travis.yml](/travis.yml) wpływa na to, ja na nasze commity zareaguje system CI/CD Travis. System ten może wykonywać
chociażby różne testy automatyczne i kompilację sprzętu. Tak wiec co commit do gałęzi master wysyłana jest cała przebudowa
obrazu i obraz ten wędruje od razu na stosownego [Docker Huba](https://hub.docker.com/r/touzen666/projekt8).

# .gitattributes

Otóż od dawien wiadomo, że wykonywalne pliki shellowe w Linuksie muszą nosić znaki końca linii \n i nic nie można
było z tym zrobić. Otóż teraz można. Zgodnie z instrukcjami pliki **.sh** i **.conf** mają pojedyncze znaki
końca linii, a pliki doc/docx/png jako pliki binarne (już raz git mi zepsuł archiwum gzip przez to)!

# .dockerignore

Podczas budowania obrazu Docker wysyła do swojego serwera cały katalog, który zawiera kontekst budowania. 
W opcjonalnym pliku `.dockerignore` można wybrać te pliki, które mają nie zostać przegrane.

# ts*.json

Pliki konfiguracyjne języka TypeScript. Nie mam pojęcia, po co ich tyle.

# karma.conf.js

Narzędzie wykorzystujemy tylko do testów automatycznych, a ponieważ jeszcze nie wiemy, co to jest, 
to zostawiamy ten plik spokojnie.

# build_tools

[build_tools](/build_tools) to narzędzia służące do wytwarzania kolejnych wersji tego programu.
