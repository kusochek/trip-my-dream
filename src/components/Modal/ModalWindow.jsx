import React from "react";
import { ModalWrapp } from "./styled";
import { Paper } from "@mui/material";

export default function ModalWindow({ content }) {

  return (
    <ModalWrapp>
      <Paper style={{ width: '400px' }}>{content.description}</Paper>
    </ModalWrapp>
  );
};
