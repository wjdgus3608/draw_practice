<template>
    <div class="sub1_3">
        <div id="carouselExampleControls" class="carousel slide carousel-dark" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="">
                    <img src="/다.역입,중봉,삼절/슬라이드1.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item" data-bs-interval="">
                    <img src="/다.역입,중봉,삼절/슬라이드2.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item" data-bs-interval="">
                    <img src="/다.역입,중봉,삼절/슬라이드3.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item" data-bs-interval="">
                    <img src="/다.역입,중봉,삼절/슬라이드4.png" class="d-block w-100" alt="...">
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
    name: 'sub1_3'
}
</script>
  
<style scoped>
.sub1_3 {
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
.carousel-item {
    display: none;
}

img {
    width: 100%;
    height: 100%;
}
</style>
  