import type { EventData } from "@/layouts/Layout.astro";

const events: EventData[] = [
  {
    id: "birthday",
    title: "Birthday",
    description: "Cumpleaños - 2026",
    timestamp: 1796623200000,
    backgroundImage: "/img/bg/akron.webp",
    colorClass: "text-red-600",
    people: ["alberto"],
  },
  // {
  //   id: "Euro-trip",
  //   title: "Vacations",
  //   description: "Cumpleaños - 2025",
  //   timestamp: 1763430900000,
  //   backgroundImage: "/img/bg/munich.webp",
  //   colorClass: "text-yellow-600",
  //   people: ["alberto"],
  // },
  // {
  //   id: "Euro-trip-alone",
  //   title: "Euro Trip",
  //   description: "Secret",
  //   timestamp: 1771243200000,
  //   backgroundImage: "/img/bg/sevilla.webp",
  //   colorClass: "text-green-600",
  //   people: ["alberto"],
  // },
  {
    id: "orlando-trip-2025",
    title: "Orlando-Disney",
    description: "Orlando-Disney Trip - 2025",
    timestamp: 1786953600000,
    backgroundImage: "/img/bg/magic-kingdom.webp",
    colorClass: "text-blue-600",
    people: ["alberto", "desiree", "arturo", "jeni"],
  },
  {
    id: "world-cup-2026",
    title: "World Cup 2026",
    description: "World Cup 2026",
    timestamp: 1781204400000,
    backgroundImage: "/img/bg/world-cup.webp",
    colorClass: "text-lime-500",
    people: ["alberto"],
  },
  {
    id: "alaska-cruise-2026",
    title: "Alaska Cruise 2026",
    description: "Alaska Cruise 2026",
    timestamp: 1788990180000,
    backgroundImage: "/img/bg/alaska.webp",
    colorClass: "text-cyan-400",
    people: ["alberto", "mariel", "payan", "alan"],
  },
  {
    id: "los-angeles-2026",
    title: "Los Ángeles 2026",
    description: "Los Angeles 2026",
    timestamp: 1795615200000,
    backgroundImage: "/img/bg/los-angeles.webp",
    colorClass: "text-yellow-400",
    people: ["alberto"],
  },
  {
    id: "euro-trip-2027",
    title: "Euro Trip 2027",
    description: "Euro Trip 2027",
    timestamp: 1807071600000,
    backgroundImage: "/img/bg/london.webp",
    colorClass: "text-orange-400",
    people: ["alberto"],
  },
];

export const sortEventsByTimestamp = (
  events: EventData[],
  ascending: boolean = true,
) => {
  return events.sort((a, b) =>
    ascending ? a.timestamp - b.timestamp : b.timestamp - a.timestamp,
  );
};

export const orderedEvents = sortEventsByTimestamp(events);
