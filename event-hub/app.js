const STORAGE_KEY = "reply-agents-rumble-event-hub";

const defaultState = {
  brief: {
    title: "GitHub Copilot Agents Rumble Pt. 2",
    date: "Da confermare",
    location: "Reply office + streaming",
    participants: 80,
    budget: "Medio",
    owner: "Event owner Reply",
    tone: "Energetico e professionale",
    risk: "Medio",
    criticalDecision: "Confermare sede e catering",
    assumptions: "Evento interno Reply di mezza giornata, 80 partecipanti, formato ibrido opzionale, catering leggero, alcol non previsto, 10% di margine food e bevande."
  },
  agenda: [
    { time: "09:30", activity: "Welcome coffee e check-in", owner: "Reception lead", materials: "Badge, lista iscritti, segnaletica", dependency: "Desk pronto e catering consegnato" },
    { time: "10:00", activity: "Kick-off challenge e regole", owner: "Host", materials: "Slide, timer, microfono", dependency: "AV testato" },
    { time: "10:45", activity: "Sprint 1: design agent", owner: "Tech lead", materials: "README, template, esempi", dependency: "Team formati" },
    { time: "12:15", activity: "Light lunch", owner: "Catering lead", materials: "Buffet, etichette allergeni", dependency: "Food verificato" },
    { time: "13:00", activity: "Sprint 2: scrittura e validazione", owner: "Team", materials: "VS Code, Copilot, Git", dependency: "Repository accessibile" },
    { time: "15:15", activity: "Pitch e voting", owner: "Giuria", materials: "Scoring sheet, timer", dependency: "Commit consegnati" }
  ],
  tasks: [
    { area: "Logistica", task: "Confermare sala, layout e accessi fornitori", owner: "Logistics lead", due: "T-3 settimane", status: "Da fare", criticality: "Alta" },
    { area: "Catering", task: "Inviare brief food con allergeni e piano B", owner: "Catering lead", due: "T-3 settimane", status: "In corso", criticality: "Alta" },
    { area: "Tech", task: "Testare Copilot, repo, template e flusso commit/push", owner: "Tech lead", due: "T-3 giorni", status: "Da fare", criticality: "Alta" },
    { area: "Comunicazione", task: "Inviare invito e reminder con requisiti laptop", owner: "Communication owner", due: "T-2 settimane", status: "Da fare", criticality: "Media" },
    { area: "AV", task: "Test microfoni, schermo, Wi-Fi e timer", owner: "AV lead", due: "T-1 giorno", status: "Da fare", criticality: "Alta" }
  ],
  catering: [
    { moment: "Welcome coffee", menu: "Mini croissant, focaccine, frutta, caffe, te", quantity: "2-3 pezzi/persona", allergens: "Glutine, lattosio; alternative GF/LF separate", service: "Coffee station presidiata", backup: "Snack secchi, frutta, capsule caffe" },
    { moment: "Light lunch", menu: "Bowl cereali, verdure, proteine leggere, focaccia, dessert piccolo", quantity: "1 main + 2 side/persona", allergens: "Etichette complete; opzioni veg, GF, LF", service: "Buffet assistito", backup: "Delivery bowl/sandwich premium" },
    { moment: "Networking finale", menu: "Finger food salato, mocktail, soft drink", quantity: "5-6 pezzi/persona", allergens: "30% vegetariano, quota vegana e GF", service: "Isole buffet", backup: "Menu freddo semplificato" }
  ],
  vendors: [
    { vendor: "Catering", request: "Menu, allergeni, personale, consegna, smaltimento", contact: "Da assegnare", arrival: "08:45", status: "Preventivo da confermare", action: "Richiedere conferma scritta anti-contaminazione" },
    { vendor: "AV", request: "Schermo, microfoni, Wi-Fi, timer, cavi backup", contact: "AV lead", arrival: "08:00", status: "Da pianificare", action: "Fare prova tecnica completa" },
    { vendor: "Allestimento", request: "Tavoli team, desk reception, segnaletica", contact: "Logistics lead", arrival: "08:00", status: "Da confermare", action: "Bloccare layout definitivo" }
  ],
  runshow: [
    { time: "08:00", activity: "Arrivo staff e fornitori tecnici", owner: "Logistics lead", materials: "Checklist setup", vendor: "AV, allestimento", fallback: "Priorita a plenaria e Wi-Fi" },
    { time: "08:45", activity: "Consegna catering e controllo allergeni", owner: "Catering lead", materials: "Etichette, lista allergeni anonima", vendor: "Catering", fallback: "Isolare food non verificato" },
    { time: "09:20", activity: "Apertura check-in", owner: "Reception lead", materials: "Badge, QR repo", vendor: "Reception", fallback: "Check-in manuale" },
    { time: "10:00", activity: "Kick-off", owner: "Host", materials: "Slide, microfono", vendor: "AV", fallback: "Laptop backup e microfono spare" },
    { time: "12:15", activity: "Light lunch", owner: "Catering lead", materials: "Buffet, acqua", vendor: "Catering", fallback: "Delivery emergenza" },
    { time: "17:00", activity: "Teardown e controllo spazi", owner: "Logistics lead", materials: "Lista recupero", vendor: "Pulizie", fallback: "Runner su materiali critici" }
  ],
  risks: [
    { risk: "Wi-Fi instabile", probability: "Media", impact: "Alto", signal: "Lentezza login o clone repo", mitigation: "Test rete dedicata", owner: "AV lead", fallback: "Hotspot/router backup" },
    { risk: "Errore allergeni", probability: "Bassa", impact: "Alto", signal: "Etichette assenti o dubbie", mitigation: "Conferma scritta fornitore", owner: "Catering lead", fallback: "Separare food non verificato" },
    { risk: "Team bloccati su Git/Copilot", probability: "Media", impact: "Medio", signal: "Richieste help desk ripetute", mitigation: "Setup guide e tech support", owner: "Tech lead", fallback: "Pairing e slot final polish" },
    { risk: "Pitch fuori tempo", probability: "Media", impact: "Medio", signal: "Primi team superano 2 minuti", mitigation: "Timer visibile", owner: "Host", fallback: "Ridurre Q&A" }
  ],
  communications: {
    invite: "Ciao, ti aspettiamo a GitHub Copilot Agents Rumble Pt. 2: una challenge interna Reply per progettare custom agent Copilot utili, originali e pronti da usare. Porta laptop, accesso a VS Code, GitHub Copilot attivo e voglia di costruire qualcosa di concreto in team.",
    reminder: "Reminder: domani si svolge GitHub Copilot Agents Rumble Pt. 2. Verifica accesso a VS Code, Copilot e GitHub. Se hai esigenze alimentari o di accessibilita non ancora comunicate, avvisa il team organizzatore entro oggi.",
    postEvent: "Grazie per aver partecipato a GitHub Copilot Agents Rumble Pt. 2. Condividiamo repo, agent finali, vincitori e survey di feedback. I migliori agent verranno raccolti come esempi riutilizzabili per il team."
  }
};

let state = loadState();

const tables = {
  agenda: { target: "agendaTable", columns: ["time", "activity", "owner", "materials", "dependency"], labels: ["Orario", "Attivita", "Owner", "Materiali", "Dipendenza"] },
  tasks: { target: "taskTable", columns: ["area", "task", "owner", "due", "status", "criticality"], labels: ["Area", "Azione", "Owner", "Scadenza", "Stato", "Criticita"] },
  catering: { target: "cateringTable", columns: ["moment", "menu", "quantity", "allergens", "service", "backup"], labels: ["Momento", "Menu", "Quantita", "Allergeni", "Servizio", "Piano B"] },
  vendors: { target: "vendorTable", columns: ["vendor", "request", "contact", "arrival", "status", "action"], labels: ["Fornitore", "Richiesta", "Contatto", "Arrivo", "Stato", "Azione"] },
  runshow: { target: "runshowTable", columns: ["time", "activity", "owner", "materials", "vendor", "fallback"], labels: ["Orario", "Attivita", "Owner", "Materiali", "Fornitore", "Fallback"] },
  risks: { target: "riskTable", columns: ["risk", "probability", "impact", "signal", "mitigation", "owner", "fallback"], labels: ["Rischio", "Prob.", "Impatto", "Segnale", "Mitigazione", "Owner", "Fallback"] }
};

document.addEventListener("DOMContentLoaded", () => {
  hydrateBriefForm();
  renderAll();
  bindEvents();
});

function loadState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? mergeState(defaultState, JSON.parse(stored)) : structuredClone(defaultState);
  } catch {
    return structuredClone(defaultState);
  }
}

function mergeState(base, saved) {
  return { ...structuredClone(base), ...saved, brief: { ...base.brief, ...saved.brief }, communications: { ...base.communications, ...saved.communications } };
}

function saveState(message = "Stato salvato in questo browser") {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  showToast(message);
}

function bindEvents() {
  document.getElementById("briefForm").addEventListener("input", (event) => {
    const field = event.target.name;
    if (!field) return;
    state.brief[field] = field === "participants" ? Number(event.target.value || 0) : event.target.value;
    renderAll(false);
  });

  document.querySelectorAll("[data-add]").forEach((button) => {
    button.addEventListener("click", () => addRow(button.dataset.add));
  });

  ["statusFilter", "ownerFilter", "areaFilter"].forEach((id) => {
    document.getElementById(id).addEventListener("input", () => renderTasks());
  });

  document.getElementById("saveButton").addEventListener("click", () => saveState());
  document.getElementById("printButton").addEventListener("click", () => window.print());
  document.getElementById("exportButton").addEventListener("click", exportJson);
  document.getElementById("resetButton").addEventListener("click", resetDemo);
}

function hydrateBriefForm() {
  const form = document.getElementById("briefForm");
  Object.entries(state.brief).forEach(([key, value]) => {
    const field = form.elements[key];
    if (field) field.value = value;
  });
}

function renderAll(syncForm = true) {
  if (syncForm) hydrateBriefForm();
  renderDashboard();
  renderMissingData();
  renderTable("agenda");
  renderTasks();
  renderTable("catering");
  renderTable("vendors");
  renderTable("runshow");
  renderTable("risks");
  renderCateringSummary();
  renderBudget();
  renderCommunications();
}

function renderDashboard() {
  const brief = state.brief;
  setText("eventTitle", brief.title);
  setText("eventDate", brief.date);
  setText("eventLocation", brief.location);
  setText("eventParticipants", String(brief.participants || 0));
  setText("eventBudget", brief.budget);
  setText("eventOwner", brief.owner);
  setText("eventDecision", brief.criticalDecision);

  const riskBadge = document.getElementById("riskBadge");
  riskBadge.textContent = `Rischio ${brief.risk.toLowerCase()}`;
  riskBadge.className = `badge ${brief.risk === "Basso" ? "low" : brief.risk === "Alto" ? "high" : ""}`;

  const openTasks = state.tasks.filter((task) => task.status !== "Fatto");
  const highRisks = state.risks.filter((risk) => risk.impact === "Alto");
  const priorities = [
    { title: brief.criticalDecision, detail: "Decisione critica da chiudere" },
    { title: `${openTasks.length} azioni aperte`, detail: "Filtra checklist per owner e stato" },
    { title: `${highRisks.length} rischi ad alto impatto`, detail: "Verifica mitigazioni e fallback" }
  ];
  document.getElementById("priorityList").innerHTML = priorities.map((item) => `<div class="priority-item"><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.detail)}</span></div>`).join("");

  const readiness = calculateReadiness();
  document.documentElement.style.setProperty("--progress", `${readiness}%`);
  setText("readinessValue", `${readiness}%`);
  setText("readinessLabel", readiness >= 80 ? "Pronto per final check" : readiness >= 55 ? "Buona base, restano blocchi" : "Serve chiudere dati e owner");
}

function calculateReadiness() {
  const requiredBrief = ["title", "date", "location", "participants", "budget", "owner", "criticalDecision"];
  const briefScore = requiredBrief.filter((key) => String(state.brief[key] || "").trim() && String(state.brief[key]).toLowerCase() !== "da confermare").length / requiredBrief.length;
  const taskScore = state.tasks.length ? state.tasks.filter((task) => task.status === "Fatto").length / state.tasks.length : 0;
  const riskScore = state.risks.every((risk) => risk.fallback && risk.owner) ? 1 : 0.5;
  return Math.round((briefScore * 45) + (taskScore * 35) + (riskScore * 20));
}

function renderMissingData() {
  const missing = [];
  if (!state.brief.date || state.brief.date.toLowerCase() === "da confermare") missing.push("Data non confermata: blocca invito, catering e run-of-show definitivo.");
  if (!state.brief.location || state.brief.location.toLowerCase().includes("confermare")) missing.push("Location da chiudere: impatta layout, AV, accessi e carico/scarico.");
  if (!state.brief.budget || state.brief.budget.toLowerCase().includes("confermare")) missing.push("Budget da confermare: il planner usa scenari indicativi, non preventivi finali.");
  if (!state.catering.some((item) => item.allergens.toLowerCase().includes("gf") || item.allergens.toLowerCase().includes("gluten"))) missing.push("Controllo gluten-free non evidente: richiedere conferma scritta al fornitore.");
  document.getElementById("missingData").innerHTML = missing.map((item) => `<div class="alert">${escapeHtml(item)}</div>`).join("");
}

function renderTable(type) {
  const config = tables[type];
  const rows = state[type];
  const head = config.labels.map((label) => `<th>${label}</th>`).join("") + "<th></th>";
  const body = rows.map((row, index) => `<tr>${config.columns.map((column) => cellInput(type, index, column, row[column])).join("")}<td><button class="delete-button" type="button" onclick="deleteRow('${type}', ${index})">Rimuovi</button></td></tr>`).join("");
  document.getElementById(config.target).innerHTML = `<table><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table>`;
}

function renderTasks() {
  const status = document.getElementById("statusFilter").value;
  const owner = document.getElementById("ownerFilter").value.toLowerCase();
  const area = document.getElementById("areaFilter").value.toLowerCase();
  const rows = state.tasks
    .map((task, index) => ({ ...task, index }))
    .filter((task) => status === "all" || task.status === status)
    .filter((task) => !owner || task.owner.toLowerCase().includes(owner))
    .filter((task) => !area || task.area.toLowerCase().includes(area));
  const config = tables.tasks;
  const head = config.labels.map((label) => `<th>${label}</th>`).join("") + "<th></th>";
  const body = rows.map((row) => `<tr>${config.columns.map((column) => cellInput("tasks", row.index, column, row[column])).join("")}<td><button class="delete-button" type="button" onclick="deleteRow('tasks', ${row.index})">Rimuovi</button></td></tr>`).join("");
  document.getElementById(config.target).innerHTML = `<table><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table>`;
}

function cellInput(type, index, column, value) {
  if (["status", "criticality", "probability", "impact"].includes(column)) {
    const options = column === "status" ? ["Da fare", "In corso", "Fatto", "Bloccato"] : column === "criticality" ? ["Bassa", "Media", "Alta"] : ["Bassa", "Media", "Alta"];
    return `<td><select onchange="updateCell('${type}', ${index}, '${column}', this.value)">${options.map((option) => `<option ${option === value ? "selected" : ""}>${option}</option>`).join("")}</select></td>`;
  }
  const longField = String(value || "").length > 42 || ["menu", "allergens", "backup", "mitigation", "fallback", "materials", "dependency", "request", "action"].includes(column);
  const safeValue = escapeHtml(value || "");
  return longField
    ? `<td><textarea rows="2" onchange="updateCell('${type}', ${index}, '${column}', this.value)">${safeValue}</textarea></td>`
    : `<td><input value="${safeValue}" onchange="updateCell('${type}', ${index}, '${column}', this.value)"></td>`;
}

function renderCateringSummary() {
  const participants = Number(state.brief.participants || 0);
  const coffeePieces = `${participants * 2}-${participants * 3}`;
  const aperitifPieces = `${participants * 5}-${participants * 6}`;
  const water = `${Math.ceil(participants * 0.75)}-${Math.ceil(participants * 1.25)} L`;
  const coffee = `${Math.ceil(participants * 1.1)} consumazioni`;
  const cards = [
    ["Welcome coffee", `${coffeePieces} pezzi`],
    ["Aperitivo finale", `${aperitifPieces} finger food`],
    ["Acqua", water],
    ["Caffe/te", coffee],
    ["Margine extra", "8-10%"]
  ];
  document.getElementById("cateringSummary").innerHTML = cards.map(([label, value]) => `<div class="summary-card"><span>${label}</span><strong>${value}</strong></div>`).join("");
}

function renderBudget() {
  const items = [
    ["Catering", 42],
    ["AV", 16],
    ["Allestimento", 14],
    ["Materiali", 8],
    ["Staff", 8],
    ["Contingency", 12]
  ];
  document.getElementById("budgetBreakdown").innerHTML = items.map(([label, value]) => `<div class="budget-row"><strong>${label}</strong><div class="budget-bar"><span style="width:${value}%"></span></div><span>${value}%</span></div>`).join("");
}

function renderCommunications() {
  const labels = { invite: "Invito", reminder: "Reminder", postEvent: "Post-evento" };
  document.getElementById("communicationKit").innerHTML = Object.entries(state.communications).map(([key, value]) => `
    <article class="message-card">
      <h3>${labels[key]}</h3>
      <textarea onchange="updateCommunication('${key}', this.value)">${escapeHtml(value)}</textarea>
    </article>`).join("");
}

function addRow(type) {
  const emptyRows = {
    agenda: { time: "", activity: "Nuovo blocco", owner: "", materials: "", dependency: "" },
    tasks: { area: "", task: "Nuova azione", owner: "", due: "", status: "Da fare", criticality: "Media" },
    catering: { moment: "", menu: "", quantity: "", allergens: "", service: "", backup: "" },
    vendors: { vendor: "", request: "", contact: "", arrival: "", status: "Da confermare", action: "" },
    runshow: { time: "", activity: "Nuova attivita", owner: "", materials: "", vendor: "", fallback: "" },
    risks: { risk: "Nuovo rischio", probability: "Media", impact: "Media", signal: "", mitigation: "", owner: "", fallback: "" }
  };
  state[type].push(emptyRows[type]);
  renderAll(false);
  saveState("Riga aggiunta e salvata");
}

function updateCell(type, index, column, value) {
  state[type][index][column] = value;
  renderDashboard();
  renderMissingData();
  renderCateringSummary();
  saveState("Modifica salvata");
}

function deleteRow(type, index) {
  state[type].splice(index, 1);
  renderAll(false);
  saveState("Riga rimossa");
}

function updateCommunication(key, value) {
  state.communications[key] = value;
  saveState("Messaggio aggiornato");
}

function exportJson() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "agents-rumble-event-plan.json";
  link.click();
  URL.revokeObjectURL(url);
  showToast("Export JSON generato");
}

function resetDemo() {
  state = structuredClone(defaultState);
  localStorage.removeItem(STORAGE_KEY);
  renderAll();
  showToast("Demo ripristinata");
}

function setText(id, value) {
  document.getElementById(id).textContent = value;
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("visible"), 1800);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

window.updateCell = updateCell;
window.deleteRow = deleteRow;
window.updateCommunication = updateCommunication;