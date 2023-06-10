<template>
    <div class="charNav">
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
            <label class="btn btn-outline-primary" for="btnradio1">{{ imgName }}</label>

            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio2">{{ imgName }}</label>
            
            <ul>
                <li v-for="file in fetchFiles" :key="file">
                    {{ file }}
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'charNav',
    props: ['navType'],
    created(){
        this.getFilesFromJson()
    },
    data() {
        return {
            types: String(this.navType).split('_'),
            fetchFiles: ''
        }
    },
    methods: {
        getFilesFromJson() {
            fetch('/file.json')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.fetchFiles = data[this.types[0]+''][this.types[1]+''];
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    },


}
</script>
  
<style scoped>
.charNav {
    width: 100%;

}
</style>
  