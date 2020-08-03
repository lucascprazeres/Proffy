import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import { Container } from './styles';

const TeacherItem: React.FC = () => {
  return (
    <Container>
      <article className="teacher-item">
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/51201126?s=460&u=62e4abe922d28596d36b0cd2479f257041af11eb&v=4"
            alt=""
          />
          <div>
            <strong>Lucas Prazeres</strong>
            <span>Programação</span>
          </div>
        </header>

        <p>
          Entusiasta das melhores tecnologias do desenvolvimento web e mobile.
              <br /> <br />
              Apaixonado pela área de ti e pela programação no geral. Já trabalhei na Nasa, Google e
              Facebook e agora ministro aulas de programação por diversão.
            </p>

        <footer>
          <p>
            Preço/hora

                <strong>R$80,00</strong>
          </p>
          <button type="button">
            <img src={whatsappIcon} alt="" />
                Entrar em contato
              </button>
        </footer>
      </article>
    </Container>
  )
}

export default TeacherItem;