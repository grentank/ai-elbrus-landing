import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const weeksData = [
  {
    title: "Неделя 1: Low-code и no-code AI-инструменты",
    value: "week-1",
    days: [
      {
        title: "Понедельник: Обзор возможностей AI для разработки",
        description:
          "Знакомство с современными AI-инструментами, которые значительно ускоряют процесс разработки. Практическое применение AI IDE и чат-систем для решения реальных задач.",
        points: [
          "AI IDE: Cursor + MCP, Giga IDE, Github Copilot",
          "Чат-системы: DeepSeek, GigaChat, ChatGPT и другие",
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
        title: "Четверг: Model Context Protocol (MCP)",
        description:
          "Введение в протокол Model Context Protocol (MCP) и его применение для улучшения качества ответов AI. Подключение коммьюнити-серверов и написание собственного MCP-сервера.",
        points: [
          "Что такое MCP и его преимущества",
          "Обзор платформ коммьюнити серверов",
          "Пишем свой MCP-сервер, подключаем в Cursor IDE",
        ],
      },
      {
        title:
          "Пятница: n8n в качестве low-code платформы для создания агентов",
        description:
          "Практическое применение n8n для создания агентов для автоматизации рутинных задач. Подключение LLM по API, инструментов и памяти к агенту.",
        points: [
          "Разворачиваем локальную версию n8n через Docker или npx",
          "Выполнение действий по триггеру: сообщение в чате, webhook, отправка формы",
          "Настройка агента на автоматическое выполнение действий и взаимодействие с инструментами",
        ],
      },
    ],
  },
  {
    title: "Неделя 2: AI-агенты и RAG",
    value: "week-2",
    days: [
      {
        title: "Понедельник: Основы RAG и работа с векторными базами данных",
        description:
          "Введение в технологию Retrieval-Augmented Generation (RAG) и её применение для улучшения качества ответов AI. Создание и настройка векторных баз данных.",
        points: [
          "Принципы работы RAG и его преимущества",
          "Создание векторной базы данных и эмбеддинг",
          "Обзор инструментов: GigaChain Rag и langchain Rag, GraphRAG",
        ],
      },
      {
        title: "Вторник: langchain и создание первого агента",
        description:
          "Погружение в мир AI-агентов и их возможности для автоматизации рутинных задач разработки. Практическое создание первого агента, использующего кастомные и коммьюнити инструменты.",
        points: [
          "Основные принципы работы AI-агентов в LangChain",
          "Что такое инструменты Agent Tools, подключаем Tavily Tool",
          "Пайп с помощью LCEL, объединение с RAG",
        ],
      },
      {
        title: "Среда: langgraph и продвинутые сценарии агентов",
        description:
          "Изучение продвинутых инструментов для создания комплексных AI-агентов с множеством функций на основе графа состояний с помощью LangGraph. Построение агента с расширенными возможностями.",
        points: [
          "Работа с LangGraph для создания агентов на основе графа состояний",
          "Подключение нескольких вершин и описание переходов между ними",
          "Агенты с памятью и их применение, обращаемся к Google Drive",
        ],
      },
      {
        title: "Четверг: Best-practices для создания агентов",
        description:
          "Дорабатываем агента и изучаем лучшие практики для их создания: Human-in-the-loop, обработка ошибок, fallback-стратегии, планирование задач и событий. Рассматриваем бизнес-кейсы применения агентов.",
        points: [
          "Интеграция с Google Sheets, Github и файловыми источниками",
          "Дополнение контекста агента с RAG и из внешних источников",
          "Обработка ошибок, fallback-стратегии и human-in-the-loop",
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

export default function Programm() {
  return (
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
                        <h3 className="text-xl font-bold text-[#4528A8] mb-2">
                          {day.title}
                        </h3>
                        <p className="text-gray-700 mb-4">{day.description}</p>
                        <div className="space-y-2 mt-4">
                          {day.points.map((point, i) => (
                            <div key={i} className="flex items-center">
                              <div className="w-3 h-3 rounded-full bg-[#4528A8] mr-3"></div>
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
  );
}
