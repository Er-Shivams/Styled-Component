import React, {Component} from 'react';
import axios from "axios";

class PostList extends Component {

    constructor(props){
        super(props)

        this.state = {
            posts:[]
        }
    }

    componentDidMount(){
    axios.get('https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html')
    .then(response => {
        this.setState({posts: response.data})
        console.log(response)
    })

    .catch(error => {
        console.log(error)
    })
}


render() {
    const {postList} = this.state
    return (
        <div>
            {/* {
                posts.length ?
                posts.map(post => <div key={post.id}>{post.title}</div>)
                :
                null
            } */}
            List Post Data
        </div>
    )
}


}   

export default PostList;



