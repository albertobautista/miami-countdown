import type { EventData } from "@/layouts/Layout.astro";

const events: EventData[] = [
  {
    id: "birthday",
    title: "Birthday",
    description: "Cumpleaños - 2025",
    timestamp: 1765087200000,
    backgroundImage: "/img/bg/akron.jpg",
  },
  {
    id: "los-angeles",
    title: "Los Angeles 🇲🇽",
    description: "Los Angeles 2025",
    timestamp: 1749949200000,
    backgroundImage: "/img/bg/sofi.jpg",
  },
  {
    id: "final-kings-league",
    title: "Final Kings League",
    description: "Final Kings League - 2025",
    timestamp: 1747530000000,
    backgroundImage: "/img/bg/kings2.jpeg",
  },
];

export const sortEventsByTimestamp = (
  events: EventData[],
  ascending: boolean = true
) => {
  return events.sort((a, b) =>
    ascending ? a.timestamp - b.timestamp : b.timestamp - a.timestamp
  );
};

export const orderedEvents = sortEventsByTimestamp(events);
