import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
  return(
      <article className="teacher-item">
        <header>
          <img src="https://avatars3.githubusercontent.com/u/59898313?s=460&u=9de75bb6879098b9ee57bc050b445b552d6504e6&v=4" alt="Gustavo Farias"/>
          <div>
            <strong>Gustavo Farias</strong>
            <span>Inglês</span>
          </div>
        </header>
          <p>
            Durante a infância aprendeu a lingua inglesa durante seus sonhos, falando de maneira nativa.

            <br/> <br/>

            Agora com mais experiência e tendo visitado 1236287481 países, ensina inglês de maneira maestral, pois se conseguiu sonhando por que não consegues acordado !?
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 299,90</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
      </article>
  );
}

export default TeacherItem;
