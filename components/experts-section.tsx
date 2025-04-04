const experts = [
  {
    name: "Александр Князев",
    imageSrc:
      "https://getmentor.blob.core.windows.net/mentor-images/aleksandr-kniazev-3786/full",
    role: "Ведущий эксперт",
    points: [
      "Выпускник мехмата МГУ",
      "Более 10 лет опыта программирования на C++, Wolfram и Python",
      "Эксперт в области веб-разработки и кибербезопасности",
      "Выступает на крупных IT-конференциях (Dump, CodeFest, MoscowJS, SOC-Forum)",
    ],
    description:
      "Эксперт в области веб-разработки и кибербезопасности с глубоким академическим и практическим опытом. Выпускник мехмата МГУ. Обладает более чем 8-летним опытом программирования на C++, Wolfram и Python, а также 5-летним опытом разработки на JavaScript. Выступал на ведущих российских IT-конференциях, включая Dump, CodeFest, MoscowJS, SOC-Forum и МУФ, где делился экспертизой в веб-разработке и кибербезопасности.",
  },
  {
    name: "Юрий Плисковский",
    imageSrc:
      "https://elbrusboot.camp/static/d0b6ef0d8f9828a6dc707fc64c721d11/c0321/pliskovskiy.jpg",
    role: "Ведущий эксперт",
    points: [
      "Директор по образовательной программе в Эльбрус Буткемп",
      "Организатор и ведущий IT-образовательных проектов",
      "10+ лет опыта разработки и преподавания в IT-сфере",
      "Эксперт по созданию учебных программ и развитию IT-команд",
    ],
    description:
      "Директор по образованию в Эльбрус Буткемп. Организатор и ведущий образовательных проектов в области IT.",
  },
  {
    name: "Георгий Бабаян",
    imageSrc:
      "https://elbrusboot.camp/static/30d229c2aaef047f7d9a5c2116acd8db/c3f7f/babayan.jpg",
    role: "CEO & Основатель Эльбрус Буткемп",
    points: [
      "10 лет в IT-образовании и запуске EdTech-проектов",
      "Основатель Эльбрус Буткемп (2000+ выпускников)",
      "Развивает AI-школу с акцентом на практические навыки",
      "Руководил командами до 50+ человек, сотрудничал с Сбер, Тинькофф, Selectel",
    ],
    description:
      "10 лет в IT-образовании и запуске EdTech-проектов\nОсновал Elbrus Bootcamp — одну из крупнейших школ программирования в России (2000+ выпускников)  \nРазвивает собственную AI-школу с фокусом на практические навыки и карьерные результаты  \nРуководил командами в 50+ человек, создавал и масштабировал образовательные продукты  \nРаботал с партнёрами из IT и HR-сферы: Сбер, Тинькофф, Selectel \nРегулярно выступает на конференциях по технологиям, образованию и управлению командами",
  },
];

function ExpertCard({
  imageSrc,
  name,
  role,
  points,
  description,
}: {
  imageSrc: string;
  name: string;
  role: string;
  description: string;
  points: string[];
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
        <p className="text-[#4528A8] font-medium mb-3">{role}</p>
        {/* <p className="text-gray-700">{description}</p> */}
        <ul className="list-disc list-inside text-gray-700">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ExpertsSection() {
  return (
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
  );
}
