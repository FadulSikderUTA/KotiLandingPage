interface CreditScoreGaugeIconProps {
  size?: number;
  score?: number;
}

const CreditScoreGaugeIcon = ({
  size = 40,
  score = 765,
}: CreditScoreGaugeIconProps) => {
  // Calculate needle rotation based on score (300-850 range)
  const calculateRotation = (score: number): number => {
    const normalizedScore = Math.max(300, Math.min(850, score));
    const percentage = (normalizedScore - 300) / (850 - 300);
    // -90 degrees (left) to 90 degrees (right) for semicircle
    return -90 + percentage * 180;
  };

  const needleRotation = calculateRotation(score);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      data-oid="6kbtjkp"
    >
      {/* Define gradient for the gauge */}
      <defs data-oid="-qbe8rn">
        <linearGradient
          id="gaugeGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
          data-oid="9r7_vdu"
        >
          <stop offset="0%" stopColor="#ef4444" data-oid="l8fjule" />{" "}
          {/* red-500 */}
          <stop offset="25%" stopColor="#fb923c" data-oid="4nexf99" />{" "}
          {/* orange-400 */}
          <stop offset="50%" stopColor="#facc15" data-oid="tyvur7e" />{" "}
          {/* yellow-400 */}
          <stop offset="75%" stopColor="#a3e635" data-oid="2z_iv8x" />{" "}
          {/* lime-400 */}
          <stop offset="100%" stopColor="#22c55e" data-oid="5qzb_r9" />{" "}
          {/* green-500 */}
        </linearGradient>

        {/* Shadow filter */}
        <filter
          id="shadow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
          data-oid="e.-t6dr"
        >
          <feDropShadow
            dx="0"
            dy="1"
            stdDeviation="2"
            floodOpacity="0.2"
            data-oid="jvbmqcq"
          />
        </filter>
      </defs>

      {/* Outer semicircle background */}
      <path
        d="M 15 70 A 35 35 0 0 1 85 70"
        fill="none"
        stroke="#e5e7eb"
        strokeWidth="12"
        strokeLinecap="round"
        data-oid="2noofvi"
      />

      {/* Colored gauge arc */}
      <path
        d="M 15 70 A 35 35 0 0 1 85 70"
        fill="none"
        stroke="url(#gaugeGradient)"
        strokeWidth="10"
        strokeLinecap="round"
        data-oid="t82.k_y"
      />

      {/* Gauge segments (optional decorative marks) */}
      {[0, 30, 60, 90, 120, 150, 180].map((angle) => {
        const rad = ((angle - 90) * Math.PI) / 180;
        const x1 = 50 + 28 * Math.cos(rad);
        const y1 = 70 + 28 * Math.sin(rad);
        const x2 = 50 + 32 * Math.cos(rad);
        const y2 = 70 + 32 * Math.sin(rad);

        return (
          <line
            key={angle}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#9ca3af"
            strokeWidth="1.5"
            data-oid="38:0wjx"
          />
        );
      })}

      {/* Center circle */}
      <circle
        cx="50"
        cy="70"
        r="6"
        fill="#1f2937"
        filter="url(#shadow)"
        data-oid="s1mdlxn"
      />

      {/* Needle */}
      <g transform={`rotate(${needleRotation} 50 70)`} data-oid="nkcv582">
        <path
          d="M 50 70 L 48 68 L 48 40 L 50 38 L 52 40 L 52 68 Z"
          fill="#1f2937"
          filter="url(#shadow)"
          data-oid="xi:7hy8"
        />

        {/* Needle tip highlight */}
        <circle cx="50" cy="38" r="2" fill="#6dbb00" data-oid="0415zm." />
      </g>

      {/* Center dot */}
      <circle cx="50" cy="70" r="4" fill="#6dbb00" data-oid="f.7a__u" />
    </svg>
  );
};

export default CreditScoreGaugeIcon;
