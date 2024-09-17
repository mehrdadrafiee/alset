import { MapProvider } from "@/providers/map-provider";
import Map from "../Map";
import TopSection from "./TopSection";

export default function MainSection() {
  return (
    <section className="w-full h-full relative">
      <TopSection />
      <MapProvider>
        <Map />
      </MapProvider>
    </section>
  )
}