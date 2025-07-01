import { motion } from "framer-motion";

const MorphingArrow = () => {
  return (
    <div
      className="relative w-64 h-16 flex items-center justify-center"
      data-oid="8-ek9bp"
    >
      <motion.div className="relative" data-oid="ca1gtn5">
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-[#6dbb00] rounded-full blur-xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          data-oid="0k0dvez"
        />

        {/* Main arrow */}
        <motion.svg
          width="200"
          height="40"
          viewBox="0 0 200 40"
          fill="none"
          animate={{
            filter: [
              "drop-shadow(0 0 10px rgba(109, 187, 0, 0.5))",
              "drop-shadow(0 0 20px rgba(109, 187, 0, 0.8))",
              "drop-shadow(0 0 10px rgba(109, 187, 0, 0.5))",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          data-oid="f9589ha"
        >
          <motion.path
            d="M 10 20 L 170 20 M 160 10 L 170 20 L 160 30"
            stroke="url(#arrowGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            data-oid="g8:6.yr"
          />

          <defs data-oid="kxa7-j.">
            <linearGradient
              id="arrowGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
              data-oid="dns1v-g"
            >
              <stop offset="0%" stopColor="#6dbb00" data-oid="cikg47q">
                <animate
                  attributeName="stop-opacity"
                  values="0;1;0"
                  dur="2s"
                  repeatCount="indefinite"
                  data-oid="u7v_b92"
                />
              </stop>
              <stop offset="50%" stopColor="#5da600" data-oid="m-g-76.">
                <animate
                  attributeName="stop-opacity"
                  values="0;1;1;1;0"
                  dur="2s"
                  repeatCount="indefinite"
                  data-oid="619f:tr"
                />
              </stop>
              <stop offset="100%" stopColor="#6dbb00" data-oid="ijd87ct">
                <animate
                  attributeName="stop-opacity"
                  values="0;0;1"
                  dur="2s"
                  repeatCount="indefinite"
                  data-oid="nl.jn7w"
                />
              </stop>
            </linearGradient>
          </defs>
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default MorphingArrow;
