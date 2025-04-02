import { BookOpen, Calendar, CheckCircle, Users } from "lucide-react";
import Image from "next/image";

export default function HowTrainingWorks() {
  return (
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
                    Онлайн встречи с понедельника по пятницу в 19:00 на 2 часа в
                    течение двух недель. На лекциях вы получите теоретическую
                    базу и разберёте бизнес-кейсы по интеграции RAG и созданию
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
                  <h3 className="text-xl font-bold mb-2">
                    Презентации с первоклассными материалами
                  </h3>
                  <p className="text-gray-700">
                    Всё самое важное про курс и не только! Пошаговые инструкции,
                    требуемые пакеты и даже готовые промты - все эти материалы
                    будут ваши.
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
                    Покажите ваши результаты на финальной встрече с экспертами.
                    Получите качественную обратную связь и рекомендации по
                    дальнейшему развитию в области AI-решений.
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
  );
}
