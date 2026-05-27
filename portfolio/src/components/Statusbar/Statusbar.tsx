import { XCircle, AlertTriangle, Radio, Check, GitBranch } from "lucide-react";

export default function Statusbar() {
    return (
       <div className="w-full h-6 bg-[#1f2335] flex items-center justify-between px-3 text-[12px] text-gray-400 border-t border-[#16161e] select-none">
        <div className="flex items-center gap-4 h-full">
            <div className="flex items-center gap-1 hover:text-[#a9b1d6] cursor-pointer transition-colors px-1 h-full">
                <GitBranch size={13} />
                <span>main</span>
            </div>

            <div className="flex items-center gap-3 hover:bg-[#1f2335]/30 px-1 h-full cursor-pointer transition-colors">
                <div className="flex items-center gap-1 text-red-400">
                    <XCircle size={13} />
                    <span>0</span>
                </div>

                <div className="flex items-center gap-1 text-yellow-500">
                    <AlertTriangle size={13} />
                    <span>0</span>
                </div>
            </div>
        </div>

        <div className="flex items-center gap-4 h-full">
            <div className="flex items-center gap-1 hover:text-[#a9b1d6] cursor-pointer transition-colors px-1 h-full">
                <Radio size={13} className="text-[#7aa2f7]" />
                <span>Go Live</span>
            </div>

            <div className="flex items-center gap-1 hover:text-[#a9b1d6] cursor-pointer transition-colors px-1 h-full">
                <Check size={13} className="text-green-400" />
                <span>Prettier</span>
            </div>
        </div>
       </div>
    );
}