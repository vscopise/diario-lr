"use client";

import Script from "next/script";

export const SideBanner = () => {
  return (
    <div
      id="div-gpt-ad-1736742873965-0"
      className="min-w-[300px] min-h-[250px]"
    >
      <Script
        id="0bannerEnHome300x2502"
        
        dangerouslySetInnerHTML={{
          __html: `
            googletag.cmd.push(function() { 
              googletag.display('div-gpt-ad-1736742873965-0'); 
            });
          `,
        }}
      />
    </div>
  );
};
