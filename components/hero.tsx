"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Example() {
  return (
    <div className="bg-white dark:bg-transparent">
      <div className="relative flex flex-col justify-center items-center isolate px-6 lg:px-8 h-screen">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}>
              <p className="border rounded-2xl py-1 px-4 text-slate-500 dark:text-white text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out w-fit mx-auto">
                <span className="font-semibold">36,100</span> Happy Users
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: 0.1 }}>
              <h1 className="text-4xl font-bold tracking-tight  sm:text-6xl bg-gradient-to-r from-orange-300 via-orange-600 to-orange-400 inline-block text-transparent bg-clip-text">
                We enhance your YouTube videos with AI.
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-white text-balance">
                Boost your success on YouTube with high-quality metadata thanks
                to our artificial intelligence. Save time and effortlessly
                attract your audience in each video.
              </p>
            </motion.div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: 0.5 }}>
                <Button type="button">
                  <Link href={"/youtube"}>Get Started</Link>
                </Button>
              </motion.div>
              {/* <a
                href="#stats"
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                View more <span aria-hidden="true">→</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
