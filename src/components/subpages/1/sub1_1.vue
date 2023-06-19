<template>
    <div class="sub1_1">
        <div id="carouselExampleControls" class="carousel slide carousel-dark" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="">
                    <img src="/슬라이드15.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item" data-bs-interval="">
                    <img src="/슬라이드16.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item" data-bs-interval="">
                    <img src="/슬라이드17.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item" data-bs-interval="">
                    <img src="/슬라이드18.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item" data-bs-interval="">
                    <img src="/슬라이드19.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item" data-bs-interval="">
                    <img src="/슬라이드20.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item" data-bs-interval="">
                    <img src="/슬라이드21.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item" data-bs-interval="">
                    <img src="/슬라이드22.png" class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'sub1_1'
}
</script>
  
<style scoped>
.sub1_1 {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    justify-items: center;

}

.carouselExampleControls{
    width: 100%;
    height: 100%;
}
.carousel-inner{
    width: 100%;
    height: 100%;
}

.carousel-item {
    width: 100%;
    height: 100%;
} 

.carousel {
    overflow: hidden;
}

img {
    width: 100%;
    height: 100%;
}
</style>
  