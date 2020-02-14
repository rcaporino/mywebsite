<template>
  <div>
        <b-navbar toggleable="lg" type="dark" class="nav-header">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-brand to="/">RobCaporino.com</b-navbar-brand>
                <b-navbar-nav align="center">
                    <b-nav pills vertical align="center">
                        <b-nav-item vertical align="center" to="/" exact-active-class="active">Home</b-nav-item>
                    </b-nav>
                    <b-nav pills vertical align="center">
                        <b-nav-item vertical align="center" to="/about" exact-active-class="active">About</b-nav-item>
                    </b-nav>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.nav-header{
    background-color: #f4934b;
}

.active {
    /* background-color: #f59e5d !important; */
    background-color: #5D4964 !important;
}

.nav-pills:hover {
    background-color: #d98c53 !important;
}
</style>