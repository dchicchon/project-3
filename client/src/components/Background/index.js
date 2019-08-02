import React, { Component } from 'react'
 
import BackgroundSlideshow from 'react-background-slideshow'
 
import image1 from '../../../public/images/bg1.jpg'
import image2 from '../../../public/images/bg2.jpg'
import image3 from '../../../public/images/bg3.jpg'
 
export default class App extends Component {
  render () {
    return (
      <div>
        <BackgroundSlideshow images={[ image1, image2, image3 ]} />
      </div>
    )
  }
}