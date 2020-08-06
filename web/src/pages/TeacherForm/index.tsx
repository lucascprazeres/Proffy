import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import { PageContainer } from './styles';
import api from '../../services/api';

function TeacherForm() {
  const history = useHistory();
  
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleitems, setScheduleitems] = useState([
    { week_day: 0, from: '', to: '' },
  ]);

  function handleAddNewScheduleItem() {
    setScheduleitems([
      ...scheduleitems,
      { week_day: 0, from: '', to: '' },
    ]);
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const updatedScheduleItems = scheduleitems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleitems(updatedScheduleItems);
  }

  function handleCreateClass(event: FormEvent) {
    event.preventDefault();

    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule: scheduleitems
    })
    .then(response => {
      alert('Cadastro realizado com sucesso!');

      history.replace('/');
    })
    .catch(error => {
      alert('Erro no cadastro!')
    });
  }

  return (
    <PageContainer id="page-teacher-form">
      <div id="page-content" className="container">
        <PageHeader
          title="Que incrível que você quer dar aulas."
          description="O primeiro passo é preencher esse formulário de inscrição."
        />

        <main>
          <form onSubmit={handleCreateClass}>
            <fieldset>
              <legend>Seus dados</legend>
              <Input
                value={name}
                name="name"
                label="Nome Completo"
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                value={avatar}
                name="avatar"
                label="Avatar"
                onChange={(e) => setAvatar(e.target.value)} />
              <Input
                value={whatsapp}
                name="whatsapp"
                label="Whastapp"
                onChange={(e) => setWhatsapp(e.target.value)}
              />
              <Textarea
                value={bio}
                name="bio"
                label="Biografia"
                onChange={(e) => setBio(e.target.value)}
              />
            </fieldset>

            <fieldset>
              <legend>Sobre a aula</legend>
              <Select
                value={subject}
                name="subject"
                label="Matéria"
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
              <Input
                value={cost}
                name="cost"
                label="Custo da sua hora por aula"
                onChange={(e) => setCost(e.target.value)}
              />
            </fieldset>

            <fieldset>
              <legend>
                Horários Disponíveis

              <button type="button" onClick={handleAddNewScheduleItem}>
                  + Novo horário
              </button>
              </legend>

              {scheduleitems.map((scheduleItem, index) => (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    value={scheduleItem.week_day}
                    name="week_day"
                    label="Dia da semana"
                    onChange={(e) => setScheduleItemValue(index, 'week_day', e.target.value)}
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
                  value={scheduleItem.from}
                    type="time"
                    name="from"
                    label="Das"
                    onChange={(e) => setScheduleItemValue(index, 'from', e.target.value)}
                  />
                  <Input
                  value={scheduleItem.to}
                    type="time"
                    name="to"
                    label="Até"
                    onChange={(e) => setScheduleItemValue(index, 'to', e.target.value)}
                  />
                </div>
              ))}
            </fieldset>

            <footer>
              <p>
                <img src={warningIcon} alt="aviso" />
              Importante! <br />
              Preencha todos os campos
            </p>

              <button type="submit">
                Salvar cadastro
            </button>
            </footer>
          </form>
        </main>
      </div>
    </PageContainer>
  );
}

export default TeacherForm;