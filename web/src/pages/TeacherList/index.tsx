import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';

import { PageContainer } from './styles';

function TeacherList() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function handleSearchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    });

    setTeachers(response.data);
  }

  return (
    <PageContainer id="page-teacher-list">
      <div id="page-content" className="container">
        <PageHeader title="Estes são os proffys disponíveis.">
          <form id="search-teachers" onSubmit={handleSearchTeachers}>
            <Select
              name="subject"
              label="Matéria"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              options={[
                { value: "Artes", label: "Artes" },
                { value: "Química", label: "Química" },
                { value: "Redação", label: "Redação" },
                { value: "Geografia", label: "Geografia" },
                { value: "Biologia", label: "Biologia" },
                { value: "Matemática", label: "Matemática" },
                { value: "História", label: "História" },
                { value: "Física", label: "Física" },
                { value: "Educação física", label: "Educação física" },
              ]}
            />

            <Select
              name="week_day"
              label="Dia da semana"
              value={week_day}
              onChange={(e) => setWeekDay(e.target.value)}
              options={[
                { value: "0", label: "Domingo" },
                { value: "1", label: "Segunda-feira" },
                { value: "2", label: "Terça-feira" },
                { value: "3", label: "Quarta-feira" },
                { value: "4", label: "Quinta-feira" },
                { value: "5", label: "Sexta-feira" },
                { value: "6", label: "Sábado" },
              ]}
            />
            <Input
              type="time"
              name="time"
              label="Hora"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />

            <button type="submit">
              Buscar
            </button>
          </form>
        </PageHeader>

        {teachers.map(teacher => {
          return <TeacherItem key={teacher.id} teacher={teacher} />
        })}
      </div>
    </PageContainer>
  );
}

export default TeacherList;