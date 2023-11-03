"use client";

import { motion } from "framer-motion";
import { Bot, LineChart, Youtube } from "lucide-react";
import Image from "next/image";
import screenshot from "../public/img/sreenshot.png";

const features = [
  {
    name: "Fast.",
    description:
      "Craft futuristic visuals instantly! Our AI-driven thumbnails are designed for rapid creation and feature fantastic designs that set you apart",
    icon: (
      <Youtube
        className="absolute left-1 top-1 h-5 w-5 text-orange-500"
        aria-label="true"
      />
    ),
  },
  {
    name: "DALLE.",
    description:
      "Craft visuals that are not just eye-catching but ahead of their time. Stay ahead of the curve in visual content.",
    icon: (
      <Bot
        className="absolute left-1 top-1 h-5 w-5 text-orange-500"
        aria-label="true"
      />
    ),
  },
  {
    name: "Desing.",
    description:
      "Generate stunning thumbnails in seconds with AI-powered design.",
    icon: (
      <LineChart
        className="absolute left-1 top-1 h-5 w-5 text-orange-500"
        aria-label="true"
      />
    ),
  },
];

export default function FeatureWithProduct() {
  return (
    <div className="relative overflow-hidden isolate bg-transparent py-24 sm:py-32">
      <div
        className="absolute inset-x-0 top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-55 sm:left-96"
        aria-hidden="true">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}>
                <h2 className="text-lg leading-8 font-bold text-orange-500">
                  Create faster
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}>
                <p className="mt-2 font-bold mx-auto max-w-4xl font-display text-4xl tracking-normal text-slate-900 dark:text-white sm:text-6xl">
                  A better workflow
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-white/70">
                  Our advanced technology creates eye-catching, personalized
                  thumbnails to attract more viewers and increase video views.
                </p>
              </motion.div>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map(feature => (
                  <div key={feature.name} className="relative pl-9">
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}>
                      <dt className="inline font-semibold text-gray-900 dark:text-white">
                        {feature.icon}
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline dark:text-white/70">
                        {feature.description}
                      </dd>
                    </motion.div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 500 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}>
            <Image
              src={screenshot}
              alt="Screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 aspect-video object-cover"
              width={2432}
              height={1442}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
