# Build Your Own Agent — Challenge 2

**Evento**: GitHub Copilot Agents Rumble Pt. 2 · **Challenge 2**

In questa challenge il protagonista non è il codice dell'app: sei **tu** e l'**agente Copilot** che progetti.
L'obiettivo è creare un **custom agent a tua scelta** e consegnarlo. La valutazione si concentra
sulla qualità, l'originalità e l'efficacia dell'agente che produci — non su una feature da implementare.

> **In una frase**: progetta il miglior agente Copilot che riesci a immaginare, descrivilo in un file
> `*.agent.md`, mettici il tuo nome nel frontmatter e fai **commit + push**.

---

## 🎯 Obiettivo della challenge

1. **Ideare** un custom agent: scegli tu il dominio, lo scopo e la personalità.
   Può essere un agente che implementa frontend React, un revisore di sicurezza, un assistente
   per la scrittura di test, un esperto di refactoring, un generatore di documentazione… **la scelta è libera**.
2. **Scrivere** l'agente in un file `*.agent.md` ben strutturato (vedi sotto).
3. **Inserire i tuoi dati** (nome e cognome) nel **frontmatter** del file.
4. **Consegnare** il file facendo commit e push sul repository.

Verrai valutato **sull'agente che consegni**, quindi curane contenuto, chiarezza e utilità reale.

---

## 📁 Struttura del repository

```
examples/
  agents/              # Esempi di agenti già pronti — usali come riferimento
    bartender.agent.md
    debug-cartographer.agent.md
    ...
agent-template.md      # Struttura di base di un agente da cui partire
.github/
  agents/<tuo-file>.agent.md   # 👈 qui consegni il TUO agente
README.md              # Questo file
```

Gli esempi in [`examples/agents/`](examples/agents/) **non vanno modificati**: sono lì per mostrarti
lo stile e il livello di dettaglio attesi. In [`agent-template.md`](agent-template.md) trovi invece
la **struttura di base di un agente** da usare come punto di partenza. Crea **un nuovo file** per il tuo agente.

---

## 🧩 Cos'è un custom agent

Un custom agent è un file Markdown con estensione `*.agent.md` composto da due parti:

1. **Frontmatter YAML** (tra `---`) con i metadati dell'agente.
2. **Corpo in Markdown** con le istruzioni che definiscono comportamento, competenze e regole dell'agente.

### Frontmatter richiesto

Il frontmatter del tuo file **deve** contenere, oltre ai campi tecnici, i tuoi dati anagrafici:

```yaml
---
name: 'Nome del tuo agente'
description: 'Una frase che spiega cosa fa e quando usarlo.'
author: 'Mario Rossi'        # 👈 OBBLIGATORIO: il TUO nome e cognome
tools: ['codebase', 'search', 'editFiles', 'runCommands']
model: GPT-5 (copilot)        # opzionale
---
```

| Campo | Obbligatorio | A cosa serve |
| --- | --- | --- |
| `name` | Sì | Nome leggibile dell'agente. |
| `description` | Sì | Sintesi di scopo e ambito d'uso. |
| `author` | **Sì** | **Nome e cognome del partecipante.** Usato per identificare la consegna. |
| `tools` | Consigliato | Elenco degli strumenti che l'agente può usare. |
| `model` | No | Modello preferito per l'agente. |

> ⚠️ Senza il campo `author` con **nome e cognome** la consegna non è valida.

### Corpo dell'agente

Dopo il frontmatter, descrivi l'agente in Markdown. Un buon agente in genere chiarisce:

- **Ruolo e scopo** — chi è l'agente e quale problema risolve.
- **Competenze** — stack, domini o tecniche che padroneggia.
- **Modo di operare** — passi che segue, strumenti che usa, come verifica il lavoro.
- **Regole e vincoli** — cosa deve e cosa non deve fare.
- **Stile di comunicazione** — tono, lingua, formato delle risposte.

---

## ✍️ Come svolgere la challenge

1. **Scegli l'idea** del tuo agente. Pensa a un compito che ti capita spesso e che vorresti delegare.
2. **Parti dalla struttura** in [`agent-template.md`](agent-template.md) per impostare il file.
3. **Crea il file** in [`.github/agents/`](.github/agents/), ad esempio
   `.github/agents/master-chef.agent.md`.
4. **Compila il frontmatter** con `name`, `description` e soprattutto `author` (nome e cognome).
5. **Scrivi il corpo** dell'agente con istruzioni chiare e specifiche.
6. **Ispirati** agli esempi in [`examples/agents/`](examples/agents/) per stile e livello di dettaglio.
7. **Fai commit e push** del tuo file.

### Comandi per la consegna

```bash
git add .github/agents/<tuo-file>.agent.md
git commit -m "Aggiunto agente di <Nome Cognome>"
git push
```

---

## ✅ Criteri di valutazione

L'agente consegnato viene valutato automaticamente dall'**agente valutatore**
(vedi [`agente-valutatore.md`](agente-valutatore.md)) su **5 metriche pesate**, ciascuna con un
punteggio da 1 a 5:

| Metrica | Peso | Cosa guardiamo |
| --- | --- | --- |
| **Chiarezza del ruolo** | 25% | Chi è l'agente, cosa fa e cosa **non** fa: ruolo specifico, scope delimitato, vincoli espliciti. |
| **Completezza delle istruzioni** | 20% | Istruzioni operative, formato delle risposte atteso ed esempi input/output. |
| **Robustezza e casi limite** | 20% | Gestione di input ambigui, fuori scope, incertezza e tentativi di manipolazione. |
| **Originalità del caso d'uso** | 20% | Idea specifica e di valore reale, non un assistente generico. |
| **Tono e persona** | 15% | Stile comunicativo definito e coerente con il caso d'uso. |

Il punteggio finale (0–100) si calcola con la formula:

```
Punteggio = ((Ruolo × 25) + (Completezza × 20) + (Robustezza × 20) + (Originalità × 20) + (Tono × 15)) / 5
```

| Fascia | Giudizio |
| --- | --- |
| 0 – 40 | Da rivedere — l'agente non è pronto |
| 41 – 60 | Sufficiente — funziona ma manca di profondità |
| 61 – 75 | Buono — solido, con margini di miglioramento |
| 76 – 89 | Ottimo — agente ben costruito |
| 90 – 100 | Eccellente — esempio da seguire |

> 💡 **Suggerimento**: un agente focalizzato e ben istruito vale più di un agente generico che
> "fa tutto". Scegli un ambito preciso e rendilo eccellente. Ricorda comunque di includere il
> campo `author` con nome e cognome: senza, la consegna non è valida.

---

## 📚 Esempi e template

Nella cartella [`examples/agents/`](examples/agents/) trovi diversi agenti di esempio a cui ispirarti,
mentre in [`agent-template.md`](agent-template.md) trovi la **struttura di base di un agente** da cui partire.

| Risorsa | Cosa offre |
| --- | --- |
| [`agent-template.md`](agent-template.md) | Lo scheletro di un agente (frontmatter + sezioni del corpo) da copiare e personalizzare. |
| [`examples/agents/`](examples/agents/) | Agenti completi di esempio (es. `bartender`, `debug-cartographer`, `refactor-pilot`, `test-sentinel`) che mostrano stile e livello di dettaglio attesi. |

Buon lavoro — e che vinca il miglior agente! 🚀
