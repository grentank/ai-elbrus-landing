"use client";

import type React from "react";

import { TechLogos } from "@/components/tech-logos";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
  BookOpen,
  Calendar,
  CheckCircle,
  Code,
  CreditCard,
  Database,
  HelpCircle,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
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
    description:
      "Эксперт в области веб-разработки и кибербезопасности с глубоким академическим и практическим опытом. Выпускник мехмата МГУ. Обладает более чем 8-летним опытом программирования на C++, Wolfram и Python, а также 5-летним опытом разработки на JavaScript. Выступал на ведущих российских IT-конференциях, включая Dump, CodeFest, MoscowJS, SOC-Forum и МУФ, где делился экспертизой в веб-разработке и кибербезопасности.",
  },
  {
    name: "Юрий Плисковский",
    imageSrc:
      "https://elbrusboot.camp/static/d0b6ef0d8f9828a6dc707fc64c721d11/c0321/pliskovskiy.jpg",
    role: "Ведущий эксперт",
    description:
      "Директор по образованию в Эльбрус Буткемп. Организатор и ведущий образовательных проектов в области IT.",
  },
  {
    name: "Георгий Бабаян",
    imageSrc:
      "https://elbrusboot.camp/static/30d229c2aaef047f7d9a5c2116acd8db/c3f7f/babayan.jpg",
    role: "CEO",
    description:
      "Основатель Эльбрус Буткемп. Идейный вдохновитель и организатор образовательных проектов в области IT.",
  },
];
const weeksData = [
  {
    title: "Неделя 1: Основы AI-инструментов и RAG",
    value: "week-1",
    days: [
      {
        title: "Понедельник: Обзор возможностей AI для разработки",
        description:
          "Знакомство с современными AI-инструментами, которые значительно ускоряют процесс разработки. Практическое применение AI IDE и чат-систем для решения реальных задач.",
        points: [
          "AI IDE: Cursor, Giga IDE, Windsurf, Github Copilot",
          "Чат-системы: ChatGPT, DeepSeek, Grok и другие",
          "Практические примеры использования AI для ускорения разработки",
        ],
      },
      {
        title: "Вторник: Подключение AI через API",
        description:
          "Изучение методов интеграции различных AI-моделей в собственные приложения через API. Практическая работа с российскими и международными провайдерами AI.",
        points: [
          "Работа с API: GigaChat, YandexGPT, OpenAI",
          "Интеграция AI в собственные приложения",
          "Обработка запросов и ответов от AI-моделей",
        ],
      },
      {
        title: "Среда: Автоматизация деплоя с помощью AI",
        description:
          "Освоение современных инструментов для автоматизации процесса деплоя приложений с использованием AI. Демонстрация полного цикла от разработки до публикации.",
        points: [
          "Платформы для AI-деплоя: v0, Lovable, Replit",
          "Демонстрация процесса деплоя через чат-боты",
          "Автоматизация CI/CD процессов с помощью AI",
        ],
      },
      {
        title: "Четверг: Основы RAG и векторные базы данных",
        description:
          "Введение в технологию Retrieval-Augmented Generation (RAG) и её применение для улучшения качества ответов AI. Создание и настройка векторных баз данных.",
        points: [
          "Принципы работы RAG и его преимущества",
          "Создание векторной базы данных и эмбеддинг",
          "Обзор инструментов: GigaChain Rag, GraphRAG, YandexGPT",
        ],
      },
      {
        title: "Пятница: Интеграция RAG с реальными данными",
        description:
          "Практическое применение RAG для работы с реальными данными из различных источников. Настройка интеграций с популярными сервисами и API.",
        points: [
          "Подключение к API Google Таблиц, Github",
          "Настройка общения по API и интеграция в бизнес-процессы",
          "Практический кейс: создание RAG-системы для корпоративных данных",
        ],
      },
    ],
  },
  {
    title: "Неделя 2: Создание AI-агентов",
    value: "week-2",
    days: [
      {
        title: "Понедельник: Концепция AI-агентов",
        description:
          "Погружение в мир AI-агентов и их возможности для автоматизации рутинных задач разработки. Практическое создание первого агента для анализа кода.",
        points: [
          "Основные принципы работы AI-агентов",
          "Работа с Langchain для создания агентов",
          "Автоматический анализ кода и комментариев",
        ],
      },
      {
        title: "Вторник: Инструменты для сложных сценариев агентов",
        description:
          "Изучение продвинутых инструментов для создания комплексных AI-агентов с множеством функций. Построение агента с расширенными возможностями.",
        points: [
          "Обзор Tavily: возможности и применение",
          "Работа с LangGraph для создания сложных агентов",
          "Практикум: построение комплексного агента",
        ],
      },
      {
        title: "Среда: Активные AI-агенты",
        description:
          "Трансформация пассивных агентов-наблюдателей в активных участников процесса разработки. Настройка автоматического выполнения действий и планирования.",
        points: [
          "Переход от наблюдения к действию",
          "Планирование и реализация расписаний для агентов",
          "Автоматзация принятия решений агентом",
        ],
      },
      {
        title: "Четверг: Агенты для написания кода",
        description:
          "Создание продвинутого AI-агента, способного самостоятельно писать код и взаимодействовать с системами контроля версий. Интеграция с CI/CD для автоматического тестирования.",
        points: [
          "Автоматизация написания кода с помощью AI",
          "Интеграция с GitHub API и автоматизация коммитов",
          "Настройка CI/CD для автоматического тестирования кода",
        ],
      },
      {
        title: "Пятница: Итоговый день и демонстрация проектов",
        description:
          "Завершение работы над AI-агентами, финальные доработки и презентация результатов. Обмен опытом и обсуждение дальнейших перспектив применения AI-агентов.",
        points: [
          "Доработка и оптимизация AI-агентов",
          "Демонстрация достижений участниками",
          "Обсуждение перспектив и дальнейшего развития",
        ],
      },
    ],
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
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm backdrop-blur-sm">
                Онлайн-интенсив
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Курс по AI для разработчиков
              </h1>
              <p className="text-lg md:text-xl text-white/90">
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
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 opacity-75 blur"></div>
                <div className="relative rounded-lg bg-black p-6">
                  <pre className="text-green-400 font-mono text-sm">
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Как проходит обучение</h2>
          </div>

          <div className="space-y-12">
            {/* Item 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gray-200 rounded-lg aspect-video overflow-hidden">
                {/* Placeholder for image */}
                <Image
                  src="/1.jpg"
                  alt="1"
                  className="w-full h-full object-cover"
                  width={1000}
                  height={1000}
                />
                {/* <div className="w-full h-full flex items-center justify-center text-gray-500">Изображение 1</div> */}
              </div>
              <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-start mb-4">
                  <Calendar className="h-20 w-20 text-indigo-600 mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      10 интенсивных дней
                    </h3>
                    <p className="text-gray-700">
                      Онлайн встречи с понедельника по пятницу в 19:00 на 2 часа
                      в течение двух недель. На лекциях вы получите
                      теоретическую базу и разберёте бизнес-кейсы по интеграции
                      RAG и созданию AI-агентов.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-start mb-4">
                  <BookOpen className="h-20 w-20 text-indigo-600 mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Презентации с первоклассными материалами
                    </h3>
                    <p className="text-gray-700">
                      Всё самое важное про курс и не только! Пошаговые
                      инструкции, требуемые пакеты и даже готовые промты - все
                      эти материалы будут ваши.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 bg-gray-200 rounded-lg aspect-video overflow-hidden">
                {/* Placeholder for image */}
                <img
                  src="/2.jpg"
                  alt="2"
                  className="w-full h-full object-cover"
                />
                {/* <div className="w-full h-full flex items-center justify-center text-gray-500">Изображение 2</div> */}
              </div>
            </div>

            {/* Item 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gray-200 rounded-lg aspect-video overflow-hidden">
                {/* Placeholder for image */}
                {/* <div className="w-full h-full flex items-center justify-center text-gray-500">Изображение 3</div> */}
                <Image
                  src="/4.webp"
                  alt="3"
                  className="w-full h-full object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-start mb-4">
                  <Users className="h-20 w-20 text-indigo-600 mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Общение и коммьюнити
                    </h3>
                    <p className="text-gray-700">
                      Живое общение на лекции, чат-комнаты с коллегами и
                      практические сессии позволят быстрее осваивать самые
                      передовые инструменты.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-start mb-4">
                  <CheckCircle className="h-20 w-20 text-indigo-600 mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Демонстрация результатов и фидбек
                    </h3>
                    <p className="text-gray-700">
                      Покажите ваши результаты на финальной встрече с
                      экспертами. Получите качественную обратную связь и
                      рекомендации по дальнейшему развитию в области AI-решений.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 bg-gray-200 rounded-lg aspect-video overflow-hidden">
                {/* Placeholder for image */}
                {/* <div className="w-full h-full flex items-center justify-center text-gray-500">Изображение 4</div> */}
                <Image
                  src="/5.webp"
                  alt="4"
                  className="w-full h-full object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Программа интенсива</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full mb-8">
              {weeksData.map((week) => (
                <AccordionItem key={week.value} value={week.value}>
                  <AccordionTrigger className="text-2xl font-semibold">
                    {week.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6 mt-4">
                      {week.days.map((day, index) => (
                        <div
                          key={index}
                          className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm"
                        >
                          <h3 className="text-xl font-bold text-indigo-600 mb-2">
                            {day.title}
                          </h3>
                          <p className="text-gray-700 mb-4">
                            {day.description}
                          </p>
                          <div className="space-y-2 mt-4">
                            {day.points.map((point, i) => (
                              <div key={i} className="flex items-center">
                                <div className="w-3 h-3 rounded-full bg-indigo-600 mr-3"></div>
                                <p>{point}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
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
                <h3 className="text-xl font-semibold mb-2">Итого</h3>
                <p className="text-4xl font-bold mb-8">55 000 ₽</p>

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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                Курс по AI для разработчиков
              </h3>
              <p className="text-gray-400">
                Интенсив по интеграции RAG и созданию AI-агентов
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    О курсе
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Программа
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Эксперты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:info@elbrusboot.camp"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    info@elbrusboot.camp
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/elbrus_bootcamp"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Чат в Telegram
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+78001234567"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    +7 (499) 938-68-24
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/place/Elbrus+Coding+Bootcamp+%7C+%D0%A8%D0%BA%D0%BE%D0%BB%D0%B0+%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F+%D0%94%D0%BE%D0%BD%D1%81%D0%BA%D0%BE%D0%B9+%D1%80%D0%B0%D0%B9%D0%BE%D0%BD/@55.7065807,37.5926111,16.25z/data=!4m13!1m6!3m5!1s0x46b54bbba5624251:0x42cefa28cf581f67!2zRWxicnVzIENvZGluZyBCb290Y2FtcCB8INCo0LrQvtC70LAg0L_RgNC-0LPRgNCw0LzQvNC40YDQvtCy0LDQvdC40Y8g0JTQvtC90YHQutC-0Lkg0YDQsNC50L7QvQ!8m2!3d55.706541!4d37.5970071!3m5!1s0x46b54bbba5624251:0x42cefa28cf581f67!8m2!3d55.706541!4d37.5970071!15sChZFbGJydXMgQ29kaW5nIEJvb3RjYW1wWjAKFmVsYnJ1cyBjb2RpbmcgYm9vdGNhbXAiFmVsYnJ1cyBjb2RpbmcgYm9vdGNhbXCSARBlZHVjYXRpb25fY2VudGVy"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Москва, ул. Орджоникидзе, 11 стр. 10 (м. Ленинский проспект)
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Документы</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://elbrusboot.camp/docs/confidentiality_agreement.pdf"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Политика обработки персональных данных
                  </a>
                </li>
                <li>
                  <a
                    href="https://elbrusboot.camp/docs/end_user_license_agreement.pdf"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Пользовательское соглашение
                  </a>
                </li>
                <li>
                  <a
                    href="https://elbrusboot.camp/contract_agreements/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Договор оферта
                  </a>
                </li>
                <li>
                  <a
                    href="https://tt.elbrusboot.camp/services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Об образовательной организации
                  </a>
                </li>
                <li>
                  <a
                    href="https://elbrusboot.camp/docs/edu_license.pdf"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Государственная лицензия
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 ООО "Эльбрус Буткемп". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ExpertCard({
  imageSrc,
  name,
  role,
  description,
}: {
  imageSrc: string;
  name: string;
  role: string;
  description: string;
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
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}
