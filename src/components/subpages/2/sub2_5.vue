<template>
    <div class="sub2_5">
        <div class="topContainer">
            <CharInputNav :word="word" @generateWord="generateWord"/>
        </div>
        <div class="bottomContainer">
            <img class="imgContainer" :src=imagePath>
        </div>
    </div>
</template>
  
<script>
import CharInputNav from '../CharInputNav.vue';
import Hangul from 'hangul-js'
export default {
    name: 'sub2_5',
    components: {
        CharInputNav
    },
    created() {
    },
    data() {
        return {
            nowChar: '',
            nowIdx: 0,
            types: String('second_second').split('_'),
            fetchFiles: [],
            imagePath:'./',
            word:''
        }
    },
    methods: {
        generateWord(word) {
            this.word=word;
            console.log(word);
            console.log(Hangul.disassemble(this.word,true));
        },
        
    }
}
</script>
  
<style scoped>
.sub2_5 {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

}

.topContainer {
    padding: 10px;
    width: 900px;
}

.bottomContainer {
    position: relative;
    flex-grow: 1;
}

.imgContainer{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
  