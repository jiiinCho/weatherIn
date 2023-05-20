import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { ToastContainer } from 'react-toastify';

import {
  Small,
  Icon,
  Layout,
  Header,
  Footer,
  Logo,
  ScreenReader,
  SearchForm,
  Section,
  CardPortrait,
} from './components';
import { theme } from './theme';
import GlobalStyle from './globalStyle';
import { KelvinToCelsius } from './utils/KelvinToCelsius';

function App() {
  console.log('secret', process.env.REACT_APP_MY_ENV_VARIABLE);

  const mock = {
    message: 'accurate',
    cod: '200',
    count: 1,
    list: [
      {
        id: 2643743,
        name: 'London',
        coord: { lat: 51.5085, lon: -0.1258 },
        main: { temp: 280.15, pressure: 1012, humidity: 81, temp_min: 278.15, temp_max: 281.15 },
        dt: 1485791400,
        wind: { speed: 4.6, deg: 90 },
        sys: { country: 'GB' },
        rain: null,
        snow: null,
        clouds: { all: 90 },
        weather: [
          { id: 701, main: 'Mist', description: 'mist', icon: '50d' },
          { id: 300, main: 'Drizzle', description: 'light intensity drizzle', icon: '09d' },
        ],
      },
    ],
  };

  const temperature = KelvinToCelsius(mock.list[0].main.temp);
  const icon = mock.list[0].weather[0].icon;
  const description = mock.list[0].weather[0].description;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Header>
          <a href="http://localhost:3000/">
            <ScreenReader>Click to refresh page</ScreenReader>
            <Logo />
          </a>
        </Header>
        <main style={{ gridColumn: '2/11' }}>
          <Section>
            <SearchForm />
          </Section>
          <Section>
            <CardPortrait temperature={temperature} icon={icon} description={description} />
          </Section>
          <section style={{ margin: 'auto 0' }}>
            <Icon icon="search" title="search" />
            <Icon icon="wind" size="2x" />
            <Icon icon="umbrella" size="3x" />
          </section>
        </main>
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
