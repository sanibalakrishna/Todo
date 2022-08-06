
import {getAuth,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
import {doc,getDoc ,setDoc,serverTimestamp } from 'firebase/firestore'
import {db} from '../firebase.config'
import {FcGoogle} from 'react-icons/fc'


function OAuth() {
  
    const onGoogleClick = async() =>{
        try {
            const auth=getAuth()
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth,provider);
            const user = result.user;
            // Check for user
            const docRef = doc(db,'users',user.uid)
            const docSnap = await getDoc(docRef)
            // If user ,doesn't exists, create user
            if(!docSnap.exists())
            {
              await setDoc(doc(db,'users',user.uid),{name:user.displayName,email:user.email,timestamp: serverTimestamp()})
            }
            console.log('somet')
        } catch (error) {
            console.log('Count not authorize with Google')
            
        }

    }

  return (
    <div>
        <p>Sign with  </p>
        <button onClick={onGoogleClick}><FcGoogle/></button>
        
    </div>
  )
}

export default OAuth