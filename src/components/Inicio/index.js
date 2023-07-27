import { useEffect, useState } from "react";
import logo from "../../images/star-wars-logo.png";
import defaultImage from "../../images/default.jpg";
import Loading from "../Loading";
import Erro from "../Erro";
import Card from "../Card";

// Importando todas as imagens
import BB8Image from "../../images/BB8.jpg";
import DarthImage from "../../images/Darth.jpg";
import HanImage from "../../images/Han.jpg";
import LeiaImage from "../../images/Leia.jpg";
import LukeImage from "../../images/Luke.jpg";
import YodaImage from "../../images/Yoda.jpg";

function Inicio() {
  const [termo, setTermo] = useState("");
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(false);
  const [dados, setDados] = useState(null);
  const [imagem, setImagem] = useState(defaultImage);

  const getAllImages = [
    { term: "BB8", image: BB8Image },
    { term: "Darth", image: DarthImage },
    { term: "Han", image: HanImage },
    { term: "Leia", image: LeiaImage },
    { term: "Luke", image: LukeImage },
    { term: "Yoda", image: YodaImage },
  ];

  const fetchData = async () => {
    try {
      // Ativa o loading no momento da busca
      setLoading(true);

      // Selecionando a imagem correta de acordo com o termo
      const getCorrectImage = getAllImages.filter(
        (image) => image.term === termo
      );
      if (getCorrectImage.length > 0) {
        setImagem(getCorrectImage[0].image);
      }

      // Realiza a busca na API
      const getSearchTerm = await fetch(
        `https://swapi.dev/api/people/?search=${termo}`
      );
      const responseSearchTerm = await getSearchTerm.json();
      const getFirstResult = await responseSearchTerm.results[0];
      setDados(getFirstResult);
    } catch (error) {
      setErro(true);
      setLoading(false);

      console.log(
        "Erro ao carregar os dados. Tente novamente mais tarde. ",
        error
      );
    } finally {
      // Parando o loading para exibir o card com os dados
      setLoading(false);
    }
  };

  const buscaEnter = (event) => {
    if (event.key === "Enter") {
      botaoBuscar();
    }
  };

  const botaoBuscar = () => {
    // Verifica se o termo foi digitado no input
    if (!termo) {
      setAlert(true);
    } else {
      setAlert(false);
      fetchData();
    }
  };

  useEffect(() => {
    // Caso não seja encontrado nenhum dado com o termo buscado
    // Mostra a página de erro e remove o loading
    if (dados === undefined) {
      setErro(true);
      setLoading(false);
    }
  }, [dados]);

  if (loading) {
    return <Loading />;
  }

  if (erro) {
    return <Erro />;
  }

  if (dados) {
    return <Card imagem={imagem} dados={dados} />;
  }

  return (
    <div>
      <section className="logo">
        <img src={logo} alt="Star Wars" />
      </section>
      <section className="search">
        <input
          type="text"
          name="termo"
          value={termo}
          onChange={(e) => setTermo(e.target.value)}
          onKeyUp={(e) => buscaEnter(e)}
        />
        <button onClick={botaoBuscar}>Search</button>
      </section>
      {alert && (
        <section className="alert">
          <p>Digite um termo a ser buscado no input acima</p>
        </section>
      )}
    </div>
  );
}

export default Inicio;
