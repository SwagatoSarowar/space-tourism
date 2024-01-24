import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-home-mobile bg-cover bg-center bg-no-repeat md:bg-home-tablet lg:bg-home-desktop">
      <div className="main-container">
        <div className="justify-between pb-5 pt-[140px] text-center uppercase md:pt-[250spx] lg:flex lg:pt-[300px] lg:text-start">
          <div className="mx-auto flex max-w-[450px] flex-col gap-y-6 lg:mx-0">
            <h3 className="font-barlow-condensed text-base tracking-[4.725px] text-light  md:text-xl lg:text-[28px]">
              so, you want to travel to
            </h3>
            <h1 className="font-bellefair text-[88px] leading-[100px] md:text-[150px] md:leading-[150px] lg:leading-normal">
              space
            </h1>
            <p className="font-barlow text-[15px] normal-case leading-[25px] text-light md:text-base md:leading-[28px] lg:text-lg lg:leading-8">
              Let&apos;s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we&apos;ll give you a truly
              out of this world experience!
            </p>
          </div>
          <div className="self-end">
            <Link
              to="/destination"
              className="mt-[80px] inline-block rounded-full bg-white px-7 py-16 font-bellefair text-xl uppercase tracking-[2px] text-dark outline outline-0 outline-white/10 duration-200 hover:outline-[44px] md:mt-[100px] md:px-[47px] md:py-[103px] md:text-[32px] md:hover:outline-[88px] lg:mb-[44px] lg:mr-[88px] lg:mt-0 lg:px-[60px] lg:py-[118px]"
            >
              explore
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
