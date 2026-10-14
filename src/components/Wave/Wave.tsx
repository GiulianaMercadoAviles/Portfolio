import "./Wave.css";

interface WaveProps {
  color: string;
  position?: "top" | "bottom";
}

function Wave({ color, position = "bottom" }: WaveProps) {
  return (
    <div className={`wave-divider wave-${position}`}>
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path
          d="M0,64L60,74.7C120,85,240,107,360,101.3C480,96,600,64,720,53.3C840,43,960,53,1080,69.3C1200,85,1320,107,1380,117.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          fill={color}
        ></path>
      </svg>
    </div>
  );
}

export default Wave;
