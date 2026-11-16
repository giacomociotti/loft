/* =========================================================
   LOFT – script del sito
   ========================================================= */

/* ---------------------------------------------------------
   CONTATTI — UNICO PUNTO DA MODIFICARE
   DA SOSTITUIRE: questi valori sono FITTIZI.
   Cambiali qui e si aggiornano in tutta la pagina.
   --------------------------------------------------------- */
const CONTATTI = {
  // Numero come lo vuoi mostrare sul sito
  telefonoVisibile: "+39 000 000 0000",
  // Stesso numero, solo cifre con prefisso (per i link tel: e WhatsApp)
  telefonoCifre: "390000000000",
  email: "info@loftstudiopt.it",
  // Messaggio già scritto quando si apre WhatsApp
  messaggioWhatsApp: "Ciao LOFT, vorrei prenotare una lezione di prova.",
};

/* ---------------------------------------------------------
   Completa tutti i link con data-contatto="..." nella pagina.
   (Simile a un ciclo for in Python sugli elementi trovati.)
   --------------------------------------------------------- */
document.querySelectorAll("[data-contatto]").forEach((link) => {
  const tipo = link.dataset.contatto;
  const mostraTesto = link.dataset.mostra === "testo";

  if (tipo === "telefono") {
    link.href = "tel:+" + CONTATTI.telefonoCifre;
    if (mostraTesto) link.textContent = CONTATTI.telefonoVisibile;
  } else if (tipo === "whatsapp") {
    link.href =
      "https://wa.me/" + CONTATTI.telefonoCifre +
      "?text=" + encodeURIComponent(CONTATTI.messaggioWhatsApp);
  } else if (tipo === "email") {
    link.href = "mailto:" + CONTATTI.email;
    if (mostraTesto) link.textContent = CONTATTI.email;
  }
});

/* ---------------------------------------------------------
   Menu mobile (hamburger)
   --------------------------------------------------------- */
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector("#menu");

function chiudiMenu() {
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Apri il menu");
  document.body.classList.remove("menu-aperto");
}

toggle.addEventListener("click", () => {
  const aperto = toggle.getAttribute("aria-expanded") === "true";
  if (aperto) {
    chiudiMenu();
  } else {
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Chiudi il menu");
    document.body.classList.add("menu-aperto");
  }
});

// Chiude il menu quando si tocca una voce o si preme Esc
menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", chiudiMenu));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") chiudiMenu();
});

/* ---------------------------------------------------------
   Header: diventa più compatto dopo un po' di scroll
   --------------------------------------------------------- */
const header = document.querySelector(".site-header");
function aggiornaHeader() {
  header.classList.toggle("scrolled", window.scrollY > 40);
}
window.addEventListener("scroll", aggiornaHeader, { passive: true });
aggiornaHeader();

/* Anno corrente nel footer */
document.getElementById("anno").textContent = new Date().getFullYear();
