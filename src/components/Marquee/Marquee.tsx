import "./Marquee.css";

interface MarqueeProps {
  text: string;
}

export default function Marquee({ text }: MarqueeProps) {
  const repeatedText = Array(10).fill(text).join(" ✦ ");

  return (
    <div className="marquee-container">
      <div className="marquee-track">
        <span className="marquee-text">{repeatedText} ✦ </span>
        <span className="marquee-text">{repeatedText} ✦ </span>
      </div>
    </div>
  );
}
