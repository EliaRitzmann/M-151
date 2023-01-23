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

✍️ Ich möchte in diesem Projekt eine Plattform für Nutzer bauen, worin sie ihre Sachen versteigern können.

# 1 Analyse

✍️ Beschreiben Sie, auf welchem Tier Sie die dynamischen Elemente der Anwendung unterbringen möchten:

* Tier 1 (Presentation): Glückspiel anzeigen
* Tier 2 (Webserver): Eingaben validieren
* Tier 3 (Application Server): Glückspiel berechnen
* Tier 4 (Dataserver): Benutezrdaten speichern

# 2 Technologie

✍️ Beschreiben Sie für dieselben Tiers, welche Programmiersprache bzw. Technologie Sie verwenden möchten.

* Tier 1 (Presentation): Next.js, HTML, CSS
* Tier 2 (Webserver): Next.js, Postman (für Tests)
* Tier 3 (Application Server): Next.js
* Tier 4 (Dataserver): SQLite

# 3 Datenbank

✍️ Wie steuern Sie Ihre Datenbank an? Wie ist das Interface aufgebaut? 

Da Next.js ein FullStack Framework ist, werde ich alles nach der Dokumentation und Richtline von Next.js.

# 4.1 User Stories

| Nr | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
| A    | Muss                | Funktional     | Der Benutzer kann das Glücksrad drehen und einen Preis gewinnen |
| B  | Muss                | Funktional     | Der Benutzer kann seine Gewinne einlösen |
| C  | Muss                | Funktional     | Der Benutzer kann sein Konto aufladen, um weitere Drehungen zu kaufen |
| D  | Muss                | Qualität     | Die Grafiken des Glücksrads und der Preise sind ansprechend |
| E  | Kann                | Rand     | Der Benutzer kann seine Gewinne mit Freunden teilen auf sozialen Medien |


# 4.2 Testfälle

| TC-Nr | Vorbereitung | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| A.1  | Der Benutzer hat sich erfolgreich angemeldet. | Der Benutzer dreht das Glücksrad. | Das Glücksrad dreht sich und zeigt einen zufälligen Preis an. |
| A.2  | Der Benutzer hat nicht genug Kontostand für eine weitere Drehung. | Der Benutzer versucht, das Glücksrad zu drehen. | Es erscheint eine Fehlermeldung, dass der Benutzer nicht genug Kontostand hat. |
| B.1  | Der Benutzer hat einen gewonnenen Preis. | Der Benutzer versucht, den Preis einzulösen. | Der Preis wird erfolgreich eingelöst und dem Konto des Benutzers gutgeschrieben. |
| B.2  | Der Benutzer hat einen gewonnenen Preis, aber das Einlösungsdatum ist abgelaufen. | Der Benutzer versucht, den Preis einzulösen. | Es erscheint eine Fehlermeldung, dass das Einlösungsdatum des Preises abgelaufen ist. |
| C.1  | Der Benutzer hat eine Internetverbindung. | Der Benutzer öffnet die Glücksrad-App. | Die App lädt schnell und funktioniert einwandfrei. |
| C.2  | Der Benutzer hat keine Internetverbindung. | Der Benutzer öffnet die Glücksrad-App. | Es erscheint eine Fehlermeldung, dass keine Internetverbindung vorhanden ist. |

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
