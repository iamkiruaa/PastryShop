<template>
  <!-- Order Section -->
  <div class="order-section container-fluid no-padding">
    <div class="section-padding"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-7 col-sm-7 col-xs-7">
          <div class="section-header">
            <h3>Choisissez votre saveur</h3>
            <h5>Commander en ligne</h5>
            <img src="images/section-seprator.png" alt="section-seprator" width="169" height="15">
            <p>La journée pour un tour de trois heures, un tour de trois heures, puis un jour, il tirait sur de la
              nourriture et à travers le sol est apparu un pétrole. le sol est venu une huile qui est son un beau
              jour.</p>
          </div><!-- Section Header /-  -->
          <form class="online-form">
            <div class="col-md-6 col-sm-6 col-xs-6">
              <input type="text" class="form-control" placeholder="Name *" required/>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6">
              <input type="text" class="form-control" placeholder="Phone Number *" required/>
            </div>
            <div class="form-group col-md-6 col-sm-6 col-xs-6">
              <select>
                <option>FLAVOURS</option>
                <option>FLAVOURS</option>
                <option>FLAVOURS</option>
                <option>FLAVOURS</option>
              </select>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6">
              <input type="text" class="form-control" placeholder="Your Address *" required/>
            </div>
            <a href="#" title="Order Now" class="order-now">Commandez maintenant</a>
            <p>POUR PLUS DE RENSEIGNEMENTS, APPELEZ-NOUS AU :<a href="tel:066340351" title="066340351">
              +33 0666340351</a></p>
          </form>
        </div>
      </div>
    </div><!-- Container /- -->

    <div class="right-image">
      <img src="images/order-online.png" alt="order-online" width="600" height="830"/>
    </div>
    <div class="section-padding"></div>
  </div><!-- Order Section /- -->
</template>

<script>
export default {
  name: "OrderSection"
}
</script>

<style scoped>

</style>