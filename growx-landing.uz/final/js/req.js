const NEXT_PUBLIC_API_URL = "https://artrowell.uz/api";

// Bildirishnoma yaratish (UI uchun)
const noticeEl = document.createElement("div");
noticeEl.id = "api-status-notice";
document.body.appendChild(noticeEl);

function showNotice(msg, type = "error") {
  noticeEl.textContent = msg;
  noticeEl.className = `show ${type}`;
  setTimeout(() => {
    noticeEl.classList.remove("show");
  }, 4000);
}

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
    if (isSubmitting) return;

    const nameInput = form.querySelector("[name=name]");
    const phoneInput = form.querySelector("[name=phone]");

    if (!nameInput || !phoneInput) return;

    if (nameInput.value.trim().length < 2) {
      showNotice("Ism kamida 2 ta harfdan iborat bo'lishi kerak!");
      return;
    }

    const digitsOnly = phoneInput.value.replace(/\D/g, "");
    if (digitsOnly.length !== 12) {
      showNotice("Telefon raqamingizni to'liq kiriting!");
      return;
    }

    isSubmitting = true;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerText = "Yuborilmoqda...";
    }

    const payload = {
      full_name: nameInput.value.trim(),
      phone_number: `+${digitsOnly}`,
      product_name: "GrowX",
    };

    try {
      const response = await fetch(`${NEXT_PUBLIC_API_URL}/leads/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        showNotice("Muvaffaqiyatli qabul qilindi!", "success");
        nameInput.value = "";
        phoneInput.value = "+998";
        setTimeout(() => {
          window.location.href = "/thanks.html";
        }, 1500);
      } else if (response.status === 429) {
        // 429 Error - Spamga qarshi bildirishnoma
        showNotice(
          "Siz allaqachon ariza qoldirgansiz. Iltimos, 1 soatdan keyin qayta urinib ko'ring.",
        );
      } else {
        throw new Error();
      }
    } catch (err) {
      showNotice("Xatolik! Server bilan bog'lanib bo'lmadi.");
    } finally {
      isSubmitting = false;
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerText = "TASDIQLASH";
      }
    }
  }

  form.addEventListener("submit", handleSubmit);
});

// Telefon formatlash funksiyasi (o'zgarmadi)
function validatePhoneInput(e) {
  let phoneInput = e.target;
  let value = phoneInput.value.replace(/[^\d]/g, "");
  if (!value.startsWith("998")) value = "998" + value;
  if (value.length > 12) value = value.slice(0, 12);

  let formatted = "+998";
  if (value.length > 3) {
    let part1 = value.slice(3, 5);
    let part2 = value.slice(5, 8);
    let part3 = value.slice(8, 10);
    let part4 = value.slice(10, 12);
    if (part1) formatted += ` (${part1})`;
    if (part2) formatted += ` ${part2}`;
    if (part3) formatted += ` ${part3}`;
    if (part4) formatted += ` ${part4}`;
  }
  phoneInput.value = formatted;
}
