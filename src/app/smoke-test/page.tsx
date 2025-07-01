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
      data-oid="avsr.z7"
    >
      <h1 className="text-4xl font-bold mb-8" data-oid="j:b4lot">
        Koti Smoke Test
      </h1>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl"
        data-oid="u5c2ob-"
      >
        <div className="bg-gray-800 p-6 rounded-lg" data-oid="k8oc.zq">
          <h2 className="text-2xl font-semibold mb-4" data-oid="9wwcjdf">
            Framer Motion
          </h2>
          <motion.div
            className="w-32 h-32 bg-green-500 rounded-lg flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            data-oid="ijbyvly"
          >
            <p className="text-white" data-oid="gu0akyj">
              Animate!
            </p>
          </motion.div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg" data-oid="zld5cpl">
          <h2 className="text-2xl font-semibold mb-4" data-oid="f8md12c">
            Swiper Carousel
          </h2>
          <Swiper spaceBetween={50} slidesPerView={1} data-oid=":ad_qjx">
            <SwiperSlide data-oid="ciw7581">
              <div
                className="bg-blue-500 h-32 flex items-center justify-center rounded-lg"
                data-oid="f61dbbc"
              >
                Slide 1
              </div>
            </SwiperSlide>
            <SwiperSlide data-oid="xfc973i">
              <div
                className="bg-purple-500 h-32 flex items-center justify-center rounded-lg"
                data-oid="4nwob6m"
              >
                Slide 2
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg" data-oid="ihi7gc6">
          <h2 className="text-2xl font-semibold mb-4" data-oid="hu9:lx8">
            Lucide React Icon
          </h2>
          <Home className="w-16 h-16 text-yellow-500" data-oid="_d3phdz" />
        </div>

        <div className="bg-gray-800 p-6 rounded-lg" data-oid="e7zl:f8">
          <h2 className="text-2xl font-semibold mb-4" data-oid="7aapmhc">
            Chart.js
          </h2>
          <div className="w-48 h-48" data-oid="n0o.97q">
            <Doughnut data={data} data-oid="040x-7-" />
          </div>
        </div>

        <div
          className="bg-gray-800 p-6 rounded-lg md:col-span-2"
          data-oid="i6foyhw"
        >
          <h2 className="text-2xl font-semibold mb-4" data-oid="9fzqefh">
            Shadcn/UI Button
          </h2>
          <Button data-oid="r1nz:7i">Shadcn Button</Button>
        </div>
      </div>
    </div>
  );
}
