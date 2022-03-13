import { colors } from "../App.styled";

export const homeAnimations = {
  pageExit: {
    y: "-120%",
    opacity: 0,
    transition: {
      y: {
        duration: 1,
        ease: "easeOut",
      },
      opacity: {
        duration: 0.3,
      },
    },
  },
  pageInitial: {
    opacity: 0,
  },
  pageEnter: {
    opacity: 1,
    transition: {
      opacity: {
        duration: 1.5,
      },
    },
  },
};

export const aboutAnim = {
  pageEnter: {
    y: 0,
    opacity: 1,
    transition: {
      y: {
        duration: 0.5,
      },
      opacity: {
        duration: 0.5,
      },
    },
  },
  pageExit: {
    y: "-120%",
    opacity: 0,
    transition: {
      y: {
        duration: 1,
      },
      opacity: {
        duration: 1,
      },
    },
  },
  pageInitial: {
    y: "50%",
    opacity: 0,
  },
};
