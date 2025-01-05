import Image from "next/image";
import styles from "./page.module.css";
import Cam from "../public/images/camionette.jpg";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <div>
            <Header />
            <Image src={Cam} alt="Camionette de lopez Plomberie" />
            <Footer />
        </div>
    );
}
