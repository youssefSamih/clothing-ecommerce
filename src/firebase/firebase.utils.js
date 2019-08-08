import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDVSL5CoNoO1w-ZA24mU4cI71dSNVScsSQ",
    authDomain: "cloth-ecommerce.firebaseapp.com",
    databaseURL: "https://cloth-ecommerce.firebaseio.com",
    projectId: "cloth-ecommerce",
    storageBucket: "",
    messagingSenderId: "924987456284",
    appId: "1:924987456284:web:14fd938ba6a46cf2"
}

firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    if(!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef
} 

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase