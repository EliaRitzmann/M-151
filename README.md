# Projekt-Dokumentation

✍️ Eray Çimen

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

* Tier 1 (Presentation): Artikel anzeigen, Angebote bieten
* Tier 2 (Webserver): Eingaben validieren
* Tier 3 (Application Server): Beendete Auktionen filtern
* Tier 4 (Dataserver): Angebote und Artikel speichern

# 2 Technologie

✍️ Beschreiben Sie für dieselben Tiers, welche Programmiersprache bzw. Technologie Sie verwenden möchten.

* Tier 1 (Presentation): React JS, Javascript, HTML, CSS
* Tier 2 (Webserver): Express.js, Postman (für Tests)
* Tier 3 (Application Server): Express.js, Node mysql module
* Tier 4 (Dataserver): MySQL, XAMPP, MySQL Workbench

# 3 Datenbank

✍️ Wie steuern Sie Ihre Datenbank an? Wie ist das Interface aufgebaut? 

Der Rest Api-Controller von Express.js ruft das Model auf, die die Businesslogik übernimmt. Dieser speichert oder ruft die Daten aus der Datenbank dann mit dem mysql module ab.

# 4.1 User Stories

| Nr | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
| A    | Muss                | Funktional     | Als Verkäufer möchte ich zu jedem Inserat meine Kommunikationskanäle auflisten können, damit ich von Interessierten kontaktiert werden kann. |
| B  | Muss                | Funktional     | Als Verkäufer möchte ich zu meine Artikel Bilder und Produktbeschreibung hinzufügen können, damit ich den Käufer Auskunft über meine Artikel geben kann. |
| C  | Muss                | Funktional     | Als Käufer möchte ich zu einem Artikel ein Angebot bieten können, damit ich die Auktion gewinnen kann. |
| D  | Muss                | Qualität     | Als Nutzer möchte ich jeweils eine Ladezeit von höchstens 2 Sekunden (lokal), damit ich nicht zu lange warten muss. |
| E  | Kann                | Rand     | Als Nutzer erwarte ich, dass die Plattform responsive designet wurde, damit ich die Website auf meinem Rechner, wie auch auf meinem Handy benutzen kann. |

# 4.2 Testfälle

| TC-Nr | Vorbereitung | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| A.1  | Der Verkäufer befindet sich auf der Verkaufsseite.             | Unter Kommunikationskanäle "Tel. 076 600 60 60" eingeben. | Auf der Artikelanzeige wird nun die Telefonnummer angezeigt.                   |
| A.2  | Der Verkäufer befindet sich auf der Verkaufsseite.              | Unter Kommunikationskanäle "Facebook: https://www.facebook.com/zuck/" eingeben.         | Auf der Artikelanzeige wird nun der Link zu Mark Zuckerbergs Facebookprofil angezeigt.                   |
| B.1  | Der Verkäufer befindet sich auf der Verkaufsseite.              | Unter Foto ein Bild von einer Katze einfügen. | Auf der Artikelanzeige wird nun das Bild der Katze angezeigt.                   |
| B.2  | Der Verkäufer befindet sich auf der Verkaufsseite.              | Unter Beschreibung "Diese Katze steht nicht zum Verkauf. Es wird bloss getestet" eingeben. | Auf der Artikelanzeige wird nun die Produkbeschreibung angezeigt.                |
| C.1  | Der Käufer befindet sich auf der Artikelanzeige der Katze            | Unter Bieten einen Betrag eingeben, der tiefer als das aktuelle Angebot ist. | Es steht in rot "Ihr Angebot muss höher als das Aktuelle sein."        |
| C.2  | Der Käufer befindet sich auf der Artikelanzeige der Katze            | Unter Bieten einen Betrag eingeben, der höher als das aktuelle Angebot ist. | Der eingetragene Betrag steht nun als aktuellen Angebot unter dem Artikel.        |
| D.1  | Der Tester hat seinen Lieblingsbrowser offen und das Frontend, Backend und die Datenbank lokal gestartet. | Die URL im Browser für die Plattform eingeben. | Die Ladezeit beträgt kürzer als zwei Sekunden, sofern das Frontend schon bereitgestellt wurde.        |
| E.1  | Der Tester Hat die Website auf seinem Rechner offen. | Alle Knöpfe und Texte überprüfen, ob sie zugänglich sind.  | Alle Knöpfe führen die erwartete Aktionen aus, alle Texte aus dem HTML Quelltext werden im richtigen Layout angezeigt. |
| E.1  | Der Tester Hat die Website auf seinem Rechner offen und stellt bei den Entwicklertools ein, dass die Seitengrössen so, wie auf dem iPhone sind. | Alle Knöpfe und Texte überprüfen, ob sie zugänglich sind.  | Alle Knöpfe führen die erwartete Aktionen aus, alle Texte aus dem HTML Quelltext werden im richtigen Layout angezeigt. |

# 5 Prototyp

✍️ Erstellen Sie Prototypen für das GUI (Admin-Interface und Quiz-Seite).

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
