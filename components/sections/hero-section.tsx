import ScrollToPaymentButton from "../scroll-to-payment-button";
const codeBlock = `from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from langchain.chains import RetrievalQA
from langchain.llms import OpenAI

# Initialize RAG components
embeddings = OpenAIEmbeddings()
vectorstore = Chroma(
  embedding_function=embeddings,
  collection_name="my_documents"
)

# Create AI agent
agent = RetrievalQA.from_chain_type(
  llm=OpenAI(),
  chain_type="stuff",
  retriever=vectorstore.as_retriever()
)`;

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20 text-white">
      <div className="container mx-auto px-4">
        {/* Logo */}
        <div className="flex justify-start mb-8">
          <div className="w-40 h-12 bg-white/90 rounded-md flex items-center justify-center">
            <a
              href="https://elbrusboot.camp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/logos/elbrus.svg"
                alt="Elbrus Logo"
                className="h-8 w-auto"
              />
            </a>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm backdrop-blur-sm">
              Онлайн-интенсив
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Курс по AI для разработчиков
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-[600px]">
              Освойте интеграцию RAG в свои проекты и научитесь создавать
              AI-агентов для автоматизации разработки, деплоя и бизнес-процессов
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ScrollToPaymentButton
                size="lg"
                className="bg-white text-indigo-700 hover:bg-white/90"
              >
                Купить курс
              </ScrollToPaymentButton>
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full">
                  <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                  <span className="text-sm font-medium text-green-700">
                    middle
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-50 rounded-full">
                  <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm font-medium text-yellow-700">
                    middle+
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            {/* Zoom image - hidden on mobile */}
            <div className="absolute -top-16 -right-8 w-70 h-60 rounded-lg overflow-hidden shadow-xl z-10 rotate-6 border-4 border-white/20 hidden md:block">
              <img
                src="/images/zoom.png"
                alt="Zoom webinar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 opacity-75 blur"></div>
              <div className="relative rounded-lg bg-black p-4 sm:p-6">
                {/* Make code block responsive with overflow handling */}
                <pre className="text-green-400 font-mono text-sm overflow-x-auto whitespace-pre-wrap break-words sm:whitespace-pre">
                  <code>{codeBlock}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
