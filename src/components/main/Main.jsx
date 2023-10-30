import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Container, Stack, InputBase } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { data } from "./data";
import { useState } from "react";

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

const Main = () => {
  console.log(data);
  // const theme = useTheme();
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <Container sx={{ my: 3 }}>
      <Stack
        alignItems={"center"}
        direction={"row"}
        justifyContent={"space-between"}
      >
        <Box className="searchNave">
          <Search
            sx={{
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-between",
              boxShadow: " 1px 1px 40px rgba(35, 35, 36, 0.165)",
              border: "1px solid rgba(0, 11, 97, 0.25)",

              "&:hover": { border: "0.3px solid #d4d3d3 " },
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search By Servers "
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ px: 3 }}>filter</Box>
          <Box sx={{ px: 3 }}>filter</Box>
        </Box>
      </Stack>

      <Stack
        sx={{ my: 3 }}
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
      >
        {data
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.sever.toLocaleLowerCase().includes(search);
          })
          .map((item) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Stack
                direction={"row"}
                flexWrap={"wrap"}
                justifyContent={"space-between"}
              >
                <Card
                  key={item.id}
                  sx={{
                    boxShadow: " 1px 1px 40px rgba(35, 35, 36, 0.165)",
                    border: "1px solid rgba(0, 11, 97, 0.25)",
                    flexWrap: "wrap",
                    maxWidth: 333,
                    mt: 6,
                    ":hover ": {
                      rotate: "0,5deg",
                      scale: "1.1",
                      transition: "0.35s",
                      border: "0.3px solid #d4d3d3 ",
                      cursor: "pointer",
                    },
                  }}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.mainTite}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {item.supTitle}
                    </Typography>
                    <Stack
                      sx={{ my: 3 }}
                      direction={"row"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Typography
                        sx={{ fontSize: "30px" }}
                        variant="body2"
                        color="text.secondary"
                      >
                        {item.cost}$
                      </Typography>
                      <Typography
                        sx={{ fontSize: "30px" }}
                        variant="body2"
                        color="text.secondary"
                      >
                        {item.sever}
                      </Typography>
                    </Stack>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "space-between" }}>
                    <Button size="small">Buy</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Stack>
            );
          })}
      </Stack>
    </Container>
  );
};

export default Main;
