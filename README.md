# Projekt-Dokumentation

✍️ Elia Ritzmann

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
| 10.2.2023      | 0.0.0   | Stack zusammenstellen                                    |
| 11.2.2023      | 0.0.1   | Anfangen Implementation mit t3 Stack                     |
| 17.2.2023      | 0.0.1   | Probleme mit altem Stack => neuen Stack suchen           |
| 18.2.2023      | 0.0.2   | Informieren Sessions mit Express.js                      |
| 10.2.2023     | 0.0.2  |  Anfangen Implementation Express.js Server mit Postmann + Prisma    |
| 19.2.2023      | 0.0.6   | User Login entwickeln und Game programmiert              |
| 20.2.2023     | 0.1.1   |  react.js Frontend (Grundstruktur + Routing)                        |
| 21.2.2023     | 0.1.1   |  Game Frontend                       |
| 22.2.2023     | 0.1.1   |  Adminbereich Frontend                       |
| 25.2.2023     | 1.1.1   |  Admin Bereich Backend                      |
| 26.2.2023     | 1.1.2   |  Admin Wörter Implementation |

# 0 Ihr Projekt

Für dieses Projekt habe ich eine Webapplikation geplant und realisiert. In dieser Dokumentation sind die Funktionen und Herangehensweisen ausführlich dokumentiert und es wird die Applikation mithilfe von Videos gezeigt. Die App umfasst ein Glücksspiel mit Leaderboard und ein Admin-Interface, auf welcher das Spiel verwaltet werden kann.

# 1 Analyse


* Tier 1 (Presentation): Glückspiel anzeigen, Adminbereich
* Tier 2 (Webserver): Eingaben validieren
* Tier 3 (Application Server): Glückspiel berechnen
* Tier 4 (Dataserver): Benutezrdaten speichern

# 2 Technologie


Um diese Web-App zu realisieren, habe ich mich dazu entschieden, React im Frontend und Express.js im Backend zu verwenden und diese beide mit einer Rest-API zu verbinden.
Ich habe mich für diesen Stack entschieden, da ich mit allen Technologien bereits vertraut bin. 

* Tier 1 (Presentation): React.js, html, css, javascript, tailwindCSS, daisyUI
* Tier 2 (Webserver): Node.js, Express.js, Postman zum testen
* Tier 3 (Application Server): Node.js, Express.js, Prisma
* Tier 4 (Dataserver): dev: SQLite | production: mySQL

# 3 Datenbank


Die Datenbank wird vom Express Server aus mit dem Primsa Client angesteuert und verwaltet. 

Ich habe für die Datenbank SQLite gewählt, da es einfach und kostengünstig zu implementiern ist, aber da ich Prisma verwende, kann man dies in wenigen Minuten auf eine andere Relationale Datenbank ändern.

![Sheme](https://user-images.githubusercontent.com/69593308/221427213-c097066d-b865-4849-b7ce-f63a4e0da205.png)


# 4.1 User Stories

| Nr | Verbindlichkeit | Typ        | Beschreibung                                                                                            |
|----|----------------|------------|---------------------------------------------------------------------------------------------------------|
| 1  | Muss           | Funktional | Als Administrator möchte ich mich mit meinem Benutzernamen und Passwort authentifizieren können, um auf die Administratorfunktionen zugreifen zu können. |
| 2  | Muss           | Funktional | Als Administrator möchte ich Phrasen und Rätselwörter anlegen und löschen können, um das Spiel zu aktualisieren und anzupassen.                                   |
| 3  | Muss           | Funktional | Als Administrator möchte ich Kategorien anlegen und jedem Wort bzw. jeder Frage einer Kategorie zuordnen können, um das Spiel zu organisieren.                    |
| 4  | Muss           | Funktional | Als Client möchte ich einen Namen eingeben können, der auf der Highscore-Liste erscheint, um meine Leistung zu verfolgen und auf der Rangliste zu erscheinen.      |
| 5  | Muss           | Funktional | Als Client möchte ich zu jeder Zeit meinen Kontostand und meine Lebenspunkte sehen können, um meine Fortschritte zu verfolgen.                                      |
| 6  | Muss           | Funktional | Als Client möchte ich die Seite neu laden könne, ohne meinen Fortschritt zu verlieren.                               |
| 7  | Muss           | Funktional | Als Client möchte ich in der Highscore-Liste folgende Daten sehen können: Rang, Name des Spielers, Zeitpunkt des Spiels, Geldbetrag und Anzahl Spielrunden, um meine Leistung im Vergleich zu anderen Spielern zu überprüfen. |
| 8  | Muss           | Funktional | Als Client möchte ich, dass die Highscore-Liste nach Rang sortiert wird, der durch die Höhe des Geldbetrags bestimmt wird, um meine Position auf der Rangliste zu sehen. |
| 9  | Muss           | Funktional | Als Client möchte ich jederzeit spielen oder aufhören und meinen Gewinn in die Highscore-Liste übernehmen können, um meine Leistung zu speichern.                     |
| 10 | Muss           | Funktional | Als Administrator möchte ich die Anzahl der Spielrunden zählen können, um die Leistung der Spieler zu verfolgen.                                                  |
| 11 | Muss           | Funktional | Als Administrator möchte ich das Spiel mit einer spielbaren Anzahl Wörter und Fragen füllen können, um das Spiel interessant zu gestalten und den Spielern eine gute Erfahrung zu bieten.        |
| 12 | Muss           | Funktional | Als Spieler möchte ich, dass ich zu keiner Zeit das Wort schon vorab sehen kann, um mir den Spielspass nicht zu verderben. |
| 13 | Muss           | Funktional | Als Spieker möchte ich, die Anzahl Runden, welche ich bereits gespielt habe ansehen können.       |
| 14 | Muss           | Funktional | Als Spieler möchte ich nach Erraten eines Wortes eine gewonnene Meldung bekommen, um zu wissen, wann ich gewonnen habe.      |
| 15 | Muss           | Funktional | Als Spieler möchte ich, dass jede Runde die Buchstaben verschieden viel kosten, um das Spiel interessanter zu gestalten.     |
| 16 | Muss           | Funktional | Als Spieler möchte ich, dass jeder Buchstabe, den ich gekauft habe, seine Farbe ändert, um mir zu zeigen, welche ich bereits gekauft habe. |




# 4.2 Testfälle

| TF-Nr | UserStory-Nr | Vorbereitung | Eingabe | Erwartete Ausgabe |
|-------|--------------|--------------|---------|--------------------|
| TF1   | 1            | Administrator Account existiert | Benutzername und Passwort | Zugang zu den Administratorfunktionen |
| TF2   | 2            | Administrator Account existiert | Neue Phrase oder Rätselwort hinzufügen | Erfolgreiches Hinzufügen der Phrase oder des Rätselworts |
| TF3   | 3            | Administrator Account existiert | Neue Kategorie erstellen und Wort/Frage zuordnen | Erfolgreiche Erstellung der Kategorie und Zuordnung des Wortes/Frage |
| TF4   | 4            | - | Name eingeben | Name erscheint auf der Highscore-Liste |
| TF5   | 5            | - | Wort richtig erraten | Kontostand und Lebenspunkte des Spielers werden angezeigt |
| TF6   | 6            | - | Neuladen der Seite | Fortschritt wird beibehalten |
| TF7   | 7            | Highscore-Liste enthält Daten von Spielern | - | Rang, Spielername, Zeitpunkt des Spiels, Geldbetrag und Anzahl Spielrunden werden angezeigt |
| TF8   | 8            | Highscore-Liste sortiert nach Geldbetrag | - | Highscore-Liste wird nach Rang sortiert angezeigt |
| TF9   | 9            | - | Spiel beenden und Gewinn in Highscore-Liste übernehmen | Erfolgreiche Speicherung des Gewinns in der Highscore-Liste |
| TF10  | 10           | - | Anzahl der Spielrunden zählen | Erfolgreiche Zählung der Spielrunden |
| TF11  | 11           | Administrator Account existiert | Hinzufügen von neuen Wörtern und Fragen | Spiel enthält eine ausreichende Anzahl von Wörtern und Fragen |
| TF12  | 12           | - | Keine Möglichkeit, das Wort vorab zu sehen | Das Wort bleibt für den Spieler unbekannt |
| TF13  | 13           | - | Anzeigen der Anzahl gespielter Runden | Erfolgreiches Anzeigen der Anzahl der gespielten Runden |
| TF14  | 14           | - | Erraten eines Wortes | Erfolgreiche Anzeige einer gewonnenen Meldung |
| TF14  | 15           | - | Spiel starten | Buchstaben kosten alle unterschiedlich viel Geld.  |
| TF14  | 16           | - | Buchstaben-Knopf A drücken | Der Buchstabe A wurde gedrückt und mir wurde der Geldbetrag von meinem Spielerkonto abgebucht. |



# 5 Prototyp

Quiz-Seite:

![Statistiken](https://user-images.githubusercontent.com/69593308/221412845-9e8672fd-b6b1-4ccf-a9fb-69e8dd135c54.png)

Admin-Interface:

![Statistiken (3)](https://user-images.githubusercontent.com/69593308/221510920-0adf2682-1ecb-42eb-860b-9e195971c623.png)



# 6 Implementation

| User Story | Datum      | Beschreibung                                                                                                                                                                                                      |
|------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1          | 22.02.2023 | Als Administrator möchte ich mich mit meinem Benutzernamen und Passwort authentifizieren können, um auf die Administratorfunktionen zugreifen zu können.                                                        |
| 2          | 17.02.2023 | Als Administrator möchte ich Phrasen und Rätselwörter anlegen und löschen können, um das Spiel zu aktualisieren und anzupassen.                                                                                    |
| 3          | 23.02.2023 | Als Administrator möchte ich Kategorien anlegen und jedem Wort bzw. jeder Frage einer Kategorie zuordnen können, um das Spiel zu organisieren.                                                                     |
| 4          | 26.02.2023 | Als Client möchte ich einen Namen eingeben können, der auf der Highscore-Liste erscheint, um meine Leistung zu verfolgen und auf der Rangliste zu erscheinen.                                                      |
| 5          | 19.02.2023 | Als Client möchte ich zu jeder Zeit meinen Kontostand und meine Lebenspunkte sehen können, um meine Fortschritte zu verfolgen.                                                                                    |
| 6          | 24.02.2023 | Als Client möchte ich die Seite neu laden könne, ohne meinen Fortschritt zu verlieren.                                                                                                                         |
| 7          | 25.02.2023 | Als Client möchte ich in der Highscore-Liste folgende Daten sehen können: Rang, Name des Spielers, Zeitpunkt des Spiels, Geldbetrag und Anzahl Spielrunden, um meine Leistung im Vergleich zu anderen Spielern zu überprüfen. |
| 8          | 18.02.2023 | Als Client möchte ich, dass die Highscore-Liste nach Rang sortiert wird, der durch die Höhe des Geldbetrags bestimmt wird, um meine Position auf der Rangliste zu sehen.                                            |
| 9          | 21.02.2023 | Als Client möchte ich jederzeit spielen oder aufhören und meinen Gewinn in die Highscore-Liste übernehmen können, um meine Leistung zu speichern.                                                                   |
| 10         | 20.02.2023 | Als Administrator möchte ich die Anzahl der Spielrunden zählen können, um die Leistung der Spieler zu verfolgen.                                                                                                  |
| 11         | 26.02.2023 | Als Administrator möchte ich das Spiel mit einer spielbaren Anzahl Wörter und Fragen füllen können, um das Spiel interessant zu gestalten und den Spielern eine gute Erfahrung zu bieten.                             |
| 12         | 17.02.2023 | Als Spieler möchte ich, dass ich zu keiner Zeit das Wort schon vorab sehen kann, um mir den Spielspass nicht zu verderben.                                                                                       |
| 13         | 22.02.2023 | Als Spieker möchte ich, die Anzahl Runden, welche ich bereits gespielt habe ansehen können. |
| 14         | 22.02.2023 | Als Spieler möchte ich nach Erraten eines Wortes eine gewonnene Meldung bekommen. |
| 15         | 22.02.2023 | Als Spieler möchte ich, dass jede Runde die Buchstaben verschieden viel kosten, um das Spiel interessanter zu gestalten. |
| 16         | 22.02.2023 | Als Spieler möchte ich, dass jeder Buchstabe, den ich gekauft habe, seine Farbe ändert, um mir zu zeigen, welche ich bereits gekauft habe. |


# 7 Projektdokumentation

| US-№ | Erledigt? | Entsprechende Code-Dateien oder Erklärung |
| ---- | --------- | ----------------------------------------- |
| 1    | ja | ![carbon](https://user-images.githubusercontent.com/69593308/221427341-05bc099f-7a72-49c2-b617-d9e08f2c5d5a.svg) /server/server.js|
| 2    | ja | ![carbon (3)](https://user-images.githubusercontent.com/69593308/221427549-cb59d5ac-1a4b-4033-adc9-83deacb71596.svg) /server/server.js|
| 3    | ja | ![carbon (1)](https://user-images.githubusercontent.com/69593308/221427455-37560ebc-e4e6-45ec-b2ae-f07c0f0178cc.svg) /server/server.js|
| 4    | ja | ![carbon (4)](https://user-images.githubusercontent.com/69593308/221427584-6d94bb56-8d9c-4c3d-b695-b927b4b07a2c.svg) /server/server.js|
| 5    | ja | ![carbon (5)](https://user-images.githubusercontent.com/69593308/221427639-bc080893-9c87-4368-9e17-8cc897ee1cd7.svg)/server/server.js|
| 6    | ja | Auf dem Client wird die SessionId als Cookie gespeichert, wodurch man seinen Fortschritt nicht verliert. /client/src/pages/PlayerLogin.js |
| 7    | ja | ![carbon (6)](https://user-images.githubusercontent.com/69593308/221427755-86ea498e-1046-4e40-bc78-6de0e9b08d3e.svg) /server/server.js |
| 8    | ja | Mit Prisma kann man bei einer Query die Daten nach einem Wert sortieren. /server/serverjs (/getLeaderboard Endpoint) |
| 9    | ja | ![carbon (7)](https://user-images.githubusercontent.com/69593308/221427911-d73bb35b-9701-4af2-b129-a39f6528c4b5.svg) /client/src/pages/Game.js|
| 10   | ja | Die Anzahl Spielrunden stehen für alle ersichtlich im Leaderboard. /client/src/pages/PlayerLogin.js                                          |
| 11   | ja | Administratoren haben über den Admin-Bereich die Möglichkeit Wörter und Kategorien zu verwalten. /client/src/pages/Admin.js |
| 12   | ja | ![carbon (8)](https://user-images.githubusercontent.com/69593308/221428212-703befd1-8901-436f-b379-fabb057d8311.svg) /server/server.js |
| 13   | ja | Während dem Spiel wird dem Spieler jederzeit eine aktuelle Version der Spieldaten angezeigt. /client/src/pages/Game.js|
| 14   | ja | ![carbon (9)](https://user-images.githubusercontent.com/69593308/221428250-048874f8-ee30-4f42-96b4-d2069b11031b.svg) /client/src/components/GameLogic.js
|
| 15   | ja | Es wird beim Erstellen des Spiels jedem Buchstaben ein zufälliger Wert zugewiesen. /server/serverjs |
| 16   | ja | Sobald der Buchstabe in dem usedLetters Array ist, wird der Knopf deaktiviert. /client/src/components/GameLogic.js
|


# 8 Testprotokoll

Das Spiel funktioniert entsprechend den Anforderungen.

https://user-images.githubusercontent.com/69593308/221412348-a513ac8e-dbbe-4265-89d4-c9ac875748db.mp4


Die Sessions werden auf dem Client in den Cookies gespeichert.

https://user-images.githubusercontent.com/69593308/221412469-a690a6f5-aa94-41ba-a553-dc5df136752f.mp4





| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| TC-1 | 26.2.2023 | Erfolgreich bestanden | Elia Ritzmann |
| TC-2 | 26.2.2023 | Erfolgreich bestanden | Elia Ritzmann |
| TC-3 | 26.2.2023 | Erfolgreich bestanden | Elia Ritzmann |
| TC-4 | 26.2.2023 | Erfolgreich bestanden | Elia Ritzmann |
| TC-5 | 26.2.2023 | Erfolgreich bestanden | Elia Ritzmann |
| TC-6 | 26.2.2023 | Erfolgreich bestanden | Elia Ritzmann |
| TC-7 | 26.2.2023 | Erfolgreich bestanden | Elia Ritzmann |
| TC-8 | 26.2.2023 | Erfolgreich bestanden | Elia Ritzmann |
| TC-9 | 26.2.2023 | Erfolgreich bestanden | Elia Ritzmann |
| TC-10 | 26.2.2023 | Erfolgreich bestanden | Elia Ritzmann |
| TC-11 | 26.2.2023 | Erfolgreich bestanden | Elia Ritzmann |
| TC-12 | 26.2.2023 | Erfolgreich bestanden | Elia Ritzmann |
| TC-13 | 26.2.2023 | Erfolgreich bestanden | Elia Ritzmann |
| TC-14 | 26.2.2023 | Erfolgreich bestanden | Elia Ritzmann |

Fazit: 

Meine Web-App entspricht allen Anforderungen und hat jegliche Tests bestanden. Sie ist Session basiert und mit modernen Technologien entwickelt worden und ist auch gegen allfällige Angriffe geschützt.

# 9 `README.md`

In den Ordnern Client und Server befindet sich je eine REEADME.md Datei, in welche beschreiben ist, wie sie den Client und Server auf Ihrem Computer Zuhause starten können. Beachten Sie, dass der Client den Port 3000 und der Server den Port 3001 besetzt. 


