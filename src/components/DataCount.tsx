"use client";
import React from "react";
import BgOrange from "@/public/BgOrange.svg";
import BgYellow from "@/public/BgYellow.svg";
import Bgblue from "@/public/Bgblue.svg";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const DataCount = () => {
  const infoItem = [
    {
      title: "Downloads",
      value: "25,000+",
      bgImg: BgOrange,
    },
    {
      title: "Countries",
      value: "120+",
      bgImg: BgYellow,
    },
    {
      title: "Active Users",
      value: "10,000+",
      bgImg: Bgblue,
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        mt: "60px",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        alignItems: {
          xs: "center",
          sm: "self-start",
        },
        gap: {
          xs: "85px",
          sm: "10px",
        },
        mb: "100px",
      }}
    >
      {infoItem.map((item) => (
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Image height={45} src={item.bgImg} alt="BgImg"></Image>
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: "bold",
              position: "absolute",
              top: "5px",
              left: "-20px",
            }}
          >
            {item.value}
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              position: "absolute",
              top: "65px",
              left: "-30px",
              whiteSpace: "nowrap",
            }}
          >
            {item.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default DataCount;
