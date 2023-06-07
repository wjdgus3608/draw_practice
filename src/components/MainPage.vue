<template>
  <div class="mainPage">
    <div class="titleContainer">
       <div class="titleView">
          <h3>옛 것을 통해 미래를 배우는, 온고지신-서(서)•에(Edu)학습</h3>
       </div>
    </div>
    <div class="mainContainer">
      <div class="sideContainer">
        <SideBar/>
      </div>
      <div class="contentsContainer">

      </div>
    </div>

  </div>
</template>

<script>
import SideBar from './SideBar.vue';
export default {
  name: 'MainPage',
  components:{
    SideBar
  }
}
</script>

<style scoped>
.mainPage {
  padding-top: 4%;
  padding-bottom: 4%;
  padding-left: 2%;
  padding-right: 2%;
  width: 100%;
  height: 100%;
  border-collapse: collapse;
}

.mainContainer {
  display: flex;
  width: 100%;
  height: 100%;
  
}

.titleContainer {
  position: relative;

}

.titleView{
  position: absolute;
  width: 100%;
  height: 100px;
  border: solid 1px gray;
  background-color: white;
  text-align: center;
}
h3{
  line-height: 100px;
}

.sideContainer {
  flex-grow: 1;
  display: flex;
  padding-top: 100px;
}

.contentsContainer {
  flex-grow: 7;
  border: solid 1px gray;
}</style>
