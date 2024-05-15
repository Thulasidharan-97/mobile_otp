window.onload=function(){
   render()
}
const firebaseConfig = {
  apiKey: "AIzaSyC-56X1HaE7zpN_np8pv-NlCn4JGQd5m-I",
  authDomain: "email-authentication-ed801.firebaseapp.com",
  projectId: "email-authentication-ed801",
  storageBucket: "email-authentication-ed801.appspot.com",
  messagingSenderId: "191564343206",
  appId: "1:191564343206:web:d8e0e8671a13b500c61167"
};

firebase.initializeApp(firebaseConfig);
const auth= firebase.auth();
const database =firebase.database();

function render(){
    window.recaptchaVerifier=new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render();
}

function login(){
  var mobile=document.getElementById("mobilenum").value
  console.log(mobile)
  var number="+91"+mobile;
  console.log(number)
  if(mobile.length<10){
    window.alert("Enter correct mobile number")
  }
  else{
    firebase.auth().signInWithPhoneNumber(number,window.recaptchaVerifier).then(function(confirmResult){
      Window.confirmResult=confirmResult;
      coderesult=confirmResult;
      console.log(coderesult);

      var a=document.getElementById("mobileenter")
      a.remove();

      document.getElementById("otpenter").style.visibility="visible";
    }).catch(function(error){
      document.getElementById("error").innerHTML=error.message;
    })
  }
}

function verify(){
  var otp=document.getElementById("otpvalue").value;
  coderesult.confirm(otp).then(function(result){
    var user=result.user;
    window.location.replace("user.html");
  }).catch(function(error){
    document.getElementById("errorotp").innerHTML=error.message;
  })
}