import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NewsListData from './NewsListData';

describe('NewsListData', () => {
  test('renders loading state initially', async () => {
    render(<NewsListData />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders news cards after fetching data', async () => {
    const mockData = {
      results: [
        { id: 1, title: 'Title 1', abstract: 'Abstract 1', published_date: '2024-03-31', url: 'https://example.com/1' },
        { id: 2, title: 'Title 2', abstract: 'Abstract 2', published_date: '2024-03-30', url: 'https://example.com/2' },
        { id: 3, title: 'Title 3', abstract: 'Abstract 3', published_date: '2024-03-29', url: 'https://example.com/3' },
      ]
    };
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: async () => mockData,
      ok: true
    });

    render(<NewsListData />);
    
    await waitFor(() => {
      expect(screen.getByText('New York Times Most Popular Articles')).toBeInTheDocument();
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });

    expect(screen.getByText('Title 1')).toBeInTheDocument();
    expect(screen.getByText('Title 2')).toBeInTheDocument();
    expect(screen.getByText('Title 3')).toBeInTheDocument();
  });

  test('handles error when data fetching fails', async () => {
    jest.spyOn(global, 'fetch').mockRejectedValueOnce(new Error('Failed to fetch'));
    render(<NewsListData />);
    
    await waitFor(() => {
      expect(screen.getByText('Error fetching data: Failed to fetch')).toBeInTheDocument();
    });
  });
});
