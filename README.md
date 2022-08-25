# SeemsDancy
A repository to prepare the SeemsDancy project.

## Bibliotheken Installieren:
!pip install -r requirements.txt --force 
(Reqs. tbd)

## Tesseract OCR
Eine lokale Installation des OCR Tesseracts wird benötigt.
Installer sind hier zu finden:

https://tesseract-ocr.github.io/tessdoc/Home.html#binaries

## Bedienungsanleitung
Das Ziel war ein ganzheitlicher Workflow, bei dem durch Benutzereingabe auf einer Website ein Web-Harvesting-Prozess angestoßen wird, dessen Ergebnisse wiederum an die Analyse in Python weitergegeben werden.

Zum Ausprobieren können folgende Schritte befolgt werden:

Die geplante Benutzerschnittstelle ist lediglich die Index.html. Diese würde im fertigen Endprodukt eine Eingabezeile mit gewünchstem Suchbegriff und ein Ausgabefeld für die gefundenen Events beinhalten. Zum jetzigen Stand enthält sie zu Testzwecken nur einen Button, bei dessen Click der Prozess ausgelöst wird.

Das Aufrufen der index.html und anschließend das Clicken des Button startet also das Web-Harvesting-Skript. Über verschiedene Schnittstellen (JavaScript und Flask) gelangt das Harvesting-Ergebnis an Python, wo dann automatisch mit den Ergebnissen des Harvesting die Information Extraction angestoßen wird. 

Die Ergebnisse der Information Extraction werden aktuell noch nur als print ausgegeben, würden aber später, wie erläutert, in einem Ergebnisfenster angezeigt werden, sodas sich der User das für ihn passende Event aussuchen kann.

Das Design des Projekts ist darauf ausgelegt möglichst einfach und intuitiv für den Benutzer zu sein. Dies spiegelt sich darin wieder, dass der Nutzer nur einen Knopf drücken muss und das gesamte Programm dadurch ausgeführt wird.
