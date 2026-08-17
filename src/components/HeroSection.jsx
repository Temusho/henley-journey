import Stars from "./Stars";

export default function HeroSection() {
  return (
   <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-[#14091f] via-[#3B1E54] to-[#5E3B8C] text-center px-8 overflow-hidden">
        <Stars />
      <div>
        
        <p className="uppercase tracking-[0.4em] text-pink-300 mb-4">
            <div className="absolute text-[32rem] opacity-[0.03] font-bold">
  ✦
</div>
          Henley Journey
        </p>

        <h1 className="text-7xl font-bold mb-6">
          The Journey Within
        </h1>

        <p className="max-w-2xl text-xl text-purple-200 mx-auto mb-10">
          A story of growth, reflection, leadership and becoming.
        </p>

        <button className="bg-pink-500 hover:bg-pink-400 px-8 py-4 rounded-full text-lg transition" >
          <a href="#journey-map">Begin The Journey →</a>
        </button>
      </div>
    </section>
  );
}