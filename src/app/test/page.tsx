"use client";

import { motion } from "framer-motion";

export default function TestPage() {
  return (
    <div
      className="flex items-center justify-center h-screen bg-gray-900"
      data-oid="iyox_db"
    >
      <motion.div
        className="w-32 h-32 bg-green-500 rounded-lg"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        data-oid="35bxfjo"
      >
        <p
          className="flex items-center justify-center h-full text-white"
          data-oid="fn0j6m."
        >
          Koti!
        </p>
      </motion.div>
    </div>
  );
}
