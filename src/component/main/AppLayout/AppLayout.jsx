import Aboutme from "../Aboutme.jsx/Aboutme";
import Contact from "../Contact.jsx/Contact";
import Experience from "../Experience.jsx/Experience";
import Gallery from "../Gallery.jsx/Gallery";
import Header from "../Header.jsx/Header";
import Main from "../Home.jsx/Main";

export default function AppLayout() {
    return (
        <>
            <Main />
            <Header />
            <Aboutme />
            <Experience />
            <Gallery />
            <Contact/>
        </>
    )
}