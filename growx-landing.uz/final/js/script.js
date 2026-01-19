document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeButton = document.getElementById("close-menu");

  // Проверка, что все элементы найдены
  if (!menuButton || !mobileMenu || !closeButton) {
    console.error("Один или несколько элементов не найдены: ", { menuButton, mobileMenu, closeButton });
    return;
  }

  // Открытие/закрытие меню
  menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Закрытие меню по кнопке
  closeButton.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });

  // Закрытие меню при клике на ссылки
  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
});
function openModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "flex";
}

// Close modal logic
const closeButton = document.querySelector(".close__button");
closeButton.addEventListener("click", () => {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
});

// Close on overlay click
const modal = document.getElementById("modal");
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Close on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
  }
});

document.querySelectorAll('.products__item').forEach(item => {
  const initialHeight = '240px'; // Начальная высота

  item.addEventListener('mouseenter', () => {
    // Сохраняем текущую высоту
    const currentHeight = item.clientHeight;
    // Устанавливаем height: auto для измерения
    item.style.height = 'auto';
    // Получаем высоту auto
    const autoHeight = item.scrollHeight;
    // Возвращаем текущую высоту перед анимацией
    item.style.height = `${currentHeight}px`;

    // Запускаем анимацию в следующем кадре
    requestAnimationFrame(() => {
      item.style.height = `${autoHeight}px`;
    });
  });

  item.addEventListener('mouseleave', () => {
    // Плавно возвращаем начальную высоту
    item.style.height = initialHeight;
  });
});