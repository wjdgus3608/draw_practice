<template>
    <div class="sub1_2">
        <div id="carouselExampleControls" class="carousel slide carousel-dark" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="">
                    <img src="/나.집필법 자세/1.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item" data-bs-interval="">
                    <img src="/나.집필법 자세/2.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item" data-bs-interval="">
                    <img src="/나.집필법 자세/3.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item" data-bs-interval="">
                    <img src="/나.집필법 자세/4.png" class="d-block w-100" alt="...">
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
    name: 'sub1_2'
}
</script>
  
<style scoped>
.sub1_2 {
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
  