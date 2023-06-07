<template>
    <div class="charNav">
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
            <label class="btn btn-outline-primary" for="btnradio1">{{ imgName }}</label>

            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio2">{{ imgName }}</label>

            <ul>
                <li v-for="file in getFileList" :key="file">
                    {{ file }}
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script>

export default {
    name: 'charNav',
    data() {
        return {
            imgName: '',
            assetFiles: []
        }
    },
    created() {
        this.getFileList();
    },
    props: ['navType'],
    
    methods: {
        getFileList() {
            const parsed = String(this.navType).split('_');
            console.log(parsed);
            const folderPath = '../../assets/' + parsed[0] + '/' + parsed[1];	// 폴더 경로 값 지정

            console.log(folderPath);
            // fs.readdir(folder, function (error, filelist) {
            //     console.log(filelist);
            // });

            const assetsContext = require.context(String(folderPath), false, /\.(png|jpe?g|gif|svg)$/);
            this.assetFiles = assetsContext.keys().map(key => key.substring(2));
        }
    }


}
</script>
  
<style scoped>
.charNav {
    width: 100%;

}
</style>
  