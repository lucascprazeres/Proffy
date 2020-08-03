import React from 'react';

import PageHeader from '../../components/PageHeader';

import { PageContainer } from './styles';

function TeacherForm() {
  return (
    <PageContainer id="page-teacher-form">
      <div id="page-content" className="container">
        <PageHeader title="Que incrível que você quer dar aulas."/>
      </div>
    </PageContainer>
  );
}

export default TeacherForm;