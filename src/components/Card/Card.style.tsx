import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECEFF1',
    padding: 5,
    borderRadius: 10,
    margin: 5,
    alignContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    color: 'black',
    fontWeight: 'bold',
  },
  image: {
    padding: 10,
    width: 150,
    height: 150,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  price: {
    flex: 1,
    marginTop: 5,
    alignSelf: 'flex-start',
  },
  inStock: {
    flex: 1,
    marginTop: 5,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    color: 'red',
  },
});
