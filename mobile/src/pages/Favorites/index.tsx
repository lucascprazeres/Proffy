import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import AsyncStorage from '@react-native-community/async-storage';

import { View, FlatList } from 'react-native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';

function Favorites() {
  const [favorites, setFavorites] = useState<Teacher[]>([]);

  const loadFavorites = useCallback(() => {
    AsyncStorage.getItem('favorites')
      .then(response => {
        if (response) {
          const favoriteTeachers = JSON.parse(response);

          setFavorites(favoriteTeachers);
        }
      });
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={item => String(item.id)}
        ListHeaderComponent={() => <PageHeader title="Meus proffys favoritos" />}

        renderItem={({ item }) => <TeacherItem teacher={item} isFavorite />}
      />
    </View>
  )
}

export default Favorites;