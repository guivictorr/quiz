const animations = {
  slideFromBottom: {
    initial: {
      y: '30px',
      opacity: 0,
    },
    final: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 40,
      },
    },
  },
};

export default animations;
