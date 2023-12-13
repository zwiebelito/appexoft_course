import React, { Component } from "react";
import LikeButton from "./components/LikeButton/LikeButton";
import styles from './App.module.css'
import ExpandableText from "./components/ExpandableText/ExpandableText";

class App extends Component{
    render() {
        return (
            <div className={styles.main}>
                <h1>Lesson 1 homework</h1>
                <h2>Task 1</h2>
                <LikeButton />
                <h2>Task 2</h2>
                <ExpandableText />
            </div>
        )
    }
}

export default App;