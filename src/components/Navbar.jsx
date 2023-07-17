import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
        <span className="logo">WeChat</span>
        <div className="user">
            <img src="https://images.pexels.com/photos/7406983/pexels-photo-7406983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
            <span>John</span>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default Navbar
