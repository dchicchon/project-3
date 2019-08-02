import React, {Component} from "react";
// import Grid from "../components/Grid";
import RecipeReviewCard from "../components/Card";
import SimpleContainer from "../components/Container";


function Feed()  {
return (
    <div>
        <SimpleContainer>
            <RecipeReviewCard/>
            <RecipeReviewCard/>
        </SimpleContainer>
    </div>
)
}

export default Feed; 