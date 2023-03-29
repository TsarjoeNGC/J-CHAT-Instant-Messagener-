### Vue Instant Chat App 

### PROJECT NAME: J-Chat instant messanger 

This is a Vue instant chat application that utilizes Firebase for real-time messaging and Google Sign-In for authentication. With this application, users can log in with their Google account and start chatting with other users in real-time.

### Prerequisites

Node.js (v14 or higher)
NPM (v6 or higher)

 ### Features
Firebase Realtime Database integration for real-time messaging
Google Sign-In integration for user authentication
Responsive design for desktop and mobile devices
Simple and intuitive user interface

### Installation

Clone the repository: git clone https://github.com/TsarjoeNGC

Navigate to the project directory: 

Install dependencies: 

npm install

### Configuration

1.Create a Firebase project and enable Google Sign-In in the Authentication section.

2. In the Firebase project settings, go to the "General" tab and scroll down to "Your apps".

3. Click the "Add app" button and select "Web".

3. Enter a nickname for your app and click "Register app".

4. Copy the Firebase configuration object and replace the values in src/firebase.js with your own.

VUE_APP_FIREBASE_API_KEY=<your-firebase-api-key>
VUE_APP_FIREBASE_AUTH_DOMAIN=<your-firebase-auth-domain>
VUE_APP_FIREBASE_PROJECT_ID=<your-firebase-project-id>
VUE_APP_FIREBASE_STORAGE_BUCKET=<your-firebase-storage-bucket>
VUE_APP_FIREBASE_MESSAGING_SENDER_ID=<your-firebase-messaging-sender-id>
VUE_APP_FIREBASE_APP_ID=<your-firebase-app-id>
VUE_APP_GOOGLE_CLIENT_ID=<your-google-client-id>


### Running the App

Start the development server: 

npm run serve

Open the app in your web browser at http://localhost:8080

Click the "Sign In" button to authenticate.

Start chatting!

### Built With

Vue.js - JavaScript framework for building user interfaces

Firebase - Real-time database and authentication platform

Google Sign-In - Authentication method for users

### License

This project is licensed under the MIT License - see the LICENSE file for details.

For any more details contact me at Joseph Akah