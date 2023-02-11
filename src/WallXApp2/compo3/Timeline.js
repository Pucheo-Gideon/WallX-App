import React from "react";
import { Box, CardMedia} from "@mui/material";
import TimelineOne from "../Images/Timeline1.png";


export default function Timeline () {

   return(
    
       <Box
           sx={{
          mt: {xs:"47px"},
          // border: "2px red solid",
          // position: "absolute",
          // top: "3700px",
          // left: "25px",
        }}
      >
        <CardMedia
          component="img"
          image={TimelineOne}
          alt="Timeline booth"
          sx={{
            // position: "absolute",
            // width: "1728px",
            // height: "1156px",

            // zIndex: "1",
          }}
        />
      </Box>
   ) 
}