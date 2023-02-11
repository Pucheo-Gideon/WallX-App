import React from "react";
import { CardMedia, Typography, Stack } from "@mui/material";
import exchange from "src/Images/Exchange.png";
import phoneCoins from "src/Images/phoneCoins.png";


function SingleCard(props) {
  const { title, body, image } = props;

  return (
    <Stack
      sx={{
        display: { xs: "column", md: "row" },
        width: { md: "40.74vw" },
        height: { xs: "284px", md: "20.95vw" },
        mt: { xs: "41px", md: "2.89vw" },
        // border: "red solid 2px",
      }}
    >
      <Typography variant="h4">{props.title}</Typography>
      <Typography variant="subtitle2">{props.body}</Typography>
      <CardMedia component="img" image={props.image} />
    </Stack>
  );
}
export default SingleCard;
