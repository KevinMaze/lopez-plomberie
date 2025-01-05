import React from "react";
import style from "../styles/Header.module.css";
import Image from "next/image";
import logo from "../../public/images/LP.png";
import { VscCircleFilled } from "react-icons/vsc";

const Header = () => {
    return (
        <div className={style.navbar}>
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
        </div>
    );
};

export default Header;
