# Projekt-Dokumentation

✍️ Elia Ritzmann

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
|       | 0.0.1   | ✍️ Jedes Mal, wenn Sie an dem Projekt arbeiten, fügen Sie hier eine neue Zeile ein und beschreiben in *einem* Satz, was Sie erreicht haben. |
|       | 0.0.2   |                                                              |
|       | 0.0.3   |                                                              |
|       | 0.0.4   |                                                              |
|       | 0.0.5   |                                                              |
|       | 0.0.6   |                                                              |
|       | 1.0.0   |                                                              |

# 0 Ihr Projekt

✍️ Ich möchte in diesem Projekt eine einfache Glücksspiel-Webseite erstellen, welche sicher ist. 

# 1 Analyse

✍️ Beschreiben Sie, auf welchem Tier Sie die dynamischen Elemente der Anwendung unterbringen möchten:

* Tier 1 (Presentation): Glückspiel anzeigen
* Tier 2 (Webserver): Eingaben validieren
* Tier 3 (Application Server): Glückspiel berechnen
* Tier 4 (Dataserver): Benutezrdaten speichern

# 2 Technologie

✍️ Beschreiben Sie für dieselben Tiers, welche Programmiersprache bzw. Technologie Sie verwenden möchten.

Um diese Web-App zu realisieren habe ich mich dazu entschieden, React im Frontend und Express.js im Backend zu verwenden und diese beide mit einer RestAPI zu verbinden.
Ich habe mich für diesen Stack entschieden, da ich mit allen Technologien bereits vertraut bin. 

* Tier 1 (Presentation): React.js, html, css, javascript, tailwindCSS, daisyUI
* Tier 2 (Webserver): Node.js, Express.js
* Tier 3 (Application Server): Node.js, Express.js, Prisma
* Tier 4 (Dataserver): dev: SQLite | production: mySQL

# 3 Datenbank

✍️ Wie steuern Sie Ihre Datenbank an? Wie ist das Interface aufgebaut? 

Die Datenbank wird vom Express Server aus mit dem Primsa Client angesteuert und verwaltet. 

# 4.1 User Stories

| Nr | Verbindlichkeit | Typ        | Beschreibung                                                                                            |
|----|----------------|------------|---------------------------------------------------------------------------------------------------------|
| 1  | Muss           | Funktional | Als Administrator möchte ich mich mit meinem Benutzernamen und Passwort authentifizieren können, um auf die Administratorfunktionen zugreifen zu können. |
| 2  | Muss           | Funktional | Als Administrator möchte ich Phrasen und Rätselwörter anlegen und löschen können, um das Spiel zu aktualisieren und anzupassen.                                   |
| 3  | Muss           | Funktional | Als Administrator möchte ich Kategorien anlegen und jedem Wort bzw. jeder Frage einer Kategorie zuordnen können, um das Spiel zu organisieren.                    |
| 4  | Muss           | Funktional | Als Client möchte ich einen Namen eingeben können, der auf der Highscore-Liste erscheint, um meine Leistung zu verfolgen und auf der Rangliste zu erscheinen.      |
| 5  | Muss           | Funktional | Als Client möchte ich zu jeder Zeit meinen Kontostand und meine Lebenspunkte sehen können, um meine Fortschritte zu verfolgen.                                      |
| 6  | Muss           | Funktional | Als Client möchte ich darüber informiert werden, ob meine gewählte Antwort richtig oder falsch ist, um meine Leistung zu überprüfen.                                  |
| 7  | Muss           | Funktional | Als Client möchte ich in der Highscore-Liste folgende Daten sehen können: Rang, Name des Spielers, Zeitpunkt des Spiels, Geldbetrag und Anzahl Spielrunden, um meine Leistung im Vergleich zu anderen Spielern zu überprüfen. |
| 8  | Muss           | Funktional | Als Client möchte ich, dass die Highscore-Liste nach Rang sortiert wird, der durch die Höhe des Geldbetrags bestimmt wird, um meine Position auf der Rangliste zu sehen. |
| 9  | Muss           | Funktional | Als Client möchte ich jederzeit spielen oder aufhören und meinen Gewinn in die Highscore-Liste übernehmen können, um meine Leistung zu speichern.                     |
| 10 | Muss           | Funktional | Als Administrator möchte ich die Anzahl der Spielrunden zählen können, um die Leistung der Spieler zu verfolgen.                                                  |
| 11 | Muss           | Funktional | Als Administrator möchte ich das Spiel mit einer spielbaren Anzahl Wörter und Fragen füllen können, um das Spiel interessant zu gestalten und den Spielern eine gute Erfahrung zu bieten.             |



# 4.2 Testfälle

| TF-Nr | Vorbereitung | Eingabe | Erwartete Ausgabe |
| ----- | ----------- | ------- | ----------------- |
| 1 | Datenbankanbindung korrekt konfiguriert | - | Anwendung kann auf Datenbank zugreifen |
| 2 | Transaktionen durchgeführt | - | Datenbanktransaktionen sind atomar, konsistent, isoliert und dauerhaft |
| 3 | Sicherheitsaspekte umgesetzt | - | Verwendung von verschlüsselten Passwörtern, Verhinderung von SQL-Injection-Angriffen usw. |
| 4 | Templating-System korrekt eingerichtet | - | Benutzeroberfläche wird korrekt gerendert |
| 5 | Administratoren erfolgreich authentifiziert | Benutzername und Passwort | Zugriff auf Berechtigungen |
| 6 | Phrasen und Rätselwörter angelegt und gelöscht | Administrator-Login, Phrasen und Rätselwörter | Phrasen und Rätselwörter werden angelegt und gelöscht |
| 7 | Kategorien erstellt und zugeordnet | Administrator-Login, Kategorien, Fragen/Wörter | Kategorien und Fragen/Wörter werden korrekt zugeordnet |
| 8 | Kandidatenname eingegeben | Name des Kandidaten | Name wird in Highscore-Liste angezeigt |
| 9 | Kontostand und Lebenspunkte korrekt angezeigt | Spiel läuft | Kontostand und Lebenspunkte werden korrekt angezeigt |
| 10 | Antwort des Kandidaten überprüft | Antwort des Kandidaten | Benutzeroberfläche wird entsprechend aktualisiert |
| 11 | Highscore-Liste korrekt sortiert | Highscore-Liste | Highscore-Liste wird nach Rang sortiert |
| 12 | Spiel beendet und Gewinn übernommen | Beenden des Spiels | Gewinn wird in Highscore-Liste übernommen |
| 13 | Anzahl der Spielrunden korrekt gezählt | Spiel läuft | Anzahl der Spielrunden wird korrekt gezählt |
| 14 | Ausreichende Anzahl von Wörtern und Fragen | Spiel gestartet | Genügend Wörter und Fragen für unterhaltsames Spielerlebnis |


# 5 Prototyp

✍️ Erstellen Sie Prototypen für das GUI (Admin-Interface und Quiz-Seite).
![Coins 100](https://user-images.githubusercontent.com/69593308/212632313-a9ab8cfe-3f77-42cd-8a61-f1cec57a8737.png)

# 6 Implementation

✍️ Halten Sie fest, wann Sie welche User Story bearbeitet haben

| User Story | Datum | Beschreibung |
| ---------- | ----- | ------------ |
| ...        |       |              |

# 7 Projektdokumentation

| US-№ | Erledigt? | Entsprechende Code-Dateien oder Erklärung |
| ---- | --------- | ----------------------------------------- |
| 1    | ja / nein |                                           |
| ...  |           |                                           |

# 8 Testprotokoll

✍️ Fügen Sie hier den Link zu dem Video ein, welches den Testdurchlauf dokumentiert.



https://user-images.githubusercontent.com/69593308/221412348-a513ac8e-dbbe-4265-89d4-c9ac875748db.mp4



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
