<template>
  <!-- Header -->
  <header class="header-main container-fluid no-padding">
    <!-- Navigation -->
    <div class="menu-block container-fluid no-padding">
      <!-- Container -->
      <div class="container">
        <nav class="navbar ow-navigation">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                    aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="index.html" title="Logo"><h3>Royal <img src="images/logo.png" alt="logo"/>
              Bakers</h3></a>
          </div>
          <div class="add-to-cart">
            <div class="menu-search">
              <div id="sb-search" class="sb-search">
                <form>
                  <input class="sb-search-input" placeholder="Enter your search term..." type="text" value=""
                         name="search" id="search"/>
                  <button class="sb-search-submit"><i class="fa fa-search"></i></button>
                  <span class="sb-icon-search"></span>
                </form>
              </div>
            </div>
            <ul class="cart">
              <li>
                <a aria-expanded="true" aria-haspopup="true" data-toggle="dropdown" id="cart"
                   class="btn dropdown-toggle" title="Order Online" href="#">Commander en ligne</a>
              </li>
            </ul>
          </div>
          <div id="navbar" class="navbar-collapse collapse navbar-right">
            <ul class="nav navbar-nav">
              <li class="dropdown active">
                <a href="index.html" title="Portfolio" class="dropdown-toggle" role="button" aria-haspopup="true"
                   aria-expanded="false">Accueil</a>
              </li>
              <li class="dropdown">
                <a href="#" title="Pages" class="dropdown-toggle" role="button" aria-haspopup="true"
                   aria-expanded="false">Menu</a>
              </li>
              <li class="dropdown">
                <a href="#" title="Pages" class="dropdown-toggle" role="button" aria-haspopup="true"
                   aria-expanded="false">Mes pâtisseries</a>
              </li>
              <li class="dropdown">
                <a href="contact-1.html" title="Latest News" class="dropdown-toggle" role="button" aria-haspopup="true"
                   aria-expanded="false">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <!-- Navigation -->
      </div>
    </div>
    <!-- Container /- -->
  </header>
  <!-- Header /- -->
</template>

<script>
export default {
  name: "TheHeader"
}
</script>

<style scoped>

</style>