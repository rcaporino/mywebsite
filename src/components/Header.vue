<template>
  <div class="mt-3 m-0">
        <b-navbar toggleable="md" type="dark" class="nav-header">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-brand to="/">
                    <img src="../assets/R.Caporino_logo5.png" alt="logo" class="d-inline-block align-center">
                    
                </b-navbar-brand>
                <b-navbar-nav align="center">
                    <b-nav pills vertical align="center">
                        <b-nav-item vertical align="center" to="/" exact-active-class="active">Home</b-nav-item>
                    </b-nav>
                    <b-nav pills vertical align="center">
                        <b-nav-item vertical align="center" to="/about" exact-active-class="active">About</b-nav-item>
                    </b-nav>
                    <b-nav pills vertical align="center">
                        <b-nav-item vertical align="center" to="/testroute1" exact-active-class="active">Test1</b-nav-item>
                    </b-nav>
                    <b-nav pills vertical align="center">
                        <b-nav-item vertical align="center" to="/testroute2" exact-active-class="active">Test2</b-nav-item>
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
    background-color: #8092ac;
}

.active {
    /* background-color: #f59e5d !important; */
    background-color: #405b82 !important;
}

.nav-pills:hover {
    background-color: #bfc8d5 !important;
    border-radius: 5px;
}
</style>