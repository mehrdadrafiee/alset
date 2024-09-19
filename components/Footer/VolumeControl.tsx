import { Slider } from "@/components/ui/slider";
import { ChevronLeft, ChevronRight, Volume1, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function VolumeControl() {
  const [volume, setVolume] = useState<number>(50);
  const [openVolumeMenu, setOpenVolumeMenu] = useState<boolean>(false);

  const renderVolumeIcon = () => {
    if (volume === 0) {
      return <VolumeX className="w-8 h-8" />
    }
    if (volume <= 50) {
      return <Volume1 className="w-8 h-8" />
    }
    if (volume > 50 && volume <= 100) {
      return <Volume2 className="w-8 h-8" />
    }
  }

  const handleVolumeChange = (value: number) => {
    setVolume(value);
    setOpenVolumeMenu(true);
  }
  return (
    <>
      <Button variant="ghost" size="icon" className="hover:bg-transparent hover:text-white">
        <ChevronLeft className="w-6 h-6 opacity-50" onClick={() => handleVolumeChange(volume - 1)} />
      </Button>
      <DropdownMenu open={openVolumeMenu} onOpenChange={setOpenVolumeMenu}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="hover:bg-transparent hover:text-white">
            {renderVolumeIcon()}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="top" className="w-80">
          <div className="px-2 py-4">
            <Slider
              value={[volume]}
              onValueChange={(newValue) => setVolume(newValue[0])}
              max={100}
              step={1} />
          </div>
          <div className="text-center text-sm text-muted-foreground pb-2">
            Current Volume: {volume}%
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button variant="ghost" size="icon" className="hover:bg-transparent hover:text-white">
        <ChevronRight className="w-6 h-6 opacity-50" onClick={() => handleVolumeChange(volume + 1)} />
      </Button>
    </>
  )
}