<template>
    <div class="sub3_1">
        <div class="topContainer">
            <CharNav :fetchFiles="fetchFiles" :nowChar="nowChar" :nowIdx="nowIdx" @updateIdx="updateIdx" />
        </div>
        <div class="bottomContainer">
            <img class="imgContainer" id="imgContainer" :src=imagePath>
            <button type="button" class="btn btn-link" id="detailBtn" data-bs-toggle="modal"
                data-bs-target="#myDetailModal" v-show="isPresent(nowChar)">+ 자세히 공부하기</button>
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

        <DetailModal>
            <template v-slot:default>
                <div class="modalContainer">
                    <img class="imgContainer2" :src=imagePath2>
                    <img class="imgContainer3" :src=imagePath3>
                </div>
            </template>
        </DetailModal>
    </div>
</template>
  
<script>
import CharNav from '../CharNav.vue';
import PopupModal from '@/components/PopupModal.vue';
import DetailModal from '@/components/DetailModal.vue';
export default {
    name: 'sub3_1',
    components: {
        CharNav,
        PopupModal,
        DetailModal
    },
    created() {
        this.getFilesFromJson()
    },
    data() {
        return {
            nowChar: '',
            nowIdx: 0,
            types: String('third_first_detail_des').split('_'),
            fetchFiles: [],
            detailFiles: [],
            imagePath: './',
            imagePath2: './',
            imagePath3: './',
            scaleCnt: 5
        }
    },
    methods: {
        updateIdx(c, idx) {
            this.nowIdx = idx;
            this.nowChar = c;
            this.imagePath = this.types[0] + '/' + this.types[1] + '/' + c + '.png';
            this.imagePath2 = this.types[0] + '/' + this.types[2] + '/' + c + '.png';
            this.imagePath3 = this.types[0] + '/' + this.types[3] + '/' + c + '.png';
        },
        getFilesFromJson() {
            fetch('/file.json')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.fetchFiles = data[this.types[0] + ''][this.types[1] + ''];
                    this.detailFiles = data[this.types[0]+''][this.types[2]+''];
                    this.nowChar = this.fetchFiles[0];
                    this.imagePath = this.types[0] + '/' + this.types[1] + '/' + this.nowChar + '.png';
                    this.imagePath2 = this.types[0] + '/' + this.types[2] + '/' + this.nowChar + '.png';
                    this.imagePath3 = this.types[0] + '/' + this.types[3] + '/' + this.nowChar + '.png';

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
        },
        isPresent(c){
            return this.detailFiles.indexOf(c)!==-1;
        }
    }
}
</script>
  
<style scoped>
.sub3_1 {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

}

.topContainer {
    display: flex;
    padding: 10px;
    justify-items: center;
    justify-content: center;
    width: 100%;
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

.imgContainer2 {
    width: 500px;
    height: 500px;
}

.imgContainer3 {
    width: 100%;
    height: 300px;
}

.modalContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#detailBtn {
    position: absolute;
    top: 50%;
    left: 10%;
    width: 300px;
    height: 50px;
    transform: translate(-10%, -50%);
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
  