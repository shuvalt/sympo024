"use client"
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import './Content.css';
import logo from '../public/images/sympologo.png';

interface TimerState {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const Content: React.FC = () => {
  const [timerState, setTimerState] = useState<TimerState>({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    const countdownDate = new Date('March 27 2024 00:00:00').getTime();

    intervalRef.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / (1000));

      setTimerState({
        days: days.toString().padStart(2, '0'), // Ensure two-digit display
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0'),
      });

      if (distance < 0) {
        clearInterval(intervalRef.current!);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="content">
      <div className="logoContainer">
        <Image src={logo} alt="Logo" />
        <h1>Innovate, Integrate, Inspire.</h1>
      </div>
      <div className="dateContainer">
        <h2>MARCH 27 , 2024</h2>
      </div>
      <a className="registerButton" href="https://forms.gle/xYKSZv81akNEyuc19" target="_blank">
        Register Now
      </a>
      <div className="timerContainer">
        <div className="timer">
          <div className="timerNumber">
            <p className="numbers">{timerState.days}</p>
            <p><small>Days</small></p>
          </div>
          <div className="timerNumber">
            <p className="numbers">{timerState.hours}</p>
            <p><small>Hours</small></p>
          </div>
          <div className="timerNumber">
            <p className="numbers">{timerState.minutes}</p>
            <p><small>Minutes</small></p>
          </div>
          <div className="timerNumber">
            <p className="numbers">{timerState.seconds}</p>
            <p><small>Seconds</small></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
