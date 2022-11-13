// /* eslint-disable indent */
// import React from 'react';
// import clsx from 'clsx';
// import Tooltip from '@material-ui/core/Tooltip';
// import { makeStyles, useTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import Hidden from '@material-ui/core/Hidden';
// import MenuIcon from '@material-ui/icons/Menu';
// import WarningIcon from '@material-ui/icons/Warning';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import { Switch, useLocation, Redirect } from 'react-router-dom';
// import { Menu, MenuItem } from '@material-ui/core';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import { MdLogout } from 'react-icons/md';
// import { CgProfile } from 'react-icons/cg';
// import { HiOutlineChatAlt2 } from 'react-icons/hi';
// import { isMobileDevice } from '../helpers/checkMobileDevice';
// import BuildRoutes from './BuildRoutes';
// import BrowserAlert from '../components/BrowserAlert';
// // import Footer from '../components/Footer';
// import { isSupported } from '../helpers/browser';
// import '../App.css';
// import { useThemeHook } from '../hooks/useTheme';
// import ModalFeedBack from '../pages/ContactUs/ModalFeedBack';
// import { FullScreenButton } from '../components/FullScreenButton';

// const drawerWidth = 240;

// const StyledMenu = withStyles({
//   paper: {
//     border: '1px solid #d3d4d5',
//   },
// })((props) => (
//   <Menu
//     elevation={0}
//     getContentAnchorEl={null}
//     anchorOrigin={{
//       vertical: 'bottom',
//       horizontal: 'center',
//     }}
//     transformOrigin={{
//       vertical: 'top',
//       horizontal: 'center',
//     }}
//     {...props}
//   />
// ));

// const StyledMenuItem = withStyles((theme) => ({
//   root: {
//     '&:focus': {
//       backgroundColor: theme.palette.primary.main,
//       '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
//         color: theme.palette.common.white,
//       },
//     },
//   },
// }))(MenuItem);

// const useStyles = makeStyles((theme) => ({
//   // root: {
//   //   display: 'flex',
//   //   height: '100%',
//   // },
//   appBar: {
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   appBarShift: {
//     width: '100%',
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   hide: {
//     display: 'none',
//   },
//   userName: {
//     fontSize: '15px',
//     fontWeight: '700',
//     margin: '0 10px',
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   title: {
//     flexGrow: 1,
//     fontSize: '15px',
//     paddingLeft: '20px',
//     display: 'flex',
//   },
//   drawerHeader: {
//     display: 'flex',
//     alignItems: 'center',
//     padding: theme.spacing(0, 1),
//     ...theme.mixins.toolbar,
//     justifyContent: 'flex-end',
//   },
//   contentShift: {},
// }));

// export default function PersistentDrawerLeft() {
//   const classes = useStyles();
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);
//   const [showMenu, setShowMenu] = React.useState(true);
//   const [redirect, setRedirect] = React.useState(false);
//   const [navLinks, setNavLinks] = React.useState(<></>);
//   const location = useLocation();
//   const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
//   const [openModalFeedBack, setOpenModalFeedBack] = React.useState(false);

//   const { userTheme } = useThemeHook();

//   React.useEffect(() => {
//     setNavLinks(
//       BuildRoutes.navbarLinks(
//         localStorage[process.env.REACT_APP_STORAGE_KEY],
//         localStorage.profile,
//       ),
//     );
//     const route = BuildRoutes.findByLink(location.pathname);
//     setShowMenu(route ? route.noMenu || false : false);
//     setOpen(false);
//     setRedirect(false);
//     if (['/login', '/logout', '/resetPassword'].indexOf(location.pathname) === -1) {
//       window.localStorage.setItem('sessionLastPage', location.pathname);
//     }
//   }, [location]);

//   if (redirect) {
//     return <Redirect to={redirect} />;
//   }

//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   function handleOpenModalFeedBack() {
//     setOpenModalFeedBack(true);
//   }

//   return (
//     <ThemeProvider theme={userTheme}>
//       <div className={classes.root}>
//         <BrowserAlert />
//         <CssBaseline />
//         <AppBar style={showMenu ? { display: 'none' } : {}} position="fixed">
//           <Toolbar>
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               onClick={() => setOpen(true)}
//               edge="start"
//               className={clsx(classes.menuButton, open && classes.hide)}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Hidden only="xs">
//               <img
//                 src="/images/IoT Fockink/Ativo 6@3x.png"
//                 alt="logo"
//                 style={{ height: '55px' }}
//               />
//             </Hidden>
//             <Hidden smUp>
//               <img
//                 src="/images/IoT Fockink/Ativo 3@3x.png"
//                 alt="logo"
//                 style={{ height: '35px' }}
//               />
//             </Hidden>
//             <hr
//               style={{
//                 width: '1px',
//                 height: '45px',
//                 display: 'inline-block',
//                 border: '1px solid #cecece80',
//                 margin: '0px 10px',
//               }}
//             />
//             <img
//               src={
//                 localStorage.organizationId && localStorage.accountId
//                   ? `${process.env.REACT_APP_FILESTORAGE_API}/organizations/${
//                       localStorage.organizationId
//                     }/accounts/${localStorage.accountId}/logo.jpg?${Math.floor(
//                       Math.random() * 1000000000,
//                     )}`
//                   : '/images/IoT Fockink/Ativo 3@3x.png'
//               }
//               alt="logo"
//               onError={(e) => {
//                 e.target.src = '/images/IoT Fockink/Ativo 3@3x.png';
//               }}
//               style={{
//                 maxWidth: '27vw',
//                 maxHeight: '45px',
//                 marginLeft: '5px',
//               }}
//             />
//             {isSupported().is ? (
//               <Typography variant="h6" noWrap className={classes.title}>
//                 {' '}
//               </Typography>
//             ) : (
//               <Tooltip title="Seu navegador não é totalmente suportado - Por favor, utilize preferencialmente a ULTIMA VERSÃO do Google Chrome">
//                 <Typography variant="h6" noWrap className={classes.title}>
//                   <WarningIcon style={{ marginRight: '5px' }} />
//                   Navegador
//                 </Typography>
//               </Tooltip>
//             )}

//             {localStorage[process.env.REACT_APP_STORAGE_KEY] ? (
//               <>
//                 <IconButton
//                   color="inherit"
//                   onClick={handleClick /* setRedirect('/profile') */}
//                 >
//                   <Hidden only="xs">
//                     <span className={classes.userName}>
//                       {localStorage.name}
//                     </span>
//                   </Hidden>
//                   <AccountCircleIcon />
//                 </IconButton>
//                 <StyledMenu
//                   id="customized-menu"
//                   anchorEl={anchorEl}
//                   keepMounted
//                   open={Boolean(anchorEl)}
//                   onClose={handleClose}
//                 >
//                   <StyledMenuItem
//                     onClick={() => {
//                     window.location.href = '/profile';
//                     /* setRedirect('/profile'); */
//                     }}
//                   >
//                     <ListItemIcon>
//                       <CgProfile size={22} color="primary" />
//                     </ListItemIcon>
//                     <ListItemText primary="Meu Perfil" />
//                   </StyledMenuItem>
//                   <StyledMenuItem
//                     onClick={() => {
//                       handleOpenModalFeedBack();
//                     }}
//                   >
//                     <ListItemIcon>
//                       <HiOutlineChatAlt2 size={22} color="primary" />
//                     </ListItemIcon>
//                     <ListItemText primary="Fale Conosco" />
//                   </StyledMenuItem>
//                   {!isMobileDevice() && (
//                     <StyledMenuItem>
//                       <FullScreenButton color="primary" />
//                     </StyledMenuItem>
//                   )}
//                   <StyledMenuItem
//                     onClick={() => {
//                     window.location.href = '/logout';
//                     /* setRedirect('/logout'); */
//                     }}
//                   >
//                     <ListItemIcon>
//                       <MdLogout size={22} color="primary" />
//                     </ListItemIcon>
//                     <ListItemText primary="Sair" />
//                   </StyledMenuItem>
//                 </StyledMenu>
//               </>
//             ) : (
//               <></>
//             )}
//           </Toolbar>
//           <ModalFeedBack openModal={openModalFeedBack} closeModal={setOpenModalFeedBack} />
//         </AppBar>
//         <SwipeableDrawer
//           className={classes.drawer}
//           anchor="left"
//           open={open}
//           onClose={() => setOpen(false)}
//           onOpen={() => setOpen(true)}
//           classes={{
//             paper: classes.drawerPaper,
//           }}
//           disableBackdropTransition={!iOS}
//           disableDiscovery={iOS}
//         >
//           <div className={classes.drawerHeader}>
//             <IconButton onClick={() => setOpen(false)}>
//               {theme.direction === 'ltr' ? (
//                 <ChevronLeftIcon />
//               ) : (
//                 <ChevronRightIcon />
//               )}
//             </IconButton>
//           </div>
//           <Divider />
//           <List>{navLinks}</List>
//         </SwipeableDrawer>
//         <main className={`${showMenu ? 'content' : 'main-container'}`}>
//           <div style={showMenu ? { display: 'none' } : {}}>
//             <div className={classes.drawerHeader} />
//           </div>
//           {/* <Container className="container"> */}
//           <Switch>{BuildRoutes.routerLinks()}</Switch>
//         </main>
//         {/* <Footer /> */}
//       </div>
//     </ThemeProvider>
//   );
// }
