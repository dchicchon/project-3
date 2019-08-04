import React from "react";
import { Col, Row, Container } from "../Grid";


function Post(props) {
  return (

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
//     <Col size="s6">
//       <div class="card">
//         <div class="card-action">
// // {/* adding avatar */}
// // {/* <li class="collection-item avatar"> */}
//           <img src="http://cdn.shopify.com/s/files/1/0257/6087/products/Pikachu_Single_Front_dc998741-c845-43a8-91c9-c1c97bec17a4.png?v=1523938908" width="50" height="50" alt="" position="absolute" verticle-align="center" />
// // {/* </li> */}


//           <span><a href="#" align="left" verticle-align="center" >Person's Profile</a></span>
//         </div>


// // {/* user photo posted */}
//         <div class="card-image">
//           <img src="https://images.unsplash.com/photo-1564694230688-f6afe64db816?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" width="300" height="350" class="circle activator" />
// // {/* end of photo posted */}

//           <span class="card-title activator">Card Title</span>
//         </div>

// // {/* card description section */}
//         <div class="card-content">
//           <p>I am a very simple card. I am good at containing small bits of information.
//     I am convenient because I require little markup to use effectively.</p>
//           <div class="card-reveal">
//             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae perferendis debitis nobis asperiores! Ipsam facilis autem in libero architecto aut quisquam eos adipisci ipsum soluta. Error quidem nobis natus impedit!</p>
//       <div className="card horizontal">
//         <div className="card-image">
//           <img src="https://lorempixel.com/100/190/nature/6" />
//         </div>
//         <div className="card-stacked">
//           <div className="card-content">
//             <p>I am a very simple card. I am good at containing small bits of information.</p>
//           </div>
//           <div className="card-action">
//           </div>
// // {/* end of card description */}
//         </div>
//         <div class="card-action">
//           <a href="#"><i className="material-icons">favorite_border</i></a>
//         </div>
//       </div>
//     </Col>


// DANNY=================================================================================
      <Col size="s6">
       <div class="card horizontal">
         <div class="card-image">
           <img src="https://lorempixel.com/100/190/nature/6" />
         </div>
         <div class="card-stacked">
           <div class="card-content">
             <p>I am a very simple card. I am good at containing small bits of information.</p>
           </div>
           <div class="card-action">
           </div>
         </div>
       </div>
       </Col> 



  );
}

export default Post;