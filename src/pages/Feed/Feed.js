import React, { useEffect, useState } from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from "./Post/Post";

function Feed() {


    const [posts, setPosts] = useState([]);

    useEffect(() => {
        //fetch('https://pacific-peak-30751.herokuapp.com/post')
        fetch('https://twitter-clone-backend-ruby.vercel.app/post')
            .then(res => res.json())
            .then(data => {
                setPosts(data);
            })
    }, [posts])

  return (
    <div className="feed">
        <TweetBox />
        {
            posts.map(p => <Post key={p._id} p={p} />)
        }
    </div>
  )
}

export default Feed