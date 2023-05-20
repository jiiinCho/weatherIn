import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ResponsiveLine } from '@nivo/line';

import { LineChartDataT, OPENMETEO_URL, OpenMeteoResponse } from 'consts';
import { getLineChartData } from 'utils';
import { useFetch } from 'hook';

import { Container } from './LineChart.styled';
import { Error, Spinner } from '../general';

export const LineChart = () => {
  // TODO
  const latitude = '52.52';
  const longitude = '13.419998';
  const city = 'stockholm';

  const [data, setData] = useState<LineChartDataT[]>([]);

  const { fetchData, loading, errors } = useFetch();

  const fetchWeather = useCallback(async () => {
    const response = await fetchData({
      url: OPENMETEO_URL,
      params: {
        latitude,
        longitude,
        hourly: 'temperature_2m',
        forecast_days: 1,
      },
    });

    const lineChartData = getLineChartData(response as OpenMeteoResponse, city);
    setData(lineChartData);
  }, [fetchData]);

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  useEffect(() => {
    if (!errors) {
      return;
    }

    const errorMessage = 'Cannot get weather forecast';
    toast.error(errorMessage, {
      theme: 'colored',
      type: 'error',
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }, [errors]);

  const renderContent = () => {
    if (loading) {
      return <Spinner />;
    }

    if (!data.length) {
      return <Error message="Cannot get forecast data" />;
    }

    return (
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 30, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false,
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '(hour)',
          legendOffset: 36,
          legendPosition: 'end',
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '°C',
          legendOffset: -40,
          legendPosition: 'middle',
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh
      />
    );
  };

  return <Container>{renderContent()}</Container>;
};
