"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useValidateForm from "@/hooks/use-validate-form";
import { createHash } from "crypto";
import { Calendar, CheckCircle, Clock, CreditCard } from "lucide-react";
import Script from "next/script";
import React, { useMemo, useState } from "react";

const bulletPoints = [
  "Живые лекции с менторами курса",
  "Закрытое сообщество в Telegram с действующими разработчиками",
  "Практические задания с обратной связью от экспертов",
];

function ClosedDateCard({ date }: { date: string }) {
  return (
    <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-md opacity-50">
      <Calendar className="h-4 w-4 text-gray-400" />
      <span className="line-through">{date}</span>
      <span className="ml-auto text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
        набор закрыт
      </span>
    </div>
  );
}

function StartDateCard({
  date,
  remainingPlaces,
}: {
  date: string;
  remainingPlaces: number;
}) {
  return (
    <div className="flex items-center gap-2 bg-white p-3 rounded-md border-2 border-indigo-100">
      <Calendar className="h-4 w-4 text-indigo-600" />
      <span className="font-medium">{date}</span>
      <span className="ml-auto text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
        осталось {remainingPlaces} мест
      </span>
    </div>
  );
}

export default function PaymentSection() {
  const {
    formData,
    formErrors,
    isFormValid,
    handleInputChange,
    setFormErrors,
  } = useValidateForm();
  const baseCoursePrice = 109500;
  const [coursePrice, setCoursePrice] = useState(baseCoursePrice - 25000);
  const [promoCode, setPromoCode] = useState("");
  const [isPromoCodeApplied, setIsPromoCodeApplied] = useState(false);
  const discount = Math.round(
    ((baseCoursePrice - coursePrice) * 100) / baseCoursePrice
  );

  const handlePromoCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isPromoCodeApplied) {
      setPromoCode(e.target.value);
    }
  };

  const applyPromoCodeHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isPromoCodeApplied) return;

    const hash = createHash("sha256").update(promoCode).digest("hex");
    if (
      hash ===
      "92333e7ba4ba130fad26af13ae8c98157a08956f75701605213e5bad7ed9a064"
    ) {
      setCoursePrice(baseCoursePrice - 50000);
      setIsPromoCodeApplied(true);
      setFormErrors((e) => ({
        ...e,
        promoCode: "",
      }));
    } else {
      setFormErrors((e) => ({
        ...e,
        promoCode: "Неверный промокод",
      }));
    }
  };

  const inputs = useMemo(
    () => [
      { name: "terminalkey", value: "1743087532478" },
      { name: "frame", value: "false" },
      { name: "language", value: "ru" },
      { name: "receipt", value: "" },
      { name: "amount", value: coursePrice },
      { name: "order", value: Math.random().toString(16).substring(2, 8) },
      { name: "description", value: "Оплата курса по AI для разработчиков" },
      // { name: "name", value: "" },
      { name: "email", value: "" },
      { name: "phone", value: "" },
    ],
    [coursePrice]
  );
  const handlePayment: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const TPF = e.currentTarget;
    TPF.receipt.value = JSON.stringify({
      // проверить данные компании для чека!
      EmailCompany: "bills@elbrusboot.camp",
      Taxation: "osn",
      FfdVersion: "1.2",
      Items: [
        {
          Name: "Оплата курса по AI для разработчиков",
          Price: Math.round(coursePrice * 100),
          Quantity: 1.0,
          Amount: Math.round(coursePrice * 100),
          PaymentMethod: "full_prepayment",
          PaymentObject: "service",
          Tax: "none",
          MeasurementUnit: "pc",
        },
      ],
    });
    TPF.email.value = formData.email;
    TPF.phone.value = formData.phone;

    // @ts-expect-error
    window.pay?.(TPF);
  };

  const handleIncorrectClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (formData.fullName === "")
      setFormErrors((e) => ({
        ...e,
        fullName: "Ф.И.О. должно содержать минимум 3 символа",
      }));
    if (formData.email === "")
      setFormErrors((e) => ({
        ...e,
        email: "Пожалуйста, введите корректный email",
      }));
    if (formData.phone === "")
      setFormErrors((e) => ({
        ...e,
        phone: "Телефон должен начинаться с +7, 7 или 8, затем 10 цифр",
      }));
    if (!isFormValid) {
      e.preventDefault();
      // Scroll to the first error field
      const firstErrorField = document.querySelector(".border-red-500");
      if (firstErrorField) {
        firstErrorField.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  };

  return (
    <section className="py-20" id="payment-button-section">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 bg-white rounded-lg shadow-md overflow-hidden">
            {/* Left side - Payment form */}
            <div className="p-8 border-r border-gray-200">
              <h2 className="text-3xl font-bold mb-2">Оплата</h2>
              <p className="text-gray-600 mb-6">Курс по AI для разработчиков</p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">
                  Контактные данные
                </h3>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="fullName">Ф.И.О.</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Иванов Иван Иванович"
                      required
                      className={formErrors.fullName ? "border-red-500" : ""}
                    />
                    {formErrors.fullName && (
                      <p className="text-sm text-red-500 mt-1">
                        {formErrors.fullName}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="example@mail.com"
                      required
                      className={formErrors.email ? "border-red-500" : ""}
                    />
                    {formErrors.email && (
                      <p className="text-sm text-red-500 mt-1">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+7XXXXXXXXXX"
                      required
                      className={formErrors.phone ? "border-red-500" : ""}
                    />
                    {formErrors.phone && (
                      <p className="text-sm text-red-500 mt-1">
                        {formErrors.phone}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="promoCode">Промокод</Label>
                    <div className="flex gap-2">
                      <Input
                        id="promoCode"
                        name="promoCode"
                        value={promoCode}
                        onChange={handlePromoCodeChange}
                        placeholder="Введите промокод"
                        disabled={isPromoCodeApplied}
                        className={formErrors.promoCode ? "border-red-500" : ""}
                      />
                      <Button
                        type="button"
                        onClick={applyPromoCodeHandler}
                        disabled={isPromoCodeApplied}
                        className="whitespace-nowrap"
                      >
                        {isPromoCodeApplied ? "Применено" : "Применить"}
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Right side - Payment summary */}
            <div className="bg-gray-50 p-8 flex flex-col">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">Итого</h3>
                  <div className="flex flex-col items-end">
                    {baseCoursePrice === coursePrice ? (
                      <div className="flex items-center gap-2">
                        <span className="text-4xl font-bold">
                          {coursePrice} ₽
                        </span>
                      </div>
                    ) : (
                      <>
                        <span className="text-sm text-gray-500 line-through">
                          {baseCoursePrice} ₽
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-4xl font-bold">
                            {coursePrice} ₽
                          </span>
                          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            -{discount}%
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                {baseCoursePrice !== coursePrice && (
                  <p className="text-sm text-gray-600 mb-4">
                    Скидка {discount}%{" "}
                    {isPromoCodeApplied
                      ? "по вашему промокоду"
                      : "по раннему бронированию"}
                  </p>
                )}
              </div>

              <div className="space-y-4 mb-6">
                {bulletPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-indigo-600" />
                    </div>
                    <p className="text-sm">{point}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6 text-sm text-gray-600">
                <p className="font-medium text-base text-gray-700 mb-2">
                  Ближайшие потоки:
                </p>
                {/* <ClosedDateCard date="3-й поток — старт 28 апреля" /> */}
                <StartDateCard
                  date="4-й поток — старт 19 мая"
                  remainingPlaces={9}
                />
                <StartDateCard
                  date="5-й поток — старт 2 июня"
                  remainingPlaces={15}
                />

                <div className="flex items-center gap-1 mt-2">
                  <Clock className="h-4 w-4" />
                  <span>Длительность: 2 недели</span>
                </div>
              </div>

              <div className="mt-auto">
                <p className="text-lg font-medium mb-4">Способ оплаты</p>
                <form onSubmit={handlePayment}>
                  <Script src="https://securepay.tinkoff.ru/html/payForm/js/tinkoff_v2.js" />
                  {inputs.map((inp) => (
                    <input
                      {...inp}
                      key={inp.name}
                      type="hidden"
                      required
                      disabled
                    />
                  ))}
                  <input
                    key="name"
                    type="hidden"
                    name="name"
                    required
                    disabled
                    value={formData.fullName}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-6 text-lg flex items-center justify-center gap-2"
                    onClick={handleIncorrectClick}
                  >
                    <CreditCard className="h-5 w-5" />
                    Картой онлайн
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
