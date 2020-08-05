import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';

import { PageContainer } from './styles';

function TeacherList() {
  return (
    <PageContainer id="page-teacher-list">
      <div id="page-content" className="container">
        <PageHeader title="Estes são os proffys disponíveis.">
          <form id="search-teachers">
            <Input name="subject" label="Matéria"/>
            <Input name="week_day" label="Dia da semana"/>
            <Input type="time" name="time" label="Hora"/>
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