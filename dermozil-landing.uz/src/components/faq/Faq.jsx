"use client";
import React, { useState, lazy, Suspense } from "react";
import "./faq.scss";

const LazyOrderForm = lazy(() => import("../form/OrderForm"));

const faqData = [
  {
    id: 1,
    question: "Tirnoq zamburug‘ini davolash uchun krem menga mos keladimi?",
    answer:
      "Ha, Dermozil kremi turli yoshdagi odamlar va oyoq/tirnoq zamburug'ining turli bosqichlari uchun mos keladi.",
  },
  {
    id: 2,
    question: "Tirnoq zamburug‘ini davolash uchun krem xavfsizmi?",
    answer:
      "Dermozil kremi faqat tabiiy o'simlik ekstraktlari va minerallardan tashkil topgan.",
  },
  {
    id: 3,
    question: "Nechta tuba buyurtma qilishim kerak?",
    answer:
      "Optimal va to'liq davolash kursi uchun odatda 3-4 hafta davomida kuniga 2 marta qo'llash tavsiya etiladi.",
  },
  {
    id: 4,
    question: "Ushbu mahsulotdan qanday qilib yaxshiroq foydalanish mumkin?",
    answer:
      "Ta'sirlangan joyni iliq suvda yuvib, quruq artish tavsiya etiladi. Keyin kremni yupqa qatlam qilib surting.",
  },
  {
    id: 5,
    question: "Agar to‘g‘ri kelmasa-chi?",
    answer: "Biz mahsulotimiz sifatiga va samaradorligiga kafolat beramiz.",
  },
  {
    id: 6,
    question: "Asosiy tarkibiy qismlari nimalardan iborat?",
    answer:
      "Krem tarkibida choy daraxti yog'i, propolis ekstrakti, salitsil kislotasi va vitaminlar majmuasi mavjud.",
  },
];

const Faq = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openItemId, setOpenItemId] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleItem = (id) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <div
      className={`wrapper often__wrapper ${isModalOpen ? "modal-open" : ""}`}
    >
      <section className="often">
        <h2 className="what-brings__title">Tez-tez beriladigan savollar</h2>

        <div className="often__center">
          <div className="often__left">
            <h2 className="often__title">SAVOL-JAVOBLAR</h2>
            <div className="often__cards">
              {faqData.map((item) => (
                <div
                  key={item.id}
                  className={`often__item-container ${
                    openItemId === item.id ? "expanded" : ""
                  }`}
                >
                  <div
                    className="often__items"
                    onClick={() => toggleItem(item.id)}
                  >
                    <p className="often__items-text">{item.question}</p>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        transform:
                          openItemId === item.id
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {openItemId === item.id && (
                    <div className="often__answer">
                      <p className="often__answer-content">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="often__right">
            <img
              src="/offen.png"
              alt="Ayolning oyoqlarini davolash"
              className="woman__images"
              loading="lazy"
            />
            <div className="often__right-box">
              <p className="often__items-text">Savollar va javoblar</p>
              <h2 className="often__right-box-title">
                Yana savollaringiz bormi?
              </h2>
              <button className="often__right-button" onClick={openModal}>
                Biz bilan bog‘laning
              </button>
            </div>
          </div>
        </div>

        <div className="intro__form swiper__form">
          <button type="button" className="intro__button" onClick={openModal}>
            Buyurtma berish
          </button>
          <p className="intro__bottom-form-text swiper__form__text">
            50% chegirma
          </p>
        </div>
      </section>

      {isModalOpen && (
        <div
          className="modal-backdrop"
          onClick={closeModal}
          style={{ display: "flex" }}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <Suspense fallback={<div>Yuklanmoqda...</div>}>
              <LazyOrderForm onCloseModal={closeModal} />
            </Suspense>
          </div>
        </div>
      )}
    </div>
  );
};

export default Faq;
