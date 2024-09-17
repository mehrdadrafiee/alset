import Footer from "@/components/Footer/MainSection";
import LeftSection from "@/components/LeftPanel/MainSection";
import RightSection from "@/components/RightPanel/MainSection";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export default function Home() {
  return (
    <main className="flex flex-col h-screen justify-between">
      <div className="flex flex-row justify-between h-screen">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={35}>
            <LeftSection />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={65}>
            <RightSection />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <Footer />
    </main>
  );
}
