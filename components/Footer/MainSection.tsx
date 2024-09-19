"use client"

import { CarFront, Bluetooth, MoreHorizontal, Phone, Podcast, Webcam, CalendarDays, AudioLines } from 'lucide-react'
import AirConditionControl from './AirConditionControl';
import VolumeControl from './VolumeControl';
import { Button } from '../ui/button';

export default function MainSection() {

  return (
    <div className="bg-black text-gray-300 h-20 flex items-center justify-around">
      <Button variant="ghost" className="flex flex-col items-center hover:bg-transparent hover:text-white h-18 w-18">
        <CarFront className="w-8 h-8" />
      </Button>
      <div className="flex flex-row items-center space-x-4">
        <AirConditionControl />
      </div>
      <div className="flex flex-row items-center space-x-12">
        <Button variant="ghost" className="flex items-center hover:bg-transparent hover:text-white h-18 w-18">
          <Phone className="w-8 h-8 text-green-500" />
        </Button>
        <Button className="flex items-center hover:text-white h-18 w-18 p-1 bg-orange-500 hover:bg-orange-600" size="icon">
          <AudioLines className="w-8 h-8 text-white" />
        </Button>
        <Button variant="ghost" className="flex items-center hover:bg-transparent hover:text-white h-18 w-18">
          <Webcam className="w-8 h-8 text-gray-300" />
        </Button>
        <Button className="flex items-center hover:bg-transparent hover:text-white h-18 w-18 p-1 border border-gray-800" size="icon">
          <MoreHorizontal className="w-8 h-8 text-gray-300" />
        </Button>
        <Button variant="ghost" className="flex items-center hover:bg-transparent hover:text-white h-18 w-18">
          <CalendarDays className="w-8 h-8 text-gray-300" />
        </Button>
        <Button className="flex items-center hover:text-white h-18 w-18 p-1 bg-blue-600 hover:bg-blue-700" size="icon">
          <Bluetooth className="w-8 h-8 text-white" />
        </Button>
        <Button className="flex items-center hover:text-white h-18 w-18 p-1 bg-purple-500 hover:bg-purple-600" size="icon">
          <Podcast className="w-8 h-8 text-white" />
        </Button>
      </div>
      <div className="flex flex-row items-center space-x-4">
        <VolumeControl />
      </div>
      {/* <div className="flex flex-row items-center space-x-4">
        <button>
          <ChevronLeft onClick={() => setWeather(weather - 1)} className="w-8 h-8 text-white opacity-50" />
        </button>
        <span className="text-4xl text-white">{weather}</span>
        <button>
          <ChevronRight onClick={() => setWeather(weather + 1)}   className="w-8 h-8 text-white opacity-50" />
        </button>
      </div> */}
    </div>
  )
}