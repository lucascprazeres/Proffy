import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import { Container } from './styles';
import api from '../../services/api';

export interface Teacher {
  id: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: number;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function handleCreateNewConnection() {
    api.post('connections', {
      user_id: teacher.id,
    })
  }
  
  return (
    <Container>
      <article className="teacher-item">
        <header>
          <img
            src={teacher.avatar}
            alt={teacher.name}
          />
          <div>
            <strong>{teacher.name}</strong>
            <span>{teacher.subject}</span>
          </div>
        </header>

        <p>{teacher.bio}</p>

        <footer>
          <p>
            Preço/hora

                <strong>R${teacher.cost}</strong>
          </p>
          <a
          target="_blank"
          href={`https://wa.me/${teacher.whatsapp}`}
          onClick={handleCreateNewConnection}>
            <img src={whatsappIcon} alt="Entrar em contato" />
                Entrar em contato
          </a>
        </footer>
      </article>
    </Container>
  )
}

export default TeacherItem;