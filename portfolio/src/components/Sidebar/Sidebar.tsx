import { DiHtml5, DiJavascript1, DiCss3 } from "react-icons/di";
import { SiMarkdown, SiTypescript } from "react-icons/si";
import { ChevronDown } from "lucide-react";

interface SidebarProps {
    activeFile: string;
    onOpenFile: (fileName: string) => void;
}

const files = [
    {name: 'Home.html', icon: DiHtml5, color: 'text-[#e34c26]'},
    {name: 'Skills.js', icon: DiJavascript1, color: 'text-[#f7df1e]'},
    {name: 'Projects.tsx', icon: SiTypescript, color: 'text-[#007acc]'},
    {name: 'About.md', icon: SiMarkdown, color: 'text-[#7aa2f7]'},
    {name: 'Contact.css', icon: DiCss3, color: 'text-[#264de4]'},
];

export default function Sidebar({ activeFile, onOpenFile }: SidebarProps) {
    return (
        <div className="w-60 h-full bg-tokyo-sidebar flex fle-col border-r border-[#16161e]">
            <div className="p-3 text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center justify-between">
                <span>Explorer: PORTFOLIO</span>
            </div>
            <div className="w-full">
                <div className="flex items-center gap-1 px-2 py-1 text-xs font-semibold text-tokyo-text/80 bg-tokyo-bg/20 cursor-pointer">
                    <ChevronDown size={14} />
                    <span className="uppercase text-[11px] font-bold tracking-wide">my-portfolio</span>
                </div>
                <div>
                    {files.map((file) => {
                        const IconComponent = file.icon;
                        const isSelected = activeFile === file.name;

                        return (
                            <button
                                key={file.name}
                                onClick={() => onOpenFile(file.name)}
                                className={`w-full flex items-center gap-2 px-6 py1.5 text-sm transition-colors duration-150 text-left relative ${
                                    isSelected
                                        ? 'bg-tokyo-bg text-tokyo-accent font-medium'
                                        : 'text-tokyo-text/70 hover:bg-[#24283b]/40 hover:text-tokyo-text'
                                }`}
                            >
                                {isSelected && (
                                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-tokyo-accent" />
                                )}

                                <IconComponent size={18} className={`${file.color} shrink-0`} />
                                <span className="truncate text-[13px]">{file.name}</span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}