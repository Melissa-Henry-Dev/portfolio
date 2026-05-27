import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import { VscVscode } from "react-icons/vsc";

export default function Titlebar() {
    const menuItems = ['File', 'Edit', 'Selection', 'View', 'Go', 'Run', 'Terminal', 'Help'];

    return (
        <div className="w-full h-9 bg-[#1f2335] flex items-center justify-between px-3 text-[13px] border-b border-[#16161e] select-none text-[#a9b1d6]/80">
            <div className="flex items-center gap-4">
                <VscVscode size={24} className="text-[#007acc] shrink-0" />

                <div className="hidden lg:flex items-center gap-3">
                    {menuItems.map((item) => (
                        <button
                            key={item}
                            className="hover:bg-[#1f2335]/50 px-2 py-0.5 rounded transition-colors text-[#a9b1d6]/70 hover:text-[#a9b1d6] text-[12px]"
                        >
                            {item}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-2 text-[#a9b1d6]/40 ml-1">
                    <ArrowLeft size={14} className="hover:text-[#a9b1d6] cursor-pointer transition-colors" />
                    <ArrowRight size={14} className="hover:text-[#a9b1d6] cursor-pointer transition-colors" />
                </div>
            </div>

            <div className="flex-1 max-w-112.5 mx-4 relative flex items-center">
                <div className="w-full h-5.5 bg-[#1f2335]/60 border border-[#16161e] rounded-md px-3 text-[11px] text-[#a9b1d6]/50 flex items-center justify-between shadow-inner">
                    <div className="flex items-center gap-2 w-full justify-center">
                        <Search size={11} className="text-[#a9b1d6]/40" />
                        <span>Melissa Henry: Portfolio</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-2 pl-4">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] cursor-pointer hover:brightness-90 active:scale-95 transition-all" title="Close" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] cursor-pointer hover:brightness-90 active:scale-95 transition-all" title="Minimize" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1a9c2b] cursor-pointer hover:brightness-90 active:scale-95 transition-all" title="Fullscreen" />
            </div>
        </div>
    );
}