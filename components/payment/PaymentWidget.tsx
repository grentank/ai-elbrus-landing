"use client";

import Script from "next/script";
import React from "react";
import "./payment.css";

export default function PaymentWidget() {
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const TPF = e.currentTarget;
    const { description, amount, email, phone, receipt } = TPF;

    // if (receipt) {
    //   if (!email.value && !phone.value)
    //     return alert("Поле E-mail или Phone не должно быть пустым");

    TPF.receipt.value = JSON.stringify({
      EmailCompany: "mail@mail.com",
      Taxation: "patent",
      FfdVersion: "1.2",
      Items: [
        {
          Name: description.value || "Оплата курса Продвинутый AI-инженер",
          Price: Math.round(amount.value * 100),
          Quantity: 1.0,
          Amount: Math.round(amount.value * 100),
          PaymentMethod: "full_prepayment",
          PaymentObject: "service",
          Tax: "none",
          MeasurementUnit: "pc",
        },
      ],
    });
    // }
    window.pay?.(TPF);
  };
  return (
    <>
      <Script src="https://securepay.tinkoff.ru/html/payForm/js/tinkoff_v2.js" />
      <form
        onSubmit={onSubmit}
        className="payform-tbank"
        name="payform-tbank"
        id="payform-tbank"
      >
        <input
          className="payform-tbank-row"
          type="hidden"
          name="terminalkey"
          value="1743087532455DEMO"
        />
        <input
          className="payform-tbank-row"
          type="hidden"
          name="frame"
          value="false"
        />
        <input
          className="payform-tbank-row"
          type="hidden"
          name="language"
          value="ru"
        />
        <input
          className="payform-tbank-row"
          type="hidden"
          name="receipt"
          value=""
        />
        <input
          className="payform-tbank-row"
          type="hidden"
          placeholder="Сумма заказа"
          name="amount"
          disabled
          required
          value={55000}
        />
        <input
          className="payform-tbank-row"
          type="hidden"
          placeholder="Номер заказа"
          name="order"
          disabled
          value={Math.random().toString(16).substring(2, 8)}
        />
        <input
          className="payform-tbank-row"
          type="hidden"
          placeholder="Описание заказа"
          name="description"
          value="Оплата курса AI-инженер"
        />
        <input
          className="payform-tbank-row"
          type="text"
          placeholder="ФИО плательщика"
          name="name"
          required
        />
        <input
          className="payform-tbank-row"
          type="email"
          placeholder="E-mail"
          name="email"
          required
        />
        <input
          className="payform-tbank-row"
          type="tel"
          placeholder="Контактный телефон"
          name="phone"
          required
        />
        <input
          className="payform-tbank-row payform-tbank-btn"
          type="submit"
          value="Оплатить"
        />
      </form>
    </>
  );
}
