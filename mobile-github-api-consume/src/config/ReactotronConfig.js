import Reactotron from 'reactotron-react-native';

// Se estiver rodando em ambiente de desenvolvimento
if (__DEV__) {
  const tron = Reactotron.configure().useReactNative().connect();

  console.tron = tron;

  tron.clear();
}
