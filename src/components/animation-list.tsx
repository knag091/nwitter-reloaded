import React, { useState } from "react";
import { motion } from "framer-motion";
import { Wrapper } from "./auth-components";

const buttonVariants = {
  initial: { scale: 1, opacity: 1 },
  clicked: {
    scale: 1.2,
    opacity: 0.8,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  reset: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const animations = {
  scale: {
    hidden: { scale: 1 },
    visible: {
      scale: 1.5,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  },
  rotate: {
    hidden: { rotate: 0 },
    visible: {
      rotate: 360,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  },
  opacity: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  },
  moveRight: {
    hidden: { x: "-100%" },
    visible: {
      x: "100%",
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  },
  moveUp: {
    hidden: { y: "100%" },
    visible: {
      y: "-100%",
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  },
  colorChange: {
    hidden: { backgroundColor: "white" },
    visible: {
      backgroundColor: "lightcoral",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  },
  skew: {
    hidden: { skewX: 0 },
    visible: {
      skewX: 30,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  },
  bounce: {
    hidden: { y: 0 },
    visible: {
      y: [-30, 0, -15, 0],
      transition: {
        duration: 1,
        ease: "easeInOut",
        times: [0, 0.5, 0.75, 1],
      },
    },
  },
  scaleRotate: {
    hidden: { scale: 1, rotate: 0 },
    visible: {
      scale: 1.5,
      rotate: 360,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  },
  moveDiagonal: {
    hidden: { x: "-100%", y: "100%" },
    visible: {
      x: "100%",
      y: "-100%",
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  },
};

export default function AnimationList() {
  const [activeAnimation, setActiveAnimation] = useState(null);

  const handleButtonClick = (animationType: any) => {
    setActiveAnimation(animationType);

    setTimeout(() => {
      setActiveAnimation(null);
    }, 1500);
  };

  return (
    <Wrapper>
      <div
        className="relative bg-[#ebebeb] rounded-lg w-full py-7 px-5"
        style={{
          height: "90%",
        }}
      >
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
            <motion.button
              key={index}
              type="button"
              className={`py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200 focus:z-10 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ${
                activeAnimation === index ? "bg-gray-200" : "bg-white"
              }`}
              variants={buttonVariants}
              initial="initial"
              animate={activeAnimation === index ? "clicked" : "reset"}
              onClick={() => handleButtonClick(index)}
            >
              애니메이션 {index}
            </motion.button>
          ))}
        </div>

        {activeAnimation && (
          <motion.div
            variants={
              animations[
                {
                  1: "scale",
                  2: "rotate",
                  3: "opacity",
                  4: "moveRight",
                  5: "moveUp",
                  6: "colorChange",
                  7: "skew",
                  8: "bounce",
                  9: "scaleRotate",
                  10: "moveDiagonal",
                }[activeAnimation]
              ]
            }
            initial="hidden"
            animate="visible"
            style={{
              position: "absolute",
              top: "75%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100px",
              height: "100px",
              backgroundColor: "lightblue",
            }}
          ></motion.div>
        )}
      </div>
    </Wrapper>
  );
}
