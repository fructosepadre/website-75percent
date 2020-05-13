<template>
    <main>
        <div id="head">
            <md-toolbar class="md-primary" >
                <h1>e-Attendance</h1>
                <div class="md-toolbar-section-end">
                    <md-button class="md-raised" v-if="displayHomeButton" @click="homecoming">
                        <b-icon-house-fill></b-icon-house-fill>Home
                    </md-button>
                    <md-button class="md-raised md-accent" @click="logout" v-if="displayExitButton">
                        LogOut
                    </md-button>
                </div>
            </md-toolbar>
        </div>
    </main>
</template>
<script>
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
</script>
<style scoped>
#head{
    height: 8vh;
    background-color:rgb(29, 98, 228);
    font-family: 'Eurostile', sans-serif;
    color: white;
    width: 100%;
}

</style>