import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { CardMedia, Divider } from "@mui/material";
import WallxLogo from "../Images/WallX Logo.png";
import WallxMobile from "../Images/WallXMobileLogo.png"
import { BsFillXDiamondFill } from "react-icons/bs";

export default function ResponsiveAppBar () {

    return (
      <AppBar position="static" bgcolor="transparent" sx={{bgcolor: "transparent"}} elevation={0}>
        <Toolbar>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{
              width: {xs:"86.67vw", md:"91.44vw"},
              // border: "red 2px solid",
              height: { md: "5.96vw" },
            }}
          >
            <CardMedia
              //   noWrap
              component="img"
              image={WallxLogo}
              sx={{
                // m: 2,
                display: { xs: "none", md: "flex" },
                width: { xs: "50px", md: "6.31vw" },
                height: { xs: "47px", md: "5.96vw" },
                // flexGrow: 1,
              }}
            />
            <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1, justifyContent: "space-between" }}>
              <CardMedia
                //   noWrap
                component="img"
                image={WallxMobile}
                sx={{
                  // m: 2,

                  width: { xs: "3.70vw", md: "none" },
                  // height: { xs: "47px", sm: "57px", md: "5.96vw" },
                }}
              />
              <BsFillXDiamondFill />
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "flex-start",
                flexDirection: "row",
                gap: { md: "2.89vw" },
                width: { xs: "555px" },
                // border: "2px solid red",
                ml: { md: "18.52vw" },
              }}
            >
              <Typography>Home</Typography>
              <Typography>About</Typography>
              <Typography>Services</Typography>
              <Typography>Pricing</Typography>
              <Typography>Contact</Typography>
            </Box>
            <Box
              direction="row"
              // border=" 2px white solid"
              justifyContent="center"
              alignItems="center"
              spacing={3}
              sx={{
                display: { xs: "none", md: "flex" },
                width: { xs: "none", md: "19.44vw" },
                ml: { md: "7.35vw" },
                height: { md: "77px" },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "none", md: "1.39vw" },
                  width: { md: "4.05vw" },
                  fontWeight: "500",
                  mr: { md: "0.58vw" },
                }}
              >
                Login
              </Typography>
              <Divider orientation="vertical" sx={{ bgcolor: "white" }} />
              <Button
                variant="contained"
                sx={{
                  // width: "100%",
                  width: { xs: "none", sm: "124px", md: "12.96vw" },
                  height: { md: "4.46vw" },
                  ml: { md: "0.58vw" },
                  bgcolor: "white",
                  color: "black",
                  borderRadius: "30px",
                }}
              >
                Sign up
              </Button>
              {/* <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  width: { xs: "1.39vw" },
                  height: { xs: "1.39vw" },
                }}
              ></Box> */}
              {/* Place an Icon here for mobile view. Set to none for Desktop, xs: flex */}
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
    );
}