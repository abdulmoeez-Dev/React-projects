import React, { useState } from "react";
import axios from "axios";
import styles from "./GithubProfile.module.css";

const GithubProfile = () => {
  const [githubUserName, setGithubUserName] = useState("");
  const [userObj, setUserObj] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchUser = async () => {
    try {
      if (!githubUserName) {
        return alert("Please enter a username");
      }
      setLoading(true);
      setError("");
      setUserObj({});
      const response = await axios.get(
        `https://api.github.com/users/${githubUserName}`
      );
      setUserObj({ ...response.data });
    } catch (err) {
      setError("User not found 😢");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>GitHub Profile Finder</h1>

      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Enter GitHub Username"
          value={githubUserName}
          onChange={(e) => setGithubUserName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") searchUser();
          }}
          className={styles.input}
        />
        <button onClick={searchUser} className={styles.button}>
          Search
        </button>
      </div>

      {loading && <p className={styles.loading}>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}

      {userObj.login && (
        <div className={styles.card}>
          <img
            src={userObj.avatar_url}
            alt="avatar"
            className={styles.avatar}
          />
          <h2 className={styles.userName }>{userObj.name || userObj.login}</h2>
          <p className={styles.bio}>{userObj.bio || "No bio available"}</p>
          <div className={styles.stats}>
            <span>👥 Followers: {userObj.followers}</span>
            <span>➡️ Following: {userObj.following}</span>
            <span>📦 Public Repos: {userObj.public_repos}</span>
          </div>
          <a
            href={userObj.html_url}
            target="_blank"
            rel="noreferrer"
            className={styles.profileBtn}
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default GithubProfile;






