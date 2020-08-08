import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e6e6f0',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#eee',
  },
  profileInfo: {
    marginLeft: 16,
  },
  name: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 20,
    color: '#32264d',
  },
  subject: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#6a6180',
    marginTop: 4,
  },
  bio: {
    marginHorizontal: 24,
    color: '#616180',
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 24,
  },
  footer: {
    backgroundColor: '#fafafc',
    padding: 24,
    alignItems: 'center',
    marginTop: 24,
  },
  price: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#6a6180',
  },
  priceValue: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    color: '#8257e5',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  favoriteButton: {
    backgroundColor: '#8257e5',
    width: 56,
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  favorited: {
    backgroundColor: '#e33d3d'
  },
  contactButton: {
    backgroundColor: '#04d361',
    flex: 1,
    flexDirection: 'row',
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  contactButtonText: {
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    marginLeft: 16,
  }
});

export default styles;