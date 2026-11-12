import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "../pages/home";
import Game  from "../pages/game";
import Metricas from "../pages/metricas";


export default function Rotas() {

    const [dados, setDados] = useState([])
    useEffect(() => {
    axios
      .get("https://www.freetogame.com/api/games")
      .then((response) => {
        setDados(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error.message);
      });
  }, []);

    return (
        <Routes>
            <Route element={<Home/>} path="/"/>

            
            {dados.map((item) => {
                const itemTitle = `/` + item.title;
                return(
                        <Route element={<Game id={item.id}/>} path={itemTitle}/>
                )
            })}
        <Route element={<Metricas/>} path="/Estatisticas"/>
        </Routes>

    )
}

