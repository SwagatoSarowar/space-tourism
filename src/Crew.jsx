import commander from "./assets/commander.png";
import specialist from "./assets/specialist.png";
import pilot from "./assets/pilot.png";
import engineer from "./assets/engineer.png";
import { useState } from "react";

const crewMembersData = [
  {
    title: "commander",
    name: "douglas harley",
    img: commander,
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    title: "mission specialist",
    name: "mark Shuttleworth",
    img: specialist,
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    title: "pilot",
    name: "Victor Glover",
    img: pilot,
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
  },
  {
    title: "flight engineer",
    name: "Anousheh Ansari",
    img: engineer,
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
  },
];

export default function Crew() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="bg-crew-mobile md:bg-crew-tablet min-h-screen bg-cover bg-center bg-no-repeat lg:bg-crew-desktop">
      <div className="main-container">
        <div className="mb-[50px] pt-[90px] text-center md:ml-8 md:pt-[150px] md:text-start lg:mb-0 lg:pt-[145px]">
          <h2 className="font-barlow-condensed uppercase tracking-[3.375px] md:text-xl lg:translate-y-full lg:text-[28px] lg:tracking-[4.725px]">
            <span className="mr-5 font-bold text-white/25 lg:mr-7">02</span>
            meet your crew
          </h2>
        </div>
        <div className="flex flex-col items-center justify-between gap-y-10 lg:flex-row">
          <div className="flex flex-grow flex-col justify-center gap-y-8 md:gap-y-[40px] lg:gap-y-[100px]">
            <div className="relative">
              {crewMembersData.map((item, index) => (
                <CrewInfo
                  activeTab={activeTab}
                  index={index}
                  key={item.title}
                  title={item.title}
                  name={item.name}
                  description={item.description}
                />
              ))}
            </div>
            <div className="-order-1 flex gap-x-1 self-center md:order-1 lg:gap-x-2 lg:self-start">
              {crewMembersData.map((item, index) => (
                <Navigator
                  key={index}
                  index={index}
                  activeTab={activeTab}
                  onSetActiveTab={setActiveTab}
                />
              ))}
            </div>
          </div>
          <div className="relative -order-1 max-w-[250px] md:order-1 md:max-w-[430px] lg:max-w-[500px]">
            <picture>
              {crewMembersData.map((item, index) => (
                <img
                  className={`left-0 top-0 w-full border-b-2 border-white/20 duration-500 ${
                    index !== 0 && "absolute"
                  } ${activeTab !== index && "opacity-0"}`}
                  src={item.img}
                  key={item.title}
                />
              ))}
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}

function CrewInfo({ activeTab, index, title, name, description }) {
  return (
    <div
      className={`left-0 top-0 text-center duration-500 lg:text-start ${
        index !== 0 && "absolute"
      } ${activeTab !== index && "opacity-0"}`}
    >
      <h3 className="font-bellefair uppercase text-white/50 md:text-2xl lg:text-[32px]">
        {title}
      </h3>
      <h2 className="mb-4 mt-2 font-bellefair text-2xl uppercase leading-normal md:text-[40px] lg:text-[56px]">
        {name}
      </h2>
      <p className="max-w-[460px] font-barlow text-[15px] leading-[25px] text-light md:text-base md:leading-[28px] lg:max-w-[445px] lg:text-lg lg:leading-[32px]">
        {description}
      </p>
    </div>
  );
}

function Navigator({ index, activeTab, onSetActiveTab }) {
  return (
    <button className="group p-2" onClick={() => onSetActiveTab(index)}>
      <div
        className={`aspect-square h-2.5 rounded-full bg-white duration-150 group-hover:opacity-50 lg:h-4 ${
          activeTab === index ? "opacity-100" : "opacity-20"
        }`}
      ></div>
    </button>
  );
}
