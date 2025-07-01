interface BenefitsBurstIconProps {
  size?: number;
  animated?: boolean;
}

const BenefitsBurstIcon = ({
  size = 40,
  animated = true,
}: BenefitsBurstIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      data-oid=".ih2z9c"
    >
      <defs data-oid=":xhw.06">
        {/* Gradient for the rays */}
        <linearGradient
          id="benefitGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
          data-oid="686es09"
        >
          <stop offset="0%" stopColor="#6dbb00" data-oid="xwth4--" />
          <stop offset="100%" stopColor="#5da600" data-oid="gnr1kbs" />
        </linearGradient>

        {/* Radial gradient for center */}
        <radialGradient id="centerGradient" data-oid=".bevhvk">
          <stop offset="0%" stopColor="#7dd900" data-oid="7gjhwi4" />
          <stop offset="100%" stopColor="#6dbb00" data-oid="c7mga-n" />
        </radialGradient>

        {/* Shadow filter */}
        <filter
          id="shadow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
          data-oid="mte9l46"
        >
          <feDropShadow
            dx="0"
            dy="1"
            stdDeviation="2"
            floodOpacity="0.2"
            data-oid="m9at8dg"
          />
        </filter>

        {/* Glow effect */}
        <filter id="glow" data-oid="23m8qzq">
          <feGaussianBlur
            stdDeviation="3"
            result="coloredBlur"
            data-oid="h3pkzmy"
          />

          <feMerge data-oid=".2tm0xr">
            <feMergeNode in="coloredBlur" data-oid="v6nz.3k" />
            <feMergeNode in="SourceGraphic" data-oid="vgtv38h" />
          </feMerge>
        </filter>
      </defs>

      {/* Background circle (subtle) */}
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="#e5e7eb"
        strokeWidth="1"
        opacity="0.5"
        data-oid="o5n-mfl"
      />

      {/* Benefit rays - 8 rays for good symmetry */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => {
        const rad = (angle * Math.PI) / 180;
        const innerRadius = 18;
        const outerRadius = index % 2 === 0 ? 40 : 35; // Alternate lengths

        const x1 = 50 + innerRadius * Math.cos(rad);
        const y1 = 50 + innerRadius * Math.sin(rad);
        const x2 = 50 + outerRadius * Math.cos(rad);
        const y2 = 50 + outerRadius * Math.sin(rad);

        // Calculate path for tapered rays
        const perpRad = rad + Math.PI / 2;
        const width = index % 2 === 0 ? 3 : 2.5;

        const path = `
          M ${x1 + width * Math.cos(perpRad)} ${y1 + width * Math.sin(perpRad)}
          L ${x2 + width * 0.5 * Math.cos(perpRad)} ${y2 + width * 0.5 * Math.sin(perpRad)}
          L ${x2 - width * 0.5 * Math.cos(perpRad)} ${y2 - width * 0.5 * Math.sin(perpRad)}
          L ${x1 - width * Math.cos(perpRad)} ${y1 - width * Math.sin(perpRad)}
          Z
        `;

        return (
          <g key={angle} data-oid="_:eeln6">
            <path
              d={path}
              fill="url(#benefitGradient)"
              opacity={index % 2 === 0 ? 0.9 : 0.7}
              filter="url(#shadow)"
              data-oid="pjh96ff"
            >
              {animated && (
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="scale"
                  values="0.8;1;0.8"
                  dur={`${3 + index * 0.2}s`}
                  repeatCount="indefinite"
                  additive="sum"
                  data-oid="uvx4tuz"
                />
              )}
            </path>
          </g>
        );
      })}

      {/* Inner benefit circles - representing different types of benefits */}
      {[0, 72, 144, 216, 288].map((angle, index) => {
        const rad = (angle * Math.PI) / 180;
        const radius = 28;
        const cx = 50 + radius * Math.cos(rad);
        const cy = 50 + radius * Math.sin(rad);

        return (
          <circle
            key={angle}
            cx={cx}
            cy={cy}
            r="4"
            fill="#6dbb00"
            opacity="0.6"
            filter="url(#glow)"
            data-oid="9-3ilqq"
          >
            {animated && (
              <animate
                attributeName="opacity"
                values="0.3;0.8;0.3"
                dur={`${2 + index * 0.3}s`}
                repeatCount="indefinite"
                data-oid="2u14-2v"
              />
            )}
          </circle>
        );
      })}

      {/* Central core */}
      <circle
        cx="50"
        cy="50"
        r="15"
        fill="url(#centerGradient)"
        filter="url(#shadow)"
        data-oid="4j8i29h"
      />

      {/* Inner ring */}
      <circle
        cx="50"
        cy="50"
        r="12"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.5"
        opacity="0.8"
        data-oid="6xj6eis"
      />

      {/* Center highlight */}
      <circle
        cx="50"
        cy="50"
        r="8"
        fill="#ffffff"
        opacity="0.3"
        data-oid="okl:wzb"
      />

      {/* Center checkmark or gift icon */}
      <path
        d="M 45 50 L 48 53 L 55 46"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        data-oid="0zwfx7f"
      />
    </svg>
  );
};

export default BenefitsBurstIcon;
