import { useState } from "react";
import Activitybar from "./components/Activitybar/ActivityBar";
import Sidebar from "./components/Sidebar/Sidebar";
import Tabsbar from "./components/Tabsbar/Tabsbar";
import Editor from "./components/Editor/Editor";
import Statusbar from "./components/Statusbar/Statusbar";

export function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeFile, setActiveFile] = useState('Home.html');
  const [openTabs, setOpenTabs] = useState(['Home.html']);

  const handleOpenFile = (fileName: string) => {
    if (!openTabs.includes(fileName)) {
      setOpenTabs([...openTabs, fileName]);
    }
    setActiveFile(fileName);
  };

  const handleCloseTab = (fileName: string) => {
    if (fileName === 'Home.html') return;

    const filteredTabs = openTabs.filter(tab => tab !== fileName);
    setOpenTabs(filteredTabs);

    if (activeFile === fileName) {
      setActiveFile(filteredTabs[filteredTabs.length - 1]);
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-tokyo-bg text-tokyo-text select-none overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        <Activitybar 
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        {isSidebarOpen && (
          <Sidebar 
            activeFile={activeFile}
            onOpenFile={handleOpenFile}
          />
        )}

        <div className="flex flex-col flex-1 overflow-hidden">
          <Tabsbar 
            openTabs={openTabs}
            activeFile={activeFile}
            onSelectTab={setActiveFile}
            onCloseTab={handleCloseTab}
          />
          <Editor activeFile={activeFile} />
        </div>
      </div>
      <Statusbar />
    </div>
  );
}

export default App;
