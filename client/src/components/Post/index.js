import React from "react";
import { Col, Row, Container } from "../Grid";


function Post(props) {
  return (
    // const {title, image, info, tag, location} = props.post;

    //======================VERSION ONE==========================
    //     <Col size="s6">
    // <div class="card">

    // <div class="card-action">
    // {/* adding avatar */}
    // {/* <li class="collection-item avatar"> */}
    //           <img src="http://cdn.shopify.com/s/files/1/0257/6087/products/Pikachu_Single_Front_dc998741-c845-43a8-91c9-c1c97bec17a4.png?v=1523938908" width="50" height="50" alt="" position="absolute" verticle-align="center" ></img>
    // {/* </li> */}


    //           <span><a href="#" align="left" verticle-align="center" >Person's Profile</a></span>
    //         </div>

    //     <div class="card-image waves-effect waves-block waves-light">
    //       <img class="activator" src="https://images.unsplash.com/photo-1564694230688-f6afe64db816?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" width="300" height="350"/>
    //     </div>


    //     <div class="card-content">

    //     {/* <p class="activator">I am a very simple card. I am good at containing small bits of information. */}
    // {/* //     I am convenient because I require little markup to use effectively.</p> */}
    //       <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
    //       {/* <div class="card-action"> */}
    //       <span> <a href="#"><i className="material-icons">favorite_border</i></a> </span>
    // {/* </div> */}
    //     </div>
    //     <div class="card-reveal">
    //       {/* <span class="card-title grey-text text-darken-4">Card Title</span> */}
    //       <p class="card-title activator"> Here is some more information about this product that is only revealed once clicked on.<i class="material-icons right">close</i></p>
    //     </div>
    //   </div>
    //   </Col>   

    // ===============VERSION TWO=======================WORKING WITH THIS FOR NOW========
    <Col size="s6">
      <div className="card">


        <div className="card-action">
          <img src="http://cdn.shopify.com/s/files/1/0257/6087/products/Pikachu_Single_Front_dc998741-c845-43a8-91c9-c1c97bec17a4.png?v=1523938908" width="50" height="50" alt="" position="absolute" verticle-align="center" />


          <span><a href="#" align="left" verticle-align="center" >{props.id}</a></span>
        </div>


        {/* // // user photo posted */}
        <div className="card-image">
          <img src= {props.image} width="300" height="350" className="activator" />

          <span className="card-title activator white-text" >{props.title}</span>

          {/* // end of photo posted */}
        </div>

        {/* // card description section */}
        <div className="card-content">
        

          <p className="activator">{props.location}</p>
        </div>
          <div className="card-reveal">
            <p className="card-title">{props.info}</p>
          </div>
          {/* // end of card description */}
        <div className="card-action">
          <a href="#"><i className="material-icons">favorite_border</i></a>
        </div>
      </div>
    </Col>

  );
}

export default Post;

// DANNY=================================================================================
      // <Col size="s6">
      //  <div class="card horizontal">
      //    <div class="card-image">
      //      <img src="https://lorempixel.com/100/190/nature/6" />
      //    </div>
      //    <div class="card-stacked">
      //      <div class="card-content">
      //        <p>I am a very simple card. I am good at containing small bits of information.</p>
      //      </div>
      //      <div class="card-action">
      //      </div>
      //    </div>
      //  </div>
      //  </Col> 