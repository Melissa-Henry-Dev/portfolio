import { ChevronRight } from "lucide-react";
import { DiHtml5, DiJavascript1, DiCss3 } from "react-icons/di";
import { SiMarkdown, SiReact } from "react-icons/si";
import { VscSymbolMethod } from "react-icons/vsc";
import type { FileName } from "../../App";

interface BreadcrumbsProps {
    activeFile: FileName;
}

const getBreadCrumbData = (fileName: FileName) => {
    switch (fileName) {
        case 'Home.html' :
            return {
                path: ['my-portfolio', 'src', 'pages'],
                icon: <DiHtml5 className="text-[#e34c26] shrink-0" size={14} />,
                symbolName: 'Home',
            };
        case 'Skills.js' :
            return {
                path: ['my-portfolio', 'src', 'pages'],
                icon: <DiJavascript1 className="text-[#f7df1e] shrink-0" size={14} />,
                symbolName: 'Skills',
            };
        case 'Projects.tsx' :
            return {
                path: ['my-portfolio', 'src', 'pages'],
                icon: <SiReact className="text-[#007acc] shrink-0" size={12} />,
                symbolName: 'Projects',
            };
        case 'About.md' :
            return {
                path: ['my-portfolio', 'src', 'pages'],
                icon: <SiMarkdown className="text-[#7aa2f7] shrink-0" size={12} />,
                symbolName: 'About',
            };
        case 'Contact.css' :
            return {
                path: ['my-portfolio', 'src', 'pages'],
                icon: <DiCss3 className="text-[#264de4] shrink-0" size={14} />,
                symbolName: 'Contact',
            };
        
        default:
            return {
                path:['my-portfolio'],
                icon: null,
                symbolName: '',
            };
    }
};

export default function Breadcrumbs({ activeFile }: BreadcrumbsProps) {
    const { path, icon, symbolName } = getBreadCrumbData(activeFile);

    return (
        <div className="w-full h-5.5 bg-[#1f2335] flex items-center px-4 text-[12px] text-[#a9b1d6]/40 select-none gap-1.5 border-b border-[#16161e]/40">
            {path.map((folder, index) => (
                <div
                    key={index}
                    className="flex items-center gap-1.5"
                >
                    <span className="hover:text-[#a9b1d6]/70 cursor-pointer transition-colors">
                        {folder}
                    </span>
                    <ChevronRight size={12} className="text-[#a9b1d6]/20 shrink-0" />
                </div>
            ))}

            <div className="flex items-center gap-1 text-[#a9b1d6]/60 font-medium hover:text-[#a9b1d6] cursor-pointer transition-colors">
                {icon}
                <span>{activeFile}</span>
            </div>

            {symbolName && (
                <>
                    <ChevronRight size={12} className="text-[#a9b1d6]/20 shrink-0" />
                    <div className="flex items-center gap-1 text-purple-400/80 hover:text-purple-400 cursor-pointer transition-colors">
                        <VscSymbolMethod size={13} className="text-purple-400" />
                        <span className="text-[11px]">{symbolName}</span>
                    </div>
                </>
            )}
        </div>
    );
}