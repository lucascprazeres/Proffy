import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257e5',
    justifyContent: 'center',
    padding: 40,
  },
  landingImage: {
    width: '100%',
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'Poppins_400Regular',
    color: '#fff',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
  },
  titleBold: {
    fontFamily: 'Poppins_600SemiBold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  button: {
    height: 150,
    width: '48%',
    justifyContent: 'space-between',
    borderRadius: 8,
    padding: 24,
  },
  buttonPrimary: {
    backgroundColor: '#9871f5',
  },
  buttonSecondary: {
    backgroundColor: '#04d361',
  },
  buttonText: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 20,
    color: '#fff',
  },
  totalConnections: {
    color: '#d4c2ff',
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    lineHeight: 20,
    marginTop: 40,
    maxWidth: 140,
  }
});

export default styles;
