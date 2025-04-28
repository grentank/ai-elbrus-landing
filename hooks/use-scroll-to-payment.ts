"use client";
import { useCallback } from "react";

export default function useScrollToPayment() {
  const scrollToPayment = useCallback(() => {
    const paymentSection = document.getElementById("payment-button-section");
    paymentSection?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return scrollToPayment;
}
