import { fetchPriceRange, fetchCarList } from '../../redux/adverts/slice';
import { DropList } from 'components/DropList/DropList';
import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import data from '../../data/makes.json';
import { Button, Form, FormField, Input, Label } from './FilterForm.styled';

const FilterForm = ({ setFilteredData, isFilter }) => {
  const [priceData, setPriceData] = useState([]);
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [milesFrom, setMilesFrom] = useState('');
  const [milesTo, setMilesTo] = useState('');
  const [allData, setAllData] = useState([]);
  const dispatch = useDispatch();
  const state = useSelector(state => state.adverts);

  const filterCars = useCallback(
    car => {
      const isBrandMatch = !brand || car.make === brand;
      const isPriceMatch = !price || car.rentalPrice <= price;
      const isMilesFromMatch = !milesFrom || car.mileage >= milesFrom;
      const isMilesToMatch = !milesTo || car.mileage <= milesTo;
      return isBrandMatch && isPriceMatch && isMilesFromMatch && isMilesToMatch;
    },
    [brand, price, milesFrom, milesTo]
  );

  const fetchData = useCallback(async () => {
    try {
      const page = 1;
      await dispatch(fetchCarList(page));
      setAllData(state.carList);
    } catch (error) {
      Notiflix.Notify.failure('Error when getting a list of available cars');
    }
  }, [dispatch, state.carList]);

  const getPriceDropList = useCallback(async () => {
    try {
      await dispatch(fetchPriceRange());
      const { minPrice, maxPrice } = state;

      let arr = [];
      for (let i = minPrice; i <= maxPrice; i += 10) {
        arr.push(i);
      }

      setPriceData(arr);
    } catch (error) {
      Notiflix.Notify.failure('Error while retrieving price data');
    }
  }, [dispatch, state]);

  const formattedNumber = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const onChangePrice = value => {
    setPrice(value);
  };

  const onChangeBrand = value => {
    setBrand(value);
  };

  const onChangeMilesFrom = event => {
    setMilesFrom(onlyDigit(event.currentTarget.value));
  };

  const onChangeMilesTo = event => {
    setMilesTo(onlyDigit(event.currentTarget.value));
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    getPriceDropList();
  }, [getPriceDropList]);

  const OnButtonClick = async event => {
    event.preventDefault();
    const isFilterExists = brand || price || milesFrom || milesTo;

    if (!isFilterExists) {
      setFilteredData([]);
      isFilter(false);
      return;
    }
    isFilter(true);
    try {
      const filteredData = allData.filter(filterCars);
      setFilteredData(filteredData);
    } catch (error) {
      Notiflix.Notify.failure('Error when filtering data');
    }
  };

  const onlyDigit = value => {
    return value?.match(/\d+/g)?.join('') || '';
  };

  return (
    <Form onSubmit={OnButtonClick}>
      <FormField>
        <Label>Car brand</Label>
        <DropList
          className="brand"
          data={data}
          placeholder="Enter the text"
          onChange={onChangeBrand}
        />
      </FormField>
      <FormField>
        <Label>Price/ 1 hour</Label>
        <DropList
          className="price"
          data={priceData}
          placeholder="To $"
          onChange={onChangePrice}
        />
      </FormField>
      <FormField>
        <Label htmlFor="Miles">Car mileage / km</Label>
        <div>
          <Input
            className="right"
            type="text"
            placeholder="From"
            value={`From ${formattedNumber(milesFrom)}`}
            onChange={onChangeMilesFrom}
          />
          <Input
            className="left"
            type="text"
            placeholder="To"
            value={`To ${formattedNumber(milesTo)}`}
            onChange={onChangeMilesTo}
          />
        </div>
      </FormField>

      <Button type="submit">Search</Button>
    </Form>
  );
};

export default FilterForm;
