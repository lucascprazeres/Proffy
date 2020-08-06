import React, { useState } from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import { PageContainer } from './styles';

function TeacherForm() {
  const [scheduleitems, setScheduleitems] = useState([
    { week_day: 0, from: '', to: '' },
  ]);

  function handleAddNewScheduleItem() {
    setScheduleitems([
      ...scheduleitems,
      { week_day: 0, from: '', to: '' },
    ]);
  }

  return (
    <PageContainer id="page-teacher-form">
      <div id="page-content" className="container">
        <PageHeader
          title="Que incrível que você quer dar aulas."
          description="O primeiro passo é preencher esse formulário de inscrição."
        />

        <main>
          <fieldset>
            <legend>Seus dados</legend>
            <Input name="name" label="Nome Completo" />
            <Input name="avatar" label="Avatar" />
            <Input name="whatsapp" label="Whastapp" />
            <Textarea name="bio" label="Biografia" />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
            <Select
              name="subject"
              label="Matéria"
              options={[
                { value: "Artes", label: "Artes" },
                { value: "Química", label: "Química" },
                { value: "Redação", label: "Redação" },
                { value: "Biologia", label: "Biologia" },
                { value: "Matemática", label: "Matemática" },
                { value: "História", label: "História" },
                { value: "Física", label: "Física" },
                { value: "Educação física", label: "Educação física" },
              ]}
            />
            <Input name="cost" label="Custo da sua hora por aula" />
          </fieldset>

          <fieldset>
            <legend>
              Horários Disponíveis

              <button type="button" onClick={handleAddNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleitems.map(scheduleItem => (
              <div key={scheduleItem.week_day} className="schedule-item">
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
                <Input type="time" name="from" label="Das" />
                <Input type="time" name="to" label="Até" />
              </div>
              ))}    
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="aviso" />
              Importante! <br />
              Preencha todos os campos
            </p>

            <button type="button">
              Salvar cadastro
            </button>
          </footer>
        </main>
      </div>
    </PageContainer>
  );
}

export default TeacherForm;