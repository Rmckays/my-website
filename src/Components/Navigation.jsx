import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import PersonIcon from '@material-ui/icons/Person';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import FileCopyIcon from '@material-ui/icons/FileCopy';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    },
    title: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center'
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
    logo: {
        width: '50px',
        height: '50px',
        margin: '0 1rem 0 0'
    }
}));

const getIcon = (index) => {
    switch(index){
        case 0:
            return <EqualizerIcon color="primary" />;
        case 1:
            return <RecentActorsIcon color="primary" />;
        case 2:
            return <PersonIcon color="primary" />;
        case 3:
            return <FileCopyIcon color="primary" />
    }
};

const Navigation = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [page, setPage] = useState(null);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const navigateToPage = (event) => {
        let navigationNode = event.target;

        while(!navigationNode.getAttribute("page")){
            navigationNode = navigationNode.parentNode;
        }

        switch(navigationNode.innerText){
            case 'Skills':
                const skills = document.getElementById('skills');
                skills.scrollIntoView();
                break;
            case 'Portfolio':
                const portfolio = document.getElementById('portfolio');
                portfolio.scrollIntoView();
                break;
            case 'About':
                const about = document.getElementById('about');
                about.scrollIntoView();
                break;
        }
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                color="secondary"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar >
                    <div className={classes.title}>
                        <img src='img/tealLogo.png' className={classes.logo}/>
                        <Typography variant="h5" noWrap color="primary">
                            Rustyn Simmons
                        </Typography>
                    </div>
                    <IconButton
                        color="secondary"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="end"
                        className={clsx(open && classes.hide)}
                    >
                        <MenuIcon color="primary" />
                    </IconButton>
                </Toolbar>
            </AppBar>
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={open}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronLeftIcon color="primary" /> : <ChevronRightIcon color="primary"/>}
                </IconButton>
            </div>
            <Divider />
            {page}
            <List>
                {['Skills', 'Portfolio', 'About', 'Resume'].map((text, index) => (
                    <ListItem button page={text} key={text} onClick={navigateToPage}>
                        <ListItemIcon>{getIcon(index)}</ListItemIcon>
                        <ListItemText color="primary" primary={<Typography color="primary">{text}</Typography>}/>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Drawer>
        </div>
    );
};

export default Navigation;
