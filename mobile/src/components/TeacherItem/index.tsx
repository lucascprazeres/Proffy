import React from 'react';
import { View, Image, Text } from 'react-native';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

const TeacherItem: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://github.com/lucascprazeres.png' }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Lucas dos Prazeres</Text>
          <Text style={styles.subject}>Física</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Entusiasta na área da física quântica. {'\n'}{'\n'}
        Tenho profundos conhecimentos nesse ramo, que eu adquiri assitindo "Vingadores: Ultimato".
        Até o momento, já consegui desenvolver 5 máquinas do tempo (uma delas utilizada nas filmagens de Dark).
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$45,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>
              Entrar em contato
            </Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;