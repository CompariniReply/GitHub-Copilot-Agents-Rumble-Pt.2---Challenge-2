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
.github/
  agents/              # Esempi di agenti già pronti — usali come riferimento
    asset-frontend-expert.agent.md
    code-reviewer.agent.md
    test-author.agent.md
  agents/<tuo-file>.agent.md   # 👈 qui consegni il TUO agente
README.md              # Questo file
```

Gli esempi in [`.github/agents/`](.github/agents/) **non vanno modificati**: sono lì per mostrarti
la struttura, lo stile e il livello di dettaglio attesi. Crea **un nuovo file** per il tuo agente.

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
2. **Crea il file** in [`.github/agents/`](.github/agents/), ad esempio
   `.github/agents/mario-rossi-agent.agent.md`.
3. **Compila il frontmatter** con `name`, `description` e soprattutto `author` (nome e cognome).
4. **Scrivi il corpo** dell'agente con istruzioni chiare e specifiche.
5. **Ispirati** agli esempi in [`.github/agents/`](.github/agents/) per struttura e livello di dettaglio.
6. **Fai commit e push** del tuo file.

### Comandi per la consegna

```bash
git add .github/agents/<tuo-file>.agent.md
git commit -m "Aggiunto agente di <Nome Cognome>"
git push
```

---

## ✅ Criteri di valutazione

L'agente consegnato viene valutato su:

| Criterio | Cosa guardiamo |
| --- | --- |
| **Chiarezza** | Lo scopo e l'ambito d'uso sono immediatamente comprensibili? |
| **Specificità** | Le istruzioni sono concrete e azionabili, non generiche? |
| **Completezza** | Ruolo, competenze, modo di operare e vincoli sono ben definiti? |
| **Originalità** | L'idea è interessante, utile o creativa? |
| **Correttezza formale** | Frontmatter valido, `author` presente con nome e cognome, file `*.agent.md`. |

> 💡 **Suggerimento**: un agente focalizzato e ben istruito vale più di un agente generico che
> "fa tutto". Scegli un ambito preciso e rendilo eccellente.

---

## 📚 Esempi inclusi

Nella cartella [`.github/agents/`](.github/agents/) trovi tre agenti di esempio a cui ispirarti:

| File | Cosa fa |
| --- | --- |
| [`asset-frontend-expert.agent.md`](.github/agents/asset-frontend-expert.agent.md) | Implementa feature frontend React/TypeScript seguendo uno stack e uno stile definiti. |
| [`code-reviewer.agent.md`](.github/agents/code-reviewer.agent.md) | Esegue revisioni di codice mirate su qualità, sicurezza e manutenibilità. |
| [`test-author.agent.md`](.github/agents/test-author.agent.md) | Scrive ed estende suite di test automatici con buona copertura. |

Buon lavoro — e che vinca il miglior agente! 🚀
