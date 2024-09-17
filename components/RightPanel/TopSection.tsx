"use client"

import { LockIcon, LockOpen, SquareParkingOff, UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function TopSection() {
  const [isLocked, setIsLocked] = useState(false);
  const [outsideTemp, setOutsideTemp] = useState(69);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="absolute top-0 left-0 w-full z-10 bg-white bg-opacity-50 h-10 backdrop-blur-sm">
      <div className="flex flex-row justify-between items-center h-full px-4">
        <div className="flex flex-row items-center space-x-8">
          <button onClick={() => setIsLocked(!isLocked)}>
            {isLocked ? (
              <LockIcon className="w-4 h-4" />
            ) : (
              <LockOpen className="w-4 h-4" />
            )}
          </button>
          <Button variant="ghost" size="icon" className="hover:bg-transparent">
            <UserRound className="w-4 h-4" />
          </Button>
          <p className="text-sm">{mounted ? currentTime : '...'}</p>
          <p className="text-sm">{outsideTemp}°F</p>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <SquareParkingOff className="w-4 h-4 text-orange-500" />
          <small className="text-xs uppercase">Passenger Airbag</small>
        </div>
      </div>
    </section>
  )
}