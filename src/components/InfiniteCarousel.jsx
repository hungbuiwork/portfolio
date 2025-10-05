import React from "react";

/**
 * InfiniteCarousel
 * A reusable component that infinitely scrolls its children horizontally.
 *
 * Usage:
 * <InfiniteCarousel duration={20} reverse>
 *   <YourChild />
 *   <YourChild />
 * </InfiniteCarousel>
 *
 * Props:
 * - `duration`: seconds for one full cycle (smaller = faster)
 * - `reverse`: scrolls rightward if true
 */

export default function InfiniteCarousel({
  children,
  className,
  reverse = false,
  duration = 20,
}) {
  const animationName = reverse ? "scroll-right" : "scroll-left";
  const animationStyle = {
    animation: `${animationName} ${duration}s linear infinite`,
  };

  return (
    <div className={`w-full  relative ${className || ""}`}>
      {/* Track */}
      <div className="flex min-w-[200%]" style={animationStyle}>
        {/* Original set */}
        <div className="flex">{children}</div>
        {/* Duplicated set for seamless looping */}
        <div className="flex">{children}</div>
      </div>

      {/* Keyframes for both directions */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
