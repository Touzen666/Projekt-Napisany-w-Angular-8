Frontend
========

Statyczny serwer, który serwuje statyczne dane (np. aplikację w Angularze) lub przekierowuje do backendu, 
celem realizacji zadań dynamicznych.

Zadania dynamiczne to takie, który URI zaczyna się od `/v1/`. Takie idą na trzeci kontener, obraz
`touzen666/projekt8:backend`

Na razie, ze względu na brak certyfikatów, nie obsługuje HTTP/2 ani HTTPS.
