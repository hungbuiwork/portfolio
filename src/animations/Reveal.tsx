import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  delay?: number;
}
export const Reveal = ({
  children,
  width = "fit-content",
  delay = 0.25,
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { left: "0", opacity: 1 },
          visible: { left: "100%", opacity: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: delay }}
        className="bg-white h-full w-full absolute z-10 overflow-hidden rounded-sm"
      ></motion.div>
      <div className=" z-10">{children}</div>
    </div>
  );
};
