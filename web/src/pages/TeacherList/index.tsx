import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import { PageContainer } from './styles';

function TeacherList() {
  return (
    <PageContainer id="page-teacher-list">
      <div id="page-content" className="container">
        <PageHeader title="Estes são os proffys disponíveis.">
          <form id="search-teachers">
            <Select
              name="subject"
              label="Matéria"
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
            <Input type="time" name="time" label="Hora" />
          </form>
        </PageHeader>

        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </div>
    </PageContainer>
  );
}

export default TeacherList;