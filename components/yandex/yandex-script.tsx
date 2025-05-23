"use client";

import { Suspense } from "react";

import Script from "next/script";
import YandexMetrika from "./yandex-metrica";
import { YANDEX_ID } from "./yandexId";
export default function YandexScript() {
  return (
    <>
      <Script id="metrika-counter" strategy="afterInteractive">
        {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(${YANDEX_ID}, "init", {
                defer: true,
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
          });`}
      </Script>
      <Suspense fallback={<></>}>
        <YandexMetrika />
      </Suspense>
    </>
  );
}
