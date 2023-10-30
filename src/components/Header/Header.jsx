// @ts-nocheck
import "./header.css";

import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Container,
  Stack,
  Box,
  IconButton,
  Typography,
  useTheme,
  InputBase,
  Button,
  useMediaQuery,
  Drawer,
} from "@mui/material";
import {
  Close,
  DarkModeOutlined,
  LightModeOutlined,
} from "@mui/icons-material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Header = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Container
      sx={{
        display: "flex",
        my: 3,
        justifyContent: "space-between",
        flexGrow: 1,
      }}
    >
      <Stack className="logoNav" direction={"column"} alignItems={"center"}>
        <SportsEsportsIcon />
        <Typography variant="body2">TA Store</Typography>
      </Stack>
      <Box className="searchNave">
        <Search
          sx={{
            borderRadius: "22px",
            display: "flex",
            justifyContent: "space-between",
            boxShadow: " 1px 1px 40px rgba(35, 35, 36, 0.165)",
            border: "1px solid rgba(0, 11, 97, 0.25)",
            "&:hover": { border: "0.7px solid #d4d3d3  " },
          }}
        >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Box>

      {useMediaQuery("(min-width:807px)") && (
        <Box sx={{ display: "flex" }}>
          <Stack direction={"row"} alignItems={"center"}>
            <Button
              className="button"
              sx={{
                mx: "5px",
                fontWeight: 400,
                color: "inherit",
                "&:hover": {
                  bgcolor: "inherit",
                },
              }}
            >
              How To sell
            </Button>
            <Button
              className="button"
              sx={{
                mx: "5px",
                fontWeight: 400,
                color: "inherit",
                "&:hover": { bgcolor: "inherit" },
              }}
            >
              How To Buy
            </Button>{" "}
          </Stack>
          <Stack direction={"row"} alignItems={"center"}>
            <Button
              className="button"
              sx={{
                mx: "5px",
                fontWeight: 400,
                color: "inherit",
                "&:hover": { bgcolor: "inherit" },
              }}
            >
              Log in
            </Button>
            <Button
              className="button"
              sx={{
                mx: "5px",
                fontWeight: 400,
                color: "inherit",
                "&:hover": { bgcolor: "inherit" },
              }}
            >
              Sign up
            </Button>
            <div>
              {theme.palette.mode === "light" ? (
                <IconButton
                  onClick={() => {
                    localStorage.setItem(
                      "mode",
                      theme.palette.mode === "dark" ? "light" : "dark"
                    );
                    colorMode.toggleColorMode();
                  }}
                  color="inherit"
                >
                  <LightModeOutlined />
                </IconButton>
              ) : (
                <IconButton
                  onClick={() => {
                    localStorage.setItem(
                      "mode",
                      theme.palette.mode === "dark" ? "light" : "dark"
                    );
                    colorMode.toggleColorMode();
                  }}
                  color="inherit"
                >
                  <DarkModeOutlined />
                </IconButton>
              )}
            </div>
          </Stack>
        </Box>
      )}

      <Box SearcclassName="icon lightDarkMod" sx={{ display: "flex" }}>
        {useMediaQuery("(max-width:807px)") && (
          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined />
              </IconButton>
            )}
          </div>
        )}
        {useMediaQuery("(max-width:807px)") && (
          <IconButton
            sx={{
              "&:hover": { bgcolor: "inherit" },
            }}
            onClick={toggleDrawer("top", true)}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Box>
      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{
          ".MuiPaper-root": {
            height: "100%",
          },
        }}
      >
        <Box
          sx={{
            width: 444,
            mx: "auto",
            mt: 6,
            position: "relative",
            pt: 10,
          }}
        >
          <IconButton
            sx={{
              ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
          >
            <Close onClick={toggleDrawer("top", false)} />
          </IconButton>
          <Stack sx={{ alignItems: "center" }}>
            <Button
              className="button"
              sx={{
                boxShadow: " 1px 1px 40px rgba(35, 35, 36, 0.165)",

                mx: "5px",
                fontWeight: 400,
                color: "inherit",
                "&:hover": { bgcolor: "inherit" },
              }}
            >
              How To sell
            </Button>
            <Button
              className="button"
              sx={{
                mx: "5px",
                fontWeight: 400,
                color: "inherit",
                "&:hover": { bgcolor: "inherit" },
              }}
            >
              How To Buy
            </Button>
            <Button
              className="button"
              sx={{
                mx: "5px",
                fontWeight: 400,
                color: "inherit",
                "&:hover": { bgcolor: "inherit" },
              }}
            >
              log in
            </Button>
            <Button
              className="button"
              sx={{
                mx: "5px",
                fontWeight: 400,
                color: "inherit",
                "&:hover": { bgcolor: "inherit" },
              }}
            >
              Sign up
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </Container>
  );
};

export default Header;
