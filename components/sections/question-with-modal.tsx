"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useValidateForm from "@/hooks/use-validate-form";
import { CheckCircle, HelpCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

export default function QuestionWithModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    formData,
    formErrors,
    isFormValid,
    handleInputChange,
    setFormErrors,
    setFormData,
  } = useValidateForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      try {
        const questionElement = document.getElementById(
          "question"
        ) as HTMLTextAreaElement;
        const question = questionElement?.value || "";

        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            question,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to send message");
        }

        // Show success message
        setIsSubmitted(true);

        // Reset form after submission
        setTimeout(() => {
          setIsModalOpen(false);
          setIsSubmitted(false);
          setFormData({
            fullName: "",
            phone: "",
            email: "",
          });
          if (questionElement) {
            questionElement.value = "";
          }
        }, 2000);
      } catch (error) {
        console.error("Error:", error);
        alert(
          "Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте позже."
        );
      }
    }
  };
  return (
    <>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <HelpCircle className="h-16 w-16 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Остались вопросы?</h3>
            <p className="text-gray-700 mb-6">Свяжитесь с нами</p>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-indigo-600 hover:bg-indigo-700"
            >
              Задать вопрос
            </Button>
          </div>
        </div>
      </section>

      {/* Questions Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Задать вопрос</DialogTitle>
            <DialogDescription>
              Заполните форму, и мы свяжемся с вами, чтобы ответить на все ваши
              вопросы
            </DialogDescription>
          </DialogHeader>
          {isSubmitted ? (
            <div className="py-6 flex flex-col items-center justify-center text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
              <h3 className="text-xl font-medium text-gray-900">
                Вопрос отправлен!
              </h3>
              <p className="mt-2 text-gray-500">
                Спасибо за ваш интерес. Мы свяжемся с вами в ближайшее время.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="modal-fullName">Ф.И.О.</Label>
                  <Input
                    id="modal-fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Иванов Иван Иванович"
                    className={formErrors.fullName ? "border-red-500" : ""}
                  />
                  {formErrors.fullName && (
                    <p className="text-sm text-red-500">
                      {formErrors.fullName}
                    </p>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="modal-phone">Телефон</Label>
                  <Input
                    id="modal-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+7XXXXXXXXXX"
                    className={formErrors.phone ? "border-red-500" : ""}
                  />
                  {formErrors.phone && (
                    <p className="text-sm text-red-500">{formErrors.phone}</p>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="modal-email">Email</Label>
                  <Input
                    id="modal-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@mail.com"
                    className={formErrors.email ? "border-red-500" : ""}
                  />
                  {formErrors.email && (
                    <p className="text-sm text-red-500">{formErrors.email}</p>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="question">Ваш вопрос</Label>
                  <textarea
                    id="question"
                    className="min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Опишите ваш вопрос..."
                  ></textarea>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" disabled={!isFormValid}>
                  Отправить
                </Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
