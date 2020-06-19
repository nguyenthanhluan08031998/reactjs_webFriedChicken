import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Grid } from '@material-ui/core'
function Home(props) {
  var items = [
    {
      image: '/1.png'
    },
    {
      image: '/1.png'
    },
    {
      image: '/1.png'
    },
    {
      image: '/1.png'
    }
  ]
  var itemHome = [
    {
      image: 'http://localhost:5001/image/imageFood/Home1.jpg'
    },
    {
      image: 'http://localhost:5001/image/imageFood/Home2.jpg'
    },
    {
      image: 'http://localhost:5001/image/imageFood/Home3.jpg'
    },
  ]
  return (
    <Grid>
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
    <Grid>
      <img src={props.item.image}></img>
    </Grid>
  )
}
export default Home;