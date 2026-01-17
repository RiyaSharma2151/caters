'use client';

import { useEffect, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationOptions {
    trigger: RefObject<HTMLElement>;
    start?: string;
    end?: string;
    scrub?: boolean | number;
    markers?: boolean;
    onEnter?: () => void;
    onLeave?: () => void;
}

export function useScrollAnimation(
    animation: (element: HTMLElement) => gsap.core.Timeline | gsap.core.Tween,
    options: ScrollAnimationOptions
) {
    useEffect(() => {
        if (!options.trigger.current) return;

        const ctx = gsap.context(() => {
            const tl = animation(options.trigger.current!);

            ScrollTrigger.create({
                trigger: options.trigger.current,
                start: options.start || 'top 80%',
                end: options.end || 'bottom 20%',
                scrub: options.scrub !== undefined ? options.scrub : false,
                markers: options.markers || false,
                onEnter: options.onEnter,
                onLeave: options.onLeave,
                animation: tl,
            });
        });

        return () => ctx.revert();
    }, [animation, options]);
}
