import React from "react";
import styled from "styled-components";
import { db } from "../firebase";
import { useDispatch } from "react-redux";
import { useCollection } from "react-firebase-hooks/firestore";
import { enterRoom } from "../features/appSlice";

const SidebarItemContainer = styled.div`
  display: flex;
  font-size: 12px;
  padding-left: 2px;
  align-items: center;
  cursor: pointer;
  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }
  > h3 {
    font-weight: 500;
  }
  > h3 > span {
    padding: 15px;
  }
`;
const SidebarOptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
`;

function SidebarItem({ Icon, title, addChannelOption, id }) {
  const dispatch = useDispatch();

  const addChannel = () => {
    const channelName = prompt("Please enter channel name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };
  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };

  return (
    <SidebarItemContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontsize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarItemContainer>
  );
}

export default SidebarItem;
