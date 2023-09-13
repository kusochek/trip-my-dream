import React, { useState } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import ModalWindow from '../Modal/ModalWindow';

export default function CardItem({
  img, title, description, handleNavigate,
}) {
  const [isShowModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!isShowModal);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345, marginBottom: '30px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image={img}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {description.slice(0, 100)}...
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small' onClick={() => handleNavigate(title)}>Let&apos;s Go!</Button>
          <Button size='small' onClick={handleShowModal}>Learn More</Button>
        </CardActions>
      </Card>
      {isShowModal && <ModalWindow description={description} />}
    </>
  );
}
