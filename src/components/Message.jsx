import React from 'react'

const Message = () => {
  return (
    <div className="message owner">
        <div className="messageInfo">
            <img src="https://images.pexels.com/photos/7406983/pexels-photo-7406983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
            <span>Just now</span>
        </div>
        <div className="messageContent">
            <p>Hello</p>
            <img src="https://images.pexels.com/photos/7406983/pexels-photo-7406983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
        </div>
    </div>
  )
}

export default Message
