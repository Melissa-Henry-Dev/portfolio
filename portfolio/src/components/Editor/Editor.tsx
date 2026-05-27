import Home from "../../pages/Home";
import Skills from "../../pages/Skills";
import Projects from "../../pages/Projects";
import About from "../../pages/About";
import Contact from "../../pages/Contact";

import type { FileName } from "../../App";

interface EditorProps {
    activeFile: FileName;
}

export default function Editor({
    activeFile,
}: EditorProps) {
    const renderContent = () => {
        switch (activeFile) {
            case "Home.html":
                return <Home />
            case "Skills.js":
                return <Skills />
            case "Projects.tsx":
                return <Projects />
            case "About.md":
                return <About />
            case "Contact.css":
                return <Contact />

            default:
                return <Home />       
        }
    };

    return (
        <main>
            {renderContent()}
        </main>
    );
}