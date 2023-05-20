import { useState, useEffect, FormEvent, useCallback, FC, Dispatch, SetStateAction } from 'react';
import { toast } from 'react-toastify';

import { OPENWEATHER_URL, OpenWeatherResponse, CurrentWeather } from 'consts';
import { useFetch } from 'hook';
import { formatCurrentWeather } from 'utils';
import { H1, Input, Button } from '../general';

import { Paragraph, Label, Container, InputContainer } from './SearchForm.styled';

type SearchFormProps = {
  setWeather: Dispatch<SetStateAction<CurrentWeather | undefined>>;
};

export const SearchForm: FC<SearchFormProps> = ({ setWeather }) => {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
  }, []);

  const today = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const [city, setCity] = useState('stockholm');
  const { fetchData, errors, loading } = useFetch();

  const fetchCurrentWeather = useCallback(
    async (cityName: string) => {
      const token = process.env.REACT_APP_OPENWEATHER_TOKEN;
      const response = await fetchData({
        url: OPENWEATHER_URL,
        params: {
          q: cityName,
          ...(token && { appid: token }),
        },
      });

      const weather = formatCurrentWeather(response as OpenWeatherResponse);
      if (!weather) {
        return;
      }

      setWeather(weather);
    },
    [fetchData, setWeather],
  );

  useEffect(() => {
    fetchCurrentWeather('stockholm');
  }, [fetchCurrentWeather]);

  useEffect(() => {
    if (!errors) {
      return;
    }

    const errorMessage = 'Cannot get current weather';
    toast.error(errorMessage, {
      theme: 'colored',
      type: 'error',
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }, [errors]);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    fetchCurrentWeather(city);
  };

  const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

  return (
    <Container>
      <Paragraph>
        {hour}:{minutes} {today}
      </Paragraph>
      <form style={{ display: 'flex' }} onSubmit={onSubmit}>
        <Label htmlFor="city">
          <H1 style={{ marginRight: '16px' }}>Weather in</H1>
          <InputContainer>
            <Input
              type="text"
              placeholder="Enter city name"
              id="city"
              style={{ margin: '4px' }}
              onChange={(event) => setCity(event.target.value)}
              value={city}
            />
            <Button type="submit" style={{ margin: 'auto 4px' }} loading={loading}>
              Search
            </Button>
          </InputContainer>
        </Label>
      </form>
    </Container>
  );
};
