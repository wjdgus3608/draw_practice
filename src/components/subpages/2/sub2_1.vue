<template>
    <div class="sub2_1">
        <div class="topContainer">
            <CharNav :fetchFiles="fetchFiles" :nowChar="nowChar" :nowIdx="nowIdx" @updateIdx="updateIdx" />
        </div>
        <div class="bottomContainer">
            bottom
            {{ this.nowChar }}
            <img :src=imagePath alt="">
        </div>
    </div>
</template>
  
<script>
import CharNav from '../CharNav.vue';
export default {
    name: 'sub2_1',
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
            types: String('second_first').split('_'),
            fetchFiles: [],
            imagePath:'@assets/'
        }
    },
    methods: {
        updateIdx(c, idx) {
            this.nowIdx = idx;
            this.nowChar = c;
            console.log(c);
            this.imagePath = '../../../assets/'+this.types[0]+'/'+this.types[1]+'/'+c+'.png';
            console.log(this.imagePath);
            this.imagePath = encodeURIComponent(this.imagePath);
        },
        getFilesFromJson() {
            fetch('/file.json')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.fetchFiles = data[this.types[0] + ''][this.types[1] + ''];
                    this.nowChar = this.fetchFiles[0];
                    console.log("fetched" + this.fetchFiles);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }
}
</script>
  
<style scoped>
.sub2_1 {
    width: 100%;
    height: 100%;
    background-color: yellow;

}

.topContainer {
    padding: 10px;
    background-color: greenyellow;
}

.bottomContainer {
    background-color: pink;
}
</style>
  