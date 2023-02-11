import { Box, CardMedia, Typography, Stack, Button } from "@mui/material";
import React from "react";
import PGrid from "../Images/PersonWithPhone.png";
import realMerchant from "../Images/realMerchant.png";
import MobileView from "./Mobile";

export default function PhoneGrid() {
  return (
    <Stack
      direction="row"
      sx={{
        // xs: "24.59vw",
        // xs: "41.67vw",
        // width: { xs: "none", md: "98.38vw" },
        height: { xs: "none", md: "37.04vw" },
        // border: "red 2px solid",
        mt: { md: "8.68vw" },
        // xs: "5.79vw",
        // flexDirection: "row",
        // display: { xs: "none", md: "flex" },
      }}
    >
      {/* Mobile */}

      <CardMedia
        component="img"
        image={PGrid}
        sx={{
          width: { md: "48.84vw" },
          height: { md: "34.72vw" },
          mr: { xs: "none", md: "2.31vw" },
          // mt: { xs: "8.33vw" },
          display: { xs: "none", md: "flex" },
        }}
      />
      <Stack
        direction="row"
        sx={{
          width: { xs: "none", md: "34.14vw" },
          height: { xs: "none", md: "37.04vw" },
          display: { xs: "none", md: "flex" },
        }}
      >
        {/* title, body and boxes */}
        <Stack
          direction="column"
          sx={{  mr: { md: "3.94vw" } }}
        >
          <Typography
            sx={{
              lineHeight: { xs: "none", md: "1.68vw" },
              fontSize: { xs: "none", md: "1.39vw" },
              fontWeight: { xs: "none", md: "300" },
              color: { xs: "none", md: "#201E4B" },
              mb: { xs: "none", md: "0.58vw" },
            }}
          >
            Pos Service for Customers
          </Typography>
          <Typography
            sx={{
              width: { xs: "none", md: "34.14vw" },
              height: { xs: "none", md: "8.51vw" },
              lineHeight: { xs: "none", md: "2.84vw" },
              fontWeight: { xs: "none", md: "500" },
              fontSize: { xs: "none", md: "2.31vw" },
              color: { xs: "none", md: "#201E4B" },
            }}
          >
            Instantaneously send and receive money to any WallX agent or bank
            account.
          </Typography>
          <Stack
            direction="row"
            sx={{
              gap: { xs: "none", md: "2.72vw" },
              // border: "red solid 2px",
              mt: { xs: "none", md: "2.03vw" },
            }}
          >
            <Box
              sx={{
                width: { xs: "none", md: "13.02vw" },
                height: { xs: "none", md: "21.99vw" },
                // border: "red solid 2px",
                // mt: { xs: "none", md: "auto" },
                // mb: { xs: "none", md: "auto" },
              }}
            >
              <Box
                sx={{
                  width: { md: "12.15vw" },
                  height: { md: "10.42vw" },
                  // border: "red solid 2px",
                }}
              >
                <Typography
                  sx={{
                    paddingRight: { md: "3.53vw" },
                    paddingLeft: { md: "1.68vw" },
                    paddingTop: { md: "3.53vw" },
                    paddingBottom: { md: "3.53vw" },
                    fontWeight: { md: "500" },
                    fontSize: { md: "1.20vw" },
                    lineHeight: { md: "1.68vw" },
             
                  }}
                >
                  Generate Pin Payment
                </Typography>
              </Box>

              <Box
                sx={{
                  width: { md: "12.15vw" },
                  height: { md: "10.42vw" },
                  // border: "red solid 2px",
                  background: "#443792",
                  marginTop: { md: "1.68vw" },
                  // marginTop: { md: "1.68vw" },
                }}
              >
                <Typography
                  sx={{
                    paddingRight: { md: "3.53vw" },
                    paddingLeft: { md: "1.68vw" },
                    paddingTop: { md: "3.53vw" },
                    marginBottom: { md: "3.53vw" },
                    fontWeight: { md: "500" },
                    fontSize: { md: "1.20vw" },
                    lineHeight: { md: "1.68vw" },
                    color: { xs: "none", md: "#fff" },
                  }}
                >
                  Enter Secret Code
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                width: { xs: "none", md: "13.02vw" },
                height: { xs: "none", md: "21.99vw" },
                // border: "red solid 2px",
                mt: { xs: "none", md: "1.04vw" },
                // gap: { xs: "none", md: "auto" },
              }}
            >
              <Box
                sx={{
                  width: { md: "12.15vw" },
                  height: { md: "10.42vw" },
                  // border: "red solid 2px",
                  mb: "1.74vw",
                  background: "#443792",
                }}
              >
                <Typography
                  sx={{
                    paddingRight: { md: "1.79vw" },
                    paddingLeft: { md: "1.62vw" },
                    paddingTop: { md: "3.53vw" },
                    paddingBottom: { md: "3.53vw" },
                    fontWeight: { md: "500" },
                    fontSize: { md: "1.20vw" },
                    lineHeight: { md: "1.68vw" },
                    // color: { xs: "none", md: "#fff" },
                    color: { xs: "none", md: "#fff" },
                    // background: "#443792",
                  }}
                >
                  Enter Customer Receiver Details
                </Typography>
              </Box>

              <Box
                sx={{
                  width: { md: "12.15vw" },
                  height: { md: "10.42vw" },
                }}
              >
                <Typography
                  sx={{
                    paddingRight: { md: "3.53vw" },
                    paddingLeft: { md: "1.68vw" },
                    paddingTop: { md: "3.53vw" },
                    // marginBottom: { md: "3.53vw" },
                    fontWeight: { md: "500" },
                    fontSize: { md: "1.20vw" },
                    lineHeight: { md: "1.68vw" },
                    // mb: "1.74vw",
                  }}
                >
                  Select Payment Channel
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Stack>
        <CardMedia
          component="img"
          image={realMerchant}
          sx={{
            width: { xs: "none", md: "7.76vw" },
            height: { xs: "none", md: "34.38vw" },
            mt: { xs: "none", md: "2.03vw" },
            mr: { md: "100px" },
          }}
          alt="Monolith"
        />
      </Stack>
      {/* <MobileView /> */}
    </Stack>
  );
}
