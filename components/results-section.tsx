import { CheckCircle } from "lucide-react";

export default function ResultsSection() {
  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Результаты курса</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="space-y-6">
              {/* <p className="text-gray-700 text-lg leading-relaxed mb-6">
                <strong>
                  Пройдя интенсив, вы получите не только знания, но и доступ к
                  сообществу AI-инженеров
                </strong>
              </p> */}
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Официальный сертификат о прохождении курса</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>
                    Доступ к закрытому Telegram-чату выпускников для нетворкинга
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Вечный доступ к материалам курса</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>
                    Новые карьерные возможности в быстрорастущей сфере
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-[400px] max-w-full aspect-[1/1.414] rounded-lg shadow-lg overflow-hidden">
              <img
                src="/images/certificate.png"
                alt="Сертификат об окончании курса"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
