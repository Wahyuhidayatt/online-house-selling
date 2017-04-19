<template lang="">
  <div class="">
    <el-row class="container">
      <el-card class="box-card">
        <div style="margin: 20px;"></div>
        <el-form label-width="100px">
          <el-form-item label="Title">
            <el-input v-model="newHouse.title"></el-input>
          </el-form-item>
          <el-form-item label="Price">
            <el-input v-model="newHouse.price"></el-input>
          </el-form-item>
          <el-form-item label="Description">
            <el-input v-model="newHouse.description"></el-input>
          </el-form-item>
          <el-form-item label="Owner">
            <el-input v-model="newHouse.owner"></el-input>
          </el-form-item>
          <el-form-item label="Address">
            <el-input v-model="newHouse.address"></el-input>
          </el-form-item>
          <el-form-item label="Image">
            <el-input v-model="newHouse.image"></el-input>
          </el-form-item>
          <el-form-item label="Latitude">
            <el-input v-model="newHouse.latitude"></el-input>
          </el-form-item>
          <el-form-item label="Longitude">
            <el-input v-model="newHouse.longitude"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click='addHouse()'>Submit</el-button>
      </el-card>
    </el-row>
</div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'
export default {
  computed : {
    ...mapGetters([
      'houses',
      'newHouse'
    ])
  },
  methods : {
    ...mapActions([
      'addHouse',
      'getHouse'
    ])
  }
}
</script>

<style lang="css" scope>
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
