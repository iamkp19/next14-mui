"use client";
import { Box, Card, Typography } from "@mui/material";
import React from "react";
import Avatar1 from "@/public/Avatar1.svg";
import Avatar2 from "@/public/Avatar2.svg";
import Avatar3 from "@/public/Avatar3.svg";
import Image from "next/image";
import {
  ChannelCardContainer,
  TestimonialCardContainer,
} from "@/styles/styles";

const Testimonial = () => {
  const cardData = [
    {
      name: " John Doe",
      post: "Marketing Head",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit consectetur.",
      imgSrc: Avatar1,
    },
    {
      name: "Jenna Thomas",
      post: "Web Designer",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit consectetur.",
      imgSrc: Avatar2,
    },
    {
      name: "Jack Ryan",
      post: "Business Developer",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit consectetur.",
      imgSrc: Avatar3,
    },
  ];

  return (
    <Box maxWidth={1000} mx={"auto"} mt={20} px={3}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Testimonials
      </Typography>
      <Typography
        sx={{
          maxWidth: "600px",
          mx: "auto",
          textAlign: "center",
          mt: "25px",
          mb: "40px",
        }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem magnam
        consectetur alias exercitationem.
      </Typography>
      <TestimonialCardContainer>
        {cardData.map((item) => (
          <Box>
            <Card
              sx={{
                minWidth: "240px",
                position: "relative",
                overflow: "unset",
                backgroundColor: "#FFF2DF",
                padding: "20px 20px 30px 40px",
                borderRadius: "40px 2px 40px 2px",
                boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
                mx: "20px",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "bold",
                  my: "10px",
                }}
              >
                {item.desc}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                }}
              >
                {item.name}
              </Typography>
              <Typography sx={{}}>{item.post}</Typography>
              <Image src={item.imgSrc} alt="CardImg"></Image>
            </Card>
          </Box>
        ))}
      </TestimonialCardContainer>
    </Box>
  );
};

export default Testimonial;
