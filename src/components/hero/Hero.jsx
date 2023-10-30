import { Box, Container } from "@mui/material";

// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// @ts-ignore
import videoValo from "./videos/video1.mp4";
// @ts-ignore
import picValo1 from "./images/image1.jpeg";
// @ts-ignore
import picValo2 from "./images/image2.png";

import { Link, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Hero = () => {
  return (
    <Container sx={{ display: "flex", mt: 2.5, alignItems: "center" }}>
      <Box flexGrow={1} position="relative">
        <video
          className="video"
          src={videoValo}
          width="98%"
          autoPlay
          muted
          loop
        />
        <Box
          className="box"
          sx={{
            position: "absolute",
            left: 31,
            textAlign: "left",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              textTransform: "uppercase",
            }}
            variant="h5"
          >
            Buy a Valorant Account with Skins
          </Typography>

          <Typography
            sx={{
              color: "#fff",
              fontWeight: 400,
              my: 1,
              textTransform: "uppercase",
            }}
            variant="h3"
          >
            Instead of starting from scratch, buy your account
          </Typography>
          <Link
            sx={{
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              transition: "0.2s",
              fontWeight: 400,

              "&:hover": {
                color: "#595757",
              },
            }}
            href="#"
            underline="none"
          >
            Buy Now
            <ArrowForwardIcon sx={{ fontSize: "13px" }} />
          </Link>
        </Box>
      </Box>

      <Box sx={{ display: { xs: "none", md: "block", width: "45%" } }}>
        <Box sx={{ position: "relative" }}>
          <img src={picValo1} width={"100%"} />
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: 31,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "#fff",
                fontSize: "18px",
              }}
            >
              NEW PLAYERS
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
                lineHeight: "16px",
                mt: 1,
              }}
            >
              SUMMER
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
              }}
            >
              SALE 20% OFF
            </Typography>

            <Link
              sx={{
                color: "#fff",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.2s",

                "&:hover": {
                  color: "#595757",
                },
              }}
              href="#"
              underline="none"
            >
              Buy Now
              <ArrowForwardIcon sx={{ fontSize: "13px" }} />
            </Link>
          </Stack>
        </Box>

        <Box sx={{ position: "relative" }}>
          <img src={picValo2} width={"100%"} />
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: 31,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "#fff",
                fontSize: "18px",
              }}
            >
              NEW PLAYERS
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
                lineHeight: "16px",
                mt: 1,
              }}
            >
              SUMMER
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
              }}
            >
              SALE 20% OFF
            </Typography>

            <Link
              sx={{
                color: "#fff",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.2s",

                "&:hover": {
                  color: "#595757",
                },
              }}
              href="#"
              underline="none"
            >
              Buy Now
              <ArrowForwardIcon sx={{ fontSize: "13px" }} />
            </Link>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default Hero;
