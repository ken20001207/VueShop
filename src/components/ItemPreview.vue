<template>
  <el-card :body-style="{ padding: '0px'}" style="margin: 12px" shadow="hover">
    <!-- <img :src="'images/items/' + item.name + '/img.jpeg'" /> -->
    <img :src="'images/items/範例商品1/img.jpeg'" class="image" />
    <div style="padding: 14px;">
      <el-button type="text" @click="router.push('/item/' + item.id)">{{ item.name }}</el-button>
      <div class="bottom clearfix">
        <p>NT {{ item.price }}</p>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "ItemPreview",
  props: ["item"]
};
</script>

<style scoped>
@media (max-width: 768px) {
  img {
    width: 160px;
  }
}

@media (min-width: 768px) {
  img {
    width: 200px;
  }
}
</style>