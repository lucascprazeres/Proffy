import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import AsyncStorage from '@react-native-community/async-storage';

import { View, Text, FlatList } from 'react-native';
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
  const [favoritesIds, setFavoritesIds] = useState<number[]>([]);

  const loadFavorites = useCallback(() => {
    AsyncStorage.getItem('favorites')
      .then(response => {
        if (response) {
          const favoriteTeachers = JSON.parse(response);
          const favoriteTeachersIds = favoriteTeachers.map((item: Teacher) => {
            return item.id;
          });

          setFavoritesIds(favoriteTeachersIds);
        }
      });
  }, []);

  const handleToggleFiltersVisibility = useCallback(() => {
    setAreFiltersVisible(!areFiltersVisible);
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  )

  const handleFiltersSubmit = useCallback(
    async ({ subject, week_day, time }: FiltersFormData) => {
      loadFavorites();
      
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

        renderItem={({ item }: { item: Teacher }) => (
          <TeacherItem
            teacher={item}
            isFavorite={favoritesIds.includes(item.id)}
          />
        )}
      />
    </View>
  );
}

export default TeacherList;