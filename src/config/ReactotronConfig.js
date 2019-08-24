import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';

if(process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
  .use(reactotronRedux())
  .connect();

  tron.clear();

  console.tron = tron;
}


// cria a pasta config e o arquivo reactotronconfig.js
// instala o react-reactotron-js e o reactotron-redux
// no eslint, inserir o no-console: allow tron
// no store do redux inserir o metodo enhacer
