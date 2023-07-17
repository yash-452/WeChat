import React from 'react'
import attach from '../images/attach.png'
import img from '../images/img.png'

const Input = () => {
  return (
    <div className="input">
        <input type="text" placeholder="Type something ..."/>
        <div className="send">
            <img src={attach}/>
            <input type="file" id="file" style={{display:'none'}}/>
            <label htmlFor="file">
                <img src={img} />
            </label>
            <button>Send</button>
        </div>
    </div>
  )
}

export default Input
