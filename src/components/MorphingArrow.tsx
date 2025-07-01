import { motion } from "framer-motion";

const MorphingArrow = () => {
  return (
    <div
      className="relative w-64 h-16 flex items-center justify-center"
      data-oid="v.3d2.a"
    >
      <motion.div className="relative" data-oid="xk9bz.9">
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
          data-oid="l45rw0o"
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
          data-oid="7fgwm6:"
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
            data-oid="f-qr61."
          />

          <defs data-oid="x.s74qk">
            <linearGradient
              id="arrowGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
              data-oid="r7db37a"
            >
              <stop offset="0%" stopColor="#6dbb00" data-oid="kznbwn.">
                <animate
                  attributeName="stop-opacity"
                  values="0;1;0"
                  dur="2s"
                  repeatCount="indefinite"
                  data-oid="_k2ptqp"
                />
              </stop>
              <stop offset="50%" stopColor="#5da600" data-oid="p4ll:ka">
                <animate
                  attributeName="stop-opacity"
                  values="0;1;1;1;0"
                  dur="2s"
                  repeatCount="indefinite"
                  data-oid="m._qe1u"
                />
              </stop>
              <stop offset="100%" stopColor="#6dbb00" data-oid=".otv00l">
                <animate
                  attributeName="stop-opacity"
                  values="0;0;1"
                  dur="2s"
                  repeatCount="indefinite"
                  data-oid="pamdjrz"
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
