import React from "react";
import { Stack, Box, CardMedia, Typography } from "@mui/material"
import posbox from "../Images/pos.png";

export default function PosMobile(){


    return (
      <Box sx={{mt: "68px"}}>
        <CardMedia
          component="img"
          image={posbox}
          alt="POS booth"
          sx={{
            // zIndex: "1",
            height: { md:"30.90vw"},
            width: { md: "21.53vw" },
          }}
        />
      </Box>
    );
}