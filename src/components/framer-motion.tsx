import { motion, useMotionValue, useTransform } from "framer-motion";
import React, { useState } from "react";

export default function FramerMotion() {
  const [todoList, setTodoList] = useState(["11", "22"]);
  const boxVariants = {
    out: {
      y: 600,
    },
    in: {
      y: 0,
      transition: {
        duration: 0.6,
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };
  const iconVariants = {
    out: {
      x: -600, // translateX(-600)
    },
    in: {
      x: 0,
    },
  };

  return (
    <>
      <div>
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for anything..."
            type="text"
            name="search"
          />
        </label>
      </div>

      <motion.ul variants={boxVariants} initial="out" animate="in">
        {todoList.map((item, index) => (
          <motion.li
            key={index}
            role="img"
            aria-labelledby="magic wand"
            variants={iconVariants}
            // parent의 initial, animate를 그대로 상속받기 때문에
            // 속성을 입력하지 않아도된다.
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
}
