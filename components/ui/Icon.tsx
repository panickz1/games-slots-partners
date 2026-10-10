const paths: Record<string, string> = {
  cards: "M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm5 5c-1 1.6-2.6 2.8-2.6 4.3 0 1.4 1.6 2 2.6 1 1 1 2.6.4 2.6-1C14.6 10.8 13 9.6 12 8Zm0 6v2.5",
  swords: "M14.5 17.5 3 6V3h3l11.5 11.5M13 19l6-6M16 16l4 4M19 21l2-2M9.5 6.5 14 2h3v3l-4.5 4.5M5 14l4 4M7 17l-3 3M3 19l2 2",
  crown: "m2 7 5 4 5-7 5 7 5-4-2 12H4L2 7Zm2 15h16",
  bolt: "M13 2 4 14h7l-1 8 9-12h-7l1-8Z",
  chart: "M3 3v18h18M7 15l4-4 3 3 6-7",
  headset: "M3 14v-2a9 9 0 0 1 18 0v2M3 14a2 2 0 0 1 2-2h1v7H5a2 2 0 0 1-2-2v-3Zm18 0a2 2 0 0 0-2-2h-1v7h1a2 2 0 0 0 2-2v-3Zm-3 5c0 1.7-2.7 3-6 3",
  link: "M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7",
  image: "M4 4h16v16H4zM4 16l5-5 4 4 3-3 4 4M15 8.5h.01",
  code: "m8 6-6 6 6 6m8-12 6 6-6 6",
  gift: "M3 8h18v4H3zM5 12v9h14v-9M12 8v13M12 8S10.5 3 8 3a2.5 2.5 0 0 0 0 5h4Zm0 0s1.5-5 4-5a2.5 2.5 0 0 1 0 5h-4Z",
  check: "m5 12 5 5L20 7",
  plus: "M12 5v14M5 12h14",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6 6 18",
  arrow: "M5 12h14m-6-6 6 6-6 6",
  mail: "M3 5h18v14H3zM3 5l9 8 9-8",
  send: "M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z",
};

export function Icon({ name, className = "size-6" }: { name: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d={paths[name]} />
    </svg>
  );
}
