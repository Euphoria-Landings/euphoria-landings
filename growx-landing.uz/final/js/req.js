const NEXT_PUBLIC_API_URL = "https://artrowell.uz/api";

// 1. Bildirishnoma (Notice) elementi yaratish
const noticeEl = document.createElement("div");
noticeEl.id = "api-status-notice";

// Snackbar uchun universal stillar
Object.assign(noticeEl.style, {
  position: "fixed",
  left: "50%", // Telefonda markazlash uchun
  transform: "translateX(-50%) translateY(-20px)", // Markazda va biroz tepada
  top: "20px",
  padding: "14px 24px",
  borderRadius: "12px",
  color: "#ffffff",
  zIndex: "1000000", // Eng ustki qatlam
  display: "none",
  fontWeight: "600",
  fontSize: "15px",
  fontFamily: "sans-serif",
  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  opacity: "0",
  textAlign: "center",
  width: "90%", // Telefonda ekran chetiga yopishib qolmasligi uchun
  maxWidth: "400px", // Kompyuterda haddan tashqari kengayib ketmasligi uchun
  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  pointerEvents: "none", // Xabar ustiga bosilganda ostidagi elementlarga xalaqit bermaslik uchun
});

// Kompyuterlar uchun stilni biroz o'zgartiramiz (ekran keng bo'lsa o'ng tomonga olamiz)
function applyResponsiveStyles() {
  if (window.innerWidth > 768) {
    noticeEl.style.left = "auto";
    noticeEl.style.right = "20px";
    noticeEl.style.transform = "translateY(-20px)";
    noticeEl.style.width = "auto";
  } else {
    noticeEl.style.left = "50%";
    noticeEl.style.right = "auto";
    noticeEl.style.transform = "translateX(-50%) translateY(-20px)";
    noticeEl.style.width = "90%";
  }
}

// Sahifa yuklanganda va o'lcham o'zgarganda tekshirish
window.addEventListener("resize", applyResponsiveStyles);
applyResponsiveStyles();

document.body.appendChild(noticeEl);

// Bildirishnoma ko'rsatish funksiyasi
function showNotice(msg, type = "error") {
  noticeEl.textContent = msg;
  noticeEl.style.display = "block";
  noticeEl.style.backgroundColor = type === "success" ? "#10B981" : "#EF4444";

  // Animatsiyani ishga tushirish
  setTimeout(() => {
    noticeEl.style.opacity = "1";
    if (window.innerWidth > 768) {
      noticeEl.style.transform = "translateY(0)";
    } else {
      noticeEl.style.transform = "translateX(-50%) translateY(0)";
    }
  }, 10);

  // 4 sekunddan keyin yashirish
  setTimeout(() => {
    noticeEl.style.opacity = "0";
    if (window.innerWidth > 768) {
      noticeEl.style.transform = "translateY(-20px)";
    } else {
      noticeEl.style.transform = "translateX(-50%) translateY(-20px)";
    }
    setTimeout(() => {
      noticeEl.style.display = "none";
    }, 400);
  }, 4000);
}

// 2. Telefon formatlash funksiyasi
function formatPhoneInput(e) {
  let phoneInput = e.target;
  let value = phoneInput.value.replace(/[^\d]/g, "");
  if (!value.startsWith("998")) value = "998" + value;
  if (value.length > 12) value = value.slice(0, 12);

  let formatted = "+998";
  if (value.length > 3) {
    let part1 = value.slice(3, 5),
      part2 = value.slice(5, 8),
      part3 = value.slice(8, 10),
      part4 = value.slice(10, 12);
    if (part1) formatted += ` (${part1})`;
    if (part2) formatted += ` ${part2}`;
    if (part3) formatted += ` ${part3}`;
    if (part4) formatted += ` ${part4}`;
  }
  phoneInput.value = formatted;
}

// 3. Modalni boshqarish
const modal = document.getElementById("modal");
function openModal() {
  if (modal) modal.style.display = "flex";
}

document.querySelectorAll(".open-modal-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    openModal();
  });
});

const closeButton = document.querySelector(".close__button");
if (closeButton)
  closeButton.addEventListener("click", () => {
    if (modal) modal.style.display = "none";
  });

if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
}

// 4. Formani yuborish
const forms = document.querySelectorAll(".subscribe__form");
let isSubmitting = false;

forms.forEach((form) => {
  const phoneInput =
    form.querySelector("#phone") || form.querySelector("[name=phone]");
  const submitBtn = form.querySelector(".submit__button");

  if (phoneInput) {
    phoneInput.value = "+998";
    phoneInput.addEventListener("input", formatPhoneInput);
    phoneInput.addEventListener("focus", function () {
      setTimeout(
        () => this.setSelectionRange(this.value.length, this.value.length),
        0,
      );
    });
  }

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    if (isSubmitting) return;

    const nameInput = form.querySelector("[name=name]");
    const phoneField = form.querySelector("[name=phone]");
    const digitsOnly = phoneField ? phoneField.value.replace(/\D/g, "") : "";

    if (!nameInput || !phoneField) {
      showNotice("Ma'lumotlar to'liq emas!");
      return;
    }
    if (nameInput.value.trim().length < 2) {
      showNotice("Ismingizni kiriting!");
      return;
    }
    if (digitsOnly.length !== 12) {
      showNotice("Telefon raqamni to'liq kiriting!");
      return;
    }

    isSubmitting = true;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerText = "Yuborilmoqda...";
    }

    try {
      const response = await fetch(`${NEXT_PUBLIC_API_URL}/leads/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          full_name: nameInput.value.trim(),
          phone_number: `+${digitsOnly}`,
          product_name: "GrowX",
        }),
      });

      if (response.status === 429) {
        showNotice("Juda ko'p urinish! Birozdan keyin urinib ko'ring.");
      } else if (response.ok || response.status === 201) {
        showNotice("Muvaffaqiyatli yuborildi! Tez orada bog'lanamiz ", "success");
        form.reset();
        phoneField.value = "+998";
        setTimeout(() => {
          if (modal) modal.style.display = "none";
        }, 2000);
      } else {
        const errorData = await response.json().catch(() => ({}));
        showNotice(errorData.message || "Xatolik yuz berdi. birozdan so'ng qaytadan urinib ko'ring .");
      }
    } catch (err) {
      showNotice("Internet aloqasini tekshiring.");
    } finally {
      isSubmitting = false;
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerText = "Yuborish";
      }
    }
  });
});
