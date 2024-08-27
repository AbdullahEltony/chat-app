import React from "react";
import {Stack } from "@mui/material";

import Messages from "./Messages";
import Header from "./Header";
import Footer from "./Footer";
import { ScrollBox } from "../Scrollbar";

const Conversation = () => {
  return (
    <Stack width={"100%"} height={"100%"} maxHeight={"100vh"}>
      {/*chat header*/}
      <Header />
      {/* chat msgs */}
      <ScrollBox>
        <Messages menu={true}/>
      </ScrollBox>
      {/*chat footer*/}
      <Footer />
    </Stack>
  );
};

export default Conversation;
