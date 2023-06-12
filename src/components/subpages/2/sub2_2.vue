<template>
    <div class="sub2_2">
        <div class="topContainer">
            <CharNav :fetchFiles="fetchFiles" :nowChar="nowChar" :nowIdx="nowIdx" @updateIdx="updateIdx" />
        </div>
        <div class="bottomContainer">
            <img class="imgContainer" :src=imagePath>
        </div>
    </div>
</template>
  
<script>
import CharNav from '../CharNav.vue';
export default {
    name: 'sub2_2',
    components: {
        CharNav
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
            imagePath:'./'
        }
    },
    methods: {
        updateIdx(c, idx) {
            this.nowIdx = idx;
            this.nowChar = c;
            this.imagePath = this.types[0]+'/'+this.types[1]+'/'+c+'.png';
        },
        getFilesFromJson() {
            fetch('/file.json')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.fetchFiles = data[this.types[0] + ''][this.types[1] + ''];
                    this.nowChar = this.fetchFiles[0];
                    this.imagePath = this.types[0]+'/'+this.types[1]+'/'+this.nowChar+'.png';

                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
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

.imgContainer{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
  