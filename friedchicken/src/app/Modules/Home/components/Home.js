import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Grid } from '@material-ui/core'
function Home(props) {
  var items = [
    {
      image: 'http://localhost:5001/image/Home1.jpg'
    },
    {
      image: 'http://localhost:5001/image/promo_2006_m2t3-v.jpg'
    },
    {
      image: 'http://localhost:5001/image/promo_1000x400_m1t1.jpg'
    },
    {
      image: 'http://localhost:5001/image/promo_1804_happyhour.jpg'
    },
    
  ]
  var itemHome = [
    {
      image: 'http://localhost:5001/image/Home1.jpg'
    },
    {
      image: 'http://localhost:5001/image/Home2.jpg'
    },
    {
      image: 'http://localhost:5001/image/Home3.jpg'
    },
  ]
  return (
    <Grid fullWidth style={{marginTop:100}}>
      <Carousel>
        {
          items.map(item => <Item item={item} />)
        }
      </Carousel>
      {
        itemHome.map(item => <Item item={item} />)
      }
    </Grid>

  )
}

function Item(props) {
  return (
    <Grid >
      <img src={props.item.image}></img>
    </Grid>
  )
}
export default Home;