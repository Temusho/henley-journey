export default function Stars() {
  const stars = [...Array(50)];

  return (
    <>
      {stars.map((_, index) => (
        <div
          key={index}
          className="absolute w-1 h-1 bg-white rounded-full opacity-70"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </>
  );
}