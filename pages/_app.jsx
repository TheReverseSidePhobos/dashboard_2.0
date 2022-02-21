import { Provider } from 'react-redux';
import '../styles/globals.scss';
import store from '../redux/store';
import 'react-datepicker/dist/react-datepicker.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;