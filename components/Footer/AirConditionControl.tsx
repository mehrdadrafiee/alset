import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Slider } from "@/components/ui/slider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function AirConditionControl() {
  const MIN_TEMPERATURE = 60;
  const MAX_TEMPERATURE = 80;

  const [openAirConditionMenu, setOpenAirConditionMenu] = useState<boolean>(false);
  const [temperature, setTemperature] = useState<number>(69);
  
  const getTemperatureColor = (value: number) => {
    const r = Math.round((255 * value) / 100)
    const b = Math.round(255 - (255 * value) / 100)
    return `rgb(${r}, 0, ${b})`
  }

  const handleTemperatureChange = (value: number) => {
    const newTemp = Math.max(MIN_TEMPERATURE, Math.min(MAX_TEMPERATURE, value));
    setTemperature(newTemp);
    setOpenAirConditionMenu(true);
  }

  return (
    <>
      <Button variant="ghost" size="icon" className="hover:bg-transparent">
        <ChevronLeft 
          onClick={() => handleTemperatureChange(temperature - 1)} 
          className={`w-6 h-6 text-white opacity-50 ${temperature <= MIN_TEMPERATURE ? 'cursor-not-allowed' : ''}`} />
      </Button>
      <DropdownMenu open={openAirConditionMenu} onOpenChange={setOpenAirConditionMenu}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="hover:bg-transparent">
            <span className="text-3xl text-white">{temperature}<small>°F</small></span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64 p-4">
          <div className="py-4">
            <Slider
              value={[temperature]}
              onValueChange={(value) => handleTemperatureChange(value[0])}
              min={MIN_TEMPERATURE}
              max={MAX_TEMPERATURE}
              step={1}
              className="w-full" />
          </div>
          <div 
            className="h-8 w-full rounded-md"
            style={{ 
              background: `linear-gradient(to right, blue, ${getTemperatureColor(temperature)}, red)` 
            }} />
        </DropdownMenuContent>
      </DropdownMenu>
      <Button variant="ghost" size="icon" className="hover:bg-transparent">
        <ChevronRight 
          onClick={() => handleTemperatureChange(temperature + 1)} 
          className={`w-6 h-6 text-white opacity-50 ${temperature >= MAX_TEMPERATURE ? 'cursor-not-allowed' : ''}`} />
      </Button>
    </>
  )
}