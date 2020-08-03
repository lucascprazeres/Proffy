import React from 'react';

import PageHeader from '../../components/PageHeader';

import { PageContainer } from './styles';

function TeacherList() {
  return (
    <PageContainer id="page-teacher-list">
      <div id="page-content" className="container">
        <PageHeader title="Estes são os proffys disponíveis."/>
      </div>
    </PageContainer>
    );
}

export default TeacherList;