<template>
    <div class="sub2_5">
        <div class="topContainer">
            <CharInputNav :word="word" @generateWord="generateWord" />
        </div>
        <div class="bottomContainer">
            <div class="charContiner" id="charContiner">
                <img class="imgContainer1" id="imgContainer1" :src=imagePath1 v-show="imagePath1 !== './'">
                <img class="imgContainer2" id="imgContainer2" :src=imagePath2 v-show="imagePath2 !== './'">
                <img class="imgContainer3" id="imgContainer3" :src=imagePath3 v-show="imagePath3 !== './'">
                <img class="imgContainer4" id="imgContainer4" :src=imagePath4 v-show="imagePath4 !== './'">
            </div>
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
        this.getFilesFromJson();
    },
    data() {
        return {
            nowChar: [],
            parsedChar: [],
            ja: [],
            mo: [],
            twoChar: [],
            unmo: ['ㅗ', 'ㅛ', 'ㅜ', 'ㅠ', 'ㅡ'],
            nowIdx: 0,
            imagePath1: './',
            imagePath2: './',
            imagePath3: './',
            imagePath4: './',
            charType: '',
            word: '',
            types: String('second_first_second_third').split('_'),

        }
    },
    methods: {
        generateWord(word) {
            this.init();
            this.word = word;
            console.log(word);
            const charArr = Hangul.disassemble(this.word, true);
            console.log(charArr);
            this.parsedChar = charArr;
            this.nowChar = this.parsedChar[0];
            console.log(this.nowChar);
            this.generateNowCharImg();
        },
        getFilesFromJson() {
            fetch('/file.json')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.ja = data[this.types[0] + ''][this.types[1] + ''];
                    this.mo = data[this.types[0] + ''][this.types[2] + ''];
                    this.twoChar = data[this.types[0] + ''][this.types[3] + ''];
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        },
        generateNowCharImg() {
            this.loadImg();
            this.adjustImg();
        },
        loadImg() {
            this.loadTwoChar();

            if (this.nowChar.length >= 3) {
                if(this.isJa(this.nowChar[2]))
                    this.imagePath3 = this.types[0] + '/' + this.types[1] + '/' + this.nowChar[2] + '.png';
                else
                    this.imagePath3 = this.types[0] + '/' + this.types[2] + '/' + this.nowChar[2] + '.png';

            }
            if (this.nowChar.length >= 4) {
                this.imagePath4 = this.types[0] + '/' + this.types[1] + '/' + this.nowChar[3] + '.png';
            }
        },
        loadTwoChar() {
            var c = '';
            //'가'같은 케이스
            if (this.nowChar.length === 2) {
                c = this.word[this.nowIdx];
            }
            //'강'같은 케이스
            else {
                c = Hangul.assemble([this.nowChar[0], this.nowChar[1]]);
            }
 
            //'가'같은 케이스
            if (this.isTwoChar(c)) {
                this.imagePath1 = this.types[0] + '/' + this.types[3] + '/' + c + '.png';
            }
            //'게'같은 케이스
            else {
                this.imagePath1 = this.types[0] + '/' + this.types[1] + '/' + this.nowChar[0] + '.png';
                this.imagePath2 = this.types[0] + '/' + this.types[2] + '/' + this.nowChar[1] + '.png';
            }

        },
        adjustImg() {
            this.spandInitCharacter('imgContainer1');
            this.spandInitCharacter('imgContainer2');
            this.spandInitCharacter('imgContainer3');
            this.spandInitCharacter('imgContainer4');
            
            if(this.imagePath2!=='./'){
                //'꼬'
                if(this.isUnmo(this.nowChar[1]))
                    this.spandGaroCharater('imgContainer2');
                //'게'
                else
                    this.spandSaroCharater('imgContainer2');
            }

            if (this.nowChar.length === 3) {
                //'과'같은 케이스
                if (this.isMo(this.nowChar[2])) {
                    this.spandSaroCharater('imgContainer3');
                }
                //'강'같은 케이스
                else {
                    if(this.imagePath2==='./'){
                        this.spandGaroCharater('imgContainer1');
                    }
                }
            }
            else if(this.nowChar.length===4){
                //위가 '가,고' 인 경우
                if(this.imagePath2==='./'){
                    //'값'
                    if(this.isJa(this.nowChar[2])){
                        this.spandGaroCharater('imgContainer1');
                        this.pressGaroCharacter('imgContainer3');
                        this.pressGaroCharacter('imgContainer4');
                    }
                    //'광'
                    else
                        this.spandSaroCharater('imgContainer3');
                }
                //위가 '게,꼬'인 경우
                else{
                    //'겕'
                    if(this.isJa(this.nowChar[2])){
                        this.pressGaroCharacter('imgContainer3');
                        this.pressGaroCharacter('imgContainer4');
                    }
                    //'꽝'
                    else{
                        console.log("in");
                        this.swapImg('imgContainer2','imgContainer3');
                        // this.pressSaroCharacter('imgContainer1');
                        this.spandInitCharacter('imgContainer2');
                        // this.pressSaroCharacter('imgContainer3');
                    }
                }
            }
        },
        init() {
            this.imagePath1 = './';
            this.imagePath2 = './';
            this.imagePath3 = './';
            this.imagePath4 = './';
            this.nowIdx = 0;
            this.nowChar = [];
            this.parsedChar = [];
            this.charType = '';
        },
        spandGaroCharater(id) {
            let element = document.getElementById(id);
            element.style.width = "350px";
            element.style.height = "200px";
        },
        spandSaroCharater(id) {
            let element = document.getElementById(id);
            element.style.width = "200px";
            element.style.height = "350px";
        },
        spandInitCharacter(id) {
            let element = document.getElementById(id);
            element.style.width = "200px";
            element.style.height = "200px";
        },
        pressGaroCharacter(id){
            let element = document.getElementById(id);
            element.style.width = "100px";
            element.style.height = "200px";
        },
        pressSaroCharacter(id){
            let element = document.getElementById(id);
            element.style.width = "200px";
            element.style.height = "100px";
        },
        isUnmo(c) {
            return this.unmo.indexOf(c) !== -1;
        },
        isJa(c) {
            return this.ja.indexOf(c) !== -1;
        },
        isMo(c) {
            return this.mo.indexOf(c) !== -1;
        },
        isTwoChar(c){
            return this.twoChar.indexOf(c) !== -1;
        },
        swapImg(){
            let temp = this.imagePath2;
            this.imagePath2 = this.imagePath3;
            this.imagePath3 = temp;
         }
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

.charContiner {
    position: absolute;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    width: 400px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: yellow;
}

.imgContainer1 {
    width: 200px;
    height: 200px;
}

.imgContainer2 {
    width: 200px;
    height: 200px;
}

.imgContainer3 {
    width: 200px;
    height: 200px;
}

.imgContainer4 {
    width: 200px;
    height: 200px;
}
</style>
  