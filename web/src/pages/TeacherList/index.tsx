import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import { PageContainer } from './styles';

function TeacherList() {
  return (
    <PageContainer id="page-teacher-list">
      <div id="page-content" className="container">
        <PageHeader title="Estes são os proffys disponíveis.">
          <form id="search-teachers">
            <div className="input-block">
              <label htmlFor="subject">Matéria</label>
              <input type="text" id="subject" />
            </div>

            <div className="input-block">
              <label htmlFor="week_day">Dia da semana</label>
              <input type="text" id="week_day" />
            </div>

            <div className="input-block">
              <label htmlFor="time">Hora</label>
              <input type="text" id="time" />
            </div>
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