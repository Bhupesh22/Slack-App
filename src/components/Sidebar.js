import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarItem from "../components/SidebarItem";
import { db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import {
  Apps,
  BookmarkBorder,
  Drafts,
  ExpandLess,
  Inbox,
  InsertComment,
  FileCopy,
  PeopleAlt,
  ExpandMore,
  Add,
} from "@material-ui/icons";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
  overflow-y: scroll;
  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;
const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;
  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;
const SidebarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }
  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;

function Sidebar() {
  const [channels, loading, error] = useCollection(db.collection("rooms"));
  const [user] = useAuthState(auth);
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Slack HQ</h2>
          <h3>
            <FiberManualRecordIcon />
            {user.displayName}
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>

      <SidebarItem Icon={InsertComment} title={"Threads"} />
      <SidebarItem Icon={Inbox} title={"Mentions & Reactions"} />
      <SidebarItem Icon={Drafts} title={"Saved Items"} />
      <SidebarItem Icon={BookmarkBorder} title={"Channel Browser"} />
      <SidebarItem Icon={PeopleAlt} title={"People & User Groups"} />
      <SidebarItem Icon={Apps} title={"Apps"} />
      <SidebarItem Icon={FileCopy} title={"File Browser"} />
      <SidebarItem Icon={ExpandLess} title={"Show Less"} />
      <hr />
      <SidebarItem Icon={ExpandMore} title={"Channel"} />
      <hr />
      <SidebarItem Icon={Add} addChannelOption title={"Add Channel"} />
      {channels?.docs.map((doc) => (
        <SidebarItem key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SidebarContainer>
  );
}

export default Sidebar;
