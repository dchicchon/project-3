import React from "react";
import { Col, Row, Container } from "../Grid"


function Post(props) {
  return (

//     <Col size="s6">
//       <div class="card">
//         <div class="card-action">
// {/* adding avatar */}
// {/* <li class="collection-item avatar"> */}
//           <img src="http://cdn.shopify.com/s/files/1/0257/6087/products/Pikachu_Single_Front_dc998741-c845-43a8-91c9-c1c97bec17a4.png?v=1523938908" width="50" height="50" alt="" position="absolute" verticle-align="center" ></img>
// {/* </li> */}


//           <span><a href="#" align="left" verticle-align="center" >Person's Profile</a></span>
//         </div>


// {/* user photo posted */}
//         <div class="card-image">
//           <img src="https://images.unsplash.com/photo-1564694230688-f6afe64db816?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" width="300" height="350" class="circle activator" />
// {/* end of photo posted */}

//           <span class="card-title activator">Card Title</span>
//         </div>

// {/* card description section */}
//         <div class="card-content">
//           <p>I am a very simple card. I am good at containing small bits of information.
//     I am convenient because I require little markup to use effectively.</p>
//           <div class="card-reveal">
//             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae perferendis debitis nobis asperiores! Ipsam facilis autem in libero architecto aut quisquam eos adipisci ipsum soluta. Error quidem nobis natus impedit!</p>
//           </div>
// {/* end of card description */}
//         </div>
//         <div class="card-action">
//           <a href="#"><i className="material-icons">favorite_border</i></a>
//         </div>
//       </div>
//     </Col>

//     <Col size="s6">
//       <div class="card horizontal">
//         <div class="card-image">
//           <img src="https://lorempixel.com/100/190/nature/6" />
//         </div>
//         <div class="card-stacked">
//           <div class="card-content">
//             <p>I am a very simple card. I am good at containing small bits of information.</p>
//           </div>
//           <div class="card-action">
//           </div>
//         </div>
//       </div>
//       </Col>

<Col size="s6">
<div class="card">

<div class="card-action">
{/* adding avatar */}
{/* <li class="collection-item avatar"> */}
          <img src="http://cdn.shopify.com/s/files/1/0257/6087/products/Pikachu_Single_Front_dc998741-c845-43a8-91c9-c1c97bec17a4.png?v=1523938908" width="50" height="50" alt="" position="absolute" verticle-align="center" ></img>
{/* </li> */}


          <span><a href="#" align="left" verticle-align="center" >Person's Profile</a></span>
        </div>

    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="https://images.unsplash.com/photo-1564694230688-f6afe64db816?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" width="300" height="350"/>
    </div>


    <div class="card-content">

    {/* <p class="activator">I am a very simple card. I am good at containing small bits of information. */}
{/* //     I am convenient because I require little markup to use effectively.</p> */}
      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
      {/* <div class="card-action"> */}
      <span> <a href="#"><i className="material-icons">favorite_border</i></a> </span>
{/* </div> */}
    </div>
    <div class="card-reveal">
      {/* <span class="card-title grey-text text-darken-4">Card Title</span> */}
      <p class="card-title activator"> Here is some more information about this product that is only revealed once clicked on.<i class="material-icons right">close</i></p>
    </div>
  </div>
  </Col>   

  );
}

export default Post;


















// export default function Post() {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   function handleExpandClick() {
//     setExpanded(!expanded);
//   }

//   return (
//       <div>
//     <Card className={classes.card} style={{  justifyContent:'center', textAlign: "center" }}>
//       <CardHeader
//         avatar={
//           <Avatar aria-label="" className={classes.avatar} >
//             useR
//           </Avatar>
//         }

//         title="Tokyo, Japan"
//         subheader="September 14, 2016"

//       />
//       {/* //can also use Typography to put in another title, if needed...but cannot be inside of another component here. */}
//       <CardMedia
//         className={classes.media}
//         image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190208-delish-ramen-horizontal-093-1550096715.jpg?crop=1xw:0.9995002498750624xh;center,top&resize=480:*"
//         title="Ramen in Japan"
//       />
//       <CardContent>
//         <Typography variant="body2" color="textSecondary" component="p">
//           {/* This impressive paella is a perfect party dish and a fun meal to cook together with your
//           guests. Add 1 cup of frozen peas along with the mussels, if you like. */}
//                       Late night ramen with the crew!
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//         <IconButton
//           className={clsx(classes.expand, {
//             [classes.expandOpen]: expanded,
//           })}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </IconButton>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>
//             Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
//             minutes.
//           </Typography>
//           <Typography paragraph>
//             Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
//             heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
//             browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
//             and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
//             pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
//             saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
//           </Typography>
//           <Typography paragraph>
//             Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
//             without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
//             medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
//             again without stirring, until mussels have opened and rice is just tender, 5 to 7
//             minutes more. (Discard any mussels that don’t open.)
//           </Typography>
//           <Typography>
//             Set aside off of the heat to let rest for 10 minutes, and then serve.
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
// <br/><br/>
//     </div>
//   );
// }