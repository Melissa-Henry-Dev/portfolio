import { X } from 'lucide-react';
import { DiHtml5, DiJavascript1, DiCss3 } from 'react-icons/di';
import { SiMarkdown, SiReact } from 'react-icons/si';

import type { FileName } from '../../App';

interface TabsbarProps {
    openTabs: FileName[];
    activeFile: FileName;
    onSelectTab: (fileName: FileName) => void;
    onCloseTab: (fileName: FileName) => void;
}

const getFileIcon = (fileName: FileName) => {
    switch (fileName) {
        case 'Home.html':
            return <DiHtml5 className='text-[#e34c26] shrink-0' size={16} />
        case 'Skills.js':
            return <DiJavascript1 className='text-[#f7df1e] shrink-0' size={16} />
        case 'Projects.tsx':
            return <SiReact className='text-[#007acc] shrink-0' size={14} />
        case 'About.md':
            return <SiMarkdown className='text-[#7aa2f7] shrink-0' size={14} />
        case 'Contact.css':
            return <DiCss3 className='text-[#264de4] shrink-0' size={16} /> 
        default:
            return null;
    }
};

export default function Tabsbar({ openTabs, activeFile, onSelectTab, onCloseTab }: TabsbarProps) {
    return (
        <div className="flex items-center h-10 bg-[#1a1b26] border-b border-[#16161e] overflow-x-auto">
            {openTabs.map((tab) => {
                const isActive = activeFile === tab;
                const isHome = tab === 'Home.html';

                return (
                    <div
                        key={tab}
                        onClick={() => onSelectTab(tab)}
                        className={`h-10 flex items-center gap-2 px-4 text-xs font-medium border-[#16161e] cursor-pointer relative group transition-colors duration-150 shrink-0 ${
                            isActive
                                ? 'bg-[#1f2335] text-[#a9b1d6] border-t-2 border-[#7aa2f7]'
                                : 'bg-[#1a1d2a]/60 text-[#a9b1d6]/50 hover:bg-[#24283b]/30 hover:text-[#a9b1d6]'
                        }`}
                    >
                        {getFileIcon(tab)}

                        <span className={isActive ? 'text-[#a9b1d6]' : ''}>{tab}</span>

                        {!isHome && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onCloseTab(tab);
                                }}
                                className={`p-0.5 rounded-sm hover:bg-[#24283b] hover:text-red-400 ml-1 transition-colors ${
                                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                }`}
                            >
                                <X size={12} />
                            </button>
                        )}

                        {isHome && <div className='w-3' />}
                    </div>
                );
            })}
            <div className='flex-1 h-full bg-[#1a1d2a]/40 border-b border-[#16161e]' />
        </div>
    );
}