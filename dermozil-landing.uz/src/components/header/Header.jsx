"use client";
import React, { useState, useEffect } from "react";
import "./header.scss";
import OrderForm from "../form/OrderForm";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);

  const handleScrollToEffect = () => {
    const targetElement = document.getElementById("effect-section");
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="header-container">
      <nav className="navbar contain">
        <img
          width="150"
          height="30"
          className="navbar__logo"
          src="/logo.png"
          alt="logo"
          loading="eager" // Header logosi uchun tezroq yuklanish
        />
        <div className="navbar__right">
          <div
            className="navbar__box"
            onClick={handleScrollToEffect}
            style={{ cursor: "pointer" }}
          >
            <p className="navbar__title">Tabiiy tarkib</p>
          </div>
        </div>
      </nav>

      <section className="intro contain">
        <h2 className="intro__title">
          <span className="intro__title-span">Zamburug‘dan</span> kurashishda
          biologik faol qo‘shimcha
        </h2>

        <div className="intro__center">
          <img
            className="intro__img intro__img-1"
            src="/leftintroleg.png"
            alt="Chap rasm"
          />

          <div className="intro__center-imgs">
            <img className="intro__img1" src="/introcrem.png" alt="Crem" />
            <img className="intro__img2" src="/introcard.png" alt="Card" />
            <img className="intro__img3" src="/introflacon.png" alt="Flacon" />
          </div>

          <img
            className="intro__img intro__img-2"
            src="/introrightleg.png"
            alt="O'ng rasm"
          />
        </div>

        <div className="intro__bottom">
          <div className="intro__form">
            <button className="intro__button" onClick={openModal} type="button">
              Buyurtma berish
            </button>
            <p className="intro__bottom-form-text">50% chegirma</p>
          </div>

       
        </div>
      </section>

      {isModalOpen && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={closeModal}
              aria-label="Close"
            >
              &times;
            </button>
            <OrderForm />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
