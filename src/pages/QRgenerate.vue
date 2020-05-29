<template>
    <div id="app">
        <div class="qr-body">
            <md-button :md-ripple="false" id="circleButton" @click="minus" :disabled=isMinus>
                <b-icon icon="dash-circle-fill"></b-icon>
            </md-button>
            <md-button :md-ripple="false" id="circleButton" @click="plus" :disabled=isPlus>
                <b-icon icon="plus-circle-fill"></b-icon>
            </md-button>
            <qriously :value=qrText :size=qrSize />
            
            <md-button class="md-raised md-accent" @click="generateQR" :hidden=isGenerateQR>
                <b-icon icon="person-bounding-box"></b-icon>
                Generate  QR
            </md-button> 
        </div>
        <div class="student-list">
            <div v-for="(item,index) in this.students" :key="index">
                <div class="student-registered">
                    <input type="checkbox">
                    {{item}}
                </div>
            </div>
        </div>
    </div> 
</template>
<script src="./js/qrgenerate.js"></script>
<style scoped>
#app{
    display: flex;
    flex-direction: row;
    padding-left: 10vh;
}
.qr-body{
    padding-top: 2vh;
    flex-basis: 50%;
    position: sticky; 
    top: 0vh;
    height: 100vh;
}
.student-list{
    padding-top: 10vh;
    flex-basis: 50%;
    overflow: auto;
}
#circleButton{
    font-size: 2em;
    border-radius: 20px;
}
.student-registered{
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 8vh;
}
</style>