import myPhoto from "../assets/temusho.jpeg";

export default function MeetTemusho() {
  return (
    <section className="max-w-5xl mx-auto py-32 px-8">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        <div>
          <img
            src={myPhoto}
            alt="Temusho"
            className="w-72 h-72 rounded-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-6">
            Meet Temusho
          </h2>

          <p className="text-lg leading-8 text-gray-300">
            I am a Junior Developer at Santam and an ACMP student at Henley Business School.
            While my career began with solving technical problems, this journey challenged me to think about leadership, influence, purpose and impact.
          </p>
        </div>

      </div>
    </section>
  );
}