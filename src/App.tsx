import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { ToastContainer, toast } from 'react-toastify';

import {
  H1,
  H2,
  H3,
  H4,
  Body,
  Small,
  Icon,
  Layout,
  Header,
  Footer,
  Button,
  Input,
  Logo,
  ScreenReader,
} from './components';
import { theme } from './theme';
import GlobalStyle from './globalStyle';

function App() {
  console.log('secret', process.env.REACT_APP_MY_ENV_VARIABLE);

  const notify = () => {
    toast.success('Success Notification !', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Header>
          <a href="http://localhost:3000/">
            <ScreenReader>Refresh</ScreenReader>
            <Logo />
          </a>
        </Header>
        <div style={{ gridColumn: '2/6' }}>
          <main>
            <Button onClick={notify} type="button">
              Notify!
            </Button>
            <section style={{ marginBottom: 16 }}>
              <H1>heading one</H1>
              <H2>heading two</H2>
              <H3>heading three</H3>
              <H4>heading four</H4>
              <Body>Body</Body>
              <Small>Small</Small>
            </section>
            <section style={{ marginBottom: 16 }}>
              <Icon icon="search" title="search" />
              <Icon icon="wind" size="2x" />
              <Icon icon="umbrella" size="3x" />
            </section>
            <form>
              <label htmlFor="city">
                <Input type="text" placeholder="Placeholder" id="city" />
                <Button type="submit">Example</Button>
              </label>
            </form>
          </main>
        </div>
        <Footer>
          <Small>&#169; jnch {new Date().getFullYear()}</Small>
        </Footer>
      </Layout>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
library.add(fas);
