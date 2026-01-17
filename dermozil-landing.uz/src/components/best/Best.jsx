"use client";
import React from "react";
import "./best.scss";

const Best = () => {
  return (
    <section className="best">
      <h2 className="what-brings__title">
        Dermozil - Tirnoq zamburug‘iga qarshi eng yaxshi vosita, tarkibida:
      </h2>
      <div className="best__bottom">
        <div className="best__left">
          <img
            className="best__img"
            src="/antileft.png"
            alt="Dermozil mahsuloti"
            loading="lazy"
            width={400} // LCP ni yaxshilash uchun taxminiy o'lcham
            height={400}
          />

          <img
            className="best__svg"
            src="/tree.png"
            alt="Dekorativ fon rasmi"
            loading="lazy"
            width={300}
            height={300}
          />
        </div>

        <div className="best__right">
          <div className="best__items">
            <img src="/triklozan.png" loading="lazy" alt="Triklozan tarkibi" />
            <p className="best__items-text">
              Triklozan: Yallig‘lanishga qarshi, antibakterial va zamburug‘larga
              qarshi xususiyatlarga ega
            </p>
          </div>

          <div className="best__items">
            <img loading="lazy" src="/pentenol.png" alt="D-pantenol tarkibi" />
            <p className="best__items-text">
              D - pantenol: Tirnoq plastinkasini namlaydi va yumshatadi, tirnoq
              atrofidagi terining ta’sirlanishi va quruqligini bartaraf etadi
            </p>
          </div>

          <div className="best__items">
            <img loading="lazy" src="/mentol.png" alt="Mentol tarkibi" />
            <p className="best__items-text">
              Mentol: Oyoqlardagi og‘irlik va charchoq hissini yo‘qotadi,
              tinchlantiruvchi ta’sirga ega
            </p>
          </div>

          <div className="best__items">
            <img
              loading="lazy"
              src="/moychechak.png"
              alt="Moychechak ekstrakti tarkibi"
            />
            <p className="best__items-text">
              Moychechak ekstrakti: Teri qon aylanishini yaxshilaydi va
              yallig‘lanishga qarshi ta’sirga ega
            </p>
          </div>

          <div className="best__items">
            <img
              loading="lazy"
              src="/shalfey.png"
              alt="Shalfey ekstrakti tarkibi"
            />
            <p className="best__items-text">
              Shalfey ekstrakti: Ter bezlariga ta’sir qiladi, terlash jarayonini
              sekinlashtiradi
            </p>
          </div>

          <div className="best__items">
            <img
              loading="lazy"
              src="/avitaminol.png"
              alt="A vitamini tarkibi"
            />
            <p className="best__items-text">
              A vitamini: Quruqlik belgilari paydo bo‘lishining oldini oladi
            </p>
          </div>

          <div className="best__items">
            <img
              loading="lazy"
              src="/evitaminol.png"
              alt="E vitamini tarkibi"
            />
            <p className="best__items-text">
              E vitamini: Terining dag‘allashgan joylarini yumshatadi,
              tirnoqlarni oziqlantiradi va tiklaydi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Best;
