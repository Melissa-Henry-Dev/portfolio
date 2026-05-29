import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Home() {
    return (
        <div className="p-8 md:p-12 max-w-4xl min-h-full bg-[#24283b] text-[#a9b1d6] font-mono flex flex-col justify-center select-text">
            <div className="flex flex-col mb-6 leading-none">
                <h1 className="text-6xl md:text-8xl font-satoshi font-black tracking-tight text-[#c0caf5] uppercase">Melissa</h1>
                <h1 className="text-6xl md:text-8xl font-satoshi font-black tracking-tight text-[#c0caf5] uppercase mt-2">Henry</h1>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 text-xs md:text-sm font-semibold rounded bg-[#f7768e]/10 text-[#f7768e] border border-[#f7768e]/20 shadow-sm">Full-Stack Developer</span>
                <span className="px-3 py-1 text-xs md:text-sm font-semibold rounded bg-[#7dcfff]/10 text-[#7dcfff] border border-[#7dcfff]/20 shadow-sm">Meta Certified</span>
                <span className="px-3 py-1 text-xs md:text-sm font-semibold rounded bg-[#9ece6a]/10 text-[#9ece6a] border border-[#9ece6a]/20 shadow-sm">AI & Creative Tech Enthusiast</span>
            </div>

            <p className="max-w-3xl text-lg md:text-xl leading-relaxed mb-6">
                I'm a self-taught software developer from South Africa focused on building modern, responsive, and user-centered web applications.
                With Meta certifications in both frontend and backend development, I enjoy creating clean digital experiences while continuously exploring new technologies, AI tools, and scalable design systems.
            </p>

            <div className="flex flex-wrap items-center gap-4">
                <a 
                    href="https://github.com/Melissa-Henry-Dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#a9b1d6]/70 hover:text-[#ff9e64] transition-colors font-medium group text-sm md:text-base"
                >
                    <div className="w-8 h-8 rounded-full bg-[#ff9e64]/10 flex items-center justify-center group-hover:bg-[#ff9e64]/20 transition-colors">
                        <FaGithub size={18} className="text-[#ff9e64]" />
                    </div>
                    <span>GitHub</span>
                </a>
                <a 
                    href="https://linkedin.com/in/melissa-henry-xd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#a9b1d6]/70 hover:text-[#7dcfff] transition-colors font-medium group text-sm md:text-base"
                >
                    <div className="w-8 h-8 rounded-md bg-[#7dcfff]/10 flex items-center justify-center group-hover:bg-[#7dcfff]/20 transition-colors">
                        <FaLinkedin size={18} className="text-[#7dcfff]" />
                    </div>
                    <span>LinkedIn</span>
                </a>
                <a 
                    href="mailto:melissa.henry0@gmail.com"
                    className="flex items-center gap-2 text-[#a9b1d6]/70 hover:text-[#9ece6a] transition-colors font-medium group text-sm md:text-base"
                >
                    <div className="w-8 h-8 rounded-md bg-[#9ece6a]/10 flex items-center justify-center group-hover:bg-[#9ece6a]/20 transition-colors">
                        <Mail size={18} className="text-[#9ece6a]" />
                    </div>
                    <span>Email</span>
                </a>
            </div>
        </div>
    );
}