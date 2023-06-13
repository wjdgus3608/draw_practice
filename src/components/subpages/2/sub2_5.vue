<template>
    <div class="sub2_5">
        <div class="topContainer">
            <CharInputNav :word="word" @generateWord="generateWord" />
        </div>
        <div class="bottomContainer">
            <div class="charContiner" id="charContiner">
                <div class="leftSpace">
                    <img class="img1" id="img1" :src=imagePath1 v-show="imagePath1 !== './'">
                    <img class="img2" id="img2" :src=imagePath2 v-show="imagePath2 !== './'">
                </div>
                <div class="rightSpace">
                    <img class="img3" id="img3" :src=imagePath3 v-show="imagePath3 !== './'">
                </div>
                <div class="bottomSpace">
                        <img class="img4" id="img4" :src=imagePath4 v-show="imagePath4 !== './'">
                        <img class="img5" id="img5" :src=imagePath5 v-show="imagePath5 !== './'">
                        <img class="img6" id="img6" :src=imagePath6 v-show="imagePath6 !== './'">
                        <img class="img7" id="img7" :src=imagePath7 v-show="imagePath7 !== './'">
                        <img class="img8" id="img8" :src=imagePath8 v-show="imagePath8 !== './'">
                </div>
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
            unmo: ['ㅗ', 'ㅛ', 'ㅜ', 'ㅠ', 'ㅡ'],
            nowIdx: 0,
            imagePath1: './second/first/ㄱ.png',
            imagePath2: './second/second/ㅗ.png',
            imagePath3: './second/second/ㅏ.png',
            imagePath4: './second/first/ㄱ.png',
            imagePath5: './second/first/ㅇ.png',
            imagePath6: './second/first/ㄱ.png',
            imagePath7: './second/first/ㄱ.png',
            imagePath8: './second/first/ㄱ.png',
            charType: '',
            word: '',
            types: String('second_first_second').split('_'),

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
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        },
        generateNowCharImg() {
            // this.loadImg();
            // this.adjustImg();
        },
        loadImg() {
            // this.loadTwoChar();



            if (this.nowChar.length >= 3) {
                if (this.isJa(this.nowChar[2]))
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
            this.spandInitCharacter('img1');
            this.spandInitCharacter('img2');
            this.spandInitCharacter('img3');
            this.spandInitCharacter('img4');

            if (this.imagePath2 !== './') {
                //'꼬'
                if (this.isUnmo(this.nowChar[1]))
                    this.spandGaroCharater('img2');
                //'게'
                else
                    this.spandSaroCharater('img2');
            }

            if (this.nowChar.length === 3) {
                //'과'같은 케이스
                if (this.isMo(this.nowChar[2])) {
                    this.spandSaroCharater('img3');
                }
                //'강'같은 케이스
                else {
                    if (this.imagePath2 === './') {
                        this.spandGaroCharater('img1');
                    }
                }
            }
            else if (this.nowChar.length === 4) {
                //위가 '가,고' 인 경우
                if (this.imagePath2 === './') {
                    //'값'
                    if (this.isJa(this.nowChar[2])) {
                        this.spandGaroCharater('img1');
                        this.pressGaroCharacter('img3');
                        this.pressGaroCharacter('img4');
                    }
                    //'광'
                    else
                        this.spandSaroCharater('img3');
                }
                //위가 '게,꼬'인 경우
                else {
                    //'겕'
                    if (this.isJa(this.nowChar[2])) {
                        this.pressGaroCharacter('img3');
                        this.pressGaroCharacter('img4');
                    }
                    //'꽝'
                    else {
                        console.log("in");
                        this.swapImg('img2', 'img3');
                        // this.pressSaroCharacter('img1');
                        this.spandInitCharacter('img2');
                        // this.pressSaroCharacter('img3');
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
        pressGaroCharacter(id) {
            let element = document.getElementById(id);
            element.style.width = "100px";
            element.style.height = "200px";
        },
        pressSaroCharacter(id) {
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
        isTwoChar(c) {
            return this.twoChar.indexOf(c) !== -1;
        },
        swapImg() {
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
    justify-content: center;
    align-items: center;
}

.charContiner {
    position: absolute;
    /* margin: auto; */
    /* display: flex;
    flex-flow: row wrap;*/
    /* justify-content: center;
    align-items: center; */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: yellow;
}

.leftSpace {
    display: inline-block;
    width: 300px;
    height: 300px;
    background-color: red;
}

.rightSpace {
    display: inline-block;
    width: 100px;
    height: 300px;
    margin-bottom: 0;
    background-color:white;
}


.bottomSpace {
    position: relative;
    width: 400px;
    height: 200px;
    background-color: gray;
}



.img1 {
    margin-left: 50px;
    width: 200px;
    height: 200px;
}

.img2 {
    width: 300px;
    height: 100px;
}

.img3 {
    margin-bottom: 200px;
    width: 100px;
    height: 300px;
}

.img4 {
    position: absolute;
    margin-left: 50px;
    width: 200px;
    height: 200px;
    background-color: aqua;

}

.img5 {
    position: absolute;
    margin-left: 150px;
    width: 200px;
    height: 200px;
    background-color: slateblue;

}

.img6 {
    position: absolute;
    margin-left: 50px;
    width: 100px;
    height: 200px;
}

.img7 {
    position: absolute;
    margin-left: 150px;
    width: 100px;
    height: 200px;
    background-color: green;
}
.img8 {
    position: absolute;
    margin-left: 250px;
    width: 100px;
    height: 200px;
    background-color: burlywood;
}
</style>
  