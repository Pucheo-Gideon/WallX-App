import { CardMedia, Typography, Stack } from "@mui/material";
import React from "react";
// import SingleCard from "./SingleCard";
import exchange from "../Images/Exchange.png";
import phoneCoins from "../Images/phoneCoins.png";

function Card() {
  const objects = [
    {
      title: "e-Pin Withdrawal",
      body: "With WallX POS, you can make a cash withdrawal from a nearby Agent without a savings account, ATM card, or smartphone. Pick up your money using only your PIN",
      image: exchange,
    },
    {
      title: "Safe-Lock",
      body: "Wallx POS allows you to lock down some funds for a limited period to grow your business as an agent and earn a commission upfront",
      image: phoneCoins,
    },
  ];

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        // maxWidth: { md: "92.59vw" },
        height: { xs: "900px", md: "25.18vw" },
        // border: "2px solid red",
        mt: { xs: "41px" },
        flexDirection: { xs: "column", md: "row"  },
        gap: { xs: "10px", md: "2.89vw" },
        // ml: { xs: "auto", md: "auto" },
        // mr: { xs: "auto", md: "auto" },
      }}
    >
      {objects.map((item) => {
        return (
          <Stack
            sx={{
              display: { xs: "column", md: "row" },
              width: { md: "40.74vw" },
              height: { xs: "400px", md: "20.95vw" },
              mt: { xs: "41px" },
              // border: "red solid 2px",
              position: "relative",
              // justifyContent: {sm: "center"}
              // ml: { xs: "auto", md: "auto" },
              // mr: { xs: "auto", md: "auto" },
              // mb: { xs: "10px" },
              boxShadow: { xs: "1px 3px 2px #ccc", md: "1px 3px 2px #ccc" },
            }}
          >
            <Typography
              sx={{
                // width: { xs: "152px", md: "11.17vw" },
                height: { xs: "30px", md: "2.20vw" },
                mt: { xs: "24px", md: "1.74vw" },
                ml: { xs: "24px", md: "1.74vw" },
                fontSize: { xs: "1.25em", md: "1.74vw" },
                fontWeight: { xs: "500", md: "500" },
                color: { xs: "#111111", md: "#111111" },
                // border: "red solid 2px",
              }}
              variant="h4"
            >
              {item.title}
            </Typography>
            <Typography
              sx={{
                width: { md: "32.93vw" },
                height: { xs: "130px", md: "4.17vw" },
                ml: { xs: "24px", md: "1.74vw" },
                mt: { xs: "16px", md: "1.16vw" },
                // border: "red solid 2px",
              }}
              variant="subtitle2"
            >
              {item.body}
            </Typography>
            <CardMedia
              sx={{
                maxWidth: { xs: "237px", md: "17.48vw" },
                height: { xs: "138px", md: "10.19vw" },
                mt: { xs: "15px", md: "1.10vw" },
                position: "absolute",
                // float: "right"
                top: { xs: "220px", md: "9.68vw" },
                left: { xs: "0", md: "23.44vw" },
                // float: "left"
              }}
              component="img"
              image={item.image}
            />
          </Stack>
        );
      })}
    </Stack>
  );
}

export default Card;
