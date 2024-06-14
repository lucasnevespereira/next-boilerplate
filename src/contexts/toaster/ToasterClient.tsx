"use client"
import Toast from "@/components/ui/Toast";

export default function ToasterClient({ children }: any) {
  return (
      <>
        {children}
          <Toast />
      </>
  );
}