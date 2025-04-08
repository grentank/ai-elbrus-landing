"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, CheckCircle, Clock, CreditCard } from "lucide-react";
import Script from "next/script";
import React from "react";

const coursePrice = 55000;
const inputs = [
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
];

export default function PaymentSection({
  formData,
  handleInputChange,
  formErrors,
  isFormValid,
  setFormErrors,
}: {
  formData: { fullName: string; email: string; phone: string };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formErrors: { fullName: string; email: string; phone: string };
  isFormValid: boolean;
  setFormErrors: (
    e: React.SetStateAction<{ fullName: string; email: string; phone: string }>
  ) => void;
}) {
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
    // (TPF.querySelector('[name="name"]') as HTMLInputElement).value =

    // @ts-expect-error
    window.pay?.(TPF);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 bg-white rounded-lg shadow-md overflow-hidden">
          {/* Left side - Payment form */}
          <div className="p-8 border-r border-gray-200">
            <h2 className="text-3xl font-bold mb-2">Оплата</h2>
            <p className="text-gray-600 mb-6">Курс по AI для разработчиков</p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Контактные данные</h3>
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
              </form>
            </div>
          </div>

          {/* Right side - Payment summary */}
          <div className="bg-gray-50 p-8 flex flex-col">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">Итого</h3>
                <div className="flex flex-col items-end">
                  <span className="text-sm text-gray-500 line-through">
                    109 500 ₽
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-4xl font-bold">55 000 ₽</span>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      -50%
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Скидка 50% для первых 3 стартов
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="h-3 w-3 text-indigo-600" />
                </div>
                <p className="text-sm">Живые лекции с менторами курса</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="h-3 w-3 text-indigo-600" />
                </div>
                <p className="text-sm">
                  Закрытое сообщество в Telegram с действующими разработчиками
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="h-3 w-3 text-indigo-600" />
                </div>
                <p className="text-sm">
                  Практические задания с обратной связью от экспертов
                </p>
              </div>
            </div>

            <div className="space-y-3 mb-6 text-sm text-gray-600">
              <p className="font-medium text-base text-gray-700 mb-2">
                Ближайшие потоки:
              </p>
              <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-md opacity-50">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span className="line-through">2-й поток — старт 14 апреля</span>
                <span className="ml-auto text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                  набор закрыт
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-md border-2 border-indigo-100">
                <Calendar className="h-4 w-4 text-indigo-600" />
                <span className="font-medium">3-й поток — старт 28 апреля</span>
                <span className="ml-auto text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                  осталось 13 мест
                </span>
              </div>
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
                  onClick={(e) => {
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
                        phone:
                          "Телефон должен начинаться с +7, 7 или 8, затем 10 цифр",
                      }));
                    if (!isFormValid) {
                      e.preventDefault();
                      // Scroll to the first error field
                      const firstErrorField =
                        document.querySelector(".border-red-500");
                      if (firstErrorField) {
                        firstErrorField.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        });
                      }
                    }
                  }}
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
  );
}
