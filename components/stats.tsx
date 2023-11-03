"use client";

import { motion } from "framer-motion";

const stats = [
  { id: 1, name: "Thumbnails created", value: "301,020" },
  { id: 2, name: "New users register", value: "36,100 Users" },
  { id: 3, name: "Thumbnails every 24 hours", value: "8,507" },
];

export default function Stats() {
  return (
    <div id="stats" className=" py-24 bg-transparent sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map(stat => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600 dark:text-orange-500">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
                  {stat.value}
                </dd>
              </div>
            </motion.div>
          ))}
        </dl>
      </div>
    </div>
  );
}
