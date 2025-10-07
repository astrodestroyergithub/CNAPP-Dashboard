import { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Section = ({ leftContent, rightContent }) => {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controlsLeft.start({ x: 0, y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } });
      controlsRight.start({ x: 0, y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } });
    }
  }, [inView, controlsLeft, controlsRight]);

  return (
    <div ref={ref} className="featured min-h-screen px-10">
      {/* Left section of featured item */}
      <motion.div
        initial={{ x: -150, y: 50, opacity: 0 }}
        animate={controlsLeft}
        className="featured-text"
      >
        {leftContent}
      </motion.div>

      {/* Right section of featured item */}
      <motion.div
        initial={{ x: 150, y: 0, opacity: 0 }}
        animate={controlsRight}
        className="featured-image"
      >
        {rightContent}
      </motion.div>
    </div>
  );
};

export default Section;
