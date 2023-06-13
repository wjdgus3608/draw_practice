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
            if (this.nowChar.length === 3) {
                if (this.isUnmo(this.nowChar[1])) {
                    this.spandGaroCharater(document.getElementById('imgContainer2'));
                }
                else {
                    this.spandSaroCharater(document.getElementById('imgContainer2'));
                }
            }
            // else if(this.nowChar.length===4){

            // }
            if (this.nowChar.length == 2) {
                this.imagePath1 = this.types[0] + '/' + this.types[3] + '/' + this.word[this.nowIdx] + '.png';
            }
            else {
                if (this.nowChar.length >= 1) {
                    this.imagePath1 = this.types[0] + '/' + this.types[1] + '/' + this.nowChar[0] + '.png';
                }
                if (this.nowChar.length >= 2) {
                    this.imagePath2 = this.types[0] + '/' + this.types[2] + '/' + this.nowChar[1] + '.png';
                }
            }

            if (this.nowChar.length >= 3) {
                this.imagePath3 = this.types[0] + '/' + this.types[1] + '/' + this.nowChar[2] + '.png';
            }
            if (this.nowChar.length >= 4) {
                this.imagePath4 = this.types[0] + '/' + this.types[1] + '/' + this.nowChar[3] + '.png';
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
        spandGaroCharater(element) {
            element.style.width = "350px";
            element.style.height = "200px";
        },
        spandSaroCharater(element) {
            element.style.width = "200px";
            element.style.height = "350px";
        },
        spandInitCharacter(element) {
            element.style.width = "200px";
            element.style.height = "200px";
        },
        isUnmo(c) {
            return this.unmo.indexOf(c) !== -1;
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
  