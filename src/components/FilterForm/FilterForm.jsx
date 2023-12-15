import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Form,
  InputWrapper,
  MobileFormFieldTop,
  MobileFormFieldBottom,
  FormField,
  RightInput,
  LeftInput,
  Label,
  BrandDropListWrapper,
  PriceDropListWrapper,
} from './FilterForm.styled';
import DropList from '../DropList/DropList';
import {
  fetchCarList,
  fetchPriceRange,
  setBrand,
  // setPriceRange,
} from '../../redux/adverts/slice';
import Notiflix from 'notiflix';
import data from '../../data/makes.json';

const FilterForm = ({ setFilteredData, isFilter }) => {
  const [milesFrom, setMilesFrom] = useState('');
  const [milesTo, setMilesTo] = useState('');
  const dispatch = useDispatch();

  const brand = useSelector(state => state.brand);
  const minPrice = useSelector(state => state.minPrice);
  const maxPrice = useSelector(state => state.maxPrice);
  const carList = useSelector(state => state.carList);
  // const priceData = useSelector(state => state.priceData);

  const filterCars = useCallback(
    car => {
      const isBrandMatch = !brand || car.make === brand;
      const isPriceMatch =
        (!minPrice || car.rentalPrice >= minPrice) &&
        (!maxPrice || car.rentalPrice <= maxPrice);
      const isMilesFromMatch = !milesFrom || car.mileage >= milesFrom;
      const isMilesToMatch = !milesTo || car.mileage <= milesTo;
      return isBrandMatch && isPriceMatch && isMilesFromMatch && isMilesToMatch;
    },
    [brand, minPrice, maxPrice, milesFrom, milesTo]
  );

  const fetchData = useCallback(async () => {
    try {
      const page = 1;
      await dispatch(fetchCarList(page));
      Notiflix.Notify.success('List of available cars loaded successfully');
    } catch (error) {
      Notiflix.Notify.failure('Error when getting a list of available cars');
    }
  }, [dispatch]);

  const getPriceDropList = useCallback(async () => {
    try {
      await dispatch(fetchPriceRange());
    } catch (error) {
      Notiflix.Notify.failure('Error while retrieving price data');
    }
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    getPriceDropList();
  }, [getPriceDropList]);

  const onChangeMilesFrom = event => {
    setMilesFrom(event.currentTarget.value);
  };

  const onChangeMilesTo = event => {
    setMilesTo(event.currentTarget.value);
  };

  const onBrandChange = value => {
    dispatch(setBrand(value));
  };

  // const onPriceRangeChange = value => {
  //   dispatch(setPriceRange(value));
  // };

  const OnButtonClick = async event => {
    event.preventDefault();
    const isFilterExists =
      brand || minPrice || maxPrice || milesFrom || milesTo;

    if (!isFilterExists) {
      setFilteredData([]);
      isFilter(false);
      return;
    }

    isFilter(true);
    try {
      const filteredData = carList.filter(filterCars);
      setFilteredData(filteredData);
    } catch (error) {
      Notiflix.Notify.failure('Error when filtering data');
    }
  };

  return (
    <Form onSubmit={OnButtonClick}>
      <MobileFormFieldTop>
        <FormField>
          <Label>Car brand</Label>
          <BrandDropListWrapper>
            <DropList
              className="brand-drop-list"
              data={data}
              placeholder="Enter the text"
              onChange={onBrandChange}
            />
          </BrandDropListWrapper>
        </FormField>
        <FormField>
          <Label>Price/ 1 hour</Label>
          <PriceDropListWrapper>
            <DropList
              className="price-drop-list"
              data={data}
              placeholder="To $"
              // onChange={onPriceRangeChange}
            />
          </PriceDropListWrapper>
        </FormField>
      </MobileFormFieldTop>

      <MobileFormFieldBottom>
        <FormField>
          <Label htmlFor="Miles">Car mileage / km</Label>
          <InputWrapper>
            <LeftInput
              type="text"
              placeholder="From"
              value={milesFrom}
              onChange={onChangeMilesFrom}
            />
            <RightInput
              type="text"
              placeholder="To"
              value={milesTo}
              onChange={onChangeMilesTo}
            />
          </InputWrapper>
        </FormField>

        <Button type="submit">Search</Button>
      </MobileFormFieldBottom>
    </Form>
  );
};

export default FilterForm;
