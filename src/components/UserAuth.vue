<template>
  <div class="container">
    <input id="txtEmail" type="email" placeholder="Email" />

    <input id="txtPassword" type="password" placeholder="Password" />

    <button id="btnLogin" class="btn btn-action">
      Log in
    </button>

    <button id="btnSignUp" class="btn btn-secondary">
      Sign Up
    </button>

    <button id="btnLogout" class="btn btn-action hide">
      Log out
    </button>
  </div>
</template>

<script
  src="https://www.gstatic.com/firebasejs/3.9.0/firebase.js">
</script>
<script>
  export default {
    // // Get elements
    // const txtEmail = document.getElementById('txtEmail');
    // const txtPassword = document.getElementById('txtPassword')
    // const btnLogin = document.getElementById('btnLogin')
    // const btnSignUp = document.getElementById('btnSignUp')
    // const btnLogout = document.getElementById('btnLogout')
    //
    // // Add login event
    // btnLogin.addEventListener('click', e => {
    //   //Get email and password
    //   const email = txtEmail.value;
    //   const pass = txtPassword.value;
    //   const auth = firebase.auth();
    //   //Sign in
    //   const promise = auth.signInWithEmailAndPassword(email, pass);
    //   promise.catch(e => console.log(e.message));
    // })
  }
</script>

<style>

</style>
