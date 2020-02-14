<template>
  <div>
  <b-card>
    <b-card-text>
      This is some content within the default <samp>&lt;b-card-body&gt;</samp> block of the
      <samp>&lt;b-card&gt;</samp> component. Notice the padding between the card's border and this
      gray <samp>&lt;div&gt;</samp>.
    </b-card-text>
  </b-card>
</div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
.card {
  background-color: #f9f9fb !important;
}

.card-text{
  color: #555555 !important;
}
</style>