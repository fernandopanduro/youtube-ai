const stats = [
  { id: 1, name: "New users monthly", value: "36,000 Users" },
  { id: 2, name: "Thumbnails created", value: "2 millon" },
  { id: 3, name: "Thumbnails every 24 hours", value: "52,000" },
];

export default function Stats() {
  return (
    <div id="stats" className=" py-24 bg-transparent sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map(stat => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
