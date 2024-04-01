import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const NewsCard = ({
  title,
  abstract,
  publishedDate,
  url
}) => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 140 }}
        image="https://placehold.co/400"
        title="green iguana"
      />
      <CardContent>
        <Typography 
          gutterBottom 
          variant="h6" 
          component="div"
          align="left"
          noWrap={true} style={{ overflow: 'hidden', textOverflow: 'ellipsis', fontWeight: 'bold' }}
        >
          {title}
        </Typography>
        <Typography 
          variant="body2" 
          color="text.secondary" 
          align="left"
          style={{minHeight: '88px'}}
        >
          {abstract}
        </Typography>

        <Typography 
          variant="body2" 
          color="text.secondary" 
          align="left"
        >
          {publishedDate}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small" href={url}>
            Sea Detail
          </Button>
      </CardActions>
    </Card>
  );
}
export default NewsCard;