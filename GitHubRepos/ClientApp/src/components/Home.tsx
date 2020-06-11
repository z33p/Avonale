import React from "react";

const Home: React.FC = () => {
  return (
    <div className="p-2">
      <h1>Avonale Teste C#</h1>
      <p>Estrutura do projeto:</p>
      <ul>
        <li>
          <a href="https://get.asp.net/">ASP.NET Core </a>
          <span>e </span>
          <a href="https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx">
            C#
          </a>
          <span> server-side</span>
        </li>
        <li>
          <a href="https://facebook.github.io/react/">React </a>
          <span>client-side</span>
        </li>
        <li>
          <a href="http://getbootstrap.com/">Bootstrap </a>
          <span>layout e styling</span>
        </li>
      </ul>
      <p>Links para contato ou outros projetos</p>
      <ul>
        <li>
          <a
            className="pr-3"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/raphael-pimenta-developer/"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            className=""
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/z33p/"
          >
            GitHub
          </a>
        </li>
      </ul>

      <h2>GitHubRepos</h2>
      <div className="py-1">
        <input className="mr-2" type="checkbox" readOnly checked={true} />
        <span>
          Deve existir uma seção "Meus repositórios", onde é listado todos os
          repositórios do candidato (você, que está lendo isso agora).
        </span>
      </div>

      <div className="py-1">
        <input className="mr-2" type="checkbox" readOnly checked={true} />
        <span>
          Deve existir uma seção onde o usuário pode procurar por repositórios
          do github utilizando como filtro nome ou parte do nome do repositório.
        </span>
      </div>

      <div className="py-1">
        <input className="mr-2" type="checkbox" readOnly checked={true} />
        <span>
          Deve existir uma seção listando repositórios favoritos (não são os
          seus favoritos e sim os marcados como favoritos por quem usar seu
          sistema)
        </span>
      </div>

      <div className="py-1">
        <input className="mr-2" type="checkbox" readOnly checked={true} />
        <span>
          Ao clicar no nome de um repositório em qualquer lugar, devemos ir para
          uma tela de detalhes com nome, descrição, linguagem, última data de
          atualização e o dono do repositório. Abaixo disso, liste todos os
          contribuidores do projeto.
        </span>
      </div>

      <div className="py-1">
        <input className="mr-2" type="checkbox" readOnly checked={true} />
        <span>
          Na tela de detalhes do repositório, deve ser possível marcá-lo como
          repositório favorito (ver 5.1).
        </span>
      </div>
    </div>
  );
};

export default Home;
