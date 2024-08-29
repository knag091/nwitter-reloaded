import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Wrapper } from "../components/auth-components";
import AnimationList from "../components/animation-list";

const topMove = {
  hidden: { opacity: 1, y: 0 },
  visible: {
    opacity: 1,
    y: -380,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 2.7,
    },
  },
};
const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 3,
      ease: "easeOut",
    },
  },
};
const moveVariants = {
  initial: { opacity: 1, x: 0 },
  moved: {
    opacity: 1,
    x: -110,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 1,
    },
  },
};
const letterVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 1.5,
    },
  },
};
const listFadein = {
  hidden: { opacity: 0, x: 0 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 4,
    },
  },
};

const Animation = () => {
  const text = "애니메이션 리스트~";
  const splitText = text.split("");

  return (
    <Wrapper>
      <motion.div
        className="flex h-full items-center content-center flex-row"
        variants={topMove}
        initial="hidden"
        animate="visible"
      >
        <div className="cursor-pointer flex items-center justify-center w-20 h-20 rounded-full ">
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            style={{
              width: "100px",
              height: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <motion.div
              variants={moveVariants}
              initial="initial"
              animate="moved"
              style={{
                width: "100px",
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                className="w-12 fill-white"
                data-slot="icon"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M10.362 1.093a.75.75 0 0 0-.724 0L2.523 5.018 10 9.143l7.477-4.125-7.115-3.925ZM18 6.443l-7.25 4v8.25l6.862-3.786A.75.75 0 0 0 18 14.25V6.443ZM9.25 18.693v-8.25l-7.25-4v7.807a.75.75 0 0 0 .388.657l6.862 3.786Z" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
        <div className="relative flex h-full items-center justify-center">
          <div
            className="absolute top-1/2 left-1/2"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              fontSize: "24px",
              color: "white",
              whiteSpace: "nowrap",
            }}
          >
            {splitText.map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                style={{
                  display: "inline-block",
                  transition: `${index * 0.1}s`,
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="flex h-full items-center content-center flex-row absolute"
        variants={listFadein}
        initial="hidden"
        animate="visible"
      >
        <AnimationList />
      </motion.div>
    </Wrapper>
  );
};

export default Animation;
