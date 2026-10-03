// Salon WhatsApp number in international format (no + or spaces)
const WHATSAPP_NUMBER = "918558000139";

// Mobile navigation
const toggle = document.querySelector(".nav-toggle");
const menu = document.getElementById("nav-menu");
toggle.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});
menu.addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  }
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Enquiry form: validate, then open WhatsApp with the enquiry pre-filled
const form = document.getElementById("enquiry-form");
const status = form.querySelector(".form-status");
const dateInput = form.elements.date;
dateInput.min = new Date().toISOString().split("T")[0];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  status.className = "form-status";

  // Bots fill the hidden honeypot field; ignore those submissions
  if (form.elements.website.value) return;

  let firstInvalid = null;
  for (const field of ["name", "phone", "service"]) {
    const el = form.elements[field];
    const ok = el.checkValidity() && el.value.trim() !== "";
    el.classList.toggle("invalid", !ok);
    if (!ok && !firstInvalid) firstInvalid = el;
  }
  if (firstInvalid) {
    status.textContent = "Please fill in your name, a valid phone number and a service.";
    status.classList.add("error");
    firstInvalid.focus();
    return;
  }

  const d = form.elements;
  const lines = [
    "Hi Grace Unisex Salon, I'd like to book an appointment.",
    `Name: ${d.name.value.trim()}`,
    `Phone: ${d.phone.value.trim()}`,
    `Service: ${d.service.value}`,
  ];
  if (d.date.value) lines.push(`Preferred date: ${new Date(d.date.value).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}`);
  if (d.message.value.trim()) lines.push(`Message: ${d.message.value.trim()}`);

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
  window.open(url, "_blank", "noopener");
  status.textContent = "WhatsApp is opening. Press send to confirm your enquiry.";
  status.classList.add("ok");
  form.reset();
});
