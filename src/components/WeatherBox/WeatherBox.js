import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';

const WeatherBox = (props) => {
  const handleCityChange = (city) => {
    console.log(city);
  };
  return (
    <section>
      <PickCity onSubmit={handleCityChange}/>
      <WeatherSummary />
      <Loader />
    </section>
  );
};

export default WeatherBox;
