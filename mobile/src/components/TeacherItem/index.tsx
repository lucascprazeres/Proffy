import React, { useCallback, useState } from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import { View, Image, Text, Linking } from 'react-native';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

export interface Teacher {
  id: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: number;
}

interface TeacherProps {
  teacher: Teacher;
  isFavorite: boolean;
}

const TeacherItem: React.FC<TeacherProps> = ({ teacher, isFavorite }) => {
  const [teacherIsFavorite, setTeacherIsFavorite] = useState(isFavorite);

  const handleLinkToWhatsapp = useCallback(() => {
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  }, []);

  const handleToggleFavoritesOnLocalStorage = useCallback(async () => {
    const favoritesJSON = await AsyncStorage.getItem('favorites');

    let favoritesList: Teacher[] = [];

    if (favoritesJSON) {
      favoritesList = JSON.parse(favoritesJSON);
    }

    if (teacherIsFavorite) {
      const favoriteIndex = favoritesList.findIndex((item: Teacher) => {
        return item.id === teacher.id;
      });

      favoritesList.splice(favoriteIndex, 1);

      setTeacherIsFavorite(false);
    } else {
      favoritesList.push(teacher);

      setTeacherIsFavorite(true);
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesList));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: teacher.avatar }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{teacher.bio}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R${teacher.cost}</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={handleToggleFavoritesOnLocalStorage}
            style={[
              styles.favoriteButton,
              teacherIsFavorite ? styles.favorited : {}
            ]}
          >
            <Image
              source={teacherIsFavorite ? unfavoriteIcon : heartOutlineIcon}
            />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText} onPress={handleLinkToWhatsapp}>
              Entrar em contato
            </Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;