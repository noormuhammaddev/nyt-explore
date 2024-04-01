import React from 'react';
import { render } from '@testing-library/react';
import NewsCard from './NewsCard';

describe('NewsCard component', () => {
  const mockData = {
    title: 'Test Title',
    abstract: 'Test Abstract',
    publishedDate: '2024-04-01',
    url: 'http://example.com'
  };

  it('renders title, abstract, and published date correctly', () => {
    const { getByText } = render(
      <NewsCard
        title={mockData.title}
        abstract={mockData.abstract}
        publishedDate={mockData.publishedDate}
        url={mockData.url}
      />
    );

    expect(getByText(mockData.title)).toBeInTheDocument();
    expect(getByText(mockData.abstract)).toBeInTheDocument();
    expect(getByText(mockData.publishedDate)).toBeInTheDocument();
  });

  it('renders a link to the given URL', () => {
    const { getByText } = render(
      <NewsCard
        title={mockData.title}
        abstract={mockData.abstract}
        publishedDate={mockData.publishedDate}
        url={mockData.url}
      />
    );

    const linkElement = getByText('Sea Detail');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.href).toBe(mockData.url);
  });

  it('renders with correct styles', () => {
    const { getByText } = render(
      <NewsCard
        title={mockData.title}
        abstract={mockData.abstract}
        publishedDate={mockData.publishedDate}
        url={mockData.url}
      />
    );

    const titleElement = getByText(mockData.title);
    const abstractElement = getByText(mockData.abstract);
    const publishedDateElement = getByText(mockData.publishedDate);

    expect(titleElement).toHaveStyle('font-weight: bold;');
    expect(titleElement).toHaveStyle('overflow: hidden;');
    expect(titleElement).toHaveStyle('text-overflow: ellipsis;');
    expect(abstractElement).toHaveStyle('min-height: 88px;');
    expect(publishedDateElement).toHaveStyle('text-align: left;');
  });
});
