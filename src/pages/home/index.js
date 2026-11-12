import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "../../components/Header/index";
import { GENRE_COLORS } from "../utils/genreColors";
import { Card } from "./style";
import { Genre } from "./style";
import { BtnMais } from "./style";
import { MainMod } from "./style";
import { Link } from "react-router-dom";
import { BtnDetails } from "./style";

export default function Home() {
   const [dados, setDados] = useState([]);
  const [quantidadeVisivel, setQuantidadeVisivel] = useState(24);

  

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
  

  const itensExibidos = dados.slice(0, quantidadeVisivel);
  const carregarMais = ()=>{
    setQuantidadeVisivel((prev) => prev + 24);
  }

  return (
    <>
    <Header/>
    <main>
      <MainMod>
      {itensExibidos.map((item) => (
        
        <Card key={item.id}>
          <img src={item.thumbnail} alt={item.title} />

          <Genre style={{ "--genre-bg": GENRE_COLORS[item.genre] }}>
            {item.genre}
          </Genre>

          <h1>{item.title}</h1>
          <Link to={"/" + item.title}>
          <BtnDetails>Ver Detalhes</BtnDetails>
          </Link>
        </Card>
      ))}
      </MainMod>
      <BtnMais onClick={carregarMais}>Carregar Mais</BtnMais>
    </main>
    </>
  );
}
