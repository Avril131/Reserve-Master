import React, { Component } from 'react';
import './index.css'
import { Carousel } from 'antd';
import img1 from '../../asset/1.JPG'
import Form from '../../common/ClassForm'

class home extends Component {
   render() {
      return (
         <div id='home'>
            <Carousel autoplay style={{width:"1000px"}}>
               <div className='carousel_part'>
                  <img src={img1}></img>
               </div>
               <div className='carousel_part'>
                  <img src={img1}></img>
               </div>
               <div className='carousel_part'>
                  <img src={img1}></img>
               </div>
               <div className='carousel_part'>
                  <img src={img1}></img>
               </div>
            </Carousel>
            <Form sta={[1,1,0,1,0,1,1,1,1,1,1,1,0]}/>
         </div>
      );
   }
}
export default home;