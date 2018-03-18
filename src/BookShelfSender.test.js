import React from 'react';
import { shallow } from 'enzyme';
import context from 'jest-context';

import BookGrid from './BooksGrid';
import Book from './Book';
import BookShelfSender from './BookShelfSender'

const props = {
  onChangeBookShelf: () => {}
};

it('renders without crashing', () => {
  shallow(<BookShelfSender {...props}/>);
});

