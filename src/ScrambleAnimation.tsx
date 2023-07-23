import React, { useState, useEffect, useRef } from "react";

interface ScrambleAnimationProps {
  texts: string[];
  speed: number;
  pauseDuration: number;
  start: boolean;
  style?: React.CSSProperties; // optional style prop
  className?: string; // optional className prop
}

const getRandomChar = () => {
  return Math.random().toString(36).substring(2, 3);
};

const ScrambleAnimation: React.FC<ScrambleAnimationProps> = ({
  texts = ["Hello, World!"],
  speed = 100,
  pauseDuration = 3000,
  start = true,
  style = {},
  className = "",
}) => {
  const [scrambledText, setScrambledText] = useState(texts[0]);
  const textIndex = useRef(0);
  const scrambleIndex = useRef(0);
  const pause = useRef(false);
  const animationActive = useRef(start);

  useEffect(() => {
    animationActive.current = start;
  }, [start]);

  useEffect(() => {
    const scrambleInterval = setInterval(() => {
      if (!pause.current && animationActive.current) {
        scrambleIndex.current =
          (scrambleIndex.current + 1) % (texts[textIndex.current].length + 1);

        setScrambledText(
          texts[textIndex.current].slice(0, scrambleIndex.current).concat(
            Array.from(
              {
                length: texts[textIndex.current].length - scrambleIndex.current,
              },
              getRandomChar
            ).join("")
          )
        );

        if (scrambleIndex.current === texts[textIndex.current].length) {
          scrambleIndex.current = 0;
          textIndex.current = (textIndex.current + 1) % texts.length;
          pause.current = true;
          setTimeout(() => {
            pause.current = false;
          }, pauseDuration);
        }
      }
    }, speed);

    return () => {
      clearInterval(scrambleInterval);
    };
  }, [texts, speed, pauseDuration]);

  // apply both the default styles and the user's custom styles
  const combinedStyles = { fontSize: "2em", color: "black", ...style };

  return (
    <h1 className={className} style={combinedStyles}>
      {scrambledText}
    </h1>
  );
};

export default ScrambleAnimation;
