import * as Google from 'expo-google-app-auth';
const config = {
    androidClientId: '150487220567-57oh8n34o0gftkp70hffkmas5d8bo2rf.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
    permissions: ['public_profile', 'email', 'gender', 'location'],
};

export const signInWithGoogle = async () => {
    try {
        console.log(`about to call logInAsync()`);
        const { type, accessToken, user } = await Google.logInAsync(config);
        console.log(`Got logInResult: (${type})`);
        if (type === 'success') {
            //login...
            console.log("🚀 ~ file: useAuth.js ~ line 12 ~ signInWithGoogle ~ user", user)
            
        }

        // same result as 'return Promise.reject()'
        // throw new Error(`Login to Google failed: (${type})`);
    } catch (ex) {
        console.error(ex);
    }
    return null; // success!
};