type NavVariants = {
  hidden: {
    opacity: number;
    y: number | string;
    transition: {
      type: string;
      stiffness?: number;
      damping?: number;
      delay?: number;
    };
  };
  show: {
    opacity: number;
    y: number;
    transition: {
      type: string;
      stiffness?: number;
      damping?: number;
      delay?: number;
    };
  };
};

export const navVariants: NavVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 1,
    },
  },
};

type SlideInProp = {
  direction: 'left' | 'right' | 'up' | 'down';
  type: string;
  delay: number;
  duration: number;
};

export const slideIn = ({ direction, type, delay, duration }: SlideInProp) => ({
  hidden: {
    x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
    y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

type StaggerContainerProps = {
  staggerChildren: number;
  delayChildren: number;
};

export const staggerContainer = ({ staggerChildren, delayChildren }: StaggerContainerProps) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const variant1 = (delay: number) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      ease: 'linear',
      duration: 1.2,
      delay,
    },
  },
});

export const variant2 = (delay: number) => ({
  hidden: {
    x: -50,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      ease: 'linear',
      duration: 1.2,
      delay,
    },
  },
});

type TextContainerProps = {
  i?: number;
};

export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: ({ i = 1 }: TextContainerProps) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

export const textVariant2 = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      ease: 'easeIn',
    },
  },
};

type FadeInProps = {
  direction: 'left' | 'right' | 'up' | 'down';
  type: string;
  delay: number;
  duration: number;
};

export const fadeIn = ({ direction, type, delay, duration }: FadeInProps) => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

type PlanetVariantsProps = {
  direction: 'left' | 'right';
};

export const planetVariants = ({ direction }: PlanetVariantsProps) => ({
  hidden: {
    x: direction === 'left' ? '-100%' : '100%',
    rotate: 120,
  },
  show: {
    x: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      duration: 1.8,
      delay: 0.5,
    },
  },
});

export const zoomIn = (delay: number, duration: number) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const footerVariants: NavVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.5,
    },
  },
};
