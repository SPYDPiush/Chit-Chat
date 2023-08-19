import React, { useState } from "react";
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import img from "../images/gallery.png";
import { auth,storage,db } from "../Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";


const Register =()=>{
    const [error,setError]=useState(false);
    const [errmess,setErrmess] = useState("");
    const navigate = useNavigate()

    const handlesubmit = async (e)=>  {
        e.preventDefault()
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];


        try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        console.log(res.user);


                /** @type {any} */
                const metadata = {
                contentType: 'image/jpeg'
                };

                // Upload file and metadata to the object 'images/mountains.jpg'
                const storageRef = ref(storage, 'images/' + file.name);
                const uploadTask = uploadBytesResumable(storageRef, file, metadata);

                // Listen for state changes, errors, and completion of the upload.
                uploadTask.on('state_changed',
                (snapshot) => {
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    }
                }, 
                (error) => {
                    switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;
                    case 'storage/canceled':
                        // User canceled the upload
                        break;

                    // ...

                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                    }
                }, 
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
                        await updateProfile(res.user,{
                            displayName,
                            photoURL:downloadURL,
                        });
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid:res.user.uid,
                            displayName,
                            email,
                            photoURL:downloadURL, 
                        });

                        await setDoc(doc(db,"usersChats",res.user.uid),{});
                    });
                }
                );

                navigate("/");

        }
        catch(err){
            setError(true);
            setErrmess(err.message);
            console.log(err);
            
        }

        
    }




    return(
        <div className="bg-blue-500 h-[100vh] flex items-center justify-center">
            <div className="flex flex-col gap-3 items-center bg-white py-[2.7rem] px-[3.5rem] rounded-lg w-[25rem]">
                <span className="text-2xl font-bold text-[#5a56e6]">Chit Chat</span>
                <span className="text-xl text-[#4d79d1]">Register</span>
                <form className="flex flex-col gap-5" onSubmit={handlesubmit}>
                    <input type="text" placeholder="Enter Name" required className="p-2 border-b-[0.01rem] border-[#4e53a9] outline-none text-base w-full "/>
                    <input type="email" placeholder="Enter Email" required className="p-2 border-b-[0.01rem] border-[#4e53a9] outline-none text-base w-full "/>
                    <input type="password" placeholder="Enter password"   required className="p-2 border-b-[0.01rem] border-[#4e53a9] outline-none text-base w-full "/>
                    <input type="file" id="Avatar" className="hidden"/>
                    <label htmlFor="Avatar" className="flex  item-center cursor-pointer gap-2">
                        <img src={img} alt="avatar" className="w-9 h-9"/> 
                        <span className="text-[#8da4f1] text-base">Add an Avatar</span>
                    </label>
                    <button type="submit" className="bg-[#4e53a9] rounded-md py-2 text-white border-2 hover:bg-transparent hover:text-black ">Sign Up</button>
                    {error && <span className="text-red-500">{errmess}</span>}
                </form>
                <p>
                    You hava account? <Link to ="/login"><span className="text-[#4e53a9] underline hover:text-red-500">Login</span></Link>
                </p>
            </div>
        </div>
    )

}

export default Register;