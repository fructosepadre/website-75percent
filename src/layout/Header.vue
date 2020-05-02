<template>
    <main>
        <div id="head">
            <md-toolbar class="md-primary" >
                <h1>e-Attendance</h1>
                <div class="md-toolbar-section-end">
                    <md-button class="md-raised" :hidden=ishomeButtonDisplayed>
                        <b-icon-house-fill></b-icon-house-fill> Home
                    </md-button>
                    <md-button class="md-raised md-accent" @click="logout" :hidden=isExitButtonDisplayed>
                        LogOut
                    </md-button>
                </div>
            </md-toolbar>
        </div>
    </main>
</template>
<script>
export default {
    data: ()=>({
        ishomeButtonDisplayed:true,
        isExitButtonDisplayed:true,
    }),
    methods:{
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
    position:sticky;
}

</style>