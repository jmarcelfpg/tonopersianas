import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { StyleRules, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const styles: StyleRules = {
  card: {
    marginBottom: "20px",
    maxWidth: 345,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

interface IProductCardProps {
  srcImage: string;
  title: string;
  header: string;
  content: string;
  classes?: {
    card: string,
    media: string,
  };
}

function ProductCard(props: IProductCardProps) {
  const { classes, srcImage, title, header, content } = props;
  return (
    <Card className={classes!.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          // alt="Contemplative Reptile"
          className={classes!.media}
          // height="140"
          image={srcImage}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom={true} variant="h5" component="h2">
            {header}
          </Typography>
          <Typography component="p">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Ver Mas
        </Button>
        <Button size="small" color="primary">
          Leer Mas
        </Button>
      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(ProductCard);