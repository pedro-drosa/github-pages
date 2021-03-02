import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './style';

import githubLogo from '../../assets/logo-github-explorer.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src= {githubLogo} alt='Github explorer'></img>
      <Title>Explore repositórios no Github</Title>
      <Form action="">
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="#">
          <img 
          src="https://avatars.githubusercontent.com/u/33488150?s=460&u=a88d34bff6d0faf455f301d2c2d64b025c7cd387&v=4"
          alt="Pedro Juraci"
          />
          <div>
            <strong>rocketseat/gobarber-backend</strong>
            <p>Gostack Rocketseat - bootcamp project [ backend ]</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
