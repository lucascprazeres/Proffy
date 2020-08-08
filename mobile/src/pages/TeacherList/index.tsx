import React, { useState } from 'react';
import { View, ScrollView, TextInput, Text } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';

function TeacherList() {
  const [areFiltersVisible, setAreFiltersVisible] = useState(false);

  function handleToggleFiltersVisibility() {
    setAreFiltersVisible(!areFiltersVisible);
  }

  return (
    <View style={styles.container}>
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
              />

              <View style={styles.inputGroup}>
                <View style={styles.inputBlock}>
                  <Text style={styles.label}>Dia da semana</Text>

                  <TextInput
                    style={styles.input}
                    placeholder="Qual o dia?"
                    placeholderTextColor="#c1bccc"
                  />
                </View>

                <View style={styles.inputBlock}>
                  <Text style={styles.label}>Horário</Text>

                  <TextInput
                    style={styles.input}
                    placeholder="Qual horário?"
                    placeholderTextColor="#c1bccc"
                  />
                </View>

              </View>

              <RectButton style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Filtrar</Text>
              </RectButton>
            </View>
          )
        }
      </PageHeader>

      <ScrollView
        style={styles.TeacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
}

export default TeacherList;