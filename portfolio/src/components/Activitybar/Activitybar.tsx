import { Files, Search, GitBranch, Download, Settings } from "lucide-react";

interface ActivitybarProps {
    isSidebarOpen: boolean;
    setIsSidebarOpen: (open: boolean) => void;
}

export default function Activitybar({ isSidebarOpen, setIsSidebarOpen }: ActivitybarProps) {
    const handleDownloadResume = () => {
        const resumeUrl = '/resume.pdf';
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = "Melissa_Henry_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="w-16 h-full bg-[#1f2335] flex flex-col justify-between items-center py-4 border-r border-[#16161e]">
            <div className="flex flex-col items-center w-full gap-4">
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className={`w-full py-3 flex justify-center relative group transition-colors duration-200 ${
                        isSidebarOpen ? 'text-[#a9b1d6] border-l-2 border-[#7aa2f7]' : 'text-gray-500 hover:text-[#a9b1d6]'    
                    }`}
                    title="Explorer"
                >
                    <Files size={24} className="transform group-hover:scale-105 transition-transform" />
                </button>
                <button 
                    className="w-full py-3 flex justify-center text-gray-500 hover:text-[#a9b1d6] transition-colors duration-200"
                    title="Search"
                >
                    <Search size={24} />
                </button>
                <button
                    className="w-full py-3 flex justify-center text-gray-500 hover:text-[#a9b1d6] transition-colors duration-200"
                    title="Source Control"
                >
                    <GitBranch size={24} />
                </button>
                <button
                    onClick={handleDownloadResume}
                    className="w-full py-3 flex justify-center text-gray-500 hover:text-[#a9b1d6] transition-colors duration-200"
                    title="Download Resume"
                >
                    <Download size={24} />
                </button>
            </div>
            <div className="w-full flex flex-col items-center">
                <button 
                    className="w-full py-3 flex justify-center text-gray-500 hover:text-[#a9b1d6] transition-colors duration-200"
                    title="Settings"
                >
                    <Settings size={24} />
                </button>
            </div>
        </div>
    );
}