<template>
    <div class="sub3_4">
        <div class="topContainer">
            <CharInputNav :word="word" @generateWord="generateWord" />
        </div>
        <div class="bottomContainer">
            <div class="charContiner" id="charContiner">
                <div class="leftSpace">
                    <img class="img1" id="img1" :src=imagePath1 v-show="imagePath1 !== './'">
                    <img class="img2" id="img2" :src=imagePath2 v-show="imagePath2 !== './'">
                    <img class="empty" v-show="imagePath2 === './'">
                </div>
                <div class="rightSpace" v-show="imagePath3 !== './'">
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
            <div class="sideToolContainer">
                <button type="button" class="btn btn-light" @click="handlePlusBtn">
                    <img src="/plus.png">
                </button>
                <button type="button" class="btn btn-light" @click="handleMinusBtn">
                    <img src="/minus.png">
                </button>
                <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#mymodal">
                    <img src="/fullscreen.png">
                </button>
            </div>
            <div class="underToolContainer">
                <button type="button" class="btn btn-light" style="margin-left: 7%;" @click="handleBackBtn">
                    <img src="/back.png">
                </button>
                <button type="button" class="btn btn-light" style="margin-left: 70%;" @click="handleNextBtn">
                    <img src="/next.png">
                </button>

            </div>
        </div>
        <PopupModal>
            <template v-slot:default>
                <div class="charContiner" id="charContiner">
                <div class="leftSpace">
                    <img class="img1" id="img1" :src=imagePath1 v-show="imagePath1 !== './'">
                    <img class="img2" id="img2" :src=imagePath2 v-show="imagePath2 !== './'">
                    <img class="img2" id="img2" :src=imagePath2 v-show="imagePath2 !== './'">
                    <img class="empty" v-show="imagePath2 === './'">
                </div>
                <div class="rightSpace" v-show="imagePath3 !== './'">
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
            </template>
        </PopupModal>
    </div>
</template>
  
<script>
import CharInputNav from '../CharInputNav.vue';
import PopupModal from '../../PopupModal.vue';
import Hangul from 'hangul-js'
export default {
    name: 'sub3_4',
    components: {
        CharInputNav,
        PopupModal
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
            imagePath1: './',
            imagePath2: './',
            imagePath3: './',
            imagePath4: './',
            imagePath5: './',
            imagePath6: './',
            imagePath7: './',
            imagePath8: './',
            charType: '',
            word: '',
            scaleCnt: 5,
            types: String('third_first_second').split('_'),

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
            this.loadImg();
        },
        loadImg() {
            this.initImgPath();
            this.initScale();
            this.setFirstChar();

            if (this.nowChar.length === 2) {
                //'구'
                if (this.isUnmo(this.nowChar[1]))
                    this.imagePath2 = this.types[0] + '/' + this.types[2] + '/' + this.nowChar[1] + '.png';
                //'가'
                else
                    this.imagePath3 = this.types[0] + '/' + this.types[2] + '/' + this.nowChar[1] + '.png';

            }
            else if (this.nowChar.length === 3) {
                //'강'
                if (!this.isUnmo(this.nowChar[1]) && this.isJa(this.nowChar[2])) {
                    this.imagePath3 = this.types[0] + '/' + this.types[2] + '/' + this.nowChar[1] + '.png';
                    this.imagePath5 = this.types[0] + '/' + this.types[1] + '/' + this.nowChar[2] + '.png';
                }
                //'궁'
                else if (this.isUnmo(this.nowChar[1]) && this.isJa(this.nowChar[2])) {
                    this.imagePath2 = this.types[0] + '/' + this.types[2] + '/' + this.nowChar[1] + '.png';
                    this.imagePath4 = this.types[0] + '/' + this.types[1] + '/' + this.nowChar[2] + '.png';
                }
                //'과'
                else if (this.isUnmo(this.nowChar[1]) && !this.isJa(this.nowChar[2])) {
                    this.imagePath2 = this.types[0] + '/' + this.types[2] + '/' + this.nowChar[1] + '.png';
                    this.imagePath3 = this.types[0] + '/' + this.types[2] + '/' + this.nowChar[2] + '.png';
                }
            }
            else if (this.nowChar.length === 4) {
                //'값'
                if (!this.isUnmo(this.nowChar[1]) && this.isJa(this.nowChar[2]) && this.isJa(this.nowChar[3])) {
                    this.imagePath3 = this.types[0] + '/' + this.types[2] + '/' + this.nowChar[1] + '.png';
                    this.imagePath7 = this.types[0] + '/' + this.types[1] + '/' + this.nowChar[2] + '.png';
                    this.imagePath8 = this.types[0] + '/' + this.types[1] + '/' + this.nowChar[3] + '.png';
                }
                //'흙'
                else if (this.isUnmo(this.nowChar[1]) && this.isJa(this.nowChar[2]) && this.isJa(this.nowChar[3])) {
                    this.imagePath2 = this.types[0] + '/' + this.types[2] + '/' + this.nowChar[1] + '.png';
                    this.imagePath6 = this.types[0] + '/' + this.types[1] + '/' + this.nowChar[2] + '.png';
                    this.imagePath7 = this.types[0] + '/' + this.types[1] + '/' + this.nowChar[3] + '.png';
                }
                //'광'
                else if (this.isUnmo(this.nowChar[1]) && this.isMo(this.nowChar[2]) && this.isJa(this.nowChar[3])) {
                    this.imagePath2 = this.types[0] + '/' + this.types[2] + '/' + this.nowChar[1] + '.png';
                    this.imagePath3 = this.types[0] + '/' + this.types[2] + '/' + this.nowChar[2] + '.png';
                    this.imagePath5 = this.types[0] + '/' + this.types[1] + '/' + this.nowChar[3] + '.png';
                }
            }
            else if (this.nowChar.length === 5) {
                //'뷁'
                this.imagePath2 = this.types[0] + '/' + this.types[2] + '/' + this.nowChar[1] + '.png';
                this.imagePath3 = this.types[0] + '/' + this.types[2] + '/' + this.nowChar[2] + '.png';
                this.imagePath7 = this.types[0] + '/' + this.types[1] + '/' + this.nowChar[3] + '.png';
                this.imagePath8 = this.types[0] + '/' + this.types[1] + '/' + this.nowChar[4] + '.png';
            }
        },
        setFirstChar() {
            if (this.isJa(this.nowChar[0]))
                this.imagePath1 = this.types[0] + '/' + this.types[1] + '/' + this.nowChar[0] + '.png';
            else
                this.imagePath1 = this.types[0] + '/' + this.types[2] + '/' + this.nowChar[0] + '.png';
        },
        init() {
            this.initImgPath();
            this.nowIdx = 0;
            this.nowChar = [];
            this.parsedChar = [];
            this.charType = '';
        },
        initImgPath() {
            this.imagePath1 = './';
            this.imagePath2 = './';
            this.imagePath3 = './';
            this.imagePath4 = './';
            this.imagePath5 = './';
            this.imagePath6 = './';
            this.imagePath7 = './';
            this.imagePath8 = './';
        },
        initScale() {
            this.scaleCnt = 5;
            document.getElementById('charContiner').style.transform = `translate(-50%, -50%) scale(1.0)`
        },
        spandGaroCharater(id) {
            let element = document.getElementById(id);
            element.style.width = "350px";
            element.style.height = "200px";
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
        handleBackBtn() {
            if (this.nowIdx !== 0) {
                this.nowIdx--;
                this.nowChar = this.parsedChar[this.nowIdx];
                this.generateNowCharImg();
            }
        },
        handleNextBtn() {
            if (this.nowIdx !== this.parsedChar.length - 1) {
                this.nowIdx++;
                this.nowChar = this.parsedChar[this.nowIdx];
                this.generateNowCharImg();
            }
        },
        handlePlusBtn() {
            if (this.scaleCnt < 10) {
                this.scaleUpAllImg();
                this.scaleCnt++;
            }
        },
        handleMinusBtn() {
            if (this.scaleCnt > 0) {
                this.scaleDownAllImg();
                this.scaleCnt--;
            }
        },
        scaleUpAllImg() {
            this.scaleUpImg('charContiner');
        },
        scaleDownAllImg() {
            this.scaleDownImg('charContiner');
        },
        scaleUpImg(id) {
            let element = document.getElementById(id);
            const scaleRegex = /scale\(([^)]+)\)/;
            var currentScale = scaleRegex.exec(element.style.transform);
            currentScale = currentScale ? parseFloat(currentScale[1]) : 1;
            element.style.transform = `translate(-50%, -50%) scale(${Number(currentScale) + Number(0.1)})`
        },
        scaleDownImg(id) {
            let element = document.getElementById(id);
            const scaleRegex = /scale\(([^)]+)\)/;
            var currentScale = scaleRegex.exec(element.style.transform);
            currentScale = currentScale ? parseFloat(currentScale[1]) : 1;
            element.style.transform = `translate(-50%, -50%) scale(${Number(currentScale) - Number(0.1)})`
        }
    }
}
</script>
  
<style scoped>
.sub3_4 {
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
}

.leftSpace {
    display: inline-block;
    width: 300px;
    height: 300px;
}

.rightSpace {
    display: inline-block;
    width: 100px;
    height: 300px;
    margin-bottom: 0;
}


.bottomSpace {
    position: relative;
    height: 200px;
}

.sideToolContainer {
    position: absolute;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    left: 100%;
    width: 80px;
    height: 100%;
    padding-bottom: 100px;
    transform: translate(-100%, 0%);
}

.underToolContainer {
    position: absolute;
    top: 100%;
    width: 100%;
    height: 80px;
    transform: translate(0%, -100%);
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

.empty {
    width: 300px;
    background-color: white;
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

}

.img5 {
    position: absolute;
    margin-left: 150px;
    width: 200px;
    height: 200px;

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
}

.img8 {
    position: absolute;
    margin-left: 250px;
    width: 100px;
    height: 200px;
}
</style>
  