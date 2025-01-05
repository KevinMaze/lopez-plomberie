import Image from "next/image";
import styles from "./page.module.css";
import Cam from "../public/images/camionette.jpg";

export default function Home() {
    return (
        <div className={styles.page}>
            {/* <Image src={Cam} alt="Camionette de lopez Plomberie" /> */}
        </div>
    );
}
