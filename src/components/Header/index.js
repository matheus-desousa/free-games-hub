import logo from "../../assets/images/logo.jpeg"
import { Link } from "react-router-dom";

import { HeaderMod } from "./style";
import { ImgMod } from "./style";
import { InputMod } from "./style";
import { Li } from "./style";
import { Ul } from "./style";


export default function Header(){
    return(
        <>
        <HeaderMod>
            <Link to="/">
        <ImgMod src={logo}></ImgMod>
        </Link>
        <Ul>
            <Link to='/Estatisticas'>
            <Li>Estatísticas do Catálogo</Li>
            </Link>
            <Li>Conta</Li>
            <Li>Configurações</Li>
            
        </Ul>
        <InputMod type="text" placeholder="Busque jogo por nome"></InputMod>
        </HeaderMod>
        </>
    )
}