import React from 'react'

const Search = () => {
  return (
    <div className="search">
       <div className="searchForm">
           <input type="text" placeholder="Find a user"/>
       </div>
       <div className="userChat">
           <img src="https://images.pexels.com/photos/7406983/pexels-photo-7406983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
           <div className="userChatInfo">
               <span>Jane</span>
               <p>Hello</p>
           </div>
       </div>
    </div>
  )
}

export default Search
