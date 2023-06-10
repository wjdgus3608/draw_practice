<template>
    <div class="sub2_1">
       <div class="topContainer">
            <CharNav navType="second_first"/>
       </div>
       <div class="bottomContainer">
        bottom
       </div>
    </div>
</template>
  
<script>
import CharNav from '../CharNav.vue';
export default {
    name: 'sub2_1',
    components:{
        CharNav
    }
}
</script>
  
<style scoped>
.sub2_1 {
    width: 100%;
    height: 100%;
    background-color: yellow;
    
}
.topContainer{
    padding: 10px;
    background-color: greenyellow;
}
.bottomContainer{
    background-color: pink;
}
</style>
  