<template>
    <div class="charInputNav">
        <form id="wordSubmitBox" @submit="clickSubmit">
                <input type="text" class="form-control" id="wordInputBox" v-model="inputWord" placeholder="원하는 글자를 입력하세요.">
            <button type="submit" class="btn btn-primary" id="submitBtn">생성</button>
        </form>
    </div>
</template>
  
<script>

export default {
    name: 'charNav',
    props: ['word'],
    data() {
        return {
            inputWord:''
        }
    },
    updated(){
    },
    methods: {
        clickSubmit(){
            event.preventDefault();
            var pattern = /[ㄱ-힣]/g;
            if (!pattern.test(this.inputWord)) {
                alert("한글만 입력가능 합니다.");
            }
            else
            this.$emit('generateWord',this.inputWord.replace(/ /g, ''));
        }
    },


}
</script>
  
<style scoped>
.charInputNav {
    width: 100%;
    overflow: scroll;
}
.form-control{
    display: inline;
    width: 400px;
}
</style>
  