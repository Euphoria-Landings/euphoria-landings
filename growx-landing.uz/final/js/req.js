const TELEGRAM_BOT_TOKEN = "7619799420:AAFpPcxuR36JOhOq7kbDF67x8kgd42Fyxyk";
const TELEGRAM_CHAT_ID = "-1002656673085";
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

const forms = document.querySelectorAll(".subscribe__form");
let isSubmitting = false;

forms.forEach((form, index) => {
  const submitBtn = form.querySelector(".submit-btn");
  const submitBtn2 = form.querySelector(".submit-btn2");
  const phoneInput = form.querySelector("#phone");

  if (phoneInput) {
    phoneInput.value = "+998";
    phoneInput.addEventListener("input", validatePhoneInput);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (isSubmitting) {
      console.log("Повторная отправка предотвращена");
      return;
    }
    isSubmitting = true;
    console.log(
      `handleSubmit вызван для формы ${index}:`,
      new Date().toISOString()
    );

    const modal = document.getElementById("modal");
    if (submitBtn) submitBtn.disabled = true;
    if (submitBtn2) submitBtn2.disabled = true;
    if (modal && modal.style.display === "flex") {
      modal.style.display = "none";
    }

    const name = form.querySelector("[name=name]");
    const phone = form.querySelector("[name=phone]");

    if (!name || !phone) {
      console.error("name or phone not found");
      isSubmitting = false;
      if (submitBtn) submitBtn.disabled = false;
      if (submitBtn2) submitBtn2.disabled = false;
      return;
    }

    if (name.value.trim().length < 2) {
      alert("Ism eng kamida 2 ta belgidan iborat bo'lishi kerak");
      isSubmitting = false;
      if (submitBtn) submitBtn.disabled = false;
      if (submitBtn2) submitBtn2.disabled = false;
      return;
    }

    const phoneDigits = phone.value.replace(/\D/g, "");
    if (!phoneDigits.startsWith("998") || phoneDigits.length !== 12) {
      alert("Telefon raqamingizni to'g'ri kirittingiz");
      isSubmitting = false;
      if (submitBtn) submitBtn.disabled = false;
      if (submitBtn2) submitBtn2.disabled = false;
      return;
    }

    const messageText = `
Yangi ro'yxatdan o'tish so'rovi:
Ism: ${name.value.trim()}
Telefon: ${phone.value.trim()}
    `;
    try {
      const response = await fetch(TELEGRAM_API_URL, {
        method: "POST",
        headers: {
          accept: "*/*",
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: messageText,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ошибка! Статус: ${response.status}`);
      }

      const result = await response.json();

      if (result.ok) {
        name.value = "";
        phone.value = "+998";
        window.location.href = "/thanks.html";
      } else {
        alert("Jo'natilishda xatolik yuz berdi");
      }
    } catch (err) {
      console.error("Ошибка при отправке:", err);
      alert("Jo'natilishda xatolik yuz berdi");
    } finally {
      isSubmitting = false;
      if (submitBtn) submitBtn.disabled = false;
      if (submitBtn2) submitBtn2.disabled = false;
    }
  }

  // Удаляем старые обработчики, если они есть
  form.removeEventListener("submit", handleSubmit);
  form.addEventListener("submit", handleSubmit);
});

function validatePhoneInput(e) {
  let phoneInput = e.target;
  let value = phoneInput.value;

  value = value.replace(/[^\d+]/g, "");
  if (!value.startsWith("+")) value = "+998";
  value = value.replace(/\+(?=.*\+)/g, "");

  let digitsOnly = value.replace(/\D/g, "");
  if (digitsOnly.length > 12) digitsOnly = digitsOnly.slice(0, 12);

  let formatted = `+998`;
  digitsOnly = digitsOnly.slice(3);

  if (digitsOnly.length > 0) formatted += ` ${digitsOnly.slice(0, 2)}`;
  if (digitsOnly.length > 2) formatted += ` ${digitsOnly.slice(2, 5)}`;
  if (digitsOnly.length > 5) formatted += ` ${digitsOnly.slice(5, 7)}`;
  if (digitsOnly.length > 7) formatted += ` ${digitsOnly.slice(7)}`;

  phoneInput.value = formatted;
}
