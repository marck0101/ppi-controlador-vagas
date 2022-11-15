// import React from "react";
// import { useState } from "react";
// import { styled, useTheme } from "@mui/material/styles";
// import {
//   ListItem,
//   ListItemText,
//   IconButton,
//   Box,
//   Drawer,
//   CssBaseline,
//   Toolbar,
//   List,
//   Typography,
//   Divider,
// } from "@mui/material";

// import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";

// import ListItemIcon from "@mui/icons-material/Mail";
// import { ThemeContext } from "@emotion/react";

// const drawerWidth = 240;

// const Main =
//   styled("main", { shouldForwardProp: (prop) => prop !== "open" }) <
//   {
//     open: boolean,
//   } >
//   (({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitionstransitions.create("margin", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeeft: `-${drawerWidth}px`,
//     ...(open && {
//       transition: theme.transitions.create("margin", {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     }),
//   }));

// // eslint-disable-next-line
// interface AppBarProps extends MuiAppBarProps {
//   open: boolean;
// }

// const AppBar =
//   styled(MuiAppBar, {
//     shouldForwardProp: (prop) => prop !== "open",
//   }) <
//   AppBarProps >
//   (({ theme, open }) => ({
//     transition: theme.transitions.create(["margin", "width"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavinfScreen,
//     }),
//     ...(open && {
//       width: `calc(100% - ${drawerWidth}px)`,
//       marginLeft: `${drawerWidth}px`,
//       transition: theme.transitions.create(["margin", "width"], {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//     }),
//   }));

// const DrawHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   padding: theme.spacing(0, 1),
//   ... theme.mixins.toolbar,
//   justifyContent: 'flex-end'
// }));
