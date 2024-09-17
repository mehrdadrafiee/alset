"use client"

import { Music, Map, Settings, CarFront } from 'lucide-react'
import AirConditionControl from './AirConditionControl';
import VolumeControl from './VolumeControl';

export default function MainSection() {

  return (
    <div className="bg-gray-900 h-20 flex items-center justify-around">
      <button className="flex flex-col items-center text-white hover:text-gray-400">
        <CarFront className="w-8 h-8" />
      </button>
      <div className="flex flex-row items-center space-x-4">
        <AirConditionControl />
      </div>
      <button className="flex flex-col items-center text-white hover:text-gray-400">
        <Music className="w-8 h-8" />
      </button>
      <button className="flex flex-col items-center text-white hover:text-gray-400">
        <Map className="w-8 h-8" />
      </button>
      <button className="flex flex-col items-center text-white hover:text-gray-400">
        <Settings className="w-8 h-8" />
      </button>
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