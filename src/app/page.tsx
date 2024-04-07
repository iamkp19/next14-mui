import DataCount from "@/components/DataCount";
import Featured from "@/components/Featured";
import HeroSection from "@/components/HeroSection";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box mb={20}>
      <HeroSection />
      <Featured />
      <DataCount />
    </Box>
  );
}
