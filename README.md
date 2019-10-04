# OutsourcingPlApp

Główna architektura aplikacji składa się z trzech części:

1. Baza danych MySQL - jedyny element nieruchomy. [Tutaj znajduje się schema](/docs/outsourcing_pl.sql), którą
i tak przy pierwszym uruchomieniu trzeba załadować danymi. Obraz: `touzen666/projekt8:mysql`
2. Backendy - mogą być skalowalne dowolnie, jedynie wykonują dynamiczne polecenia (tzn. zaczynające się od _/v1/_). Wykonują na
sobie całą machinerię NodeJS. Obrazy to `touzen666/projekt8:backend`
3. Frontendy oraz reverse proxy - serwuje zarówno statyczy, skompilowany portal Angulars, jak i przekierowuje żądania
dynamiczne do backendów. Obrazy to Obrazy to `touzen666/projekt8:frontend`

Rozwiązanie jest trywialne przy użyciu najnowszego [Dockera](https://docs.docker.com) wraz z systemem składania 
aplikacji [docker-compose](https://docs.docker.com/compose/). Zaczyna on od umieszczenia aplikacji w wydzielonych 
kontenerach, czyli wirtualnych podzbiorach systemu operacyjnego, i mając chociażby każda inną IP, a dodatkowo
możliwość konfigurowania tego w wyrafinowane sieci? Dodatkowo system przechowywania obrazów [Docker Hub](hub.docker.com)
pozwala szybko zainstalować własne oprogramowanie. Oracle XE? Już w pięć minut. Pamiętać należy, że Docker korzysta z
takich funkcji linuksa jak [cgroups](http://man7.org/linux/man-pages/man7/cgroups.7.html). Wyobraź sobie, że odinstalowujesz
aplikację i zupełnie nic po nich nie zostaje? Wyobraź sobie, że musisz martwić się niczym oprócz adresowania sieci.

## Jak w tej aplikacji budują się obrazy?
[Build tools](/build_tools) wykorzystują Travisa CI do szybkiego zbudowania i wysłania obrazów do Docker Huba, gdyż
budują się dużo szybciej niż na stacjonarce!

## Jak postawić tą aplikację
Wszystko jest zarządzane przez tę aplikację. Wystarczy zainstalować najnowsze [docker-compose](https://docs.docker.com/compose/gettingstarted/),
a następnie wpisać `docker-compose up -d` pamiętając o tym, aby mieć wolny port 80!

## Gdzie jest więcej dokumentacji
Zapewne w folderze [docs](/docs). 

## Caveat emptor
Twój Docker Toolbox VM zazwyczaj uruchomi się pod adresem 192.168.99.100. Gdy to zaczyna płatać figle, proszę poprawić swoją zmienną wskazującą na ten adres

## Jak to uruchomić?


### Mająć Windowsa bez Dockera

Nie panikujemy. Pobieramy Docker Toolbox for Windows (**w życiu Docker for Windows bo zabiję**). Grzecznie instalujemy.
Otwieramy konsolę _Docker Quickstart Terminal_. Następnie wyszukujemy na dysku wszystkie pliki `docker-compose.exe`. Instalujemy
Pythona 3 z setuptools i wydajemy następującą komendę:

```bash
pip install --upgrade docker-compose
```

Dodatkowo instalujemy gita.

### Nie mając Linuksa z Dockerem

Mając Dockera i przyzwoitą wersję _docker-compose'a_ i znająć możliwość zaktualizowania jej przez `pip install --upgrade docker-compose`,
oraz posiadając gita
```bash
git clone https://github.com/Touzen666/Projekt-Napisany-w-Angular-8.git
cd Projekt-Napisany-w-Angular-8
docker-compose up -d
```

Następnie należałoby do niej zalogować się poprzez port 3306 (uprzednio umieszczając go w sekcji _ports_) i zaaplikować 
plik [SQL](/docs/outsourcing_pl.sql). Można tego na przykład dokonać bezpośrednio za pomocą narzędzia 
[Database](https://www.jetbrains.com/help/idea/connecting-to-a-database.html) uznanego producenta oprogramowania IntelliJ?

Następnie można logować się na niego na port 80. gdyż wystawia go na ten sam port hosta.
Aplikacja nie obsługuje szyfrowania, co można uzyskać przez zewnętrzne reverse proxy.

## Inne narzęczia do zarzązania kontenerami

Dobrym pomysłem byłaby instalacja [Portainera](https://hub.docker.com/r/portainer/portainer) do zarządzania swoimi maszynami.
Instalacja na jednej z nich jest bardzo prosta. Można to zrobić poleceniem:

```bash
docker volume create portainer_data
docker run -d --restart always -p 9000:9000 -v portainer_data:/data -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer
```

W przypadku maszyn VirtualBoxa bardzo możliwe, że dostęp uzyskacie pod adresem [http://192.168.99.100:9000](http://192.168.99.100:9000),
gdzie będziecie musieli założyć sobie konto administratora i wybrać koniecznie **lokalne** zarządzanie węzłem.

# Anatomia _docker-compose.yml_

Plik [docker-compose.yml](/docker-compose.yml) jest podstawowym plikiem, który opisuje jak zbudowany został system.
Opisuje on precyzyjnie skąd przychodziły zapytania i gdzie były one przetwarzane.

Na samym początku żądała wpadały do _frontendu_. Ponieważ _frontend_ miał całego statycznego Angulara to bardzo często 
wysyłał to. Jeśli natomiast dostał zapytanie wymagające przetworzenia - takie jak logowanie, czy rejestracja, to odsyła 
go do backendu. _Frontend_ zasila program [nginx](https://www.nginx.com/).

Następny w kolejce jest backend. Jest to tak naprawdę [skrypt JS wykonany w technologii Express](/dockerfiles/backend/server.js),
który o dziwo trzyma jeszcze połączenie i zapisuje i odczytuje z trzeciego elementu układanki - bazy danych
[MySQL](https://www.mysql.com/).

Koniecznie zobacz [licencję](LICENSE.md) tej pracy.

Reszta dyskusji o plikach w tym folderze znajduje się w pliku [FILES](FILES.md).
