import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Music2, Play, Podcast, RedoDot, Search, SlidersVertical, UndoDot } from "lucide-react";
import { useState } from "react";

const playbackOptions = [0.5, 0.75, 1, 1.25, 1.5, 2];

export default function Media() {
  const [playback, setPlayback] = useState(1);

  const handleSpeedChange = () => {
    const currentIndex = playbackOptions.indexOf(playback);
    const nextIndex = (currentIndex + 1) % playbackOptions.length;
    setPlayback(playbackOptions[nextIndex]);
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex items-center justify-start">
        <Button className="bg-stone-300 text-stone-500 rounded-none border-none h-20 w-20 hover:bg-stone-400 hover:text-stone-600">
          <Music2 className="w-6 h-6" />
        </Button>
        <Button variant="ghost" className="text-gray-500 mr-4 hover:bg-transparent">
          <small className="flex items-center justify-start">
            <Podcast className="w-6 h-6" /> Choose Media Source
          </small>
        </Button>
        <Button variant="ghost" className="text-xl text-gray-500 ml-auto mr-4 hover:bg-transparent" onClick={handleSpeedChange}>
          {playback}x
        </Button>
      </div>
      <Slider />
      <div className="flex items-center justify-around my-4">
        <Button variant="ghost" className="hover:bg-transparent">
          <UndoDot className="w-6 h-6" />
        </Button>
        <Button variant="ghost" disabled className="hover:bg-transparent">
          <Play className="w-6 h-6" />
        </Button>
        <Button variant="ghost" className="hover:bg-transparent">
          <RedoDot className="w-6 h-6" />
        </Button>
        <Button variant="ghost" className="hover:bg-transparent">
          <SlidersVertical className="w-6 h-6" />
        </Button>
        <Button variant="ghost" className="hover:bg-transparent">
          <Search className="w-6 h-6" />
        </Button>
      </div>
    </div>
  )
}