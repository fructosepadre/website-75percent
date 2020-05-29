import swal from 'sweetalert'
export default {
  data: () => ({
    userName:'25032',
    passWord:'123456',
    userNameStatus:false,
    passWordStatus:false    
  }),
  methods:{
    validateTeacherID: function(){
      if(this.userName.length==0)
        return swal("","Fill in Teacher ID or SRM Email ID","warning");
      else
        this.userNameStatus=true 
    },
    validatePassWord: function(){
      if(this.passWord.length==0)
        return swal("","Fill in password","warning");
      else
        this.passWordStatus=true 
    },
    validateLogIn: function(){
      this.validatePassWord(),
      this.validateTeacherID()
    },
    login: function() {
      const loginData={
        identifier:this.userName,
        password:this.passWord
      }
      if(this.userNameStatus==true && this.passWordStatus==true)
        this.$store.dispatch('LogIn',{loginData,success:this.onResponseSuccess,fail:this.onResponseFail})
    },
    onResponseFail(){
      return swal("","Something went Wrong. Try again.... :(","warning")
    },
    onResponseSuccess(response){
      if(response=="Logged In"){
        return this.onLoginSuccess(response)
      }
      else if(response=="Wrong Credentials"){
        return swal("","Wrong credentials!","warning")
      }
      else if(response=="Create Account"){
        return swal("",
        "Not a registered user. Create an account?",
        "warning",
        {
          buttons: {
            confirm: {
              text: "Create",
              value: "Create",
            },                            
            cancel: true
          },
        })
        .then((value) => {
          switch (value) {
          case "Create":
            this.$router.push('/register');
          }
        });
      }
    },
    onLoginSuccess(response){
      localStorage.setItem('facultyID',this.userName)
      this.$store.dispatch('FetchUID')
      localStorage.setItem('accessToken', response);
      swal("","Logged in","success").then(()=>{this.$router.replace('/home')})
    }
  }
}