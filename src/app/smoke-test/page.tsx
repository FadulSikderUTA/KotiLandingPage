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
      data-oid="nvzs:2a"
    >
      <h1 className="text-4xl font-bold mb-8" data-oid="3o2v1:0">
        Koti Smoke Test
      </h1>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl"
        data-oid="eblmirz"
      >
        <div className="bg-gray-800 p-6 rounded-lg" data-oid="chi9x2k">
          <h2 className="text-2xl font-semibold mb-4" data-oid="6ul908t">
            Framer Motion
          </h2>
          <motion.div
            className="w-32 h-32 bg-green-500 rounded-lg flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            data-oid="bg.fjvb"
          >
            <p className="text-white" data-oid=".3md.i2">
              Animate!
            </p>
          </motion.div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg" data-oid="zb5h2h.">
          <h2 className="text-2xl font-semibold mb-4" data-oid="1ddd_:c">
            Swiper Carousel
          </h2>
          <Swiper spaceBetween={50} slidesPerView={1} data-oid="z4jxfbn">
            <SwiperSlide data-oid="vif7dj7">
              <div
                className="bg-blue-500 h-32 flex items-center justify-center rounded-lg"
                data-oid="vgt4-gt"
              >
                Slide 1
              </div>
            </SwiperSlide>
            <SwiperSlide data-oid="dfd4nec">
              <div
                className="bg-purple-500 h-32 flex items-center justify-center rounded-lg"
                data-oid="aso0a31"
              >
                Slide 2
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg" data-oid="wqvh03b">
          <h2 className="text-2xl font-semibold mb-4" data-oid="mtfw6on">
            Lucide React Icon
          </h2>
          <Home className="w-16 h-16 text-yellow-500" data-oid="_s0zj0." />
        </div>

        <div className="bg-gray-800 p-6 rounded-lg" data-oid="nhd6_xg">
          <h2 className="text-2xl font-semibold mb-4" data-oid="wtve5oh">
            Chart.js
          </h2>
          <div className="w-48 h-48" data-oid="0rgoe:x">
            <Doughnut data={data} data-oid="he.g71p" />
          </div>
        </div>

        <div
          className="bg-gray-800 p-6 rounded-lg md:col-span-2"
          data-oid="2_-lno5"
        >
          <h2 className="text-2xl font-semibold mb-4" data-oid="m0jq6:r">
            Shadcn/UI Button
          </h2>
          <Button data-oid="6bdy:8a">Shadcn Button</Button>
        </div>
      </div>
    </div>
  );
}
