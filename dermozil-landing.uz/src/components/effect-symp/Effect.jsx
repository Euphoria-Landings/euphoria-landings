"use client";

import React from "react";
import Image from "next/image";
import "./effect.scss";

const Effect = () => {
  return (
    <div className="wrapper" id="effect-section">
      <section className="contain effect">
        <h2 className="what-brings__title">
          Zamburug‘ yuqtirganingizda quyidagi alomatlar sizga o‘z ta’sirini
          ko‘rsatadi:
        </h2>

        <div className="effect__cards">
          <div className="effect__items" style={{ borderRadius: "20px" }}>
            <div
              className="effect__items-box effect__items-box-1"
              style={{ position: "relative", height: "150px" }}
            >
              <Image
                src="/couseone.png"
                alt="Yoqimsiz hid"
                fill
                style={{ objectFit: "contain" }}
                unoptimized
                loading="lazy"
              />
            </div>
            <p className="effect__items-text">
              Oyoq sohasida noqulaylik, yoqimsiz hid
            </p>
          </div>

          <div className="effect__items" style={{ borderRadius: "20px" }}>
            <div
              className="effect__items-box"
              style={{ position: "relative", height: "150px" }}
            >
              <Image
                src="/cousetwo.png"
                alt="Tirnoq og‘rig‘i va quruqlik"
                fill
                style={{ objectFit: "contain" }}
                unoptimized
                loading="lazy"
              />
            </div>
            <p className="effect__items-text">
              Poyabzaldagi tirnoq og‘rig‘i va quruqlik, ta’sirlanish
            </p>
          </div>

          <div className="effect__items" style={{ borderRadius: "20px" }}>
            <div
              className="effect__items-box effect__items-box-2"
              style={{ position: "relative", height: "150px" }}
            >
              <Image
                src="/cousetree.png"
                alt="Tirnoq plastinkalarining qorayishi"
                fill
                style={{ objectFit: "contain" }}
                unoptimized
                loading="lazy"
              />
            </div>
            <p className="effect__items-text">
              Tirnoq plastinkalarining qorayishi va terini zichlashi
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Effect;
