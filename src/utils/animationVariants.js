export const fadeInItems = {
  hidden: {
    opacity: 0,
    y: '2rem',
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      duration: 0.5
    },
  }),
};

export const fadeIn = {
  hidden: {
    opacity: 0,
    y: '2rem',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    }
  },
};
