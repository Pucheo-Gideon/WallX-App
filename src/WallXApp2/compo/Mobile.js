import React from "react";
import { Box, CardMedia, Typography, Stack, Button } from "@mui/material";
// import {Button} from "@mui/material"
import PGrid from "../Images/PersonWithPhone2.png";

export default function MobileView() {
  return (
    <Stack
      sx={{
        // width: { xs: "24.48vw" },
        mt: { xs: "79px" },
        minHeight: { xs: "41.67vw" },
        // border: "red solid 2px",
        display: { xs: "column" },
        boxShadow: {xs: "-2px 3px 2px #ccc", md: "-2px 3px 2px #ccc"}
      }}
    >
      <Typography
        sx={{
          maxWidth: { xs: "215px" },
          // height: { xs: "1.39vw" },
          lineHeight: { xs: "20px" },
          fontSize: { xs: "0.83em" },
          fontWeight: { xs: "none", md: "500" },
          color: { xs: "#000000" },
          mb: { xs: "0.58vw" },
          mr: { xs: "7.47vw" },
          ml: { xs: "2.72vw" },
          mt: { xs: "8px" },
        }}
      >
        Pos Service for Customers
      </Typography>
      <Typography
        sx={{
          // maxWidth: { xs: "262px" },
          // height: { xs: "68px" },
          lineHeight: { xs: "23px" },
          fontSize: { xs: "1.00em" },
          fontWeight: { xs: "none", md: "500" },
          color: { xs: "#000000" },
          mr: { xs: "3.99vw" },
          ml: { xs: "2.72vw" },
          mt: { xs: "8px" },
        }}
      >
        Send and receive money to any wallx agent or bank account instantly.
      </Typography>
      <CardMedia
        component="img"
        image={PGrid}
        sx={{
          mt: { xs: "34px" },
          // width: { xs: "24.59vw" },
          // height: { xs: "222px" },
          mx: { xs: "10px" },
          // mt: { xs: "2.72vw" },
          // mr: { xs: "0.75vw" },
          // ml: { xs: "0.75vw" },
          // display: { xs: "none" },
        }}
      />
      <Typography
        sx={{
          // maxWidth: { xs: "243px" },
          // height: { xs: "1.16vw" },
          lineHeight: { xs: "15px" },
          fontSize: { xs: "0.67em" },
          fontWeight: { xs: "none", md: "500" },
          color: { xs: "#000000" },
          // mb: { xs: "0.81vw" },
          mr: { xs: "87px" },
          ml: { xs: "24px" },
          mt: { xs: "11px" },
          mb: { xs: "20px" },
        }}
      >
        How can I become a WallX POS agent?
      </Typography>
      <Typography
        sx={{
          // maxWidth: { xs: "288px" },
          // height: { xs: "3.36vw" },
          lineHeight: { xs: "23px" },
          fontSize: { xs: "1.00em" },
          fontWeight: { xs: "500" },
          color: { xs: "#000000" },
          // mb: { xs: "1.74vw" },
          mr: { xs: "42px" },
          ml: { xs: "24px" },
          mt: { xs: "11px" },
        }}
      >
        With WallX, being an agent is now simple
      </Typography>
      <Button
        variant="contained"
        sx={{
          bgcolor: "white",
          color: "#000000",
          maxWidth: { xs: "149px" },
          height: { xs: "47px" },
          borderRadius: { xs: "24px" },
          // border: "2px red solid",
          // mr: { xs: "181px" },
          // ml: { xs: "24px" },
          mt: { xs: "24px" },
          mb: { xs: "2.26vw" },
        }}
      >
        Get Started
      </Button>
    </Stack>
  );
}
