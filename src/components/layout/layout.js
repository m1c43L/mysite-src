import React from "react"
import "./layout.css"

const Layout = ({ children, style }) => {
  return (
    <div
      style={Object.assign(
        { margin: `15px auto`, maxWidth: 650, padding: `0 1rem` },
        style
      )}
    >
      {children}
    </div>
  )
}

export default Layout
