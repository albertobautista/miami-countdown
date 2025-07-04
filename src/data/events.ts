import type { EventData } from "@/layouts/Layout.astro";

const events: EventData[] = [
  {
    id: "birthday",
    title: "Birthday",
    description: "Cumpleaños - 2025",
    timestamp: 1765087200000,
    backgroundImage: "/img/bg/akron.webp",
    colorClass: "text-red-600",
    people: ["alberto"],
  },
  {
    id: "Euro-trip",
    title: "Vacations",
    description: "Cumpleaños - 2025",
    timestamp: 1763430900000,
    backgroundImage: "/img/bg/munich.webp",
    colorClass: "text-yellow-600",
    people: ["alberto"],
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
