import React from "react"
import "./page-layout.css"
import NavBar from "../nav-bar/narv-bar";

const  PageLayout = ({ children }) => {
  return (
    <div style={{ margin: `0`, padding: `0 1rem` }}>
      <NavBar></NavBar>
      {children}
    </div>
  )
}


export default PageLayout;