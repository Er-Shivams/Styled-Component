import React, { Component } from 'react'
import axios from "axios";
export class PostForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            userid: '',
            title: '',
            body: ''
        }
    }

  changeHandler=(e)  =>{
    this.setState({
        [e.target.name]: e.target.value
    })
}
submitHandler = (e) => {
    e.preventDefault()
    console.log(this.state)
    let url = "https://api.shrtco.de/v2/shorten?url="+ this.state.userId
    axios.post(url)
    .then(response => {
        console.log(response)
        // <h1> `${response.data.result.short_link}`</h1>
        document.write("YOUR-SHORT-LINK: "+response.data.result.short_link)
        console.log("came to response")
    })
    .catch(error => {
        console.log(error)
    })
}

    render() {
    const {userId, title, body} = this.state
    return (
        <div>
            <form onSubmit={this.submitHandler}>
            <div >
                <input 
                style={{borderRadius: "0.5rem",
                padding: "0.7rem 1rem 0.7rem 1rem",
                 
                width:"35%", 
                 }}
                placeholder="shorten a link here"
                placeholderTextColor="#000000"
                type='text' 
                name ='userId' 
                onChange={this.changeHandler}
                value={userId}></input>
             <button style={{marginLeft:"5rem",borderRadius: "0.5rem",padding: "0.7rem 1rem 0.7rem 1rem", color: "#ffffff", backgroundColor: "#2fd4cb", hover: true, fontFamily: "poppins", fontWeight: "bold"}} type='submit'>Shorten It!</button>

            </div>
            {/* <div>
                <input 
                type='text' 
                name ='title' 
                    onChange={this.changeHandler}
                value={title}></input>
            </div>
            <div>
                <input 
                type='text' 
                name ='body' 
                onChange={this.changeHandler}
                value={body}></input>
            </div> */}
            </form>
        </div>
    )
}
}

export default PostForm;
