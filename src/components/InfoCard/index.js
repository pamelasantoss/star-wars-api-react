import Voltar from "../Voltar";
import Especies from "./Details/especies";
import Filmes from "./Details/filmes";
import Naves from "./Details/naves";
import Planetas from "./Details/planetas";
import Veiculos from "./Details/veiculos";

function InfoCard({ imagem, dados }) {
  return (
    <div className="card">
      <div className="foto">
        <img src={imagem} alt={dados.name} />
      </div>

      <div className="titulo">
        <h1>{dados.name}</h1>
      </div>

      <div className="informacoes">
        <div className="col-esq">
          <h2>General information</h2>

          <h3>Birth year</h3>
          <p>{dados.birth_year}</p>

          <h3>Height</h3>
          <p>{dados.height}</p>

          <h3>Skin color</h3>
          <p>{dados.skin_color}</p>

          <h3>Eye color</h3>
          <p>{dados.eye_color}</p>

          <h3>Hair color</h3>
          <p>{dados.hair_color}</p>
        </div>

        <div className="col-dir">
          <h2>More information</h2>

          <Planetas planet={dados.homeworld} />
          <Filmes films={dados.films} />
          <Especies species={dados.species} />
          <Veiculos vehicles={dados.vehicles} />
          <Naves starships={dados.starships} />
        </div>
      </div>

      <div className="bt-voltar">
        <Voltar />
      </div>
    </div>
  );
}

export default InfoCard;
