/*
        -------------
        INITIAL SETUP
        -------------
1. visit: console.firebase.google.com
2. create project (skip google analytics)
3. register app (create config)
4. install firebase
5. add config file to your project
6. DANGER: Do not publish or make firebase config to public by pushing those to github
        -----------
        INTEGRATION
        -----------
7. Go to docs > Build > Authentication > Web > Get Started
8. export app from the firebase.config.js file: export default app
9, Login.jsx: import getAuth from firebase/auth
10. create const auth = getAuth(app)
        ---------------------
        GOOGLE PROVIDER SETUP
        ---------------------
11. import GoogleAuthProvider and create a new provider
12. use signInWithPopUp and pass auth and provider
13. activate sign-in method (google, facebook, twitter, github etc)
14. [vite]: change 127.0.0.1 to localhost

------------------
MORE AUTH PROVIDER
------------------
1. activate the auth provider (create app, provide redirect url, client secret)
2. 
*/