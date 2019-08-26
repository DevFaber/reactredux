import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  tron.clear();

  console.tron = tron;
}

// cria a pasta config e o arquivo reactotronconfig.js
// instala o react-reactotron-js e o reactotron-redux
// no eslint, inserir o no-console: allow tron
// no store do redux inserir o metodo enhancer
// importar a configuração para o App.js antes do store atraves da pasta
