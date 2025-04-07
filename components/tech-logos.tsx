"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

interface TechLogoProps {
  name: string;
  src: string;
  alt: string;
}

const TechLogo = ({ name, src, alt }: TechLogoProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-sm p-4 w-24 h-24 flex items-center justify-center">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={64}
          height={64}
          className="object-contain"
        />
      </div>
      <span className="mt-2 text-sm font-medium text-gray-700">{name}</span>
    </div>
  );
};

const PlaceholderLogo = ({ name }: { name: string }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-sm p-4 w-24 h-24 flex items-center justify-center border-2 border-dashed border-gray-300">
        <span className="text-gray-400 text-xs text-center">
          Логотип {name}
        </span>
      </div>
      <span className="mt-2 text-sm font-medium text-gray-700">{name}</span>
    </div>
  );
};

export default function TechLogos({
  scrollToPayment,
}: {
  scrollToPayment: () => void;
}) {
  const logos = [
    // {
    //   name: "JavaScript",
    //   src: "/logos/javascript.svg",
    //   alt: "JavaScript Logo",
    // },
    // { name: "Python", src: "/logos/python.svg", alt: "Python Logo" },
    { name: "OpenAI", src: "/logos/openai.svg", alt: "OpenAI Logo" },
    {
      name: "DeepSeek",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7VWRBg1RU4RrOGIh_o0mzvPkIlkQvlYBxRA&s",
      alt: "Deep Seek logo",
    },
    {
      name: "Gigachat",
      src: "/logos/gigachat.svg",
      alt: "Gigachat Logo",
    },
    {
      name: "Yandex GPT",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Ds2vZqzVmENoEwp8WVugmZr-I_qtUx1oIg&s",
      alt: "Yandex Cloud Logo",
    },
    {
      name: "Cursor",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAoqhlxXf-36CbEskbnnPQ6S6Ra92Mx4Rjg&s",
      alt: "Cursor Logo",
    },
    {
      name: "Windsurf",
      src: "https://images.prismic.io/sacra/Z4WDYZbqstJ99Zrs_codeiumlogo.jpeg?auto=format,compress",
      alt: "Codeium logo",
    },
    {
      name: "Github Copilot",
      src: "https://github.gallerycdn.vsassets.io/extensions/github/copilot/1.294.1479/1743558160015/Microsoft.VisualStudio.Services.Icons.Default",
      alt: "Github Copilot logo",
    },
    { name: "LangChain", src: "/logos/langchain.svg", alt: "LangChain Logo" },
    { name: "LangGraph", src: "/logos/langgraph.svg", alt: "LangGraph Logo" },
    // { name: "Next.js", src: "/logos/nextjs.svg", alt: "Next.js Logo" },
    { name: "v0", src: "/logos/v0.svg", alt: "v0 Logo" },
    { name: "Replit", src: "/logos/replit.svg", alt: "Replit Logo" },
    {
      name: "Lovable",
      src: "https://fb-usercontent.fra1.cdn.digitaloceanspaces.com/01938803-b9d3-7280-abdd-a87d384bd37f.png",
      alt: "Lovable Logo",
    },
    {
      name: "Tavily",
      src: "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/ba5c5b3ffbf447dc9b30664b3e0c2abb",
      alt: "Tavily logo",
    },
    {
      name: "MCP",
      src: "/logos/mcp.png",
      alt: "Model Context Protocol",
    },
    {
      name: "n8n",
      src: "/logos/n8n.png",
      alt: "n8n Logo",
    },
    // { name: "RAG", src: "/logos/rag.svg", alt: "RAG Logo" },
    // { name: "React", src: "/logos/react.svg", alt: "React Logo" },
  ];

  // const placeholders = [{ name: "GigaChat" }, { name: "Yandex Cloud" }];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Технологии, которые вы освоите
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Интенсив охватывает самые современные инструменты и технологии в
            области искусственного интеллекта и разработки
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {logos.map((logo) => (
            <TechLogo
              key={logo.name}
              name={logo.name}
              src={logo.src}
              alt={logo.alt}
            />
          ))}

          {/* {placeholders.map((placeholder) => (
            <PlaceholderLogo key={placeholder.name} name={placeholder.name} />
          ))} */}
        </div>

        <div className="flex justify-center">
          <Button
            onClick={scrollToPayment}
            className="bg-indigo-600 hover:bg-indigo-700"
          >
            Начать обучение
          </Button>
        </div>
      </div>
    </section>
  );
}
