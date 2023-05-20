import { Fragment } from 'react';
import { H1, Input, Button } from '../general';

import { Paragraph, Label } from './SearchForm.styled';

export const SearchForm = () => {
  return (
    <Fragment>
      <Paragraph>12:14 Tuesday, 19, 2023</Paragraph>
      <form>
        <Label htmlFor="city">
          <H1 style={{ marginRight: '16px' }}>Weather in</H1>
          <Input type="text" placeholder="Enter city name" id="city" style={{ margin: '4px' }} />
          <Button type="submit" style={{ margin: 'auto 4px' }}>
            Search
          </Button>
        </Label>
      </form>
    </Fragment>
  );
};
