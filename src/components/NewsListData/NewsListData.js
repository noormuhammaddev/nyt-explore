import React, { useState, useEffect } from 'react';
import { Typography, Box, Container, Grid } from '@mui/material';
import Divider from '@mui/material/Divider';
import NewsCard from '../shared/NewsCard';

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
    <Container maxWidth="lg" >
      <Typography variant="h5" align="left" style={{fontWeight: 'bold'}}>
        New York Times Most Popular Articles
      </Typography> 
      <Divider style={{margin: '24px 0'}} />

      {data ? (
        <Grid container spacing={2}>
          {data.results.map(item => (
            <Grid item sm={4} xs={12} key={item.id}>
              <NewsCard 
                title = {item.title} 
                abstract = {item.abstract}
                publishedDate={item.published_date}
                url = {item.url}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <p>Loading...</p>
      )}
    
    </Container >
  );
};

export default NewsListData;
