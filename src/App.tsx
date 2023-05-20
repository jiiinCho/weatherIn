import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { ToastContainer } from 'react-toastify';

import {
  Small,
  Layout,
  Header,
  Footer,
  Logo,
  ScreenReader,
  SearchForm,
  Section,
  CardPortrait,
  LineChart,
  CardLandscape,
} from './components';
import { theme } from './theme';
import GlobalStyle from './globalStyle';
import { formatCurrentWeather } from './utils';
import { currentWeather } from './utils/weather/mock';
import { OpenWeatherResponse } from './consts';

function App() {
  console.log('secret', process.env.REACT_APP_MY_ENV_VARIABLE);

  const { temperature, icon, description, windSpeed, humidity } = formatCurrentWeather(
    currentWeather as OpenWeatherResponse,
  );

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
        <main style={{ gridColumn: '2/12' }}>
          <Section>
            <SearchForm />
          </Section>
          <Section>
            <CardPortrait temperature={temperature} icon={icon} description={description} />
            <LineChart />
          </Section>
          <Section>
            <CardLandscape
              icon="wind"
              title="wind"
              content={windSpeed.toString()}
              unit="m/s"
              backgroundColor={theme.palette.base.tertiary}
            />
            <CardLandscape
              icon="umbrella"
              title="humidity"
              content={humidity.toString()}
              unit="%"
              backgroundColor={theme.palette.base.secondary}
            />
          </Section>
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
