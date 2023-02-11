import React from "react"
import { Stack, Box, CardMedia, Typography } from "@mui/material"
import posbox from "../Images/pos.png";

import { FaCaretDown } from "react-icons/fa";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { RiFileTransferLine } from "react-icons/ri";
import { BsPersonCircle } from "react-icons/bs";
import { MdAccountBalanceWallet } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { TbBrandLinkedin } from "react-icons/tb";
import { ImTwitter } from "react-icons/im";
import { AiOutlineFacebook } from "react-icons/ai";

export default function PosLarge (){

    return (
      <Stack
        flexDirection="row"
        sx={{
          height: { md: "54.75vw" },
          mt: { md: "5.79vw" },
          gap: { md: "5.32vw" },
          //   display: {md: "row"},
          // border: "red solid 2px",
        }}
      >
        <CardMedia
          component="img"
          image={posbox}
          alt="POS booth"
          sx={{
            // zIndex: "1",
            height: { md: "50.64vw" },
            width: { md: "35.42vw" },
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // border: "red solid 2px",
            width: { md: "55.73vw" },
            mt: { md: "5.79vw" },
          }}
        >
          <Typography
            sx={{
              //   paddingTop: "40px",
              fontStyle: "normal",
              fontWeight: "300",
              fontSize: { md: "1.00em" },
              lineHeight: { md: "1.68vw" },
              color: "#201E4B",
              mt: { md: "5.79vw" },
            }}
          >
            How can I become a WallX POS agent?
          </Typography>
          <Typography
            sx={{
              marginTop: { md: "1.16vw" },
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: { md: "2.31vw" },
              lineHeight: { md: "2.84vw" },
              color: "#201E4B",
              // border: "solid red",
            }}
          >
            With WallX, being an agent is now simple.
          </Typography>
          <Box
            sx={{
              marginTop: "30px",
              //   width: "720px",
              //   height: "102px",
              background: "#443792",
              borderRadius: "10px",
            }}
          >
            {/* <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{border: "2px solid red"}}> */}
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                //  justifyContent: "center",
                paddingTop: { md: "1.91vw" },
                paddingBottom: { md: "1.91vw" },
                marginLeft: { md: "6.37vw" },
                width: {md:"47.97vw"},
                // height: { md: "5.90vw" },
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: { md: "1.74vw" },
                lineHeight: "125.5%",
                color: "#FFFFFF",
                gap: "30px",
              }}
            >
              <RiFileTransferLine paddingRigth="50px" /> Register on WallX Vend
            </Typography>
            {/* </Stack> */}
          </Box>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: { md: "2.31vw" },
              marginLeft: { md: "6.37vw" },
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: { md: "1.74vw" },
              lineHeight: { md: "2.20vw" },
              color: "#443792",
              gap: "20px",
              bgColor: "#FCF8FF",
              borderRadius: "10px",
            }}
          >
            <BsPersonCircle />
            Open an account
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: { md: "2.31vw" },
              marginLeft: { md: "6.37vw" },
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: { md: "1.74vw" },
              lineHeight: { md: "2.20vw" },
              color: "#443792",
              gap: "20px",
              bgColor: "#FCF8FF",
              borderRadius: "10px",
            }}
          >
            <MdAccountBalanceWallet />
            Finance our Wallet
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              marginLeft: { md: "6.37vw" },
              marginTop: { md: "2.31vw" },
              paddingBottom: { md: "1.85vw" },
              //   marginTop: "40px",
              //   marginLeft: "110px",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: { md: "1.74vw" },
              lineHeight: { md: "2.20vw" },
              color: "#443792",
              gap: "20px",
              bgColor: "#FCF8FF",
              borderRadius: "10px",
            }}
          >
            <GrTransaction color="#443792" />
            Start executing financial transaction
          </Typography>
        </Box>
      </Stack>
    );
}