import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { ToastContainer, toast } from 'react-toastify';

import { H1, H2, H3, H4, Body, Small, Icon, Layout, Header, Footer } from './components';
import { theme } from './theme';
import GlobalStyle from './globalStyle';

function App() {
  console.log('secret', process.env.REACT_APP_MY_ENV_VARIABLE);
  const notify = () =>
    toast.success('Success Notification !', {
      position: toast.POSITION.TOP_RIGHT,
    });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Header>
          <Body>Header</Body>
        </Header>
        <div style={{ gridColumn: '2/6' }}>
          <main>
            <button onClick={notify} type="button">
              Notify!
            </button>
            <H1>heading one</H1>
            <H2>heading two</H2>
            <H3>heading three</H3>
            <H4>heading four</H4>
            <Body>Body</Body>
            <Small>Small</Small>
            <Icon icon="search" title="search" />
            <Icon icon="wind" />
            <Icon icon="umbrella" />
          </main>
        </div>
        <Footer>
          <Body>Footer</Body>
        </Footer>
      </Layout>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
library.add(fas);
