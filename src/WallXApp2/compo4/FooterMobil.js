import React from "react";
import { Stack, Divider, Typography, CardMedia, Box } from "@mui/material";
import { FaCaretDown } from "react-icons/fa";
import WallxLogo from "../Images/WallX Logo.png";
import wallxRemoveMoney from "../Images/wallxRemoveMoney.png";

export default function FooterMobile() {
  return (
    <Stack
      flexDirection="column"
      //   bg-color="#201E4B"
      sx={{
        // height: { xs: "550px" },
        bgcolor: { xs: "#201E4B" },
        color: "#fff",
        mt: { xs: "72px" },
      }}
      //   position="relative"
    >
      <Typography
        sx={{
          mt: { xs: "34px" },
          ml: { xs: "31px" },
          mr: { xs: "auto" },
          mb: { xs: "42px" },
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: { xs: "1.00em" },
          lineHeight: { xs: "24px" },
          //   color: "#FFFFFF",
        }}
      >
        Share, Spend With Ease
      </Typography>

      <Divider color="#ccc" />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            mt: { xs: "17px" },
            ml: { xs: "31px" },
            mr: { xs: "195px" },
            mb: { xs: "40px" },
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: { xs: "1.00em" },
            lineHeight: { xs: "24px" },
            //   color: "#FFFFFF",
          }}
        >
          Pages
        </Typography>
        <FaCaretDown size="24px" />
      </Box>

      <Divider color="#ccc" />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            mt: { xs: "25px" },
            ml: { xs: "31px" },
            mr: { xs: "161px" },
            mb: { xs: "31px" },
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: { xs: "1.00em" },
            lineHeight: { xs: "24px" },
            // border: "red solid 2px",
          }}
        >
          Company
        </Typography>
        <FaCaretDown size="24px" />
      </Box>

      <Divider color="#ccc" />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            mt: { xs: "35px" },
            ml: { xs: "31px" },
            mr: { xs: "178px", md: "auto" },
            mb: { xs: "21px" },
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: { xs: "1.00em" },
            lineHeight: { xs: "24px" },
          }}
        >
          Contact
        </Typography>
        <FaCaretDown size="24px" />
      </Box>

      <Divider color="#ccc" />
      <Stack flexDirection="row" alignItems="center" flexWrap="wrap">
        <Stack
          flexDirection="column"
          width="126px"
          marginRight="54px"
          flexWrap="wrap"
        >
          <CardMedia
            component="img"
            image={WallxLogo}
            alt="wallX Logo"
            sx={{
              width: { xs: "24px" },
              height: { xs: "24px" },
              zIndex: "1",
              mt: { xs: "29px" },
              ml: { xs: "31px" },
              mr: { xs: "299px" },
              mb: { xs: "14px" },
            }}
          />
          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: { xs: "0.58em" },
              lineHeight: { md: "1.68vw" },
              mt: { xs: "14px" },
              ml: { xs: "31px" },
              mb: { xs: "75px" },
              width: { xs: "126px" },
              //   border: "red solid 2px",
              //   paddingRight: { md: "10.36vw" },
            }}
          >
            All right reserved. 2022
          </Typography>
        </Stack>
        <CardMedia
          component="img"
          image={wallxRemoveMoney}
          alt="wallxRemoveMoney"
          sx={{
            width: { xs: "145px" },
            height: { xs: "127px" },
            // ml: { xs: "31px" },
            mt: { xs: "28px" },
            mb: { xs: "1px" },
          }}
        />
      </Stack>
    </Stack>
  );
}
