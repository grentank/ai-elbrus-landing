"use client";
import { Button } from "@/components/ui/button";
import useScrollToPayment from "@/hooks/use-scroll-to-payment";

export default function ScrollToPaymentButton({
  children,
  ...props
}: React.ComponentProps<typeof Button>) {
  const scrollToPayment = useScrollToPayment();
  return (
    <Button {...props} onClick={scrollToPayment}>
      {children}
    </Button>
  );
}
