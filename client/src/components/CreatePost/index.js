import React, { Component } from 'react';

// Components

class CreatePost extends Component {
    state = {
        info: "",
        image: '',
        tag: ''
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = async event => {
        event.preventDefault();
        console.log("WE MADE IT TO THE FORM SUBMIT");
        await fetch("/api/post", {
            method: "POST",
            credentials: "include",
            mode: "cors",
            body: JSON.stringify({
                info: this.state.password,
                // image: this.state.email,
                tag: this.state.tag
            }),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        })
            .then(response => {
                console.log(response)
                // window.location.href = "/"
            })
            .catch(err => console.log(err))

        this.setstate({
            info: '',
            image: '',
            tag: ''
        });

    }



    render() {

        // CHANGE THIS LATER TO USE OUR ROW COMPONENT
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="Placeholder" id="description" type="text" className="validate" value={this.state.info} onChange={this.handleInputChange} />
                            <label htmlFor="description">Description</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="tag" type="text" className="validate" value={this.state.tag} onChange={this.handleInputChange} />
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
        )
    }
}

export default CreatePost;