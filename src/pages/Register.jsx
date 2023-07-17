import React from 'react'
import logo from '../images/addAvatar.png'
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth,storage} from '../firebase'
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import {db} from '../firebase'


const Register = () => {
  const [err,setErr] = React.useState(false);
  const handleSubmit = async (e)=>{
    const displayName = e.target[0].value;
    const email = e.target[0].value;
    const password = e.target[0].value;
    const file = e.target[3].files[0];

    try{
      const res = await createUserWithEmailAndPassword(auth,email,password);
      console.log(res.user)
      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          // Handle unsuccessful uploads
          setErr(true);
        }, 
        () => {
          
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user,{
              displayName,
              photoURL:downloadURL,
            })

            await setDoc(doc(db, "users", res.user.uid), {
              uid:res.user.id,
              displayName,
              email,
              photoURL:downloadURL,
            });
          });
        }
      );
    }catch(err){
      setErr(true);
    }
  }

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">WeChat</span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Display Name"></input>
                <input type="email" placeholder="Email"></input>
                <input type="password" placeholder="Password"></input>
                <input type="file" id="file" style={{display:'none'}}></input>
                <label htmlFor="file">
                    <img src={logo}></img>
                    <span>Add an avatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            {err && <span>There is some issue</span>}
            <p>You do have a Login account? Login</p>
        </div>
    </div>
  )
}

export default Register
