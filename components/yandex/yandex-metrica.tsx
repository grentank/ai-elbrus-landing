"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { YANDEX_ID } from "./yandexId";

export default function YandexMetrika() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    try {
      const url = `${pathname}?${searchParams}`;
      // @ts-ignore
      ym(YANDEX_ID, "hit", url);
    } catch (error) {
      console.log("YandexMetrika error");
      console.error(error);
    }
  }, [pathname, searchParams]);

  return null;
}
