<template lang="html">
  <div class="">
    <navbar></navbar>
    <header-image></header-image>
    <form-add></form-add>
    <card></card>
  </div>

</template>

<script>
import Navbar from './Navbar'
import FormAdd from './Form'
import HeaderImage from './Header'
import Card from './Card'
export default {
  components : {
    Navbar,
    FormAdd,
    HeaderImage,
    Card
  }
}
</script>

<style lang="css">
</style>
