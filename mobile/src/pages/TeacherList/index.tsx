import React, { useState } from 'react';
import { View, TextInput, Text, FlatList } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

import api from '../../services/api';

import { Feather } from '@expo/vector-icons';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';

function TeacherList() {
  const [areFiltersVisible, setAreFiltersVisible] = useState(false);

  const [classes, setClasses] = useState<Teacher[]>([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  function handleToggleFiltersVisibility() {
    setAreFiltersVisible(!areFiltersVisible);
  }

  async function handleFiltersSubmit() {
    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      },
    });
    
    const searchedClasses = response.data;
    
    setAreFiltersVisible(false);
    setClasses(searchedClasses);
  }

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
                <View style={styles.searchForm}>
                  <Text style={styles.label}>Matéria</Text>

                  <TextInput
                    style={styles.input}
                    placeholder="Qual a matéria?"
                    placeholderTextColor="#c1bccc"
                    value={subject}
                    onChangeText={text => setSubject(text)}
                  />

                  <View style={styles.inputGroup}>
                    <View style={styles.inputBlock}>
                      <Text style={styles.label}>Dia da semana</Text>

                      <TextInput
                        style={styles.input}
                        placeholder="Qual o dia?"
                        placeholderTextColor="#c1bccc"
                        value={week_day}
                        onChangeText={text => setWeekDay(text)}
                      />
                    </View>

                    <View style={styles.inputBlock}>
                      <Text style={styles.label}>Horário</Text>

                      <TextInput
                        style={styles.input}
                        placeholder="Qual horário?"
                        placeholderTextColor="#c1bccc"
                        value={time}
                        onChangeText={text => setTime(text)}
                      />
                    </View>

                  </View>

                  <RectButton style={styles.submitButton} onPress={handleFiltersSubmit}>
                    <Text style={styles.submitButtonText}>Filtrar</Text>
                  </RectButton>
                </View>
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