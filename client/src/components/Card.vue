<template lang="">
  <div class="">
    <el-row v-for="house in houses">
    <el-col :span="8">
      <el-card :body-style="{ padding: '0px' }">
        <img :src="house.image" class="image">
        <div style="padding: 14px;">
          <ul>
            <li>{{house.title}}</li>
            <li>{{house.price}}</li>
            <li>{{house.owner}}</li>
            <li>{{house.address}}</li>
            <li>{{house.description}}</li>
          </ul>

          <div class="bottom clearfix">
            <time class="time">{{ house.createdAt }}</time>
            <el-button> <router-link :to="'/edit-house/'+house._id">Edit</router-link></el-button>
            <el-button type="primary" @click="removeHouse(house._id)">Delete</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
  </div>

</template>

<script>
import { mapGetters, mapActions} from 'vuex'
export default {
  computed : {
    ...mapGetters([
      'houses'
    ])
  },
  methods : {
    ...mapActions([
      'getHouse',
      'editHouse',
      'removeHouse'
    ])
  },
  mounted() {
    this.getHouse()
  }
}
</script>


<style lang="css">
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
</style>
