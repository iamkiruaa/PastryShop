<template>
  <!-- Photo Slider -->
  <div class="photo-slider container-fluid no-padding">
    <!-- Main Carousel -->
    <div id="main-carousel" class="carousel slide carousel-fade" data-ride="carousel">
      <div role="listbox" class="carousel-inner">
        <div class="item active">
          <img width="1920" height="1030" alt="slider" src="assets/images/slider-1.jpg">
          <div class="carousel-caption">
            <img data-animation="animated pulse" src="assets/images/slider-ic.png" alt="slider-ic" width="121" height="124">
            <p data-animation="animated bounceInLeft">Gâteau pour plus tard Gâteau </p>
            <p data-animation="animated bounceInRight">comme mode de vie</p>
          </div>
        </div>

        <div class="item">
          <img width="1920" height="1030" alt="slider" src="assets/images/slider-2.jpg">
          <div class="carousel-caption">
            <img data-animation="animated pulse" src="assets/images/slider-ic.png" alt="slider-ic" width="121" height="124">
            <p data-animation="animated bounceInLeft">Gâteau pour plus tard Gâteau </p>
            <p data-animation="animated bounceInRight">comme mode de vie</p>
          </div>
        </div>

        <div class="item">
          <img width="1920" height="1030" alt="slider" src="assets/images/slider-3.jpg">
          <div class="carousel-caption">
            <img data-animation="animated pulse" src="assets/images/slider-ic.png" alt="slider-ic" width="121" height="124">
            <p data-animation="animated bounceInLeft">Gâteau pour plus tard Gâteau </p>
            <p data-animation="animated bounceInRight">comme mode de vie</p>
          </div>
        </div>
        <a class="left carousel-control" href="#main-carousel" role="button" data-slide="prev">
          <i class="fa fa-caret-left" aria-hidden="true"></i>
        </a>
        <a class="right carousel-control" href="#main-carousel" role="button" data-slide="next">
          <i class="fa fa-caret-right" aria-hidden="true"></i>
        </a>
      </div>
    </div>
    <!-- Main Carousel /-  -->
  </div>
  <!-- Photo Slider /- -->
</template>

<script>
export default {
  name: "MainCarousel"
}
</script>

<style scoped>

</style>