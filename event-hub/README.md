# GitHub Copilot Agents Rumble Event Hub

Sito statico operativo per pianificare l'evento interno **GitHub Copilot Agents
Rumble Pt. 2**.

## Avvio

Apri `event-hub/index.html` nel browser.

Non serve installare dipendenze e non serve avviare un dev server.

## Cosa permette di fare

- Modificare brief, data, location, partecipanti, budget, owner e decisione critica.
- Gestire agenda, checklist, catering, vendor board, run-of-show e risk register.
- Calcolare stime catering e ripartizione budget indicativa.
- Filtrare azioni per stato, owner e area.
- Stampare il piano operativo.
- Esportare lo stato in JSON.

## Persistenza

Le modifiche vengono salvate nel `localStorage` del browser. Questo rende il
planner immediato da usare in locale, ma non sincronizza automaticamente lo stato
tra piu persone o dispositivi. Per condividere l'avanzamento, usa il pulsante
`Esporta JSON` e allega il file al team organizzatore.
