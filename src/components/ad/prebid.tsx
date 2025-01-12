"use client"
import Script from "next/script";

export const PrebidHead: React.FC = () => {
  return (
    <>
      <Script
        async
        src="https://cdn.jsdelivr.net/npm/prebid.js@latest/dist/not-for-prod/prebid.js"
        strategy="afterInteractive"
      />
      <Script
        id="prebid-head"
        dangerouslySetInnerHTML={{
          __html: `window.pbjs = window.pbjs || { que: [] };`,
        }}
      />
    </>
  );
};