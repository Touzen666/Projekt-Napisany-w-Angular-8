const express = require('express');
app = express();
bodyParser = require('body-parser');
port = process.env.PORT || 8000;
cors = require('cors');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'testpassword',
    database: 'outsourcing.pl'
});

connection.connect(function (err) {
    if (err) throw err;
});

function authorize(req, res, next) {
    if (!req.headers.authorization) {
        console.log("Unauthorized access");
        res.status(403);
        res.end();
        next("Unauthorized")
    }

    connection.query('SELECT * FROM sesje WHERE token=?',
        [req.headers.authorization],
        function (err, result) {
            if (err) {
                console.error(err)
                next(err)
            }
            if (result.length == 0) {
                console.log("Unauthorized access for /egzamin");

                res.status(403);
                res.json([]);
                res.end();
                next("Unauthorized")
            }

            console.log("Authorized for /egzamin");

            next();
        }
    )
}

//definiujemy sciezke /login a funcja obsluguje zadania klienta
app.post('/login', function (req, res) {
    connection.query("SELECT * FROM pracownik WHERE login=? AND haslo=?",
        [req.body.username, req.body.password],
        function (err, result) {
            if (err) next(err);
            if (result.length == 0) {
                res.status(403);
            } else {
                connection.query("INSERT into sesje VALUES (?,?)",
                    [null, result[0].idPracownik],
                    function (err, token_result) {
                        if (err) next(err);
                        console.log("Zalogowano, token:", token_result.insertId)
                        res.json({ token: token_result.insertId });
                    }
                );
            }
        }
    );
});



app.post('/register', function (req, res) {
    console.log("/register, request:", req)

    connection.query("INSERT into pracownik VALUES (?,?,?,?,?,?,?)",
        [null, req.body.imie, req.body.nazwisko, req.body.dataurodzenia,
            req.body.login, req.body.haslo, req.body.email],
        function (err, result) {
            if (err) {
                console.error(err)
                return res.end(500);
            }
            console.info("/register success")

            res.status(200);
            res.json({ "status": "ok" })
            res.end();
        });
});

app.post('/egzamin', [authorize], function (req, res) {
    connection.query('SELECT * FROM egzamin',
        function (err, egzaminy) {
            if (err) {
                console.error(err)
                next(err);
            }
            res.json(egzaminy);
            res.end();
        }
    )
})

app.post('/egzamin/:idEgzaminu/pytania', [authorize], function (req, res) {
    console.log("Auth:", req.headers);

    let query = `
        SELECT
            pytania.trescPytania as tresc,
            pytania.idPytania,
            kategorie.nazwaKategorii as kategoria
        FROM
            pytania
            JOIN kategorie
                ON pytania.idKategoria = kategorie.idKategorii
        WHERE pytania.idEgzaminu = ?
    `;

    connection.query(query, [req.params.idEgzaminu],
        function (err, pytania) {
            if (err) {
                console.error(err)
                next(err);
            }
            console.log(pytania)
            res.json(pytania);
            res.end();
        }
    )
})

app.post('/egzamin/:idEgzaminu/odpowiedzi', [authorize], function (req, res) {
    console.log("Auth:", req.headers);

    let query = `
        SELECT
            odpowiedzi.odpowiedz as odpowiedz,
            odpowiedzi.idPytania,
            odpowiedzi.idOdpowiedzi
        FROM
            pytania
            JOIN odpowiedzi
                ON odpowiedzi.idPytania = pytania.idPytania
        WHERE pytania.idEgzaminu = ?
    `;

    connection.query(query, [req.params.idEgzaminu],
        function (err, pytania) {
            if (err) {
                console.error(err)
                next(err);
            }
            console.log(pytania)
            res.json(pytania);
            res.end();
        }
    )
})

app.post('/pracownicy/:idUzytkowina', [authorize], function (req, res, next) {
    if (req.params.idUzytkowina !== "current") {
        next("niewpierane!")
    }

    let query = `
        SELECT * FROM pracownik 
            join sesje
                on sesje.pracownik_id = pracownik.idPracownik
        Where sesje.token=?
    `;

    connection.query(query,
        [req.headers.authorization],
        function (err, pracownicy) {
            if (err) {
                console.error(err)
                next(err);
            }
            if (pracownicy.length == 0) {
                res.status(403);
                return res.end();
            }
            res.json(pracownicy[0]);
            res.end();
        }
    )
})
app.listen(80);
console.info("Server listening on 80")
