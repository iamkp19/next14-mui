import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import HeroImg from "@/public/heroImg.svg";
import { IoIosArrowForward } from "react-icons/io";

const HeroSection = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      gap={1}
      sx={{
        minHeight: "75vh",
        backgroundColor: "#0E185F",
        color: "#f1f1f1",
        padding: "16px 24px",
      }}
    >
      <Box
        mt={5}
        sx={{
          width: {
            xs: "100%",
            md: "55%",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "clamp(1rem, 2.5vw, 1.7rem)",
            fontWeight: "bold",
            textAlign: {
              xs: "center",
              sm: "center",
              md: "left",
            },
          }}
        >
          Free Open Source
        </Typography>
        <Typography
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
            margin: "10px 0 15px",
            fontSize: "clamp(2.4rem, 9vw, 3.2rem)",
            fontWeight: "bold",
            lineHeight: "60px",
            textAlign: {
              xs: "center",
              sm: "center",
              md: "left",
            },
          }}
        >
          Reservation And <br /> Booking System <br /> For Hotels
        </Typography>
        <Typography
          my={1}
          sx={{
            display: {
              md: "none",
            },
            fontSize: "clamp(2.4rem, 9vw, 3.2rem)",
            fontWeight: "bold",
            lineHeight: "60px",
            textAlign: {
              xs: "center",
              sm: "center",
              md: "left",
            },
          }}
        >
          Reservation And Booking System For Hotels
        </Typography>

        <Typography
          sx={{
            fontSize: "clamp(1rem, 4vw, 1.2rem)",
            fontWeight: "normal",
            textAlign: {
              xs: "center",
              sm: "center",
              md: "left",
            },
          }}
        >
          Take your hotels business online with the help of us
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "flex-start",
            },
            gap: "10px",
            mt: "25px",
          }}
        >
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
      <Box
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
          width: "45%",
        }}
      >
        <Image
          style={{ width: "100%", height: "auto" }}
          src={HeroImg}
          alt="HeroImg"
        ></Image>
      </Box>
    </Stack>
  );
};

export default HeroSection;
