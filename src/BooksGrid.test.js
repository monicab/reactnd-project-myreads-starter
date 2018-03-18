import React from 'react';
import { shallow } from 'enzyme';
import BookGrid from './BooksGrid';
import Book from './Book';
import context from 'jest-context';

const book_one = { id: '1', title:'title 1' }
const props = {
  books: [book_one],
  onChangeBookShelf: () => {}
};

it('renders without crashing', () => {
  shallow(<BookGrid {...props}/>);
});

it('renders each book in the list', () => {
  const book_two = { id: '2', title:'title 2' }
  props.books = [book_one, book_two];

  const wrapper = shallow(<BookGrid {...props}/>);
  expect(wrapper.find(Book)).toHaveLength(2);
});

it('renders list item with key = book id', () => {
  const book_one = { id: '1', title: 'My title' }
  const props = {
    books: [book_one],
    onChangeBookShelf: () => {}
  }
  const wrapper = shallow(<BookGrid {...props}/>);
  expect(wrapper.find('li').filterWhere((item) => {
    return item.prop('id') === '1';
  })).toHaveLength(1);
});

context('renders book element with right props', () => {
  const imageLinks = {smallThumbnail: 'thumbnail-url'}
  const book_one = {
    id: '1',
    title: 'My title',
    authors: ['author 1', 'author 2'],
    imageLinks: imageLinks,
    shelf: 'wantToRead',
  };
  const props = {
    books: [book_one],
    onChangeBookShelf: () => {}
  };
  const wrapper = shallow(<BookGrid {...props}/>);

  it('renders book element with prop title', () => {
    expect(wrapper.find(Book).props().title).toEqual('My title');
  });

  it('renders book element with prop id', () => {
    expect(wrapper.find(Book).props().id).toEqual('1');
  });

  it('renders book element with authors', () => {
    expect(wrapper.find(Book).props().authors).toEqual(['author 1', 'author 2']);
  });

  it('renders book element with image links', () => {
    expect(wrapper.find(Book).props().imageLinks).toEqual(imageLinks);
  });

  it('renders book element with the book self', () => {
    expect(wrapper.find(Book).props().shelf).toEqual('wantToRead');
  });

  it('renders book element with an event onChangeBookShelf', () => {
    expect(wrapper.find(Book).props().onChangeBookShelf).toEqual(props.onChangeBookShelf);
  });
});

