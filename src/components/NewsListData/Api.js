import React, { useState, useEffect } from 'react';

const NYT_API_KEY = '5W67Z3ikWw4JQmGEqZbGBy4TIhY0aJ0A'; // Replace 'YOUR_API_KEY' with your actual API key

const NewsListData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${NYT_API_KEY}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
        console.log('jsonData', jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>New York Times Most Popular Articles</h1>
      {data ? (
        <ul>
          {data.results.map(article => (
            <li key={article.id}>
              <a href={article.url}>{article.title}</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default NewsListData;
