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
    props: ['navType','nowChar','nowIdx','fetchFiles'],
    data() {
        return {
        }
    },
    updated(){
        this.setFirst();
    },
    methods: {
        setFirst(){
            document.getElementById(this.nowChar).className+=' btn-primary';
            document.getElementById(this.nowChar).className+=' text-primary-emphasis';
        },
        handleClick(idx,clickedFile) {
            document.getElementById(this.nowChar).classList.remove('btn-primary');
            document.getElementById(this.nowChar).classList.remove('text-primary-emphasis');

            this.$emit('updateIdx',clickedFile, idx);
            document.getElementById(clickedFile).className+=' btn-primary';
            document.getElementById(clickedFile).className+=' text-primary-emphasis';


        }
    },


}
</script>
  
<style scoped>
.charNav {
    width: 70vw;
    overflow: scroll;
}
</style>
  