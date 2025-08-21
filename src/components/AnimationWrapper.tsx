import React from "react";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

type Props = {
  children: React.ReactNode;
  animation: string; // e.g. "animate-slide-in-left", "animate-fade-in-up"
  delay?: string;    // e.g. "animation-delay-600"
};

export const AnimationWrapper: React.FC<Props> = ({ children, animation, delay }) => {
  const { ref, inView } = useInViewAnimation();

  return (
    <div
      ref={ref}
      className={`hidden-before-animation ${inView ? `${animation} ${delay ?? ""}` : ""}`}
    >
      {children}
    </div>
  );
};
