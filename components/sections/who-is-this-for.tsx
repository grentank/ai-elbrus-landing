import { Code, Database, Zap } from "lucide-react";

export default function WhoIsThisFor() {
  return (
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
              Если вы уже работаете в IT и хотите вывести свою эффективность на
              новый уровень, вы научитесь интегрировать инновационные AI-решения
              в существующие проекты.
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
  );
}
