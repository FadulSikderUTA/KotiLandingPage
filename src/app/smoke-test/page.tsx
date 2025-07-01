"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Home } from "lucide-react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Button } from "@/components/ui/button";

import "swiper/css";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function SmokeTestPage() {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],

        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],

        borderWidth: 1,
      },
    ],
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-10"
      data-oid="o-o0wbn"
    >
      <h1 className="text-4xl font-bold mb-8" data-oid="k01seds">
        Koti Smoke Test
      </h1>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl"
        data-oid="tf_o79l"
      >
        <div className="bg-gray-800 p-6 rounded-lg" data-oid="2qw-m61">
          <h2 className="text-2xl font-semibold mb-4" data-oid="374ra4j">
            Framer Motion
          </h2>
          <motion.div
            className="w-32 h-32 bg-green-500 rounded-lg flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            data-oid="s1:rh4z"
          >
            <p className="text-white" data-oid="jwrk488">
              Animate!
            </p>
          </motion.div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg" data-oid="vxxmie:">
          <h2 className="text-2xl font-semibold mb-4" data-oid="krhyl2n">
            Swiper Carousel
          </h2>
          <Swiper spaceBetween={50} slidesPerView={1} data-oid="q7xv6bq">
            <SwiperSlide data-oid="zwn1:3j">
              <div
                className="bg-blue-500 h-32 flex items-center justify-center rounded-lg"
                data-oid="r3cupi1"
              >
                Slide 1
              </div>
            </SwiperSlide>
            <SwiperSlide data-oid="7y0sifk">
              <div
                className="bg-purple-500 h-32 flex items-center justify-center rounded-lg"
                data-oid="bsqruns"
              >
                Slide 2
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg" data-oid="hzrcino">
          <h2 className="text-2xl font-semibold mb-4" data-oid="v1tnbso">
            Lucide React Icon
          </h2>
          <Home className="w-16 h-16 text-yellow-500" data-oid="8cmyegv" />
        </div>

        <div className="bg-gray-800 p-6 rounded-lg" data-oid="l4efuzt">
          <h2 className="text-2xl font-semibold mb-4" data-oid="fs2x3z6">
            Chart.js
          </h2>
          <div className="w-48 h-48" data-oid="k8u07.9">
            <Doughnut data={data} data-oid="rqd995v" />
          </div>
        </div>

        <div
          className="bg-gray-800 p-6 rounded-lg md:col-span-2"
          data-oid="dufw1mh"
        >
          <h2 className="text-2xl font-semibold mb-4" data-oid="5:nrixw">
            Shadcn/UI Button
          </h2>
          <Button data-oid="tjfrjj.">Shadcn Button</Button>
        </div>
      </div>
    </div>
  );
}
