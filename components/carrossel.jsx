import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Stack } from "@mui/system";

function GroupAvatars() {
  return (
    <Stack direction="row"  sx={{bgcolor:"#5B5B5B", p:4}}>
      <AvatarGroup spacing={'-20'} sx={{ justifyContent: "flex-end"}}>
        <Avatar
          onClick={() => {console.log("clicked")}}
          src="https://images.unsplash.com/photo-1661311819282-42a3ab1258dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          sx={{width:56, height:56, border:0}}
        />
        <Avatar alt="Nome" sx={{width:56, height:56}} />
        <Avatar alt="Nome" sx={{width:56, height:56}}/>
        <Avatar alt="Nome" sx={{width:56, height:56}}/>
        <Avatar alt="Nome" sx={{width:56, height:56}}/>
      </AvatarGroup>
    </Stack>
  );
}

export default GroupAvatars;