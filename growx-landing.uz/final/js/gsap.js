document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(); // Регистрация GSAP (достаточно ядра)

  // Выбираем изображения внутри .whenHelp__image__box
  const images = document.querySelectorAll(".whenHelp__image__box img");

  // Анимируем каждое изображение с легким эффектом "плавания" вверх-вниз
  images.forEach((img, index) => {
    gsap.to(img, {
      y: -20, // Уменьшенное движение вверх-вниз для более легкого эффекта
      scale: 1.03, // Минимальное изменение масштаба для мягкости
      duration: 2.5 + index * 0.3, // Плавная длительность для рассинхронизации
      ease: "sine.inOut", // Плавная интерполяция
      yoyo: true, // Обратное движение
      repeat: -1, // Бесконечный цикл
      delay: index * 0.25, // Небольшая задержка для рассинхронизации
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger); // Регистрация ScrollTrigger

  // Выбираем все изображения в секции .hairCareOffer
  const images = document.querySelectorAll(".hairCareOffer__image");

  // Устанавливаем начальное состояние для каждого изображения
  images.forEach((img, index) => {
    gsap.set(img, {
      opacity: 0, // Полная прозрачность
      scale: 0.85, // Слегка уменьшенный размер
      x: index % 2 === 0 ? -80 : 80, // Смещение влево (1-е, 3-е) или вправо (2-е, 4-е)
      y: index < 2 ? -40 : 40, // Смещение вверх (1-е, 4-е) или вниз (2-е, 3-е)
      rotation: index % 2 === 0 ? -10 : 10, // Лёгкий поворот
    });

    // Анимация появления при скролле
    gsap.to(img, {
      opacity: 1, // Полная видимость
      scale: 1, // Исходный размер
      x: 0, // Возврат по X
      y: 0, // Возврат по Y
      rotation: 0, // Выравнивание поворота
      duration: 1.8, // Длительность
      ease: "power3.out", // Плавная интерполяция
      delay: index * 0.1, // Задержка для последовательности
      scrollTrigger: {
        trigger: ".hairCareOffer", // Секция-триггер
        start: "top 85%", // Начало анимации
        toggleActions: "play none none none", // Проигрывается один раз
      },
      // После завершения анимации появления запускаем более заметное движение
      onComplete: () => {
        gsap.to(img, {
          y: index % 2 === 0 ? -20 : 20, // Увеличенное движение вверх или вниз
          x: index < 2 ? 15 : -15, // Увеличенное движение влево или вправо
          rotation: index % 2 === 0 ? -3 : 3, // Лёгкий поворот для динамики
          duration: 2 + index * 0.2, // Чуть короче длительность для живости
          ease: "sine.inOut", // Плавная интерполяция
          yoyo: true, // Обратное движение
          repeat: -1, // Бесконечный цикл
        });
      },
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger); // Регистрация ScrollTrigger

  // Выбираем изображения
  const img1 = document.querySelector(
    ".productDifference__image__box img:nth-child(1)"
  );
  const img2 = document.querySelector(
    ".productDifference__image__box img:nth-child(2)"
  );
  const img3 = document.querySelector(
    ".productDifference__image__box img:nth-child(3)"
  );

  // Начальное состояние: изображения скрыты
  gsap.set([img1, img2, img3], { opacity: 0, y: 20 });

  // Анимация появления при скролле
  gsap.to([img1, img2, img3], {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".productDifference__image__box",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    // После появления запускаем эффект противостояния для img 1 и img 3
    onComplete: () => {
      // Img 1: лёгкое движение вправо и масштабирование
      gsap.to(img1, {
        x: 10, // Смещение вправо
        scale: 1.05, // Небольшое увеличение
        duration: 1,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Img 3: лёгкое движение влево и масштабирование
      gsap.to(img3, {
        x: -10, // Смещение влево
        scale: 1.05, // Небольшое увеличение
        duration: 1,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
      // Img 2 (VS): остаётся статичным
    },
  });
});
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger); // Регистрация ScrollTrigger

  // Выбираем изображения
  const images = document.querySelectorAll(".subscribe__image");

  // Устанавливаем начальное состояние для каждого изображения
  gsap.set(images[0], { opacity: 0, x: -150 }); // Img 1: сильнее слева
  gsap.set(images[1], { opacity: 0, y: 150, scale: 0.7 }); // Img 2: сильнее снизу, меньше масштаб
  gsap.set(images[2], { opacity: 0, x: 150, rotation: 30, scale: 0.8 }); // Img 3: сильнее справа, с большим поворотом

  // Анимация появления при скролле
  images.forEach((img, index) => {
    gsap.to(img, {
      opacity: 1,
      x: 0, // Возврат в исходное положение по X
      y: 0, // Возврат в исходное положение по Y
      scale: 1, // Исходный размер
      rotation: 0, // Выравнивание поворота
      duration: 1.5, // Увеличенная длительность для плавности
      ease: "power4.out", // Более драматичная кривая анимации
      delay: index * 0.3, // Увеличенная задержка для последовательности
      scrollTrigger: {
        trigger: ".subscribe",
        start: "top 80%", // Триггер раньше для большей заметности
        toggleActions: "play none none none",
      },
      // После появления запускаем более заметное движение
      onComplete: () => {
        gsap.to(img, {
          y: index % 2 === 0 ? -15 : 15, // Увеличенное движение вверх/вниз
          x: index === 2 ? -10 : 10, // Увеличенное движение влево/вправо
          rotation: index % 2 === 0 ? -5 : 5, // Лёгкий поворот для динамики
          duration: 2.5 + index * 0.4, // Увеличенная длительность
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      },
    });
  });
});
