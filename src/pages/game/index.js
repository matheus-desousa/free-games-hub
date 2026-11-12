import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import { MainGame } from "./style";
import { DivOne } from "./style";
import { DivTwo } from "./style";
import { ImgOne } from "./style";
import {POne} from "./style";
import {TitleOne} from "./style";
import {BtnOne } from "./style";
import {Req } from "./style";
import {TitleReq } from "./style";


export default function Game(props){

    const [game, setGame] = useState([]);
    
    useEffect(() =>{
      axios.get(`https://www.freetogame.com/api/game?id={${props.id}}`).
      then((response)=>{
        setGame(response.data)
      }).catch((err)=>{
        console.log(err)
      })
    }, [])
    return(
        <>
        <Header/>
        <MainGame>
            <DivOne>
                <TitleOne>{game.title}</TitleOne>
                <POne>Desenvolvedor: {game.publisher} • Data de Lançamento: {game.release_date}</POne>
                <ImgOne src={game.thumbnail}></ImgOne>
                
                <a href={game.game_url} target="_blank"><BtnOne>Acessar página do Jogo ↗</BtnOne></a>
            </DivOne>
            <DivTwo>
                <h2>Sobre o Jogo</h2>
                <p>{game.description}</p>
                <Req>
                    <TitleReq>Requisitos do Sistema(Mínimos)</TitleReq>
                    <ul>
                        <li>Sistema Operacional: {game?.minimum_system_requirements?.os}</li>
                        <li>Processador: {game?.minimum_system_requirements?.processor}</li>
                        <li>Memória RAM: {game?.minimum_system_requirements?.memory}</li>
                        <li>Placa de Vídeo  : {game?.minimum_system_requirements?.graphics}</li>
                        <li>Armazenamento: {game?.minimum_system_requirements?.storage}</li>

                    </ul>
                </Req>
            </DivTwo>
        </MainGame>
        </>
    )
}