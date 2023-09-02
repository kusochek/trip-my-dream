import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useState } from "react";
import ModalWindow from "../Modal/ModalWindow";

export default function CardItem({ continent }) {
  const [isShowModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!isShowModal);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={continent.img}
          title={continent.continent}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {continent.continent}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {continent.description.slice(0, 100)}...
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small" onClick={handleShowModal}>Learn More</Button>
        </CardActions>
      </Card>
      {isShowModal && <ModalWindow content={continent} />}
    </>
  );
}
