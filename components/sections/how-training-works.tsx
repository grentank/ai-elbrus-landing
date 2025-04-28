import { Calendar, Code, Users } from "lucide-react";

export default function HowTrainingWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Как проходит обучение</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Интенсивный формат обучения, где теория сразу применяется на
            практике. Каждый день вы будете работать как индивидуально, так и в
            группах, создавая новые приложения и автоматизируя свои рабочие
            процессы.
          </p>
        </div>

        <div className="space-y-12">
          {/* График занятий */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gray-200 rounded-lg aspect-video overflow-hidden">
              <img
                src="/images/4.webp"
                alt="График занятий"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-start mb-4">
                <Calendar className="h-20 w-20 text-[#4528A8] mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Удобный график занятий
                  </h3>
                  <p className="text-gray-700">
                    Занятия проходят в Zoom по будням в 19:00 МСК, длительность
                    2 часа. Все лекции записываются и доступны для просмотра в
                    любое время. Вы сможете пересматривать материал и не
                    беспокоиться, если пропустите занятие.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Сообщество */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-start mb-4">
                <Users className="h-20 w-20 text-[#4528A8] mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Поддержка сообщества
                  </h3>
                  <p className="text-gray-700">
                    Вы станете частью активного сообщества в Telegram, где
                    сможете общаться с экспертами и другими участниками курса.
                    Групповая работа, обмен опытом и нетворкинг помогут вам
                    быстрее освоить новые технологии и найти единомышленников.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 bg-gray-200 rounded-lg aspect-video overflow-hidden">
              <img
                src="/images/5.webp"
                alt="Сообщество"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Практика */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gray-200 rounded-lg aspect-video overflow-hidden">
              <img
                src="/images/2.jpg"
                alt="Практические задания"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-start mb-4">
                <Code className="h-20 w-20 text-[#4528A8] mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Практические проекты
                  </h3>
                  <p className="text-gray-700">
                    Каждый день вы будете работать над реальными проектами:
                    создавать AI-приложения, настраивать RAG на корпоративную
                    документацию, разрабатывать AI-агентов для автоматизации.
                    Все проекты основаны на реальных бизнес-задачах.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
