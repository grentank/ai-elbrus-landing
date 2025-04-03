"use client";

import type React from "react";

import Footer from "@/components/footer";
import HowTrainingWorks from "@/components/how-training-works";
import Programm from "@/components/programm";
import { TechLogos } from "@/components/tech-logos";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Calendar,
  CheckCircle,
  Clock,
  Code,
  CreditCard,
  Database,
  HelpCircle,
  Zap,
} from "lucide-react";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const coursePrice = 55000;
const codeBlock = `from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from langchain.chains import RetrievalQA
from langchain.llms import OpenAI

# Initialize RAG components
embeddings = OpenAIEmbeddings()
vectorstore = Chroma(
  embedding_function=embeddings,
  collection_name="my_documents"
)

# Create AI agent
agent = RetrievalQA.from_chain_type(
  llm=OpenAI(),
  chain_type="stuff",
  retriever=vectorstore.as_retriever()
)`;
const inputs = [
  { name: "terminalkey", value: "1743087532455DEMO" },
  { name: "frame", value: "false" },
  { name: "language", value: "ru" },
  { name: "receipt", value: "" },
  { name: "amount", value: coursePrice },
  { name: "order", value: Math.random().toString(16).substring(2, 8) },
  { name: "description", value: "Оплата курса AI-инженер" },
  // { name: "name", value: "" },
  { name: "email", value: "" },
  { name: "phone", value: "" },
];
const experts = [
  {
    name: "Александр Князев",
    imageSrc:
      "https://getmentor.blob.core.windows.net/mentor-images/aleksandr-kniazev-3786/full",
    role: "Ведущий эксперт",
    points: [
      "Выпускник мехмата МГУ",
      "8+ лет опыта программирования на C++, Wolfram и Python",
      "5 лет разработки на JavaScript",
      "Выступал на крупных IT-конференциях (Dump, CodeFest, MoscowJS, SOC-Forum, МУФ)",
    ],
    description:
      "Эксперт в области веб-разработки и кибербезопасности с глубоким академическим и практическим опытом. Выпускник мехмата МГУ. Обладает более чем 8-летним опытом программирования на C++, Wolfram и Python, а также 5-летним опытом разработки на JavaScript. Выступал на ведущих российских IT-конференциях, включая Dump, CodeFest, MoscowJS, SOC-Forum и МУФ, где делился экспертизой в веб-разработке и кибербезопасности.",
  },
  {
    name: "Юрий Плисковский",
    imageSrc:
      "https://elbrusboot.camp/static/d0b6ef0d8f9828a6dc707fc64c721d11/c0321/pliskovskiy.jpg",
    role: "Ведущий эксперт",
    points: [
      "Директор по образовательной программе в Эльбрус Буткемп",
      "Организатор и ведущий IT-образовательных проектов",
      "10+ лет опыта разработки и преподавания в IT-сфере",
      "Эксперт по созданию учебных программ и развитию IT-команд",
    ],
    description:
      "Директор по образованию в Эльбрус Буткемп. Организатор и ведущий образовательных проектов в области IT.",
  },
  {
    name: "Георгий Бабаян",
    imageSrc:
      "https://elbrusboot.camp/static/30d229c2aaef047f7d9a5c2116acd8db/c3f7f/babayan.jpg",
    role: "CEO & Основатель Elbrus Bootcamp",
    points: [
      "10 лет в IT-образовании и запуске EdTech-проектов",
      "Основатель Elbrus Bootcamp (2000+ выпускников)",
      "Развивает AI-школу с акцентом на практические навыки",
      "Руководил командами до 50+ человек, сотрудничал с Сбер, Тинькофф, Selectel",
    ],
    description:
      "10 лет в IT-образовании и запуске EdTech-проектов\nОсновал Elbrus Bootcamp — одну из крупнейших школ программирования в России (2000+ выпускников)  \nРазвивает собственную AI-школу с фокусом на практические навыки и карьерные результаты  \nРуководил командами в 50+ человек, создавал и масштабировал образовательные продукты  \nРаботал с партнёрами из IT и HR-сферы: Сбер, Тинькофф, Selectel \nРегулярно выступает на конференциях по технологиям, образованию и управлению командами",
  },
];

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    fullName: "",
    phone: "",
    email: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const paymentSectionRef = useRef<HTMLDivElement>(null);
  const validateForm = () => {
    const { fullName, phone, email } = formData;
    const errors = {
      fullName: "",
      phone: "",
      email: "",
    };

    // Validate fullName
    if (fullName.trim().length > 0) {
      if (fullName.trim().length < 3) {
        errors.fullName = "Ф.И.О. должно содержать минимум 3 символа";
      } else if (!fullName.includes(" ")) {
        errors.fullName = "Ф.И.О. должно содержать как минимум 2 слова";
      } else if (fullName.trim().split(/\s+/).filter(Boolean).length < 2) {
        errors.fullName = "Ф.И.О. должно содержать как минимум 2 слова";
      }
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim().length > 0 && !emailRegex.test(email)) {
      errors.email = "Пожалуйста, введите корректный email";
    }

    // Validate phone
    const phoneRegex = /^(\+7|7|8)(\d{10})$/;
    if (phone.trim().length > 0 && !phoneRegex.test(phone)) {
      errors.phone = "Телефон должен начинаться с +7, 7 или 8, затем 10 цифр";
    }

    setFormErrors(errors);

    // Form is valid if there are no errors
    setIsFormValid(
      fullName.trim().length > 0 &&
        email.trim().length > 0 &&
        phone.trim().length > 0 &&
        !errors.fullName &&
        !errors.email &&
        !errors.phone
    );
  };
  // Validate form
  useEffect(validateForm, [formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      try {
        const questionElement = document.getElementById(
          "question"
        ) as HTMLTextAreaElement;
        const question = questionElement?.value || "";

        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            question,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to send message");
        }

        // Show success message
        setIsSubmitted(true);

        // Reset form after submission
        setTimeout(() => {
          setIsModalOpen(false);
          setIsSubmitted(false);
          setFormData({
            fullName: "",
            phone: "",
            email: "",
          });
          if (questionElement) {
            questionElement.value = "";
          }
        }, 2000);
      } catch (error) {
        console.error("Error:", error);
        alert(
          "Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте позже."
        );
      }
    }
  };

  const scrollToPayment = () => {
    paymentSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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
    //   formData.fullName;

    window.pay?.(TPF);
  };
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20 text-white">
        <div className="container mx-auto px-4">
          {/* Logo */}
          <div className="flex justify-start mb-8">
            <div className="w-40 h-12 bg-white/90 rounded-md flex items-center justify-center">
              <img
                src="/logos/elbrus.svg"
                alt="Elbrus Logo"
                className="h-8 w-auto"
              />
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm backdrop-blur-sm">
                Онлайн-интенсив
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Курс по AI для разработчиков
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-[600px]">
                Освойте интеграцию RAG в свои проекты и научитесь создавать
                AI-агентов для автоматизации разработки, деплоя и
                бизнес-процессов
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-indigo-700 hover:bg-white/90"
                  onClick={scrollToPayment}
                >
                  Купить курс
                </Button>
                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                  <div className="inline-flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm font-medium">middle</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-sm font-medium">middle+</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Zoom image - hidden on mobile */}
              <div className="absolute -top-16 -right-8 w-70 h-60 rounded-lg overflow-hidden shadow-xl z-10 rotate-6 border-4 border-white/20 hidden md:block">
                <img
                  src="/zoom.png"
                  alt="Zoom webinar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 opacity-75 blur"></div>
                <div className="relative rounded-lg bg-black p-4 sm:p-6">
                  {/* Make code block responsive with overflow handling */}
                  <pre className="text-green-400 font-mono text-sm overflow-x-auto whitespace-pre-wrap break-words sm:whitespace-pre">
                    <code>{codeBlock}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Intensive Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">О чём интенсив</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-gray-700">
                Чтобы оставаться конкурентоспособным, современному разработчику
                важно работать быстрее с минимальными затратами. Интеграция RAG
                и AI-агентов позволяет оптимизировать процессы, ускорить
                разработку и обеспечить стабильное качество результатов.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-gray-700">
                В рамках интенсива вы освоите передовые инструменты для
                подключения AI через API, создания векторных баз данных и
                разработки AI-агентов, которые помогут автоматизировать задачи
                от деплоя до написания кода по ТЗ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Logos Section */}
      <TechLogos />

      {/* Who is this for Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Кому подойдёт интенсив</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <Code className="h-10 w-10 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Опытным разработчикам</h3>
              <p className="text-gray-700">
                Если вы уже работаете в IT и хотите вывести свою эффективность
                на новый уровень, вы научитесь интегрировать инновационные
                AI-решения в существующие проекты.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <Database className="h-10 w-10 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Инженерам и архитекторам ПО
              </h3>
              <p className="text-gray-700">
                Для тех, кто проектирует сложные системы, интенсив предоставит
                набор инструментов для автоматизации процессов и повышения
                качества кода с помощью AI-агентов.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <Zap className="h-10 w-10 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Предпринимателям и IT-руководителям
              </h3>
              <p className="text-gray-700">
                Если вы управляете командами и ищете способы оптимизации
                бизнес-процессов, интенсив научит вас внедрять AI-технологии для
                стабильного роста и инноваций.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Эксперты</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {experts.map((ex) => (
              <ExpertCard {...ex} key={ex.name} />
            ))}
          </div>
        </div>
      </section>

      {/* How Training Works Section */}
      <HowTrainingWorks />

      {/* Program Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Программа интенсива</h2>
          </div>

          <Programm />
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Результаты курса</h2>
          </div>

          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="space-y-4">
              <p className="text-gray-700 text-lg leading-relaxed">
                <strong>
                  После интенсива вы получите сертификат, подтверждающий ваши
                  навыки AI-инженера.
                </strong>
                &nbsp; Вы сможете настраивать RAG на свои проекты,
                автоматизировать задачи с помощью AI-агентов и интегрировать
                передовые решения в рабочие процессы.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Специалисты по AI-агентам — профессия будущего. Сейчас таких
                экспертов в России почти нет, но спрос на них стремительно
                растёт. Многие компании хотят оптимизировать процессы за счёт
                AI, и вы станете одним из первых специалистов в этой
                развивающейся сфере.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed font-medium">
                Этот интенсив даст вам преимущество на рынке и откроет новые
                карьерные возможности.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section className="py-20" ref={paymentSectionRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 bg-white rounded-lg shadow-md overflow-hidden">
              {/* Left side - Payment form */}
              <div className="p-8 border-r border-gray-200">
                <h2 className="text-3xl font-bold mb-2">Оплата</h2>
                <p className="text-gray-600 mb-6">
                  Курс по AI для разработчиков
                </p>

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
                    Скидка 50% для первых 15 участников
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
                      Закрытое сообщество в Telegram с действующими
                      разработчиками
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

                <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Старт 14 апреля</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>2 недели</span>
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
                            fullName:
                              "Ф.И.О. должно содержать минимум 3 символа",
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
      </section>

      {/* Questions Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <HelpCircle className="h-16 w-16 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Остались вопросы?</h3>
            <p className="text-gray-700 mb-6">Свяжитесь с нами</p>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-indigo-600 hover:bg-indigo-700"
            >
              Задать вопрос
            </Button>
          </div>
        </div>
      </section>

      {/* Questions Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Задать вопрос</DialogTitle>
            <DialogDescription>
              Заполните форму, и мы свяжемся с вами, чтобы ответить на все ваши
              вопросы
            </DialogDescription>
          </DialogHeader>
          {isSubmitted ? (
            <div className="py-6 flex flex-col items-center justify-center text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
              <h3 className="text-xl font-medium text-gray-900">
                Вопрос отправлен!
              </h3>
              <p className="mt-2 text-gray-500">
                Спасибо за ваш интерес. Мы свяжемся с вами в ближайшее время.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="modal-fullName">Ф.И.О.</Label>
                  <Input
                    id="modal-fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Иванов Иван Иванович"
                    className={formErrors.fullName ? "border-red-500" : ""}
                  />
                  {formErrors.fullName && (
                    <p className="text-sm text-red-500">
                      {formErrors.fullName}
                    </p>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="modal-phone">Телефон</Label>
                  <Input
                    id="modal-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+7XXXXXXXXXX"
                    className={formErrors.phone ? "border-red-500" : ""}
                  />
                  {formErrors.phone && (
                    <p className="text-sm text-red-500">{formErrors.phone}</p>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="modal-email">Email</Label>
                  <Input
                    id="modal-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@mail.com"
                    className={formErrors.email ? "border-red-500" : ""}
                  />
                  {formErrors.email && (
                    <p className="text-sm text-red-500">{formErrors.email}</p>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="question">Ваш вопрос</Label>
                  <textarea
                    id="question"
                    className="min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Опишите ваш вопрос..."
                  ></textarea>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" disabled={!isFormValid}>
                  Отправить
                </Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}

function ExpertCard({
  imageSrc,
  name,
  role,
  points,
  description,
}: {
  imageSrc: string;
  name: string;
  role: string;
  description: string;
  points: string[];
}) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-square overflow-hidden">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-indigo-600 font-medium mb-3">{role}</p>
        {/* <p className="text-gray-700">{description}</p> */}
        <ul className="list-disc list-inside text-gray-700">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
