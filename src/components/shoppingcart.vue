<template>
  <div>
    <el-row type="flex" justify="center" class="hidden-sm-and-down">
      <el-col :span="20">
        <h3>購物車</h3>
        <el-table show-summary :summary-method="getSummaries" :data="shoppingCart" style="width: 100%" height="90%">
          <el-table-column width="120" lable="img">
            <template slot-scope="scope">
              <img :src="'images/items/' + scope.row.name + '/img.jpeg'" width="100%" />
            </template>
          </el-table-column>
          <el-table-column prop="name" label="商品名稱"></el-table-column>
          <el-table-column prop="price" label="單價" width="90"></el-table-column>
          <el-table-column label="數量" width="180">
            <template slot-scope="scope">
              <el-input-number size="mini" v-model="scope.row.amount" :min="1"></el-input-number>
            </template>
          </el-table-column>
          <el-table-column label="合計" width="90">
            <template slot-scope="scope">{{ scope.row.price * scope.row.amount}}</template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>

    <el-row type="flex" justify="center" class="hidden-md-and-up">
      <el-col :span="23">
        <h3>購物車</h3>
        <el-table show-summary :summary-method="getSummaries" :data="shoppingCart" style="width: 100%" >
          <el-table-column width="0" lable="img">
            <template slot-scope="scope">
              <img :src="'images/items/' + scope.row.name + '/img.jpeg'" width="100%" />
            </template>
          </el-table-column>
          <el-table-column prop="name" label="商品名稱"></el-table-column>
          <el-table-column prop="price" label="單價" width="45"></el-table-column>
          <el-table-column label="數量" width="120">
            <template slot-scope="scope">
              <el-input-number size="mini" v-model="scope.row.amount" :min="1"></el-input-number>
            </template>
          </el-table-column>
          <el-table-column label="合計" width="80">
            <template slot-scope="scope">{{ scope.row.price * scope.row.amount}}</template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "shoppingcart",
  props: ["shoppingCart", "sumprice"],
  methods: {
    getSummaries(param) {
      const { columns } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "總計";
          return;
        }
        if(index > 0 && index < 4) {
          sums[index] = "";
          return;
        }
        if(index === 4) {
          sums[index] = this.sumprice + " 元";
        }
      });

      return sums;
    }
  }
};
</script>