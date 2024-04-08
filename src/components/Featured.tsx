"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import airtable from "@/public/airtable.svg";
import monzo from "@/public/monzo.svg";
import quotient from "@/public/quotient.svg";
import slack from "@/public/slack.svg";
import { BrandContainer } from "@/styles/styles";

const Featured = () => {
  const imgList = [airtable, monzo, quotient, slack];

  return (
    <Box
      sx={{
        backgroundColor: "#FFF2DF",
        borderRadius: "22px",
        maxWidth: "800px",
        mx: { xs: "15px", sm: "15px", md: "auto" },
        mt: {
          xs: "-30px",
          md: "-30px",
        },
        padding: "20px 10px 30px",
      }}
    >
      <Typography
        sx={{ fontWeight: "bold", fontSize: "20px", textAlign: "center" }}
      >
        We Got Featured !
      </Typography>
      <Typography my={1} mb={3} textAlign={"center"}>
        We got mentioned and listed on various platforms. You can find us here.
      </Typography>
      <BrandContainer>
        {imgList.map((img) => (
          <Image height={40} src={img} alt="BrandImg"></Image>
        ))}
      </BrandContainer>
    </Box>
  );
};

export default Featured;
