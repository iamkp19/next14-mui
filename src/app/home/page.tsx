import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import HeroImg from "@/public/heroImg.svg";
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      gap={1}
      py={2}
      px={3}
      sx={{
        backgroundColor: "#0E185F",
        color: "#f1f1f1",
      }}
    >
      <Box mt={5} sx={{ width: "55%" }}>
        <Typography
          sx={{
            fontSize: "clamp(1rem, 2.5vw, 1.7rem)",
            fontWeight: "bold",
          }}
        >
          Free Open Source
        </Typography>
        <Typography
          my={2}
          sx={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: "bold",
            lineHeight: "65px",
          }}
        >
          Reservation And <br /> Booking System <br /> For Hotels
        </Typography>
        <Typography
          sx={{
            fontSize: "clamp(1rem, 4vw, 1.4rem)",
            fontWeight: "normal",
          }}
        >
          Take your hotels business online with the help of us
        </Typography>
        <Box mt={4} display={"flex"} gap={2}>
          <Button
            sx={{
              backgroundColor: "#00FEDB",
              color: "#2a2c2b",
              p: "15px 22px 13px 25px",
              borderRadius: "40px",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#00FEDB",
                color: "#2a2c2b",
              },
            }}
          >
            View Demo{" "}
            <IoIosArrowForward
              style={{ fontSize: "20px", margin: "-3 0 0 8px" }}
            />
          </Button>
          <Button
            sx={{
              border: "2px solid #f1f1f1",
              color: "#f1f1f1",
              p: "15px 22px 13px 25px",
              borderRadius: "40px",
              fontWeight: "bold",
            }}
          >
            Download
          </Button>
        </Box>
      </Box>
      <Box sx={{ width: "45%" }}>
        <Image
          style={{ width: "100%", height: "auto" }}
          src={HeroImg}
          alt="HeroImg"
        ></Image>
      </Box>
    </Stack>
  );
};

export default Home;
