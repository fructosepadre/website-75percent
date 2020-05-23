export default {
    computed:{
        displayExitButton: function(){
            return this.$route.name!=='login' && this.$route.name!=='register'
        },
        displayHomeButton: function(){
            return this.$route.name!=='home' && this.$route.name!=='login' && this.$route.name!=='register'
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