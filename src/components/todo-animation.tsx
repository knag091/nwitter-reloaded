import React from "react";
import { motion } from "framer-motion";

const numParticles = 20; // 생성할 불꽃의 개수

const particles = Array.from({ length: numParticles }, (_, index) => ({
  key: index,
  x: Math.random() * 100 - 50, // 랜덤한 X 위치
  y: Math.random() * 100 - 50, // 랜덤한 Y 위치
  scale: Math.random() * 0.5 + 0.5, // 랜덤한 크기
  rotate: Math.random() * 360, // 랜덤한 회전
}));
const particles2 = Array.from({ length: numParticles }, (_, index) => ({
  key: index,
  x: Math.random() * 100 - 50, // 랜덤한 X 위치
  y: Math.random() * 100 - 50, // 랜덤한 Y 위치
  scale: Math.random() * 0.5 + 0.5, // 랜덤한 크기
  rotate: Math.random() * 360, // 랜덤한 회전
}));
const particles3 = Array.from({ length: numParticles }, (_, index) => ({
  key: index,
  x: Math.random() * 100 - 50, // 랜덤한 X 위치
  y: Math.random() * 100 - 50, // 랜덤한 Y 위치
  scale: Math.random() * 0.5 + 0.5, // 랜덤한 크기
  rotate: Math.random() * 360, // 랜덤한 회전
}));

export default function TodoAnimation({ trigger = false }) {
  return (
    <div
      style={{
        position: "relative",
        width: "420px",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {trigger
        ? particles.map(({ key, x, y, scale, rotate }) => (
            <motion.div
              key={key}
              initial={{
                opacity: 1,
                x: `${x}px`,
                y: `${y}px`,
                scale: scale,
                rotate: rotate,
              }}
              animate={
                trigger
                  ? {
                      opacity: 0,
                      x: `${x * 3}px`,
                      y: `${y * 3}px`,
                      scale: scale * 3,
                      rotate: rotate + 180,
                    }
                  : {}
              }
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              style={{
                position: "absolute",
                width: 10,
                height: 10,
                backgroundColor: "orange",
                borderRadius: "50%",
                top: "50%",
                left: "50%",
                transformOrigin: "center",
              }}
            />
          ))
        : null}
      {trigger
        ? particles2.map(({ key, x, y, scale, rotate }) => (
            <motion.div
              key={key}
              initial={{
                opacity: 1,
                x: `${x}px`,
                y: `${y}px`,
                scale: scale,
                rotate: rotate,
              }}
              animate={
                trigger
                  ? {
                      opacity: 0,
                      x: `${x * 3}px`,
                      y: `${y * 3}px`,
                      scale: scale * 3,
                      rotate: rotate + 180,
                    }
                  : {}
              }
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              style={{
                position: "absolute",
                width: 10,
                height: 10,
                backgroundColor: "pink",
                borderRadius: "50%",
                top: "50%",
                left: "50%",
                transformOrigin: "center",
              }}
            />
          ))
        : null}
      {trigger
        ? particles3.map(({ key, x, y, scale, rotate }) => (
            <motion.div
              key={key}
              initial={{
                opacity: 1,
                x: `${x}px`,
                y: `${y}px`,
                scale: scale,
                rotate: rotate,
              }}
              animate={
                trigger
                  ? {
                      opacity: 0,
                      x: `${x * 3}px`,
                      y: `${y * 3}px`,
                      scale: scale * 3,
                      rotate: rotate + 180,
                    }
                  : {}
              }
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              style={{
                position: "absolute",
                width: 10,
                height: 10,
                backgroundColor: "red",
                borderRadius: "50%",
                top: "50%",
                left: "50%",
                transformOrigin: "center",
              }}
            />
          ))
        : null}
    </div>
  );
}
