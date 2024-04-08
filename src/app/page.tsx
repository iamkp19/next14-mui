import ChannelManager from "@/components/ChannelManager";
import DataCount from "@/components/DataCount";
import Featured from "@/components/Featured";
import HeroSection from "@/components/HeroSection";
import Testimonial from "@/components/Testimonial";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box mb={20}>
      <HeroSection />
      <Featured />
      <DataCount />
      <ChannelManager />
      <Testimonial />
    </Box>
  );
}
