import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import ErrorBox from '../ErrorBox/ErrorBox';
import Loader from '../Loader/Loader';
import { useState, useCallback } from 'react';

const WeatherBox = () => {
  const [weather, setWeather] = useState('');
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);
  console.log(weather);
  console.log(pending);

  const handleCityChange = useCallback((city) => {
    setPending(true);
    setError(false);
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=05b491c2b03992879c21a68b032a2a09&units=metric`
    ).then((res) => {
      if (res.status === 200) {
        return res.json().then((data) => {
          const weatherData = {
            city: data.name,
            temp: data.main.temp,
            icon: data.weather[0].icon,
            description: data.weather[0].main,
          };

          setWeather(weatherData);
          setPending(false);
          setError(false);
        });
      } else {
        setError(true);
      }
    });
  }, []);
  return (
    <section>
      <PickCity action={handleCityChange} />
      {weather && !pending && !error && <WeatherSummary {...weather} />}
      {error && <ErrorBox>There is no such city!</ErrorBox>}
      {pending && !error && <Loader />}
    </section>
  );
};

export default WeatherBox;
