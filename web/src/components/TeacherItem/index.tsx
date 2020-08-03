import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

 import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
    <header>
      <img src="" />
      <div>
        <strong>Anael Medeiros</strong>
        <span>Algorítmo</span>
      </div>
    </header>
    <p>
      Algorítmos incríveis
      <br/><br/>
      aprenda com o melhor
    </p>
    <footer>
      <p>
        Preço/Hora
        <strong>
            R$ 100,00
        </strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Chame no whats"/>
        Chamar
      </button>
    </footer>
  </article>
  );
}

export default TeacherItem;