"use client";
import Script from "next/script";

export const GptHead: React.FC = () => {
  return (
    <>
      <Script
        async
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        strategy="afterInteractive"
      />
      <Script
        id="gpt-head"
        dangerouslySetInnerHTML={{
          __html: `
            window.googletag = window.googletag || { cmd: [] };
            googletag.cmd.push(function() {
              googletag.defineSlot(
                '/100242293/0banner-en-home-300x250-1', 
                  [[300, 300], [300, 250]], 
                    'div-gpt-ad-1736688216002-0').addService(googletag.pubads());
              googletag.pubads().enableSingleRequest();
              googletag.enableServices();
            });
          `,
        }}
      />
    </>
  );
};