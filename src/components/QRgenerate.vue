<template>
    <div id="app">
        <div class="qr-body">
        <qriously :value="qrText" :size="qrSize" />
        </div>
    </div>    
</template>
<script>
export default {
    data:() =>({
        qrText:'',
        qrSize:600
    })
}
</script>
<style scoped>
.qr-body{
    float:right;
}
</style>