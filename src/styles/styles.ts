import { styled, Box } from "@mui/material";

export const ChannelCardContainer = styled(Box)(
  () =>
    ({
      display: "grid",
      columnGap: "2rem",
      margin: "15px auto 0",
      "&>*:nth-child(n)": { marginTop: "10px" },

      "@media (min-width: 600px)": {
        gridTemplateColumns: "repeat(2, 1fr)",
        "&>*:nth-child(even)": { marginTop: "40px" },
      },
    } as const)
);
export const BrandContainer = styled(Box)(
  () =>
    ({
      display: "grid",
      gridGap: "1rem",
      margin: "0 auto",
      placeItems: "center",

      "@media (min-width: 600px)": {
        gridTemplateColumns: "repeat(2, 1fr)",
      },

      "@media (min-width: 700px)": {
        gridTemplateColumns: "repeat(4, 1fr)",
      },
    } as const)
);
export const TestimonialCardContainer = styled(Box)(
  () =>
    ({
      display: "grid",
      gridGap: "4rem",
      margin: "0 auto",
      placeItems: "center",
      padding: "0 20px",

      "@media (min-width: 650px)": {
        gridTemplateColumns: "repeat(2, 1fr)",
      },
      "@media (min-width: 992px)": {
        gridTemplateColumns: "repeat(3, 1fr)",
        padding: "unset",
      },

      img: {
        height: "75px",
        width: "75px",
        borderRadius: "50%",
        position: "absolute",
        bottom: "18px",
        left: "-45px",
      },
    } as const)
);
