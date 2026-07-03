"use client";
import { useEffect, useRef, useState } from "react";
import styles from "@/styles/home.module.css";

interface AnimatedCounterProps {
	endValue: number;
	label: string;
	duration?: number;
}

export default function AnimatedCounter({ endValue, label, duration = 2000 }: AnimatedCounterProps) {
	const [count, setCount] = useState(0);
	const [hasStarted, setHasStarted] = useState(false);
	const elementRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !hasStarted) {
					setHasStarted(true);
				}
			},
			{ threshold: 0.5 },
		);

		if (elementRef.current) {
			observer.observe(elementRef.current);
		}

		return () => {
			if (elementRef.current) {
				observer.unobserve(elementRef.current);
			}
		};
	}, [hasStarted]);

	useEffect(() => {
		if (!hasStarted) return;

		let startTime: number;
		let animationFrameId: number;

		const animate = (currentTime: number) => {
			if (!startTime) startTime = currentTime;
			const elapsed = currentTime - startTime;
			const progress = Math.min(elapsed / duration, 1);

			setCount(Math.floor(endValue * progress));

			if (progress < 1) {
				animationFrameId = requestAnimationFrame(animate);
			}
		};

		animationFrameId = requestAnimationFrame(animate);

		return () => cancelAnimationFrame(animationFrameId);
	}, [hasStarted, endValue, duration]);

	return (
		<div ref={elementRef} className={styles.stat_box}>
			<h2>
				{count}
				{endValue === 15 ? "" : endValue === 45 ? "" : "+"}
			</h2>
			<p>{label}</p>
		</div>
	);
}
