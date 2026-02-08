
import React from 'react'
import './Footer.css'
const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "100vh",
    width : "100%"
  }
  return (
    <footer className='bg-dark text-light text-center ' style={footerStyle}>
      Copyright &copy; MyTodosList.com
    </footer>
  )
}

export default Footer
