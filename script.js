// Número do WhatsApp que receberá os pedidos (somente dígitos, com 55 + DDD).
// TROQUE pelo seu número real.
const WHATSAPP = "5547991375459";

document.getElementById("year").textContent = new Date().getFullYear();

const menu = document.getElementById("menu");
document.getElementById("menuBtn").addEventListener("click", () => menu.classList.toggle("open"));
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => menu.classList.remove("open")));

document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const texto =
    `Olá! Quero uma demonstração do HC Sistema SGI.\n` +
    `Nome: ${f.get("nome")}\nEmpresa: ${f.get("empresa")}\nE-mail: ${f.get("email")}\n` +
    `Mensagem: ${f.get("mensagem") || "-"}`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`, "_blank");
});
