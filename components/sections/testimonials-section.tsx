"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback } from "react";

interface Testimonial {
  author: string;
  text: string;
  telegram: string;
  profilePicture: string;
}

const testimonials: Testimonial[] = [
  {
    author: "Денис Осотов",
    text: `Просто во 👍
Курс превзошёл все мои ожидания! Он дал не только фундаментальные знания в области ИИ, но и практические навыки, которые можно сразу применять. Очень понравилась структура подачи материала: от простого к сложному, с множеством примеров и интерактивных заданий. Особенно ценно, что курс сочетал теорию и практику. Уже использовал полученные знания в работе - показываю студентам Lovable и интеграцию ИИ в проекты.`,
    telegram: "@osd3n",
    profilePicture: "denis.jpg",
  },
  {
    author: "Эдуард Гурджиян",
    text: `После курса я очень воодушевлен, очень хочется попробовать применить в своей компании. Но у нас жесткие ограничения на использования софта. Поэтому буду пробовать договариваться.`,
    telegram: "@eddy_js",
    profilePicture: "eduard.jpg",
  },
  {
    author: "Макс Кошеутов",
    text: `Очень понравилась концепция эмбеддинга ЛЛМ, можно дополнить контекст любой модели необходимыми данными, позволяет точечено настраивать модели под себя.
Так же очень впечатлила настройка MCP-серверов, уже в процессе настройки для своего Cursor. 
Знания удалось применить в написании проекта, который позволяет раз в сутки проводить ревью PR для организации. Очень доволен, открыл для себя эту завесу, стал больше применять нейронки в работе) `,
    telegram: "@max_kosheutov",
    profilePicture: "max.jpg",
  },
  {
    author: "Анонимный отзыв",
    text: `курс полностью ответил на мой запрос - запрыгнуть на волну хайпа, понимать что означают эти слова, писать своих агентов

первая неделя - вау-эффект от использования AI-инструментов. 
вторая неделя - AI-агенты, RAG, LangChain и LangGraph (инструменты которые расширяют использование агентов)`,
    telegram: "@anonymous",
    profilePicture: "profile.png",
  },
];

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    inViewThreshold: 0.7,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Отзывы наших слушателей
        </h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                  <div className="bg-white rounded-lg shadow-lg p-6 h-full max-w-2xl mx-auto">
                    <div className="flex items-center mb-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                        <Image
                          src={`/images/testimonials/${testimonial.profilePicture}`}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          {testimonial.author}
                        </h3>
                        <a
                          href={`https://t.me/${testimonial.telegram.slice(1)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          {testimonial.telegram}
                        </a>
                      </div>
                    </div>
                    <p className="text-gray-600">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
            onClick={scrollPrev}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
            onClick={scrollNext}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
