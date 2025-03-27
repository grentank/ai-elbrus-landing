"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Code, Database, Zap, BookOpen, Users, Calendar } from "lucide-react"
import Image from "next/image"

export default function LandingPage() {
  const [purchaseCount, setPurchaseCount] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    telegram: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)

  // Validate form
  useEffect(() => {
    const { firstName, lastName, phone, email } = formData
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRegex = /^\+?\d{10,15}$/

    setIsFormValid(
      firstName.trim().length > 0 && lastName.trim().length > 0 && phoneRegex.test(phone) && emailRegex.test(email),
    )
  }, [formData])

  // Initialize counter from localStorage and set up increment
  useEffect(() => {
    const storedCount = localStorage.getItem("purchaseCount")
    if (storedCount) {
      setPurchaseCount(Number.parseInt(storedCount, 10))
    } else {
      // Initial count if none exists
      setPurchaseCount(187)
    }

    // Increment counter every 15-30 seconds
    const incrementInterval = setInterval(
      () => {
        setPurchaseCount((prevCount) => {
          const newCount = prevCount + 1
          localStorage.setItem("purchaseCount", newCount.toString())
          return newCount
        })
      },
      Math.floor(Math.random() * 15000) + 15000,
    )

    return () => clearInterval(incrementInterval)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isFormValid) {
      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData)
      setIsSubmitted(true)

      // Reset form after submission
      setTimeout(() => {
        setIsModalOpen(false)
        setIsSubmitted(false)
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          telegram: "",
        })
      }, 2000)
    }
  }

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
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Продвинутый AI-инженер</h1>
              <p className="text-lg md:text-xl text-white/90">
                Освойте интеграцию RAG в свои проекты и научитесь создавать AI-агентов для автоматизации разработки,
                деплоя и бизнес-процессов
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-indigo-700 hover:bg-white/90"
                  onClick={() => setIsModalOpen(true)}
                >
                  Зарегистрироваться
                </Button>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <span className="text-sm">middle</span>
                  {/*<span className="font-bold">{purchaseCount}</span>
                  <span className="text-sm">человек</span>*/}
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <span className="text-sm">middle+</span>
                  {/*<span className="font-bold">{purchaseCount}</span>
                  <span className="text-sm">человек</span>*/}
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 opacity-75 blur"></div>
                <div className="relative rounded-lg bg-black p-6">
                  <pre className="text-green-400 font-mono text-sm">
                    <code>{`from langchain.embeddings import OpenAIEmbeddings
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
)`}</code>
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
                Чтобы оставаться конкурентоспособным, современному разработчику важно работать быстрее с минимальными
                затратами. Интеграция RAG и AI-агентов позволяет оптимизировать процессы, ускорить разработку и
                обеспечить стабильное качество результатов.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-gray-700">
                В рамках интенсива вы освоите передовые инструменты для подключения AI через API, создания векторных баз
                данных и разработки AI-агентов, которые помогут автоматизировать задачи от деплоя до написания кода по
                ТЗ.
              </p>
            </div>
          </div>
        </div>
      </section>

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
                Если вы уже работаете в IT и хотите вывести свою эффективность на новый уровень, вы научитесь
                интегрировать инновационные AI-решения в существующие проекты.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <Database className="h-10 w-10 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Инженерам и архитекторам ПО</h3>
              <p className="text-gray-700">
                Для тех, кто проектирует сложные системы, интенсив предоставит набор инструментов для автоматизации
                процессов и повышения качества кода с помощью AI-агентов.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <Zap className="h-10 w-10 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Предпринимателям и IT-руководителям</h3>
              <p className="text-gray-700">
                Если вы управляете командами и ищете способы оптимизации бизнес-процессов, интенсив научит вас внедрять
                AI-технологии для стабильного роста и инноваций.
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
            <ExpertCard
              imageSrc="https://getmentor.blob.core.windows.net/mentor-images/aleksandr-kniazev-3786/full"
              name="Александр Князев"
              role="AI-архитектор"
              description="15 лет опыта в разработке. Специализируется на интеграции AI в корпоративные системы и оптимизации бизнес-процессов."
            />
            <ExpertCard
              imageSrc="https://elbrusboot.camp/static/d0b6ef0d8f9828a6dc707fc64c721d11/c0321/pliskovskiy.jpg"
              name="Юрий Плисковский"
              role="ML-инженер"
              description="Эксперт по машинному обучению с опытом работы в крупных технологических компаниях. Специализируется на RAG-системах и векторных базах данных."
            />
            <ExpertCard
              imageSrc="https://elbrusboot.camp/static/30d229c2aaef047f7d9a5c2116acd8db/c3f7f/babayan.jpg"
              name="Георгий Бабаян"
              role="Разработчик AI-агентов"
              description="Создал более 50 AI-агентов для автоматизации разработки. Консультант по внедрению AI-решений в стартапах и корпорациях."
            />
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
                <Image src="/1.jpg" alt="1" className="w-full h-full object-cover" width={1000} height={1000} />
                {/* <div className="w-full h-full flex items-center justify-center text-gray-500">Изображение 1</div> */}
              </div>
              <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-start mb-4">
                  <Calendar className="h-20 w-20 text-indigo-600 mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">10 интенсивных дней</h3>
                    <p className="text-gray-700">
                      На лекциях вы получите теоретическую базу и разберёте бизнес-кейсы по интеграции RAG и созданию
                      AI-агентов.
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
                    <h3 className="text-xl font-bold mb-2">Презентации с первоклассными материалами</h3>
                    <p className="text-gray-700">
                      Вс самое важное про курс и не только! Пошаговые инструкции, требуемые пакеты и даже готовые промты
                      - все эти материалы будут ваши.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 bg-gray-200 rounded-lg aspect-video overflow-hidden">
                {/* Placeholder for image */}
                <img src="/2.jpg" alt="2" className="w-full h-full object-cover" />
                {/* <div className="w-full h-full flex items-center justify-center text-gray-500">Изображение 2</div> */}
              </div>
            </div>

            {/* Item 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gray-200 rounded-lg aspect-video overflow-hidden">
                {/* Placeholder for image */}
                {/* <div className="w-full h-full flex items-center justify-center text-gray-500">Изображение 3</div> */}
                <Image src="/4.webp" alt="3" className="w-full h-full object-cover" width={1000} height={1000} />
              </div>
              <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-start mb-4">
                  <Users className="h-20 w-20 text-indigo-600 mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Общение и коммьюнити</h3>
                    <p className="text-gray-700">
                      Живое общение на лекции, чат-комнаты с коллегами и практические сессии позволят быстрее осваивать
                      самые передовые инструменты.
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
                    <h3 className="text-xl font-bold mb-2">Демонстрация результатов и фидбек</h3>
                    <p className="text-gray-700">
                      Покажите ваши результаты на финальной встрече с экспертами. Получите качественную обратную связь и
                      рекомендации по дальнейшему развитию в области AI-решений.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 bg-gray-200 rounded-lg aspect-video overflow-hidden">
                {/* Placeholder for image */}
                {/* <div className="w-full h-full flex items-center justify-center text-gray-500">Изображение 4</div> */}
                <Image src="/5.webp" alt="4" className="w-full h-full object-cover" width={1000} height={1000} />
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
              <AccordionItem value="week-1">
                <AccordionTrigger className="text-2xl font-semibold">
                  Неделя 1: Основы AI-инструментов и RAG
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6 mt-4">
                    {/* Monday */}
                    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                      <h3 className="text-xl font-bold text-indigo-600 mb-2">
                        Понедельник: Обзор возможностей AI для разработки
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Знакомство с современными AI-инструментами, которые значительно ускоряют процесс разработки.
                        Практическое применение AI IDE и чат-систем для решения реальных задач.
                      </p>
                      <div className="space-y-2 mt-4">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-indigo-600 mr-3"></div>
                          <p>AI IDE: Cursor, Giga IDE, Windsurf, Github Copilot</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-indigo-600 mr-3"></div>
                          <p>Чат-системы: ChatGPT, DeepSeek, Grok и другие</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-indigo-600 mr-3"></div>
                          <p>Практические примеры использования AI для ускорения разработки</p>
                        </div>
                      </div>
                    </div>

                    {/* Tuesday */}
                    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                      <h3 className="text-xl font-bold text-indigo-600 mb-2">Вторник: Подключение AI через API</h3>
                      <p className="text-gray-700 mb-4">
                        Изучение методов интеграции различных AI-моделей в собственные приложения через API.
                        Практическая работа с российскими и международными провайдерами AI.
                      </p>
                      <div className="space-y-2 mt-4">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-indigo-600 mr-3"></div>
                          <p>Работа с API: GigaChat, YandexGPT, OpenAI</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-indigo-600 mr-3"></div>
                          <p>Интеграция AI в собственные приложения</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-indigo-600 mr-3"></div>
                          <p>Обработка запросов и ответов от AI-моделей</p>
                        </div>
                      </div>
                    </div>

                    {/* Wednesday */}
                    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                      <h3 className="text-xl font-bold text-indigo-600 mb-2">
                        Среда: Автоматизация деплоя с помощью AI
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Освоение современных инструментов для автоматизации процесса деплоя приложений с использованием
                        AI. Демонстрация полного цикла от разработки до публикации.
                      </p>
                      <div className="space-y-2 mt-4">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-indigo-600 mr-3"></div>
                          <p>Платформы для AI-деплоя: v0, Lovable, Replit</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-indigo-600 mr-3"></div>
                          <p>Демонстрация процесса деплоя через чат-боты</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-indigo-600 mr-3"></div>
                          <p>Автоматизация CI/CD процессов с помощью AI</p>
                        </div>
                      </div>
                    </div>

                    {/* Thursday */}
                    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                      <h3 className="text-xl font-bold text-indigo-600 mb-2">
                        Четверг: Основы RAG и векторные базы данных
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Введение в технологию Retrieval-Augmented Generation (RAG) и её применение для улучшения
                        качества ответов AI. Создание и настройка векторных баз данных.
                      </p>
                      <div className="space-y-2 mt-4">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-indigo-600 mr-3"></div>
                          <p>Принципы работы RAG и его преимущества</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-indigo-600 mr-3"></div>
                          <p>Создание векторной базы данных и эмбеддинг</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-indigo-600 mr-3"></div>
                          <p>Обзор инструментов: GigaChain Rag, GraphRAG, YandexGPT</p>
                        </div>
                      </div>
                    </div>

                    {/* Friday */}
                    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                      <h3 className="text-xl font-bold text-indigo-600 mb-2">
                        Пятница: Интеграция RAG с реальными данными
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Практическое применение RAG для работы с реальными данными из различных источников. Настройка
                        интеграций с популярными сервисами и API.
                      </p>
                      <div className="space-y-2 mt-4">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-indigo-600 mr-3"></div>
                          <p>Подключение к API Google Таблиц, Github</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-indigo-600 mr-3"></div>
                          <p>Настройка общения по API и интеграция в бизнес-процессы</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-indigo-600 mr-3"></div>
                          <p>Практический кейс: создание RAG-системы для корпоративных данных</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="week-2">
                <AccordionTrigger className="text-2xl font-semibold">Неделя 2: Создание AI-агентов</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6 mt-4">
                    {/* Monday - Day 6 */}
                    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                      <h3 className="text-xl font-bold text-indigo-600 mb-2">Понедельник: Концепция AI-агентов</h3>
                      <p className="text-gray-700 mb-4">
                        Погружение в мир AI-агентов и их возможности для автоматизации рутинных задач разработки.
                        Практическое создание первого агента для анализа кода.
                      </p>
                      <div className="space-y-2 mt-4">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-indigo-600 mr-3"></div>
                          <p>Основные принципы работы AI-агентов</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-indigo-600 mr-3"></div>
                          <p>Создание агента для проверки pull request'ов</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-indigo-600 mr-3"></div>
                          <p>Автоматический анализ кода и комментариев</p>
                        </div>
                      </div>
                    </div>

                    {/* Tuesday - Day 7 */}
                    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                      <h3 className="text-xl font-bold text-indigo-600 mb-2">
                        Вторник: Инструменты для сложных сценариев агентов
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Изучение продвинутых инструментов для создания комплексных AI-агентов с множеством функций.
                        Построение агента с расширенными возможностями.
                      </p>
                      <div className="space-y-2 mt-4">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-indigo-600 mr-3"></div>
                          <p>Обзор Travily: возможности и применение</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-indigo-600 mr-3"></div>
                          <p>Работа с LangGraph для создания сложных агентов</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-indigo-600 mr-3"></div>
                          <p>Практикум: построение комплексного агента</p>
                        </div>
                      </div>
                    </div>

                    {/* Wednesday - Day 8 */}
                    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                      <h3 className="text-xl font-bold text-indigo-600 mb-2">Среда: Активные AI-агенты</h3>
                      <p className="text-gray-700 mb-4">
                        Трансформация пассивных агентов-наблюдателей в активных участников процесса разработки.
                        Настройка автоматического выполнения действий и планирования.
                      </p>
                      <div className="space-y-2 mt-4">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-indigo-600 mr-3"></div>
                          <p>Переход от наблюдения к действию</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-indigo-600 mr-3"></div>
                          <p>Планирование и реализация расписаний для агентов</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-indigo-600 mr-3"></div>
                          <p>Автоматизация принятия решений агентами</p>
                        </div>
                      </div>
                    </div>

                    {/* Thursday - Day 9 */}
                    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                      <h3 className="text-xl font-bold text-indigo-600 mb-2">Четверг: Агенты для написания кода</h3>
                      <p className="text-gray-700 mb-4">
                        Создание продвинутого AI-агента, способного самостоятельно писать код и взаимодействовать с
                        системами контроля версий. Интеграция с CI/CD для автоматического тестирования.
                      </p>
                      <div className="space-y-2 mt-4">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-indigo-600 mr-3"></div>
                          <p>Автоматизация написания кода с помощью AI</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-indigo-600 mr-3"></div>
                          <p>Интеграция с GitHub API и автоматизация коммитов</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-indigo-600 mr-3"></div>
                          <p>Настройка CI/CD для автоматического тестирования кода</p>
                        </div>
                      </div>
                    </div>

                    {/* Friday - Day 10 */}
                    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                      <h3 className="text-xl font-bold text-indigo-600 mb-2">
                        Пятница: Итоговый день и демонстрация проектов
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Завершение работы над AI-агентами, финальные доработки и презентация результатов. Обмен опытом и
                        обсуждение дальнейших перспектив применения AI-агентов.
                      </p>
                      <div className="space-y-2 mt-4">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-indigo-600 mr-3"></div>
                          <p>Доработка и оптимизация AI-агентов</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-indigo-600 mr-3"></div>
                          <p>Демонстрация достижений участниками</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-indigo-600 mr-3"></div>
                          <p>Обсуждение перспектив и дальнейшего развития</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
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
                По окончании интенсива вы получите сертификат, подтверждающий ваши навыки AI-инженера. Вы сможете
                настраивать RAG на свои проекты и автоматизировать работу с помощью AI-агентов.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Вы научитесь мыслить на языке искусственного интеллекта, администрировать AI-системы и интегрировать их
                в свои рабочие процессы. Освоите актуальные инструменты для подключения AI через API и получите готовые
                промты, пресеты и шаблоны для дальнейшей автоматизации.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed font-medium">
                Профессия промпт-инженера сегодня одна из самых востребованных на рынке труда, но квалифицированных
                специалистов в этой области критически не хватает. Этот интенсив даст вам преимущество на рынке и
                откроет новые карьерные возможности.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing and CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-6">Стоимость курса: 55 000 ₽</h2>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6">
                Купить интенсив
              </Button>
            </div>

            <div className="mt-16 bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-center">Остались вопросы?</h3>
              <p className="text-center text-gray-700 mb-6">
                Заполните форму, и мы свяжемся с вами, чтобы ответить на все ваши вопросы
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Имя</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Введите ваше имя"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Фамилия</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Введите вашу фамилию"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+7 (XXX) XXX-XX-XX"
                    required
                  />
                  {formData.phone && !/^\+?\d{10,15}$/.test(formData.phone) && (
                    <p className="text-sm text-red-500 mt-1">Пожалуйста, введите корректный номер телефона</p>
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
                  />
                </div>
                <div>
                  <Label htmlFor="telegram">Telegram</Label>
                  <Input
                    id="telegram"
                    name="telegram"
                    value={formData.telegram}
                    onChange={handleInputChange}
                    placeholder="@username"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={!isFormValid}>
                  Задать вопрос
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Регистрация на интенсив</DialogTitle>
            <DialogDescription>Заполните форму, и мы свяжемся с вами для подтверждения участия</DialogDescription>
          </DialogHeader>
          {isSubmitted ? (
            <div className="py-6 flex flex-col items-center justify-center text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
              <h3 className="text-xl font-medium text-gray-900">Заявка отправлена!</h3>
              <p className="mt-2 text-gray-500">
                Спасибо за интерес к нашему интенсиву. Мы свяжемся с вами в ближайшее время.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="modal-firstName">Имя</Label>
                    <Input
                      id="modal-firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Введите имя"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="modal-lastName">Фамилия</Label>
                    <Input
                      id="modal-lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Введите фамилию"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="modal-phone">Телефон</Label>
                  <Input
                    id="modal-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+7 (XXX) XXX-XX-XX"
                  />
                  {formData.phone && !/^\+?\d{10,15}$/.test(formData.phone) && (
                    <p className="text-sm text-red-500">Пожалуйста, введите корректный номер телефона</p>
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
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="modal-telegram">Telegram</Label>
                  <Input
                    id="modal-telegram"
                    name="telegram"
                    value={formData.telegram}
                    onChange={handleInputChange}
                    placeholder="@username"
                  />
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
              <h3 className="text-xl font-bold mb-4">Продвинутый AI-инженер</h3>
              <p className="text-gray-400">Интенсив по интеграции RAG и созданию AI-агентов</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    О курсе
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Программа
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Эксперты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:info@ai-course.com" className="text-gray-400 hover:text-white transition-colors">
                    info@ai-course.com
                  </a>
                </li>
                <li>
                  <a href="tel:+78001234567" className="text-gray-400 hover:text-white transition-colors">
                    +7 (800) 123-45-67
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Документы</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Политика конфиденциальности
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Условия использования
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 Продвинутый AI-инженер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ExpertCard({
  imageSrc,
  name,
  role,
  description,
}: {
  imageSrc: string
  name: string
  role: string
  description: string
}) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-square overflow-hidden">
        <img src={imageSrc || "/placeholder.svg"} alt={name} className="w-full h-full object-cover object-top" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-indigo-600 font-medium mb-3">{role}</p>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  )
}

