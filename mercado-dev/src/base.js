const config = {
    apiKey: "AIzaSyBL2T6GqK_Wzrw2RA4ywYXhp0rdMUlN0SU",
    authDomain: "mercado-dev-adb83.firebaseapp.com",
    databaseURL: "https://mercado-dev-adb83.firebaseio.com",
    projectId: "mercado-dev-adb83",
    storageBucket: "gs://mercado-dev-adb83.appspot.com",
    messagingSenderId: "188067147434"
  }

  const Rebase = require('re-base')
  const firebase = require('firebase/app')
  require('firebase/database')
  require('firebase/storage')

  const app = firebase.initializeApp(config)
  const base = Rebase.createClass(app.database())

  export const storage = app.storage()

  export default base