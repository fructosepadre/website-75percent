export default {
    computed:{
        displayExitButton: function(){
            return this.$route.name!=='login'
        },
        displayHomeButton: function(){
            return this.$route.name!=='home' && this.$route.name!=='login'
        }
    },
    methods:{
        homecoming: function(){
            this.$router.push('/home')
        },
        logout: function(){
            localStorage.removeItem("accessToken");
            this.$router.push("/login")
        }
    }
}