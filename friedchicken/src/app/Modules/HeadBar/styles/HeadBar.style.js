const styles = theme => ({
  grow: {
    flexGrow: 1,
    margin: theme.spacing(1),
  },

  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  root: {
    width: '100%',
    flexGrow: 1,
    '& > * + *': {
      margin: theme.spacing(2),
    },
  },

  option: {
    fontSize: 14,
    '& > span': {
      marginRight: 5,
      fontSize: 16,
    },
  },

  imgUser: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 4
  },
  avatarLogo: {
    width: 70,
    height: 70,
    marginRight: 4
  },
  AppBar: {
    backgroundColor: '#ff9900',
    width: '100%',
    height: '80px',
    fontSize: 16,
  },
  MenuItem: {
    fontWeight: 'fontWeightBold',
  },
  BottomNavigation: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#ff9900',
    width: '*',
    height: '80px',
  },
  BottomNavigationAction: {
    width:'140px',
    height: '80px',
    textTransform: 'uppercase',
  }
});
export default styles;