import { useState } from "react";

import Activitybar from "./components/Activitybar/Activitybar";
import Sidebar from "./components/Sidebar/Sidebar";
import Tabsbar from "./components/Tabsbar/Tabsbar";
import Editor from "./components/Editor/Editor";
import Statusbar from "./components/Statusbar/Statusbar";
import Titlebar from "./components/Titlebar/Titlebar";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";

 export type FileName = 
  | 'Home.html'
  | 'Skills.js'
  | 'Projects.tsx'
  | 'About.md'
  | 'Contact.css';

export function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const [activeFile, setActiveFile] = useState<FileName>('Home.html');

  const [openTabs, setOpenTabs] = useState<FileName[]>(['Home.html']);

  const openFile = (file: FileName) => {
    if (!openTabs.includes(file)) {
      setOpenTabs([...openTabs, file]);
    }

    setActiveFile(file);
  }

  const closeTab = (file: FileName) => {
    const updatedTabs = openTabs.filter((tab) => tab !== file);

    setOpenTabs(updatedTabs);

    if (activeFile === file) {
      setActiveFile(updatedTabs[updatedTabs.length - 1] || 'Home.html');
    }
  };



  return (
    <div className="flex flex-col h-screen w-screen bg-[#24283b] text-[#a9b1d6] select-none overflow-hidden">
      <Titlebar />
      <div className="flex flex-1 overflow-hidden">
        <Activitybar 
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        {isSidebarOpen && (
          <Sidebar 
            activeFile={activeFile}
            onOpenFile={openFile}
          />
        )}

        <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
          <Tabsbar 
            openTabs={openTabs}
            activeFile={activeFile}
            onSelectTab={setActiveFile}
            onCloseTab={closeTab}
          />
          <Breadcrumbs activeFile={activeFile} />
          <Editor activeFile={activeFile} />
        </div>
      </div>
      <Statusbar />
    </div>
  );
}

export default App;
