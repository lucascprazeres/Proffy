import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257e5',
    justifyContent: 'center',
    padding: 40,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
    color: '#fff',
  },
  description: {
    color: '#d4c2ff',
    marginTop: 24,
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    lineHeight: 26,
    maxWidth: 240,
  },
  okButton: {
    marginVertical: 40,
    height: 58,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#04d361',
  },
  okButtonText: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    color: '#fff',
  }
});

export default styles;
