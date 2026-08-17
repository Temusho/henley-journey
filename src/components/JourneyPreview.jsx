const stops = [
  {
    icon: "🏡",
    title: "Village of Comfort",
  },
  {
    icon: "🌫",
    title: "Valley of Self-Doubt",
  },
  {
    icon: "🌲",
    title: "Forest of Feedback",
  },
  {
    icon: "🌊",
    title: "River of Resilience",
  },
  {
    icon: "🌉",
    title: "Bridge of Leadership",
  },
  {
    icon: "⛰",
    title: "Summit of Purpose",
  },
];

export default function JourneyPreview() {
  return (
    <section id="journey-map" className="py-32">

      <h2 className="text-center text-5xl font-bold mb-20">
        Journey Map
      </h2>

      <div className="max-w-3xl mx-auto">

        {stops.map((stop, index) => (
          <div
            key={stop.title}
            className="flex flex-col items-center"
          >
            <div
              className="
              bg-purple-900
              border-2
              border-pink-400
              rounded-full
              p-8
              w-72
              text-center
              hover:scale-110
              transition
              cursor-pointer
            "
            >
              <div className="text-5xl mb-3">
                {stop.icon}
              </div>

              <h3 className="text-xl font-bold">
                {stop.title}
              </h3>
            </div>

            {index !== stops.length - 1 && (
              <div className="w-1 h-20 bg-pink-400"></div>
            )}
          </div>
        ))}

      </div>
    </section>
  );
}