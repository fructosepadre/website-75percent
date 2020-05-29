import swal from 'sweetalert'
export default {
  data: () => ({
    userName:'25032',
    eMail:'venky@srmuniv.edu.in',
    passWord1:'123456',
    passWord2:'123456',
    passwordStatus: false,
    emailStatus: false,
    userNameStatus: false,
  }),
  methods:{
    validateTeacherID: function(){
        if(this.userName.length!=0)
          this.userNameStatus=true
        else    
          return swal("","Fill in TeacherID!","warning");
    },
    comparePasswords: function(){
      if(this.passWord1.length==0)
        return swal("","Fill in the password box!","warning");
            
      if(this.passWord1.length<6)
        return swal("","Use 6 or more characters for your password!","warning");
        
      if(this.passWord2.length==0)
        return swal("","Fill in the confirm password box!","warning");        

      if((this.passWord1==this.passWord2) && this.passWord1.length==this.passWord2.length)
        this.passwordStatus=true
        else    
        return swal("","Passwords not the same!","warning");    
    },
    validateEmail: function(){
      if(this.eMail.length==0)
        return swal("","Fill in the email box!","warning");
      else if(this.eMail.endsWith("@srmuniv.edu.in"))
        this.emailStatus=true
      else
        return swal("","Use your SRM account!","warning");
    },
    validateRegister: function(){
      this.comparePasswords(),
      this.validateEmail(),
      this.validateTeacherID()
    },
    register: function() {
      const registerData={
        username:this.userName,
        email:this.eMail,
        password:this.passWord1
      }
      if(this.userNameStatus==true && this.emailStatus==true && this.passwordStatus==true)
        this.$store.dispatch('Register',{registerData,success:this.onResponseSuccess,fail:this.onResponseFail})
    },
    onResponseFail(){
      return swal("","Something went Wrong. Try again.... :(","warning");
    },
    onResponseSuccess(response){
      if(response==="Registered"){
        return swal("",
        "Registered! You will be redirected to LogIn Page",
        "success",
        ).then(()=> {
          this.$router.push('/login')
        });
      }
      else if(response==="Duplicate"){
        return swal("",
          "You are already registered! Redirecting..... to LogIn Page",
          "warning").then(()=> {
          this.$router.push('/login')
        });
      }
      else if(response=="Something Went Wrong"){
        return swal("","Something went Wrong. Try again.... :(","warning");
      }
    }
  }
}
