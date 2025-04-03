import { Calendar, CheckCircle, Zap } from "lucide-react";

export default function HowTrainingWorks() {
  return (
    <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Как проходит обучение</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Интенсивный формат обучения, где теория сразу применяется на практике. Каждый день вы будете работать как
              индивидуально, так и в группах, создавая новые приложения и автоматизируя свои рабочие процессы.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-indigo-600">Практический подход</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Ежедневная работа над реальными проектами</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Разбор бизнес-кейсов и внедрение AI-инструментов в настоящий бизнес</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Дообучение RAG на внутренней документации компаний</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Знакомство с новыми инструментами и технологиями</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-indigo-600">Поддержка и сообщество</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Постоянная поддержка от экспертов и менторов</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Группа единомышленников, работающих над передовыми AI-решениями</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Совместная работа и обмен опытом</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Невообразимые достижения в кратчайшие сроки</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-12">
            {/* Item 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gray-200 rounded-lg aspect-video overflow-hidden">
                <img src="/1.jpg" alt="Интенсивное обучение" className="w-full h-full object-cover" />
              </div>
              <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-start mb-4">
                  <Calendar className="h-20 w-20 text-indigo-600 mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">10 интенсивных дней</h3>
                    <p className="text-gray-700">
                      Онлайн встречи с понедельника по пятницу в 19:00 на 2 часа в течение двух недель. На лекциях вы
                      получите теоретическую базу и разберёте бизнес-кейсы по интеграции RAG и созданию AI-агентов.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-start mb-4">
                  <Zap className="h-20 w-20 text-indigo-600 mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Практика и реальные проекты</h3>
                    <p className="text-gray-700">
                      Каждый день вы будете создавать новые приложения, знакомиться с новыми инструментами и
                      автоматизировать свою работу. Мы разбираем реальные бизнес-кейсы и внедряем AI-инструменты в
                      настоящий бизнес.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 bg-gray-200 rounded-lg aspect-video overflow-hidden">
                <img src="/2.jpg" alt="Практические занятия" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
