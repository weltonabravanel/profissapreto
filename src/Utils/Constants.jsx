import React from "react";

import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

export const categories = [
    { name: "Inicio", icon: <AiFillHome />, type: "home" },
    { name: "Tendências", icon: <MdLocalFireDepartment />, type: "category" },
    { name: "Música", icon: <CgMusicNote />, type: "category" },
    { name: "Filmes", icon: <FiFilm />, type: "category" },
    { name: "Ao vivo", icon: <MdLiveTv />, type: "category" },
    { name: "Jogos", icon: <IoGameControllerSharp />, type: "category" },
    { name: "Notícias", icon: <ImNewspaper />, type: "category" },
    { name: "Esportes", icon: <GiDiamondTrophy />, type: "category" },
    { name: "Aprendizado", icon: <RiLightbulbLine />, type: "category" },
    {
        name: "Moda e beleza",
        icon: <GiEclipse />,
        type: "category",
        divider: true,
    },
    { name: "Configurações", icon: <FiSettings />, type: "menu" },
    { name: "Histórico de relatórios", icon: <AiOutlineFlag />, type: "menu" },
    { name: "Ajuda", icon: <FiHelpCircle />, type: "menu" },
    { name: "Enviar comentários", icon: <RiFeedbackLine />, type: "menu" },
];
