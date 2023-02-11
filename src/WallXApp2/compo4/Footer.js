import React from "react";
import { Box, Stack, Typography, CardMedia, Divider } from "@mui/material";

import { TbBrandLinkedin } from "react-icons/tb";
import { ImTwitter } from "react-icons/im";
import { AiOutlineFacebook } from "react-icons/ai";
import WallxLogo from "../Images/WallX Logo.png";
import wallxRemoveMoney from "../Images/wallxRemoveMoney.png";

export default function Footer() {
  return (
    <Stack
      flexDirection="column"
      sx={{
        height: { md: "30.50vw" },
        // border: "2px solid red",
        backgroundColor: "#201E4B",
        position: "relative",
        marginTop: { md: "5.79vw" },
      }}
    >
      <Typography
        sx={{
          marginTop: { md: "4.46vw" },
          marginBottom: { md: "1.16vw" },
          marginLeft: { md: "8.16vw" },
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: { md: "2.89vw" },
          lineHeight: { md: "3.47vw" },
          letterSpacing: "0.08em",
          color: "#FFFFFF",
        }}
      >
        Share, Spend With Ease
      </Typography>
      <Stack>
        {/* First  containing columns of text */}
        <Stack
          direction="column"
          sx={{
            width: { md: "53.24vw" },
            height: { md: "11.57vw" },
            marginLeft: { md: "8.16vw" },
            mt: { md: "1.16vw" },
            // mb: "20px",
            // border: "2px red solid",
            background: "#201E4B",
            color: "FFFFFF",
          }}
        >
          <Stack
            direction="row"
            sx={{
              gap: "20px",

              // height: "158px",
              // border: "red 2px solid",
              color: "white",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                // border: "2px red solid",
                width: { md: "5.96vw" },
                height: { md: "9.09vw" },
                gap: { md: "1.16vw" },
              }}
            >
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: { md: "1.39vw" },
                  lineHeight: { md: "1.68vw" },
                  color: "FFFFFF",
                }}
              >
                Pages
              </Typography>
              <Typography
                sx={{
                  color: "FFFFFF",
                  fontSize: { md: "1.04vw" },
                  lineHeight: { md: "1.27vw" },
                }}
              >
                Services
              </Typography>
              <Typography
                sx={{
                  color: "FFFFFF",
                  fontSize: { md: "1.04vw" },
                  lineHeight: { md: "1.27vw" },
                }}
              >
                Pricing
              </Typography>
              <Typography
                sx={{
                  color: "FFFFFF",
                  fontSize: { md: "1.04vw" },
                  lineHeight: { md: "1.27vw" },
                }}
              >
                Customer
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                // border: "2px red solid",
                width: { md: "7.18vw" },
                height: { md: "9.14vw" },
                gap: { md: "1.16vw" },
              }}
            >
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: { md: "1.39vw" },
                  lineHeight: { md: "1.68vw" },
                  color: "FFF",
                }}
              >
                Company
              </Typography>
              <Typography
                sx={{
                  color: "FFFFFF",
                  fontSize: { md: "1.04vw" },
                  lineHeight: { md: "1.27vw" },
                }}
              >
                About
              </Typography>
              <Typography
                sx={{
                  color: "FFFFFF",
                  fontSize: { md: "1.04vw" },
                  lineHeight: { md: "1.27vw" },
                }}
              >
                Team
              </Typography>
              <Typography
                sx={{
                  color: "FFFFFF",
                  fontSize: { md: "1.04vw" },
                  lineHeight: { md: "1.27vw" },
                }}
              >
                FAQ
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                // border: "2px red solid",
                width: { md: "11.05vw" },
                height: { md: "6.77vw" },
                gap: { md: "1.16vw" },
              }}
            >
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: { md: "1.39vw" },
                  lineHeight: { md: "1.68vw" },
                  color: "FFF",
                }}
              >
                Contact
              </Typography>
              <Typography
                color="white"
                sx={{
                  color: "FFFFFF",
                  fontSize: { md: "1.04vw" },
                  lineHeight: { md: "1.27vw" },
                }}
              >
                hello@wallx.co
              </Typography>
              <Typography
                sx={{
                  color: "FFFFFF",
                  fontSize: { md: "1.04vw" },
                  lineHeight: { md: "1.27vw" },
                }}
              >
                +234(70) 6328-3502
              </Typography>
            </Box>
            <Stack
              direction="column"
              sx={{ width: { md: "7.52vw" }, height: { md: "4.57vw" } }}
            >
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: { md: "1.39vw" },
                  lineHeight: { md: "1.68vw" },
                  color: "FFF",
                }}
              >
                Follow Us
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  // border: "2px red solid",
                  // width: "130px",
                  height: { md: "1.74vw" },
                  gap: { md: "1.16vw" },
                  marginTop: { md: "1.16vw" },
                }}
              >
                <TbBrandLinkedin />
                <ImTwitter />
                <AiOutlineFacebook />
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <CardMedia
        component="img"
        image={wallxRemoveMoney}
        alt="wallxRemoveMoney"
        sx={{
          width: { md: "18.63vw" },
          height: { md: "18.34vw" },
          // border: "2px solid red",
          zIndex: "1",
          position: "absolute",
          left: { md: "74.65vw" },
          right: { md: "0.64vw" },
          top: { md: "3.24vw" },
          bottom: { md: "8.91vw" },
        }}
      />
      <Divider color="#ccc" />
      {/* Footer */}
      <Box
        sx={{
          marginTop: { md: "1.74vw" },
          display: "flex",
          flexDirection: "rows",
          justifyContent: "space-between",
          alignItems: "center",
          gap: { md: "0.58vw" },
          // border: "2px red solid",
          height: { md: "3.47vw" },
          color: "FFFFFF",
        }}
      >
        <CardMedia
          component="img"
          image={WallxLogo}
          alt="wallX Logo"
          sx={{
            width: { md: "2.95vw" },
            height: { md: "2.78vw" },
            zIndex: "1",
            paddingLeft: { md: "8.16vw" },
          }}
        />
        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: { md: "0.93vw" },
            lineHeight: { md: "1.68vw" },
          }}
        >
          21 Nyese Ibrahim Tella Street, Oral Estate, Elegnaza Bus-stop, Lekki
          Expressway. Lagos
        </Typography>
        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: { md: "0.93vw" },
            lineHeight: { md: "1.68vw" },
            paddingRight: { md: "10.36vw" },
          }}
        >
          All right reserved. 2022
        </Typography>
      </Box>
    </Stack>
  );
}
