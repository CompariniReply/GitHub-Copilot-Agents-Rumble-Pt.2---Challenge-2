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

L'agente consegnato viene valutato in modo complessivo guardando alla sua qualità reale.
In linea di massima vengono considerati aspetti come:

- **Chiarezza del ruolo** — è chiaro chi è l'agente, cosa fa e cosa non fa?
- **Completezza delle istruzioni** — le indicazioni sono concrete e sufficienti a guidarne il comportamento?
- **Robustezza** — l'agente gestisce input ambigui, fuori scope o situazioni di incertezza?
- **Originalità** — l'idea risolve un problema reale ed evita di essere un assistente generico?
- **Tono e persona** — lo stile comunicativo è definito e coerente con il caso d'uso?

> ⚠️ I pesi esatti e il metodo di calcolo del punteggio non vengono resi noti: l'obiettivo è
> premiare agenti genuinamente ben fatti, non agenti costruiti per "ottimizzare" una checklist.

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
