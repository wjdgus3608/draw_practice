<template>
  <div class="mainPage">
    <div class="titleContainer" v-if="menuNum === 0">
      <div class="titleView">
        <h3 style="font-family: BMEULJIRO;">옛 것을 통해 미래를 배우는, 온고지신-서(서)•에(Edu)학습</h3>
      </div>
    </div>
    <div class="mainContainer">
      <div class="sideContainer">
        <SideBar />
      </div>
      <div class="contentsContainer">
        <FirstSubPage v-if="menuNum === 0" />
        <sub1_1 v-if="menuNum === 1" />
        <sub1_2 v-if="menuNum === 2" />
        <sub1_3 v-if="menuNum === 3" />
        <sub2_1 v-if="menuNum === 4" />
        <sub2_2 v-if="menuNum === 5" />
        <sub2_3 v-if="menuNum === 6" />
        <sub2_4 v-if="menuNum === 7" />
        <sub2_5 v-if="menuNum === 8" />
        <sub3_1 v-if="menuNum === 9" />
        <sub3_2 v-if="menuNum === 10" />
        <sub3_3 v-if="menuNum === 11" />
        <sub3_4 v-if="menuNum === 12" />
      </div>
    </div>
    
  </div>
</template>

<script>
import SideBar from './SideBar.vue';
import FirstSubPage from './subpages/FirstSubPage.vue';
import sub1_1 from './subpages/1/sub1_1.vue';
import sub1_2 from './subpages/1/sub1_2.vue';
import sub1_3 from './subpages/1/sub1_3.vue';
import sub2_1 from './subpages/2/sub2_1.vue';
import sub2_2 from './subpages/2/sub2_2.vue';
import sub2_3 from './subpages/2/sub2_3.vue';
import sub2_4 from './subpages/2/sub2_4.vue';
import sub2_5 from './subpages/2/sub2_5.vue';
import sub3_1 from './subpages/3/sub3_1.vue';
import sub3_2 from './subpages/3/sub3_2.vue';
import sub3_3 from './subpages/3/sub3_3.vue';
import sub3_4 from './subpages/3/sub3_4.vue';
export default {
  name: 'MainPage',
  components: {
    SideBar,
    FirstSubPage,
    sub1_1,
    sub1_2,
    sub1_3,
    sub2_1,
    sub2_2,
    sub2_3,
    sub2_4,
    sub2_5,
    sub3_1,
    sub3_2,
    sub3_3,
    sub3_4
  },
  data() {
    return {
      menuNum: 0
    }
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
}

.mainContainer {
  display: flex;
  width: 100%;
  height: 100%;
  border: solid 1px gray;
}

.titleContainer {
  position: relative;

}

.titleView {
  position: absolute;
  width: 100%;
  height: 100px;
  border: solid 1px gray;
  background-color: white;
  text-align: center;
}

h3 {
  line-height: 100px;
}

.sideContainer {
  /* flex-grow: 0.5; */
  width: 240px;
  display: flex;
  padding-top: 100px;
}

.contentsContainer {
  flex-grow: 1;
  border-left: solid 1px gray;
}

@font-face {
    font-family: 'BMEULJIRO';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/BMEULJIRO.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
</style>
