import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
  const ref = useRef<HTMLElement>(null);

  const animateIn = (
    elements: string | Element | Element[],
    options: {
      duration?: number;
      delay?: number;
      stagger?: number;
      y?: number;
      x?: number;
      opacity?: number;
      scale?: number;
      rotation?: number;
      ease?: string;
    } = {}
  ) => {
    if (!ref.current) return;

    const {
      duration = 1,
      delay = 0,
      stagger = 0,
      y = 50,
      x = 0,
      opacity = 0,
      scale = 1,
      rotation = 0,
      ease = 'power2.out'
    } = options;

    const targets = typeof elements === 'string' 
      ? ref.current.querySelectorAll(elements)
      : elements;

    gsap.fromTo(targets, 
      {
        y,
        x,
        opacity,
        scale: scale === 1 ? undefined : scale,
        rotation: rotation === 0 ? undefined : rotation,
      },
      {
        y: 0,
        x: 0,
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration,
        delay,
        stagger,
        ease,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  };

  const animateInOnScroll = (
    elements: string,
    options: {
      duration?: number;
      stagger?: number;
      y?: number;
      x?: number;
      opacity?: number;
      scale?: number;
      ease?: string;
    } = {}
  ) => {
    useEffect(() => {
      if (!ref.current) return;

      const {
        duration = 0.8,
        stagger = 0.2,
        y = 60,
        x = 0,
        opacity = 0,
        scale = 0.9,
        ease = 'power2.out'
      } = options;

      const targets = ref.current.querySelectorAll(elements);
      
      gsap.set(targets, {
        y,
        x,
        opacity,
        scale
      });

      ScrollTrigger.batch(targets, {
        onEnter: (elements) => {
          gsap.to(elements, {
            y: 0,
            x: 0,
            opacity: 1,
            scale: 1,
            duration,
            stagger,
            ease,
            overwrite: true
          });
        },
        onLeave: (elements) => {
          gsap.to(elements, {
            y: -50,
            opacity: 0,
            duration: 0.3,
            stagger: 0.1,
            overwrite: true
          });
        },
        onEnterBack: (elements) => {
          gsap.to(elements, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            overwrite: true
          });
        },
        start: 'top bottom-=100',
        end: 'bottom top+=100'
      });

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }, [elements, options]);
  };

  return { ref, animateIn, animateInOnScroll };
};

export default useGSAP;