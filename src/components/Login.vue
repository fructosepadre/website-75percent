<template>
    <div id="app">
        <div class="lol">
            <form>
            <md-field md-clearable>
                <label>Teacher ID</label>
                <md-input v-model="required" type=""></md-input>
            </md-field>
            <br>
            <md-field>
                <label>Password</label>
                <md-input v-model="password" type="password"></md-input>
            </md-field>
            </form>
    </div>
    </div>    
</template>
<script>
export default {
    data: () => ({
      required:null,
      password:null,
    })
}
</script>
<style scoped>
#app{
    display: flex;
    justify-content: center;
}
.lol{
padding-left: 50vh;
padding-right: 50vh;
}
</style>