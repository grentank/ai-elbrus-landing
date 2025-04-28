import { useEffect, useState } from "react";

export default function useValidateForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    fullName: "",
    phone: "",
    email: "",
    promoCode: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    const { fullName, phone, email } = formData;
    const errors = {
      fullName: "",
      phone: "",
      email: "",
      promoCode: "",
    };

    // Validate fullName
    if (fullName.trim().length > 0) {
      if (fullName.trim().length < 3) {
        errors.fullName = "Ф.И.О. должно содержать минимум 3 символа";
      } else if (!fullName.includes(" ")) {
        errors.fullName = "Ф.И.О. должно содержать как минимум 2 слова";
      } else if (fullName.trim().split(/\s+/).filter(Boolean).length < 2) {
        errors.fullName = "Ф.И.О. должно содержать как минимум 2 слова";
      }
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim().length > 0 && !emailRegex.test(email)) {
      errors.email = "Пожалуйста, введите корректный email";
    }

    // Validate phone
    const phoneRegex = /^(\+7|7|8)(\d{10})$/;
    if (phone.trim().length > 0 && !phoneRegex.test(phone)) {
      errors.phone = "Телефон должен начинаться с +7, 7 или 8, затем 10 цифр";
    }

    setFormErrors(errors);

    // Form is valid if there are no errors
    setIsFormValid(
      fullName.trim().length > 0 &&
        email.trim().length > 0 &&
        phone.trim().length > 0 &&
        !errors.fullName &&
        !errors.email &&
        !errors.phone
    );
  };

  useEffect(validateForm, [formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return {
    formData,
    formErrors,
    isFormValid,
    handleInputChange,
    setFormErrors,
    setFormData,
  };
}
