Narzędzia do budowania obrazów i nie tylko. Pod systemem Linuks i dostępem do Dockera

1. [build_images.sh](build_images.sh) fizycznie buduje obraz.
2. [push_images.sh](push_images.sh) wysyła je do Docker Huba.
3. [setup_portainer.sh](setup_portainer.sh) instaluje nam [Portainera](https://www.portainer.io/) na lokalnej maszynie Linuksa. Przetestowane!
4. [travis_run_on.sh](travis_run_on.sh) buduje obrazy. Jeśli przesłano je także na gałąź master, to rzuca je do Docker Huba.

Najczęściej wykonują się na platformie Travis CI, choć można je przygotować również "w domu".
