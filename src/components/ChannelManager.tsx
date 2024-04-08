"use client";
import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import Icon1 from "@/public/icon1.svg";
import Icon2 from "@/public/icon2.svg";
import Icon3 from "@/public/icon3.svg";
import Icon4 from "@/public/icon4.svg";
import Image from "next/image";
import { ChannelCardContainer } from "@/styles/styles";

const ChannelManager = () => {
  const cardData = [
    {
      title: "Multi Channel Integration",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      imgSrc: Icon1,
    },
    {
      title: "Manage Price & Inventory",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      imgSrc: Icon2,
    },
    {
      title: "Manage Channel Booking",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      imgSrc: Icon3,
    },
    {
      title: "Manage Multiple Hotels",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      imgSrc: Icon4,
    },
  ];

  return (
    <Box maxWidth={700} mx={"auto"} mt={20} px={3}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Channel Manager
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          mt: "25px",
          mb: "40px",
        }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem magnam
        consectetur alias exercitationem.
      </Typography>
      <ChannelCardContainer>
        {cardData.map((item) => (
          <Box>
            <Card
              //   elevation={2}
              sx={{
                px: "20px",
                py: "30px",
                borderRadius: "24px",
                boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <Image src={item.imgSrc} alt="CardImg"></Image>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  my: "10px",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "bold",
                  my: "15px",
                }}
              >
                {item.desc}
              </Typography>
            </Card>
          </Box>
        ))}
      </ChannelCardContainer>
    </Box>
  );
};

export default ChannelManager;
