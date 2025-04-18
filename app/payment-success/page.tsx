import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Success Message */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Поздравляем с покупкой курса!
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Вы сделали важный шаг к тому, чтобы стать одним из первых
              AI-инженеров в России. Впереди вас ждут 10 дней интенсивного
              обучения, которые изменят ваш подход к разработке.
            </p>
          </div>

          {/* Telegram Group Card */}
          <Card className="mb-8 border-indigo-200 shadow-md">
            <CardHeader className="bg-indigo-50">
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-6 w-6 text-indigo-600" />
                Присоединяйтесь к сообществу
              </CardTitle>
              <CardDescription>
                Все участники курса и эксперты уже ждут вас в Telegram-группе
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700 mb-4">
                В группе вы найдете всю необходимую информацию о курсе, сможете
                задать вопросы экспертам и познакомиться с другими участниками.
                Это ваше пространство для общения и обмена опытом.
              </p>
            </CardContent>
            <CardFooter className="bg-gray-50 border-t border-gray-100">
              <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
                <Link
                  href="https://t.me/+Fk6jMVyk3TZiNGFi"
                  // href="https://t.me/+Ez-Yx5C1QfwwOTgy"
                  // href="https://t.me/+VD1BgOhDDAo4YWU6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" /> Присоединиться к
                  группе
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Materials Card */}
          {/* <Card className="border-indigo-200 shadow-md">
            <CardHeader className="bg-indigo-50">
              <CardTitle className="flex items-center gap-2">
                <Download className="h-6 w-6 text-indigo-600" />
                Полезные материалы
              </CardTitle>
              <CardDescription>
                Подготовьтесь к первому дню обучения
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700 mb-4">
                Держи вспомогательные материалы, которые помогут тебе
                подготовиться к первому дню. Здесь ты найдешь список
                рекомендуемых инструментов, краткое введение в основные
                концепции и несколько полезных статей для предварительного
                ознакомления.
              </p>
            </CardContent>
            <CardFooter className="bg-gray-50 border-t border-gray-100">
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="https://github.com/Elbrus-Bootcamp/From-Zero-to-AI-Hero">
                  <Download className="mr-2 h-4 w-4" /> Скачать материалы
                </Link>
              </Button>
            </CardFooter>
          </Card> */}

          {/* Return to Home */}
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/">Вернуться на главную</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
