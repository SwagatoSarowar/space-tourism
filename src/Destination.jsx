import { useState } from "react";
import moon from "./assets/moon.png";
import mars from "./assets/mars.png";
import europa from "./assets/europa.png";
import titan from "./assets/titan.png";

const destinationData = [
  {
    title: "moon",
    img: moon,
    description:
      "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    time: "3 days",
  },
  {
    title: "mars",
    img: mars,
    description:
      "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
    distance: "225 MIL. km",
    time: "9 months",
  },
  {
    title: "europa",
    img: europa,
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. km",
    time: "3 years",
  },
  {
    title: "titan",
    img: titan,
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. km",
    time: "7 years",
  },
];

export default function Destination() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="min-h-screen bg-destination-mobile bg-cover bg-center bg-no-repeat pb-5 md:bg-destination-tablet lg:bg-destination-desktop">
      <div className="main-container">
        <div className="mb-8 pt-[90px] text-center md:mb-[60px] md:ml-8 md:pt-[150px] md:text-start lg:mb-[80px] lg:pt-[175px]">
          <h2 className="font-barlow-condensed uppercase tracking-[3.375px] md:text-xl lg:text-[28px] lg:tracking-[4.725px]">
            <span className="mr-5 font-bold text-white/25 lg:mr-7">01</span>
            pick your destination
          </h2>
        </div>
        <div className="flex flex-col items-center justify-between gap-y-12 text-center lg:flex-row lg:text-start">
          <div className="relative lg:ml-12">
            <picture>
              {destinationData.map((item, index) => (
                <img
                  className={`w-[175px] duration-700 md:w-[300px] lg:w-[445px] ${
                    index !== 0 && "absolute left-0 top-0"
                  } ${activeTab !== index && "opacity-0"}`}
                  key={item.title}
                  src={item.img}
                  alt={`${item.img} image`}
                />
              ))}
            </picture>
          </div>
          <div className="max-w-[575px] lg:max-w-[445px]">
            <div className="mb-4 flex justify-center gap-x-4 md:mb-0 lg:justify-normal">
              {destinationData.map((item, index) => (
                <Button
                  index={index}
                  activeTab={activeTab}
                  onSetActiveTab={setActiveTab}
                  title={item.title}
                  key={item.title}
                />
              ))}
            </div>
            <div className="relative">
              {destinationData.map((item, index) => (
                <DestinationInfo
                  index={index}
                  activeTab={activeTab}
                  title={item.title}
                  key={item.title}
                  description={item.description}
                  distance={item.distance}
                  time={item.time}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button({ index, activeTab, onSetActiveTab, title }) {
  return (
    <button
      onClick={() => onSetActiveTab(index)}
      className={`relative py-2.5 font-barlow-condensed text-sm uppercase tracking-[2.7px] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-white after:opacity-0 after:duration-200 after:content-[''] hover:after:block hover:after:opacity-50 md:py-3.5 md:text-base ${
        activeTab === index ? "text-white after:opacity-100" : "text-light"
      }`}
    >
      {title}
    </button>
  );
}

function DestinationInfo({
  index,
  activeTab,
  title,
  description,
  time,
  distance,
}) {
  return (
    <div
      className={`duration-700 ${title !== "moon" && "absolute left-0 top-0"} ${
        activeTab !== index && "opacity-0"
      }`}
    >
      <h1 className="font-bellefair text-[56px] uppercase leading-normal md:text-[80px] lg:text-[100px]">
        {title}
      </h1>
      <p className="mt-[10px] font-barlow text-[15px] leading-[25px] text-light md:leading-7 lg:text-lg">
        {description}
      </p>
      <div className="my-8 h-px bg-[#383B4B] md:mb-[20px] md:mt-[50px]"></div>
      <div className="flex flex-col justify-center gap-x-20 gap-y-8 uppercase md:flex-row lg:justify-normal">
        <div>
          <p className="mb-3 font-barlow-condensed text-sm tracking-[2.362px] text-light">
            avg. distance
          </p>
          <h3 className="font-bellefair text-[28px]">{distance}</h3>
        </div>
        <div>
          <p className="mb-3 font-barlow-condensed text-sm tracking-[2.362px] text-light">
            est. travel time
          </p>
          <h3 className="font-bellefair text-[28px]">{time}</h3>
        </div>
      </div>
    </div>
  );
}
