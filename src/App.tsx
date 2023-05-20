import { Fragment, useState } from 'react';
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
import { CurrentWeather } from './consts';

function App() {
  const [weather, setWeather] = useState<CurrentWeather | undefined>(undefined);

  const renderContent = () => {
    if (!weather) {
      return null;
    }

    const { temperature, icon, description, windSpeed, humidity } = weather;

    return (
      <Fragment>
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
            cardbackground={theme.palette.base.tertiary}
          />
          <CardLandscape
            icon="umbrella"
            title="humidity"
            content={humidity.toString()}
            unit="%"
            cardbackground={theme.palette.base.secondary}
          />
        </Section>
      </Fragment>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Header>
          <a href="https://weather-in.vercel.app/">
            <ScreenReader>Click to refresh page</ScreenReader>
            <Logo />
          </a>
        </Header>
        <main style={{ gridColumn: '2/12' }}>
          <Section>
            <SearchForm setWeather={setWeather} />
          </Section>
          {renderContent()}
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
