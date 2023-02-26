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
| 22.2.2023     | 0.1.1   |  Adminbereich frontend                       |
| 25.2.2023     | 1.1.1   |  Admin Bereich Backend                      |
| 26.2.2023     | 1.1.2   |  Admin Wörter Implementation |

# 0 Ihr Projekt

Ich möchte in diesem Projekt eine einfache Glücksspiel-Webseite erstellen, welche sicher ist. 

# 1 Analyse


* Tier 1 (Presentation): Glückspiel anzeigen, Adminbereich
* Tier 2 (Webserver): Eingaben validieren
* Tier 3 (Application Server): Glückspiel berechnen
* Tier 4 (Dataserver): Benutezrdaten speichern

# 2 Technologie


Um diese Web-App zu realisieren habe ich mich dazu entschieden, React im Frontend und Express.js im Backend zu verwenden und diese beide mit einer RestAPI zu verbinden.
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
| 6  | Muss           | Funktional | Als Client möchte ich die Seite neu laden könne, ohne meinen Fortschritt zu verliehren.                               |
| 7  | Muss           | Funktional | Als Client möchte ich in der Highscore-Liste folgende Daten sehen können: Rang, Name des Spielers, Zeitpunkt des Spiels, Geldbetrag und Anzahl Spielrunden, um meine Leistung im Vergleich zu anderen Spielern zu überprüfen. |
| 8  | Muss           | Funktional | Als Client möchte ich, dass die Highscore-Liste nach Rang sortiert wird, der durch die Höhe des Geldbetrags bestimmt wird, um meine Position auf der Rangliste zu sehen. |
| 9  | Muss           | Funktional | Als Client möchte ich jederzeit spielen oder aufhören und meinen Gewinn in die Highscore-Liste übernehmen können, um meine Leistung zu speichern.                     |
| 10 | Muss           | Funktional | Als Administrator möchte ich die Anzahl der Spielrunden zählen können, um die Leistung der Spieler zu verfolgen.                                                  |
| 11 | Muss           | Funktional | Als Administrator möchte ich das Spiel mit einer spielbaren Anzahl Wörter und Fragen füllen können, um das Spiel interessant zu gestalten und den Spielern eine gute Erfahrung zu bieten.        |
| 12 | Muss           | Funktional | Als Spieler möchte ich, dass ich zu keiner Zeit das Wort schon vorab sehen kann, um mir den Spielspass nicht zu verderben. |
| 13 | Muss           | Funktional | Als Spieker möchte ich, die Anzahl Runden, welche ich bereits gespielt habe ansehen können.       |
| 13 | Muss           | Funktional | Als Spieler möchte ich nach Erraten eines Wortes eine gewonnene Meldung bekommen.      |




# 4.2 Testfälle

| TF-Nr | UserStory-Nr | Vorbereitung | Eingabe | Erwartete Ausgabe |
|-------|--------------|--------------|---------|--------------------|
| TF1   | 1            | Administrator Account existiert | Benutzername und Passwort | Zugang zu den Administratorfunktionen |
| TF2   | 2            | Administrator Account existiert | Neue Phrase oder Rätselwort hinzufügen | Erfolgreiches Hinzufügen der Phrase oder des Rätselworts |
| TF3   | 3            | Administrator Account existiert | Neue Kategorie erstellen und Wort/Frage zuordnen | Erfolgreiche Erstellung der Kategorie und Zuordnung des Wortes/Frage |
| TF4   | 4            | - | Name eingeben | Name erscheint auf der Highscore-Liste |
| TF5   | 5            | - | - | Kontostand und Lebenspunkte des Spielers werden angezeigt |
| TF6   | 6            | - | - | Fortschritt wird beibehalten |
| TF7   | 7            | Highscore-Liste enthält Daten von Spielern | - | Rang, Spielername, Zeitpunkt des Spiels, Geldbetrag und Anzahl Spielrunden werden angezeigt |
| TF8   | 8            | Highscore-Liste sortiert nach Geldbetrag | - | Highscore-Liste wird nach Rang sortiert angezeigt |
| TF9   | 9            | - | Spiel beenden und Gewinn in Highscore-Liste übernehmen | Erfolgreiche Speicherung des Gewinns in der Highscore-Liste |
| TF10  | 10           | - | Anzahl der Spielrunden zählen | Erfolgreiche Zählung der Spielrunden |
| TF11  | 11           | Administrator Account existiert | Hinzufügen von neuen Wörtern und Fragen | Spiel enthält eine ausreichende Anzahl von Wörtern und Fragen |
| TF12  | 12           | - | Keine Möglichkeit, das Wort vorab zu sehen | Das Wort bleibt für den Spieler unbekannt |
| TF13  | 13           | - | Anzeigen der Anzahl gespielter Runden | Erfolgreiches Anzeigen der Anzahl der gespielten Runden |
| TF14  | 13           | - | Erraten eines Wortes | Erfolgreiche Anzeige einer gewonnenen Meldung |



# 5 Prototyp

✍️ Erstellen Sie Prototypen für das GUI (Admin-Interface und Quiz-Seite).

![Statistiken](https://user-images.githubusercontent.com/69593308/221412845-9e8672fd-b6b1-4ccf-a9fb-69e8dd135c54.png)


# 6 Implementation

✍️ Halten Sie fest, wann Sie welche User Story bearbeitet haben

| User Story | Datum      | Beschreibung                                                                                                                                                                                                      |
|------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1          | 22.02.2023 | Als Administrator möchte ich mich mit meinem Benutzernamen und Passwort authentifizieren können, um auf die Administratorfunktionen zugreifen zu können.                                                        |
| 2          | 17.02.2023 | Als Administrator möchte ich Phrasen und Rätselwörter anlegen und löschen können, um das Spiel zu aktualisieren und anzupassen.                                                                                    |
| 3          | 23.02.2023 | Als Administrator möchte ich Kategorien anlegen und jedem Wort bzw. jeder Frage einer Kategorie zuordnen können, um das Spiel zu organisieren.                                                                     |
| 4          | 26.02.2023 | Als Client möchte ich einen Namen eingeben können, der auf der Highscore-Liste erscheint, um meine Leistung zu verfolgen und auf der Rangliste zu erscheinen.                                                      |
| 5          | 19.02.2023 | Als Client möchte ich zu jeder Zeit meinen Kontostand und meine Lebenspunkte sehen können, um meine Fortschritte zu verfolgen.                                                                                    |
| 6          | 24.02.2023 | Als Client möchte ich die Seite neu laden könne, ohne meinen Fortschritt zu verliehren.                                                                                                                         |
| 7          | 25.02.2023 | Als Client möchte ich in der Highscore-Liste folgende Daten sehen können: Rang, Name des Spielers, Zeitpunkt des Spiels, Geldbetrag und Anzahl Spielrunden, um meine Leistung im Vergleich zu anderen Spielern zu überprüfen. |
| 8          | 18.02.2023 | Als Client möchte ich, dass die Highscore-Liste nach Rang sortiert wird, der durch die Höhe des Geldbetrags bestimmt wird, um meine Position auf der Rangliste zu sehen.                                            |
| 9          | 21.02.2023 | Als Client möchte ich jederzeit spielen oder aufhören und meinen Gewinn in die Highscore-Liste übernehmen können, um meine Leistung zu speichern.                                                                   |
| 10         | 20.02.2023 | Als Administrator möchte ich die Anzahl der Spielrunden zählen können, um die Leistung der Spieler zu verfolgen.                                                                                                  |
| 11         | 26.02.2023 | Als Administrator möchte ich das Spiel mit einer spielbaren Anzahl Wörter und Fragen füllen können, um das Spiel interessant zu gestalten und den Spielern eine gute Erfahrung zu bieten.                             |
| 12         | 17.02.2023 | Als Spieler möchte ich, dass ich zu keiner Zeit das Wort schon vorab sehen kann, um mir den Spielspass nicht zu verderben.                                                                                       |
| 13         | 22.02.2023 | Als Spieler möchte ich nach Erraten eines Wortes eine gewonnene Meldung bekommen.                                                                                                                                |


# 7 Projektdokumentation

| US-№ | Erledigt? | Entsprechende Code-Dateien oder Erklärung |
| ---- | --------- | ----------------------------------------- |
| 1    | ja | ![carbon](https://user-images.githubusercontent.com/69593308/221427341-05bc099f-7a72-49c2-b617-d9e08f2c5d5a.svg) |
| 2    | ja | ![carbon (3)](https://user-images.githubusercontent.com/69593308/221427549-cb59d5ac-1a4b-4033-adc9-83deacb71596.svg)|
| 3    | ja | ![carbon (1)](https://user-images.githubusercontent.com/69593308/221427455-37560ebc-e4e6-45ec-b2ae-f07c0f0178cc.svg)|
| 4    | ja | ![carbon (4)](https://user-images.githubusercontent.com/69593308/221427584-6d94bb56-8d9c-4c3d-b695-b927b4b07a2c.svg)|
| 5    | ja | ![carbon (5)](https://user-images.githubusercontent.com/69593308/221427639-bc080893-9c87-4368-9e17-8cc897ee1cd7.svg)|
| 6    | ja | Auf dem Client wird die SessionId als Cookie gespeichert, wodurch man seinen Fortschritt nicht verliert.                                          |
| 7    | ja | ![carbon (6)](https://user-images.githubusercontent.com/69593308/221427755-86ea498e-1046-4e40-bc78-6de0e9b08d3e.svg)|
| 8    | ja | Mit Prisma kann man bei einer Query die Daten nach einem Wert sortieren.                                          |
| 9    | ja | ![carbon (7)](https://user-images.githubusercontent.com/69593308/221427911-d73bb35b-9701-4af2-b129-a39f6528c4b5.svg)|
| 10   | ja | Die Anzahl Spielrunden stehen für alle ersichtlich im Leaderboard.                                          |
| 11   | ja | Administratoren haben über den Admin-Bereich die Möglichkeit Wörter und Kategorien zu verwalten.                                           |
| 12   | ja | ![carbon (8)](https://user-images.githubusercontent.com/69593308/221428212-703befd1-8901-436f-b379-fabb057d8311.svg)|
| 13   | ja |  ![carbon (9)](https://user-images.githubusercontent.com/69593308/221428250-048874f8-ee30-4f42-96b4-d2069b11031b.svg)|
| 14   | ja |                                           |


# 8 Testprotokoll

Das Spiel funktioniert entsprechend den Anforderungen.

https://user-images.githubusercontent.com/69593308/221412348-a513ac8e-dbbe-4265-89d4-c9ac875748db.mp4


Die Sessions werden auf dem Client in den Cookies gespeichert.

https://user-images.githubusercontent.com/69593308/221412469-a690a6f5-aa94-41ba-a553-dc5df136752f.mp4





| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

# 9 `README.md`

✍️ Beschreiben Sie ausführlich in einer README.md, wie Ihre Applikation gestartet und ausgeführt wird. Legen Sie eine geeignete Möglichkeit (Skript, Export, …) bei, Ihre Datenbank wiederherzustellen.

# 10 Allgemeines

- [ ] Ich habe die Rechtschreibung überprüft
- [ ] Ich habe überprüft, dass die Nummerierung von Testfällen und User Stories übereinstimmen
- [ ] Ich habe alle mit ✍️ markierten Teile ersetzt
