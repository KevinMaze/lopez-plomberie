import React from "react";
import style from "../styles/Footer.module.css";
import Image from "next/image";
import logo from "../../public/images/LP.png";
import { VscCircleFilled } from "react-icons/vsc";
import FB from "../../public/images/fb.png";
import Insta from "../../public/images/insta.png";

const Footer = () => {
    return (
        <footer className={style.footbar}>
            <div className={style.logo}>
                <a href="/">
                    <Image src={logo} alt="logo de Lopez Plomberie" />
                </a>
            </div>

            <ul className={style.links}>
                <li>
                    <VscCircleFilled className={style.dot} />
                    <a href="#">Accueil</a>
                </li>
                <li>
                    <VscCircleFilled className={style.dot} />
                    <a href="#">Services</a>
                </li>
                <li>
                    <VscCircleFilled className={style.dot} />
                    <a href="#">Réalisation</a>
                </li>
                <li>
                    <VscCircleFilled className={style.dot} />
                    <a href="#">Avis</a>
                </li>
                <li>
                    <VscCircleFilled className={style.dot} />
                    <a href="#">A Propos</a>
                </li>
                <li>
                    <VscCircleFilled className={style.dot} />
                    <a href="#">Contact</a>
                </li>
            </ul>

            <div className={style.linkSocial}>
                <a href="">
                    <Image
                        src={FB}
                        alt="logo de facebook"
                        className={style.social}
                    />
                </a>
                <a href="">
                    <Image
                        src={Insta}
                        alt="logo de instagram"
                        className={style.social}
                    />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
