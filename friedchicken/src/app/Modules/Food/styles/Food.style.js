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
      marginTop:50,
      minHeight:500,
    },
  });
  export default styles;