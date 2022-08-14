import React from "react"

const Header = () => {
  return (
    <header>
      <h1
        style={{
          fontSize: "6rem",
          fontWeight: "600",
          marginBottom: "2rem",
          lineHeight: "1em",
          color: "#ececec",
          textTransform: "lowercase",
          textAlign: "center",
        }}
      >
        todos
      </h1>
    </header>
  )
}

export default Header;