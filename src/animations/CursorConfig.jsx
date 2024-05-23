import useMouse from "@react-hook/mouse-position";

export const useVariants = (ref) => {
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;
  if (mouse.clientX !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.clientY !== null) {
    mouseYPosition = mouse.clientY;
  }

  return {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "20px",
      backgroundColor: "#8341e6",
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        mass: 0.6,
      },
    },
    buy: {
      opacity: 1,
      backgroundColor: "#8341e6",
      color: "#000",
      height: 64,
      width: 64,
      fontSize: "32px",
      x: mouseXPosition - 32,
      y: mouseYPosition - 32,
      transition: {
        mass: 0.6,
      },
    },
    sell: {
      opacity: 1,
      backgroundColor: "#EF5151",
      color: "#000",
      height: 64,
      width: 64,
      fontSize: "32px",
      x: mouseXPosition - 48,
      y: mouseYPosition - 48,
      transition: {
        mass: 0.6,
      },
    },
  };
};

export const spring = {
  type: "spring",
  stiffness: 100,
  damping: 30,
  restDelta: 0.001
};