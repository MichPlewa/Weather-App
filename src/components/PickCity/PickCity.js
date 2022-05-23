import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './PickCity.module.scss';
import { useState, useCallback } from 'react';

const PickCity = (props) => {
  const [city, setCity] = useState('');

  const cityChanger = useCallback(
    (e) => {
      e.preventDefault();
      props.onSubmit(city);
      setCity('');
    },
    [city, props]
  );

  return (
    <form className={styles.pickCityForm} onSubmit={cityChanger}>
      <label>
        <TextInput
          placeholder="Enter city name...."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <Button>Search</Button>
    </form>
  );
};

export default PickCity;
