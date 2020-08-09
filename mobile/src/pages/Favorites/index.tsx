import React from 'react';
import { View, FlatList } from 'react-native';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';

const fakeTeacher = {
  id: 1,
  name: 'romero brito',
  avatar: 'https://github.com/lucascprazeres.png',
  whatsapp: '',
  bio: 'isdjsjdjsd',
  subject: 'Economia quantica',
  cost: 444,
}

function Favorites() {
  return (
    <View style={styles.container}>
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]}
        keyExtractor={item => String(item.id)}
        ListHeaderComponent={() => <PageHeader title="Meus proffys favoritos" />}

        renderItem={() => <TeacherItem teacher={fakeTeacher}/>}
      />
    </View>
  )
}

export default Favorites;