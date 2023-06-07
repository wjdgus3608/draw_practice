<template>
    <div class="sideBar">
        <ul class="list-group  list-group-numbered list-group-flush">
                
                    <div class="list-group-item list-group-flush">서예의 기본
                        <button type="button" class="list-group-item list-group-item-action" @click="clickMenu(1)">
                        가. 문방사우
                        </button>
                        <button type="button" class="list-group-item list-group-item-action" @click="clickMenu(2)">
                        나. 집필법, 자세
                        </button>
                        <button type="button" class="list-group-item list-group-item-action" @click="clickMenu(3)">
                        다. 역입, 중봉, 삼절
                        </button>
                    </div>
                    <div class="list-group-item list-group-flush">판본체
                        <div type="button" class="list-group-item">
                        가. 연습하기
                        <button type="button" class="list-group-item list-group-item-action" @click="clickMenu(4)">
                        1) 자음, 쌍자음
                        </button>
                        <button type="button" class="list-group-item list-group-item-action" @click="clickMenu(5)">
                        2) 모음, 복합모음
                        </button>
                        <button type="button" class="list-group-item list-group-item-action" @click="clickMenu(6)">
                        3) 기본글자
                        </button>
                        <button type="button" class="list-group-item list-group-item-action" @click="clickMenu(7)">
                        4) 받침, 겹받침 글자
                        </button>
                        </div>
                        <button type="button" class="list-group-item list-group-item-action" @click="clickMenu(8)">
                        나. 나만의 글자
                        </button>
                    </div>
                    <div class="list-group-item list-group-flush">궁서체
                        <div type="button" class="list-group-item">
                        가. 연습하기
                        <button type="button" class="list-group-item list-group-item-action" @click="clickMenu(9)">
                        1) 자음, 쌍자음
                        </button>
                        <button type="button" class="list-group-item list-group-item-action" @click="clickMenu(10)">
                        2) 모음
                        </button>
                        <button type="button" class="list-group-item list-group-item-action" @click="clickMenu(11)">
                        3) 기본글자
                        </button>
                        </div>
                        <button type="button" class="list-group-item list-group-item-action" @click="clickMenu(12)">
                        나. 나만의 글자
                        </button>
                    </div>
            
        </ul>
    </div>
</template>
  
<script>
export default {
    name: 'sideBar',
    methods:{
        clickMenu(num){
            this.$parent.$data.menuNum = num;
        }
    }
}
</script>
  
<style scoped>
.sideBar {
    width: 100%;

}
</style>
  