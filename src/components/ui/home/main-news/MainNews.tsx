import { BannerEnHome300x250_1 } from "@/components/";
import { MainNewsElements } from "./MainNewsElements";

export const MainNews = () => {
  return (
    <section className="lg:flex pt-10 mb-3">
      <div className="lg:flex-grow">
          <MainNewsElements />
      </div>
      <div className="lg:w-[332px] lg:pl-8 flex-none">
        <p>Sidebar</p>
        <BannerEnHome300x250_1 />
      </div>
    </section>
  );
};
