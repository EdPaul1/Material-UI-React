import { makeStyles } from '@material-ui/core'
import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { AddCircleOutlineOutlined, SubjectOutlined} from '@material-ui/icons'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { format } from 'date-fns'
import Avatar from '@material-ui/core/Avatar'
import DashboardIcon from '@material-ui/icons/Dashboard'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import SearchIcon from '@material-ui/icons/Search'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import NotificationsIcon from '@material-ui/icons/Notifications'
import LandscapeIcon from '@material-ui/icons/Landscape'
import AssessmentIcon from '@material-ui/icons/Assessment'
import CreditCardIcon from '@material-ui/icons/CreditCard';

const drawerWidth = 240
const useStyles = makeStyles((theme) => {
    return {
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3)
        },
        drawer: {
            width: drawerWidth
    
        },
        drawerPaper: {
            width: drawerWidth
    
        },
        root: {
            display: 'flex'
        },
        active: {
            background: '#f4f4f4'
        },
        title: {
            padding: theme.spacing(2)
        },
        appbar: {
            width: `calc(100% - ${drawerWidth}px)`
        },
        toolbar: theme.mixins.toolbar,
        date: {
            flexGrow: 1
        },
        avatar: {
            marginLeft: theme.spacing(2)
        }
    }

})

export default function Layout({ children }) {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [
        {
            text: 'Dashboard',
            icon: <DashboardIcon color='secondary' />,
            path: '/'
        },
        {
            text: 'Profile Management',
            icon: <AccountCircleIcon color='secondary' />,
            path: '/create'
        },
        {
            text: 'Project Search',
            icon: <SearchIcon color='secondary' />,
            path: '/'
        },
        {
            text: 'Communication Channels',
            icon: <ChatBubbleOutlineIcon color='secondary' />,
            path: '/'
        },
        {
            text: 'Portfolio View',
            icon: <AssessmentIcon color='secondary' />,
            path: '/'
        },
        {
            text: 'Finance Transactions',
            icon: <CreditCardIcon color='secondary' />,
            path: '/'
        },
        {
            text: 'Investment Reports',
            icon: <SubjectOutlined color='secondary' />,
            path: '/'
        },
        {
            text: 'Land Leasing',
            icon: <LandscapeIcon color='secondary' />,
            path: '/'
        },
        {
            text: 'Notifications',
            icon: <NotificationsIcon color='secondary' />,
            path: '/'
        }
    ]

    return (
        <div className={classes.root}>
            {/* App Bar */}
            <AppBar 
            className={classes.appbar}
            elevation={0}
            >
                <Toolbar>
                    <Typography className={classes.date}>
                        Today is the { format(new Date(), 'do MMMM Y') }
                    </Typography>
                    <Typography>
                        Mario
                    </Typography>
                    <Avatar src="/mario-av.png" className={classes.avatar}/>
                </Toolbar>
            </AppBar>

            {/* side drawer */}
            <Drawer
                className={classes.drawer}
                variant='permanent'
                anchor='left'
                classes={{ paper: classes.drawerPaper }}
                >
                <div>
                    <Typography variant='h5' className={classes.title}>
                        Ninja Notes
                    </Typography>
                </div>

            {/* List/Links */}
            <List>
                {menuItems.map(item => (
                    <ListItem
                        button
                        key={item.text}
                        onClick={() => history.push(item.path)}
                        className={location.pathname == item.path ? classes.active : null }
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>

            </Drawer>
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
            {children}
            </div>
        </div>
    )
}