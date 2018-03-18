import React from 'react';
import { shallow } from 'enzyme';
import Book from './Book';
import BookCover from './BookCover';
import BookShelfSender from './BookShelfSender';

const bookData = {
  id: "1",
  title: 'title of the book',
  onChangeBookShelf: () => {}
}

it('renders book cover element', () => {
  const wrapper = shallow(<Book {...bookData}/>);
  expect(wrapper.find('.book')).toHaveLength(1);
});

it('has a BookCover', () => {
  const wrapper = shallow(<Book {...bookData}/>);
  expect(wrapper.find(BookCover)).toHaveLength(1);;
});

it('has a BookShelSender', () => {
  const wrapper = shallow(<Book {...bookData}/>);
  expect(wrapper.find(BookShelfSender)).toHaveLength(1);
});

it('has a BookShelSender', () => {
  const wrapper = shallow(<Book {...bookData}/>);
  expect(wrapper.find(BookShelfSender)).toHaveLength(1);;
});

it('has a book title', () => {
  const wrapper = shallow(<Book {...bookData}/>);
  expect(wrapper.find('.book-title')).toHaveLength(1);;
});

it('has a book authors section', () => {
  const wrapper = shallow(<Book {...bookData}/>);
  expect(wrapper.find('.book-authors')).toHaveLength(1);
});

it('has no authors', () => {
  const wrapper = shallow(<Book {...bookData}/>);
  expect(wrapper.find('.book-authors').text()).toEqual('');
});

it('has no authors', () => {
  bookData['authors'] = ['author 1', 'author 2']
  const wrapper = shallow(<Book {...bookData}/>);
  expect(wrapper.find('.book-authors').text()).toEqual('author 1, author 2');
});
