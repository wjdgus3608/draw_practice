<template>
    <div class="sub2_2">
        <div class="topContainer">
            <CharNav :fetchFiles="fetchFiles" :nowChar="nowChar" :nowIdx="nowIdx" @updateIdx="updateIdx" />
        </div>
        <div class="bottomContainer">
            <img class="imgContainer" id="imgContainer" :src=imagePath>
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
        </div>

        <PopupModal>
            <template v-slot:default>
                <img class="imgContainer" :src=imagePath>
            </template>
        </PopupModal>
    </div>
</template>
  
<script>
import CharNav from '../CharNav.vue';
import PopupModal from '@/components/PopupModal.vue';
export default {
    name: 'sub2_2',
    components: {
        CharNav,
        PopupModal
    },
    created() {
        this.getFilesFromJson()
    },
    data() {
        return {
            nowChar: '',
            nowIdx: 0,
            types: String('second_second').split('_'),
            fetchFiles: [],
            imagePath: './',
            scaleCnt: 5
        }
    },
    methods: {
        updateIdx(c, idx) {
            this.nowIdx = idx;
            this.nowChar = c;
            this.imagePath = this.types[0] + '/' + this.types[1] + '/' + c + '.png';
        },
        getFilesFromJson() {
            fetch('/file.json')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.fetchFiles = data[this.types[0] + ''][this.types[1] + ''];
                    this.nowChar = this.fetchFiles[0];
                    this.imagePath = this.types[0] + '/' + this.types[1] + '/' + this.nowChar + '.png';

                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
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
            this.scaleUpImg('imgContainer');
        },
        scaleDownAllImg() {
            this.scaleDownImg('imgContainer');
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
.sub2_2 {
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

.imgContainer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
</style>
  