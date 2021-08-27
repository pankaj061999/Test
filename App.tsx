import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from './components/Modal';
import './App.css';
import { CircularColorPalettes, CircularColorPalettesCon } from './skins';

const useStyles = makeStyles({
  root: {
    maxWidth: '15rem',
    margin: '0 0.5rem',
  },
});

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="App">
      <Container>
      <div className="card-con">
        <Card className={classes.root} onClick={handleOpen}>
        <CardActionArea>
          <CardContent>
            <CardMedia
              component="img"
              alt="dummy image"
              image="https://img.freepik.com/free-photo/word-design-written-top-colorful-geometric-3d-shapes_2227-1663.jpg"
              title="100% Cotton Navy/White Colour Oxford Chambery"
              style={{ marginBottom: '1rem', borderRadius: '4px' }}
            />
            <Typography gutterBottom variant="subtitle1" component="h3">
              100% Cotton Navy/White Colour Oxford Chambery
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Also available in
            </Typography>
            <CircularColorPalettesCon>
              <CircularColorPalettes color="red" />
              <CircularColorPalettes color="green" />
              <CircularColorPalettes color="blue" />
              <CircularColorPalettes color="#625e5a" />
              <CircularColorPalettes color="#268462" />
              <span>+2</span>
            </CircularColorPalettesCon>
          </CardContent>
        </CardActionArea>
      </Card>
        <Card className={classes.root} onClick={handleOpen}>
        <CardActionArea>
          <CardContent>
            <CardMedia
              component="img"
              alt="dummy image"
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png"
              title="100% Cotton Navy/White Colour Oxford Chambery"
              style={{ marginBottom: '1rem', borderRadius: '4px' }}
            />
            <Typography gutterBottom variant="subtitle1" component="h3">
              100% Cotton Navy/White Colour Oxford Chambery
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Also available in
            </Typography>
            <CircularColorPalettesCon>
              <CircularColorPalettes color="red" />
              <CircularColorPalettes color="green" />
              <CircularColorPalettes color="blue" />
              <CircularColorPalettes color="#625e5a" />
              <CircularColorPalettes color="#268462" />
              <span>+2</span>
            </CircularColorPalettesCon>
          </CardContent>
        </CardActionArea>
      </Card>
      </div>
      <Modal open={open} handleClose={handleClose} />
      </Container>
    </div>
  )
}

export default App;
