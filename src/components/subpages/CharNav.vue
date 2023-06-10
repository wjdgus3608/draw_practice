<template>
    <div class="charNav">
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <div v-for="(file,idx) in fetchFiles" :key="file" @click="handleClick(idx,file)">
                <label class="btn btn-outline-primary" :id="file">{{ file }}
                    <input type="button" class="btn-check" autocomplete="off">
                </label>
            </div>
        </div>
    </div>
</template>
  
<script>

export default {
    name: 'charNav',
    props: ['navType'],
    created() {
        this.getFilesFromJson()
    },
    data() {
        return {
            types: String(this.navType).split('_'),
            fetchFiles: '',
            nowChar: '',
            nowIdx: 0
        }
    },
    methods: {
        getFilesFromJson() {
            fetch('/file.json')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.fetchFiles = data[this.types[0] + ''][this.types[1] + ''];
                    this.nowChar = this.fetchFiles[0]
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        },
        handleClick(idx,clickedFile) {
            console.log(clickedFile);
            document.getElementById(this.nowChar).classList.remove('btn-primary');
            document.getElementById(this.nowChar).classList.remove('text-primary-emphasis');

            this.nowChar = clickedFile;
            this.nowIdx = idx;
            document.getElementById(this.nowChar).className+=' btn-primary';
            document.getElementById(this.nowChar).className+=' text-primary-emphasis';

        }
    },


}
</script>
  
<style scoped>
.charNav {
    width: 100%;

}
</style>
  