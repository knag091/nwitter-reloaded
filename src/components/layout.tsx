import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../routes/firebase";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  grid-template-columns: 1fr 4fr;
  max-width: 860px;
  overflow: hidden;

  position: relative;
`;
const Menu = styled.div``;
const Menuitem = styled.div``;

export default function Layout() {
  const navigate = useNavigate();
  const onLogOut = async () => {
    const ok = confirm("Are you sure you want to log out");
    if (ok) {
      await auth.signOut();
      navigate("/login");
    }
  };
  const [, setAnimate] = useState(false);
  const location = useLocation();

  const [animationState, setAnimationState] = useState("initial");
  const buttonVariants = {
    initial: { scale: 1, opacity: 1, x: 0, y: 0 },
    clicked: {
      scale: 10,
      opacity: 1,
      left: "50%",
      top: "50%",
      x: "-30%",
      y: "-50%",
      transition: {
        duration: 0.5,
        stiffness: 80,
        damping: 10,
        onComplete: () => {
          setTimeout(() => {
            setAnimationState("hidden");
          }, 800); // 3 seconds delay
        },
      },
    },
    hidden: {
      scale: 1,
      opacity: 0, // Hide the button after the animation
      left: "50%",
      top: "50%",
      x: "-50%",
      y: "-50%",
      transition: {
        duration: 1, // Slow fade out
      },
    },
  };
  const handleClick = () => {
    setAnimationState("clicked");
  };
  useEffect(() => {
    if (animationState === "hidden") {
      const timeout = setTimeout(() => {
        setAnimationState("initial");
      }, 500); // Match the duration of the hidden state transition

      return () => clearTimeout(timeout);
    }
  }, [animationState]);
  useEffect(() => {
    if (location.pathname === "/animation") {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 500); // 애니메이션 지속 시간과 일치해야 합니다.
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <Wrapper className="grid gap-20 h-full w-full py-10">
      <Menu className="flex flex-col items-center gap-5">
        <Link to="/">
          <Menuitem className="cursor-pointer flex items-center justify-center border-solid border-white w-12 h-12 rounded-full border-2">
            <svg
              className="w-8 fill-white"
              data-slot="icon"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
              />
            </svg>
          </Menuitem>
        </Link>
        <Link to="/profile">
          <Menuitem className="cursor-pointer flex items-center justify-center border-solid border-white w-12 h-12 rounded-full border-2">
            <svg
              className="w-8 fill-white"
              data-slot="icon"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
            </svg>
          </Menuitem>
        </Link>
        <Link to="/todo">
          <Menuitem className="cursor-pointer flex items-center justify-center border-solid border-white w-12 h-12 rounded-full border-2">
            <svg
              className="w-8 fill-white"
              data-slot="icon"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M15.988 3.012A2.25 2.25 0 0 1 18 5.25v6.5A2.25 2.25 0 0 1 15.75 14H13.5V7A2.5 2.5 0 0 0 11 4.5H8.128a2.252 2.252 0 0 1 1.884-1.488A2.25 2.25 0 0 1 12.25 1h1.5a2.25 2.25 0 0 1 2.238 2.012ZM11.5 3.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v.25h-3v-.25Z"
              />
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7Zm2 3.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm0 3.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z"
              />
            </svg>
          </Menuitem>
        </Link>

        <Link to="/animation">
          <Menuitem className="cursor-pointer flex items-center justify-center border-solid border-white w-12 h-12 rounded-full border-2">
            <motion.button
              initial="initial"
              animate={animationState}
              variants={buttonVariants}
              onClick={handleClick}
              style={{
                position: "absolute",
                padding: "10px 20px",
                border: "none",
                borderRadius: "50%",
                cursor: "pointer",
                outline: "none",
                zIndex: 10,
              }}
            >
              <svg
                className="w-8 fill-white"
                data-slot="icon"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M10.362 1.093a.75.75 0 0 0-.724 0L2.523 5.018 10 9.143l7.477-4.125-7.115-3.925ZM18 6.443l-7.25 4v8.25l6.862-3.786A.75.75 0 0 0 18 14.25V6.443ZM9.25 18.693v-8.25l-7.25-4v7.807a.75.75 0 0 0 .388.657l6.862 3.786Z" />
              </svg>
            </motion.button>
          </Menuitem>
        </Link>
        <Menuitem
          className="cursor-pointer flex items-center justify-center border-[tomato] border-solid border-[tomato] w-12 h-12 rounded-full border-2"
          onClick={onLogOut}
        >
          <svg
            className="w-8 fill-[tomato]"
            data-slot="icon"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M3 4.25A2.25 2.25 0 0 1 5.25 2h5.5A2.25 2.25 0 0 1 13 4.25v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 1 1.5 0v2A2.25 2.25 0 0 1 10.75 18h-5.5A2.25 2.25 0 0 1 3 15.75V4.25Z"
            />
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M19 10a.75.75 0 0 0-.75-.75H8.704l1.048-.943a.75.75 0 1 0-1.004-1.114l-2.5 2.25a.75.75 0 0 0 0 1.114l2.5 2.25a.75.75 0 1 0 1.004-1.114l-1.048-.943h9.546A.75.75 0 0 0 19 10Z"
            />
          </svg>
        </Menuitem>
      </Menu>
      <Outlet />
    </Wrapper>
  );
}
