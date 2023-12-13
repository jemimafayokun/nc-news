import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useEffect, useState } from "react";
import { getTopics } from "../api"
import { Link } from "react-router-dom";

const Header = () => {
  const { user } = useContext(UserContext);
  const [topics, setTopics] = useState([])

useEffect(() => {
getTopics().then((data) => {
    setTopics(data)
})
}, [])

  return (
    
    
    <main className="main">
      <div>
      <Link className="link" to="/">
        <h1 className="title" >NewsBox</h1>
        </Link>
        <div class="dropdown">
          <span class="topic-span">Topics▼</span>
          <ul class="topic-options">
            {topics.map((topic) => (
             <Link className="link" key={topic.slug} to={`articles/topics/${topic.slug}`} ><li >{topic.slug}</li></Link> 
            ))}
          </ul>
        </div>
      </div>
      <p class="login-statement">Logged in as: {user}</p>
    </main> 
    
  );
};

export default Header;
