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

  widgetAnimation: {
    initial: {
      overflow: 'hidden',
      height: 0,
      opacity: 0,
    },
    final: {
      height: 'auto',
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 40,
      },
    },
  },

  questionWidget: {
    invisible: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  },
};

export default animations;
