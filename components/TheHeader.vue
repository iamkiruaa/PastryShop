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
            <NuxtLink to="/" class="navbar-brand" title="Logo"><h3>Olivia OCCANSEY</h3></NuxtLink>
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
                <NuxtLink to="{name: 'OrderOnline'}" title="Commander en ligne" class="btn dropdown-toggle" id="cart"
                          aria-haspopup="true"
                          aria-expanded="false">Commander en ligne
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div id="navbar" class="navbar-collapse collapse navbar-right">
            <ul class="nav navbar-nav">
              <li class="dropdown active">
                <NuxtLink to="/" title="Logo" class="dropdown-toggle" role="button" aria-haspopup="true"
                          aria-expanded="false">Accueil
                </NuxtLink>
              </li>
              <li class="dropdown">
                <NuxtLink to="/" title="Logo" class="dropdown-toggle" role="button" aria-haspopup="true"
                          aria-expanded="false">Menu
                </NuxtLink>
              </li>
              <li class="dropdown">
                <NuxtLink to="/" title="Logo" class="dropdown-toggle" role="button" aria-haspopup="true"
                          aria-expanded="false">Mes pâtisseries
                </NuxtLink>
              </li>
              <li class="dropdown">
                <NuxtLink to="/" title="Logo" class="dropdown-toggle" role="button" aria-haspopup="true"
                          aria-expanded="false">Contact
                </NuxtLink>
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