<template lang="html">
  <div class="">
    <el-row class="container">
      <el-card class="box-card">
    <el-form :label-position="labelPosition" label-width="100px">
      <el-form-item label="Title">
        <el-input v-model="formEditHouse.title"></el-input>
      </el-form-item>
      <el-form-item label="Price">
        <el-input v-model="formEditHouse.price"></el-input>
      </el-form-item>
      <el-form-item label="Description">
        <el-input v-model="formEditHouse.description"></el-input>
      </el-form-item>
      <el-form-item label="Owner">
        <el-input v-model="formEditHouse.owner"></el-input>
      </el-form-item>
      <el-form-item label="Address">
        <el-input v-model="formEditHouse.address"></el-input>
      </el-form-item>
      <el-form-item label="Image">
        <el-input v-model="formEditHouse.image"></el-input>
      </el-form-item>
      <el-form-item label="Latitude">
        <el-input v-model="formEditHouse.latitude"></el-input>
      </el-form-item>
      <el-form-item label="Longitude">
        <el-input v-model="formEditHouse.longitude"></el-input>
      </el-form-item>
    </el-form>
      <el-button type="primary" @click='editHouse(formEditHouse._id)'>Submit</el-button>
  </el-card>
</el-row>
  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'
export default {
  props: ['id'],
  data() {
    return {
      labelPosition: 'top'
    }
  },
  computed : {
    ...mapGetters([
      'houses',
      'newHouse',
      'formEditHouse'
    ])
  },
  methods : {
    ...mapActions([
      'editHouse',
      'getEdited'
    ])
  },
  mounted() {
    this.getEdited(this.id)
  }
}
</script>

<style lang="css">
.text {
    font-size: 14px;
  }
  .item {
    padding: 18px 0;
  }
  .box-card {
    width: 480px;
  }
  button.el-button.el-button--primary {
    float: right;
    margin-bottom: 17px;
    padding: 12px 48px;
  }
</style>
