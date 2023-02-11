import {
  Stack,
  Typography,
  Box,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import phone3 from "../Images/Phone3.png";
import ResponsiveAppBar from "./AppBar2";
import backImage from "../Images/posq.png";
import { fontWeight } from "@mui/system";
import Card from "./compo/Card";
import PhoneGrid from "./compo/PhoneGrid";
import MobileView from "./compo/Mobile";
import PosLarge from "./compo2/PosLarge";
import PosMobile from "./compo2/PosMobil";
import Footer from "./compo4/Footer";
import FooterMobile from "./compo4/FooterMobil";
import Timeline from "./compo3/Timeline";

export default function WallXPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: { md: `url(${backImage})` },
          bgcolor: { xs: "blue", md: "none" },
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <ResponsiveAppBar />
        <Stack
          style={{
            background:
              "linear-gradient(107.47deg, rgba(79, 55, 146, 0.8036) -4.29%, rgba(124, 61, 206, 0.98) 121.97%);",
          }}
          gap={{ xs: "0", md: "2.84vw" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <Box
            mt={{ xs: "12.22vw", md: "4.92vw" }}
            width="100%"
            maxWidth={{ xs: "75.11vw", md: "49.77vw" }}
          >
            <Typography
              lineHeight={{ xs: "126.9%", md: "4.92vw" }}
              fontSize={{ xs: "1.67em", md: "4.05vw" }}
            >
              Provide your Customers with Quick and Simple Financial Services.
            </Typography>
            <Typography
              fontSize={{ xs: "0.67em", md: "1.74vw" }}
              mt={{ xs: "16px", md: "1.16vw" }}
            >
              A retail service that offers incredible discounts and commissions
              for individuals, and small and medium-sized businesses. Sign up
              and begin to earn!
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: "white",
                color: "black",
                width: { xs: "149px", sm: "166px", md: "17.36vw" },
                height: { xs: "47px", md: "4.63vw" },
                borderRadius: { xs: "24px", md: "1.74vw" },
                mt: { xs: "24px", md: "1.74vw" },
              }}
            >
              {" "}
              Get Started
            </Button>
          </Box>

          <Box
            mt={{ md: "10.36vw" }}
            width="100%"
            maxWidth={{ md: "37.79vw" }}
            height="563px"
            display={{ xs: "none", md: "block" }}
          >
            <img width={"100%"} src={phone3} />
          </Box>
        </Stack>
      </Box>
      <Stack
        direction="column"
        alignItems="center"
        sx={{
          // border: "2px solid red",
          mx: { xs: "7.78vw", md: "none" },
          mt: { xs: "64px", md: "5.79vw" },
        }}
      >
        <Typography
          sx={{
            // width: { xs: "70px", md: "6.08vw" },

            lineHeight: { xs: "19px", md: "1.68vw" },
            // ml: { xs: "auto", md: "auto" },
            // mr: { xs: "auto", md: "auto" },
            mb: { xs: "16px", md: "1.16vw" },
            // mt: { xs: "16px", md: "1.16vw" },
            fontSize: { xs: "0.83em", md: "1.39vw" },
            fontWeight: { xs: "300", md: "400" },
            color: { xs: "fff", md: "#201E4B;" },
            textAlign: "center",
            // mb: { xs: "16px", md: "1.16vw" },
            // ml: {xs:"134px", md:"46.93vw"}
          }}
        >
          We Offer
        </Typography>
        <Typography
          sx={{
            maxWidth: { md: "39.93vw" },
            // height: { xs: "46px", md: "5.67vw" },
            mt: { xs: "16px", md: "1.16vw" },
            mb: { xs: "8px", md: "1.16vw" },
            // ml: { xs: "auto", md: "auto" },
            // mr: { xs: "auto", md: "auto" },
            lineHeight: { xs: "23px", md: "2.84vw" },
            fontSize: { xs: "0.96em", md: "2.31vw" },
            // border: "2px solid red",
            fontWeight: { xs: "500", md: "500" },
            color: { xs: "000", md: "#201E4B" },
          }}
        >
          A Point Of Sale Service For Small And Medium Size Businesses.
        </Typography>
        <Typography
          sx={{
            maxWidth: { md: "35.07vw" },
            // height: { xs: "47px", md: "2.78vw" },
            fontSize: { xs: "0.67em", md: "1.16vw" },
            fontWeight: { xs: "300", md: "400" },
            lineHeight: { xs: "16px", md: "1.39vw" },
            textAlign: "center",
            // border: "2px solid red",
            mt: { xs: "8px", md: "1.16vw" },
            color: { xs: "000", md: "#201E4B" },
            ml: { xs: "auto", md: "auto" },
            mr: { xs: "auto", md: "auto" },
          }}
        >
          Sell from anywhere as a Point of Sale Agent on WallX Vend and earn
          instant commissions.
        </Typography>
      </Stack>
      <Card />

      <Box>{isMobile ? <MobileView /> : <PhoneGrid />}</Box>
      <Box>
        {/* <PosBooth /> */}
        {isMobile ? <PosMobile /> : <PosLarge />}
      </Box>
      <Box>{isMobile ? <></> : <Timeline />}</Box>

      <Box>{isMobile ? <FooterMobile /> : <Footer />}</Box>
      {/* Footer */}
    </Box>
  );
}
