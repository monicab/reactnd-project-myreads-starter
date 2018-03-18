import React from 'react';
import { shallow } from 'enzyme';
import BookCover from './BookCover';

it('renders book cover element', () => {
  const wrapper = shallow(<BookCover />);
  expect(wrapper.find('.book-cover')).toHaveLength(1);
});

it('renders book cover with no image', () => {
  const wrapper = shallow(<BookCover />);
  expect(wrapper.find('.book-cover').props().style).toEqual({
    width: 128,
    height: 192
  });
});

it('renders book cover with no image when imageLinks object is empty', () => {
  const wrapper = shallow(<BookCover imageLinks={{}}/>);
  expect(wrapper.find('.book-cover').props().style).toEqual({
    width: 128,
    height: 192
  });
});

it('renders book cover with image', () => {
  const imageLinks = {
    smallThumbnail: 'url-to-small-thumbnail'
  }
  const wrapper = shallow(<BookCover imageLinks={imageLinks}/>);
  expect(wrapper.find('.book-cover').props().style).toEqual({
    width: 128,
    height: 192,
    backgroundImage: "url(\"url-to-small-thumbnail\")"
  });
});
