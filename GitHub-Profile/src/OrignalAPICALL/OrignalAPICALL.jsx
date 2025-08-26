import { useEffect, useState } from "react"
import Count from "./Components/count"
import AutoCounter from "./Components/AutoCounter"
import NavbarToggle from "./Components/navbar"
import axios from "axios"


function App() {


  const [gitHubUserName, setGitHubUserName] = useState("")
  const [userObj, setUserObj] = useState("")

  const searchUser = async () => {
    console.log(gitHubUserName);
    try {
      if (!gitHubUserName) {
        return alert("Invalid UserName")
      }
      const response = await axios.get(
        `https://api.github.com/users/${gitHubUserName}`
      )

      console.log("response", response.data);
      setUserObj({ ...response.data });


    } catch (error) {
      console.log("Error", error.message);

    }

  }
  

  return (
    <>
      {/* <Count /> */}
      {/* <AutoCounter /> */}
      {/* <NavbarToggle /> */}

      <h1>Github Profile</h1>

      <input type="text" placeholder="Enter Github UserName"
        onChange={(e) => setGitHubUserName(e.target.value)}
        onKeyDown={(e) => {
          if(e.key == "Enter") {
            searchUser()
          }
        }} />

      <button onClick={searchUser} >GetUser</button>
      
      <img src={userObj.avatar_url} alt="#" />
      <p>UserName : {userObj.name}</p>
      <p>UserBio : {userObj.bio}</p>
      <p>followers : {userObj.followers}</p>
      <p>following : {userObj.following}</p>


    </>
  )

}

export default App