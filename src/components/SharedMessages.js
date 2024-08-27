import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import React from "react";
import { useTheme } from "@mui/material/styles";

import { useDispatch } from "react-redux";
import { UpdateSidebarType } from "../store/slices/app";
import { CaretLeft } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { SHARED_DOCS, SHARED_LINKS } from "../data";
import { DocMsg, LinkMsg } from "./conversations/MessageTypes";
const SharedMessages = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "320px", height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        {/*heder*/}
        <Box
          sx={{
            width: "100%",
            boxShadow: "0 0 2px rgb(0 ,0 ,0 ,0.25)",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background.default,
          }}
        >
          <Stack
            direction={"row"}
            sx={{ height: "100%", p: 2 }}
            alignItems={"center"}
            spacing={3}
          >
            <IconButton onClick={() => dispatch(UpdateSidebarType("CONTACT"))}>
              <CaretLeft />
            </IconButton>
            <Typography variant="subtitle2">Sahred Messages</Typography>
          </Stack>
        </Box>

        <Tabs
          value={value}
          onChange={handleChange}
          centered
          sx={{ px: 2, pt: 2 }}
        >
          <Tab label="Media" />
          <Tab label="Links" />
          <Tab label="Docs" />
        </Tabs>

        {/*body*/}
        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowY: "scroll",
          }}
          p={ value === 0 ? 2: 0}
          spacing = {2}
        >
          {(() => {
            switch (value) {
              case 0:
                return (
                  <Grid container spacing={2}>
                    {[0, 1, 2, 3, 4, 5, 6].map((item) => (
                      <Grid item key={item} xs={4}>
                        <img
                          src={faker.image.image()}
                          alt={faker.name.fullName()}
                        />
                      </Grid>
                    ))}
                  </Grid>
                );

              case 1:
                return SHARED_LINKS.map((el) => <LinkMsg el={el} />);
              case 2:
                return SHARED_DOCS.map((el) => <DocMsg el={el} />);

              default:
                break;
            }
          })()}
        </Stack>
      </Stack>
    </Box>
  );
};

export default SharedMessages;
