import React, { useState, useRef, useCallback } from 'react';
import { View, TextInput, Text, FlatList } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

import api from '../../services/api';

import { Feather } from '@expo/vector-icons';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';

import styles from './styles';

interface FiltersFormData {
  subject: string;
  week_day: string;
  time: string;
}

function TeacherList() {
  const formRef = useRef<FormHandles>(null);
  
  const [areFiltersVisible, setAreFiltersVisible] = useState(false);

  const [classes, setClasses] = useState<Teacher[]>([]);

  function handleToggleFiltersVisibility() {
    setAreFiltersVisible(!areFiltersVisible);
  }

  const handleFiltersSubmit = useCallback(async ({ subject, week_day, time }: FiltersFormData) => {
    const classSearchResponse = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      }
    });

    setAreFiltersVisible(false);
    setClasses(classSearchResponse.data);
   }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={classes}
        keyExtractor={item => String(item.id)}
        ListHeaderComponent={() => (
          <PageHeader title="Proffys disponíveis" headerRight={(
            <BorderlessButton onPress={handleToggleFiltersVisibility}>
              <Feather name="filter" size={20} color="#04d361" />
            </BorderlessButton>
          )}>
            {
              areFiltersVisible && (
                <Form
                  ref={formRef}
                  onSubmit={handleFiltersSubmit}
                  style={styles.searchForm}
                >
                  <Text style={styles.label}>Matéria</Text>

                  <Input
                    name="subject"
                    placeholder="Qual a matéria?"
                    placeholderTextColor="#c1bccc"
                  />

                  <View style={styles.inputGroup}>
                    <View style={styles.inputBlock}>
                      <Text style={styles.label}>Dia da semana</Text>

                      <Input
                        name="week_day"
                        placeholder="Qual o dia?"
                      />
                    </View>

                    <View style={styles.inputBlock}>
                      <Text style={styles.label}>Horário</Text>

                      <Input
                        name="time"
                        placeholder="Qual horário?"
                      />
                    </View>

                  </View>

                  <RectButton style={styles.submitButton} onPress={() => formRef.current?.submitForm()}>
                    <Text style={styles.submitButtonText}>Filtrar</Text>
                  </RectButton>
                </Form>
              )
            }
          </PageHeader>
        )}

        renderItem={({ item }: { item: Teacher }) => <TeacherItem teacher={item}/>}
      />
    </View>
  );
}

export default TeacherList;