import { motion, useMotionValue, useTransform } from "framer-motion";
import React, { useState } from "react";
import TodoAnimation from "../components/todo-animation";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 30px 10px;
`;

export default function TodoList() {
  const [animationKey, setAnimationKey] = useState(0);
  const [triggerFirework, setTriggerFirework] = useState(false);

  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([
    ["오늘 아침 일찍 일어나서 아침밥 먹기", false],
    ["오늘 아침 일찍 일어나서 산책하기", true],
  ]);
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

  const LoadingBtn = () => {
    setAnimationKey((prevKey) => prevKey + 1);
  };

  const onChange = (e: any) => {
    setTodo(e.target.value);
  };
  const onclick = () => {
    if (todo === "") return;
    setTodo("");

    setTodoList((currentArray) => [...currentArray, [todo, false]]);
  };

  const checkTodo = (key: any) => {
    setTodoList((currentList) =>
      currentList.map((item, i) => (i === key ? [item[0], !item[1]] : item))
    );

    if (!todoList[key][1]) {
      setTriggerFirework(true);
      setTimeout(() => setTriggerFirework(false), 1500);
    }
  };

  return (
    <Wrapper className="relative bg-[#ebebeb] rounded-lg">
      <TodoAnimation trigger={triggerFirework} />

      <div className="absolute w-full px-6">
        <h2 className="uppercase text-center mb-2 text-lg font-semibold text-gray-900 dark:text-white">
          Your Todo List
          <button className="ml-5" onClick={LoadingBtn}>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </button>
        </h2>
        <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
          <motion.ul
            key={animationKey}
            variants={boxVariants}
            initial="out"
            animate="in"
          >
            {todoList.map((item, index) => (
              <motion.li
                className="flex items-center py-1.5"
                key={index}
                role="img"
                aria-labelledby="magic wand"
                variants={iconVariants}
              >
                <button onClick={() => checkTodo(index)}>
                  {item[1] ? (
                    <svg
                      className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                  ) : (
                    <svg
                      className="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                  )}
                </button>

                {item[0]}
              </motion.li>
            ))}
          </motion.ul>
        </ul>
      </div>

      <div className="flex w-full">
        <label className="relative block w-full">
          <span className="sr-only">Todo List</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2"></span>
          <input
            className="text-black placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Todo List"
            type="text"
            name="search"
            onChange={onChange}
            value={todo}
          />
        </label>
        <button
          type="button"
          className="ml-4 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={onclick}
        >
          <span className="">add</span>
        </button>
      </div>
    </Wrapper>
  );
}
