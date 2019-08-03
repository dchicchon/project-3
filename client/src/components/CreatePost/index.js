import React, { Component } from 'react';
import Cookies from 'js-cookie'

// Components
import Button from '../Button'

// Utils
import API from '../../Utils/API'

class CreatePost extends Component {
    state = {
        info: "",
        image: '',
        tag: '',
        user_id: Cookies.get('id')
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    addPost = async event => {
        event.preventDefault();
        API.

        // await fetch("/api/post", {
        //     method: "POST",
        //     credentials: "include",
        //     mode: "cors",
        //     body: JSON.stringify({
        //         info: this.state.info,
        //         tag: this.state.tag
        //     }),
        //     headers: new Headers({
        //         "Content-Type": "application/json"
        //     })
        // })
        //     .then(response => {
        //         console.log(response)
        //         // window.location.href = "/"
        //     })
        //     .catch(err => console.log(err))

        // this.setState({
        //     info: '',
        //     image: '',
        //     tag: ''
        // });

    }



    render() {

        // CHANGE THIS LATER TO USE OUR ROW COMPONENT
        return (
            <div>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <h2 value={this.state.user_id}></h2>
                            <div className="input-field col s6">
                                <input placeholder="Placeholder" id="description" name="info" type="text" className="validate" value={this.state.info} onChange={this.handleInputChange} />
                                <label htmlFor="description">Description</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="tag" name="tag" type="text" className="validate" value={this.state.tag} onChange={this.handleInputChange} />
                                <label htmlFor="tag">Tag</label>
                            </div>
                        </div>
                        {/* <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="Placeholder" id="image" type="text" className="validate" />
                            <label htmlFor="image">Image</label>
                        </div>
                    </div> */}
                    </form>
                </div>
                <Button onClick={this.handleFormSubmit}>Create Post</Button>
            </div>
        )
    }
}

export default CreatePost;