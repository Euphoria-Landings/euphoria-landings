const NEXT_PUBLIC_API_URL = "https://artrowell.uz/api";

// Bildirishnoma elementi yaratish
const noticeEl = document.createElement("div");
noticeEl.id = "api-status-notice";
document.body.appendChild(noticeEl);

// Bildirishnoma ko'rsatish funksiyasi
function showNotice(msg, type = "error") {
  noticeEl.textContent = msg;
  noticeEl.className = `show ${type}`;

  // 4 sekunddan keyin yashirish
  setTimeout(() => {
    noticeEl.classList.remove("show");
  }, 4000);
}

// Telefon formatlash funksiyasi
function formatPhoneInput(e) {
  let phoneInput = e.target;
  let value = phoneInput.value.replace(/[^\d]/g, "");

  // 998 bilan boshlanishini ta'minlash
  if (!value.startsWith("998")) {
    value = "998" + value;
  }

  // Maksimal 12 ta raqam (998 + 9 ta raqam)
  if (value.length > 12) {
    value = value.slice(0, 12);
  }

  // Formatlash: +998 (XX) XXX XX XX
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

// Barcha formalarni topish
const forms = document.querySelectorAll(".subscribe__form");
let isSubmitting = false;

// Har bir forma uchun
forms.forEach((form) => {
  const phoneInput = form.querySelector("#phone");
  const submitBtn = form.querySelector(".submit__button");

  // Telefon inputga boshlang'ich qiymat berish
  if (phoneInput) {
    phoneInput.value = "+998";
    phoneInput.addEventListener("input", formatPhoneInput);

    // Focus bo'lganda kursorni oxiriga o'tkazish
    phoneInput.addEventListener("focus", function () {
      setTimeout(() => {
        this.setSelectionRange(this.value.length, this.value.length);
      }, 0);
    });
  }

  // Forma yuborilganda
  async function handleSubmit(e) {
    e.preventDefault();

    // Agar allaqachon yuborilayotgan bo'lsa, to'xtatish
    if (isSubmitting) return;

    const nameInput = form.querySelector("[name=name]");
    const phoneInput = form.querySelector("[name=phone]");

    if (!nameInput || !phoneInput) {
      showNotice("Forma ma'lumotlari topilmadi!");
      return;
    }

    // Ismni tekshirish
    if (nameInput.value.trim().length < 2) {
      showNotice("Ism kamida 2 ta harfdan iborat bo'lishi kerak!", "error");
      return;
    }

    // Telefon raqamini tekshirish
    const digitsOnly = phoneInput.value.replace(/\D/g, "");
    if (digitsOnly.length !== 12) {
      showNotice("Telefon raqamingizni to'liq kiriting!", "error");
      return;
    }

    // Yuborish jarayonini boshlash
    isSubmitting = true;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerText = "Yuborilmoqda...";
    }

    // API ga yuborish uchun ma'lumot
    const payload = {
      full_name: nameInput.value.trim(),
      phone_number: `+${digitsOnly}`,
      product_name: "GrowX",
    };

    try {
      const response = await fetch(`${NEXT_PUBLIC_API_URL}/leads/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      // 429 - Juda ko'p so'rov
      if (response.status === 429) {
        showNotice(
          "Juda ko'p so'rov yuborildi. Iltimos, 1 soatdan keyin urinib ko'ring.",
          "error",
        );
        return;
      }

      // Muvaffaqiyatli
      if (response.ok || response.status === 201) {
        showNotice("Muvaffaqiyatli qabul qilindi!", "success");

        // Formani tozalash
        nameInput.value = "";
        phoneInput.value = "+998";

        // 1.5 sekunddan keyin thanks.html sahifasiga o'tish
        setTimeout(() => {
          window.location.href = "/thanks.html";
        }, 1500);
      } else {
        // Boshqa xatolar
        const errorData = await response.json().catch(() => ({}));
        const errorMessage =
          errorData.message ||
          "Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.";
        showNotice(errorMessage, "error");
      }
    } catch (err) {
      console.error("Submit error:", err);
      showNotice(
        "Server bilan bog'lanib bo'lmadi. Internetni tekshiring.",
        "error",
      );
    } finally {
      // Yuborish jarayonini tugatish
      isSubmitting = false;
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerText = "Yuborish";
      }
    }
  }

  // Forma submit eventini bog'lash
  form.addEventListener("submit", handleSubmit);
});

// Modal oynasi uchun (agar kerak bo'lsa)
function openModal() {
  const modal = document.getElementById("modal");
  if (modal) {
    modal.style.display = "flex";
  }
}

// Modal yopish
const closeButton = document.querySelector(".close__button");
if (closeButton) {
  closeButton.addEventListener("click", function () {
    const modal = document.getElementById("modal");
    if (modal) {
      modal.style.display = "none";
    }
  });
}

// Modal overlay bosilganda yopish
const modalOverlay = document.getElementById("modal");
if (modalOverlay) {
  modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay) {
      modalOverlay.style.display = "none";
    }
  });
}
