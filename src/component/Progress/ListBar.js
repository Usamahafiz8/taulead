import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import CustomizedProgressBars from "./ProgressBar";

export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "100%",  bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Progress Completion
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClick}>
                <CustomizedProgressBars name={'P1'} value={26} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItemButton>
                    <CustomizedProgressBars name={'sp2'} value={15} />
          </ListItemButton>
          <ListItemButton>
                    <CustomizedProgressBars name={'sp2'} value={11} />
          </ListItemButton>
       <hr/>
        </List>
      </Collapse>

      <ListItemButton>
        <CustomizedProgressBars name={'P2'} value={60} />
      </ListItemButton>
    </List>
  );
}
