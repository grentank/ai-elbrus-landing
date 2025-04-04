export default function AboutTheIntensive() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-1 gap-8">
          <div className="flex flex-col gap-4">
            <div className="text-center mb-4">
              <h2 className="text-3xl font-bold mb-4">О чём интенсив</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-gray-700">
                  Чтобы оставаться конкурентоспособным, современному
                  разработчику важно работать быстрее с минимальными затратами.
                  Интеграция RAG и AI-агентов позволяет оптимизировать процессы,
                  ускорить разработку и обеспечить стабильное качество
                  результатов.
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
          {/* <div className="flex flex-col gap-4">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Программа интенсива</h2>
              </div>

              <Programm />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
