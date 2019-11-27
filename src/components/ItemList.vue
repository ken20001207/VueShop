<template>
  <div>
    <!-- navbar -->
    <div class="nav">
      <el-row type="flex" justify="center">
        <el-col :xs="20" :sm="20" :md="20" :lg="18" :xl="16">
          <el-row>
            <el-button
              type="text"
              @click="classesDrawer = true"
              style="float:left; margin: 10px; font-size: 16px"
            >
              <i class="el-icon-notebook-1">商品分類</i>
            </el-button>
            <el-button
              type="text"
              style="float:right; margin: 10px; font-size: 16px"
              @click="shoppinCartDrawer = true"
            >
              <i class="el-icon-shopping-cart-full">購物車</i>
            </el-button>
            <el-button type="text" style="float:right; margin: 10px; font-size: 16px">
              <i class="el-icon-s-order">訂單查詢</i>
            </el-button>
          </el-row>
        </el-col>
      </el-row>
    </div>

    <!-- Item classes Drawer -->
    <el-drawer :visible.sync="classesDrawer" direction="ltr" size="300px">
      <el-menu class="el-menu-vertical-demo" style="text-align: left">
        <el-menu-item index="0" @click="SelcetedClass = 'all'">所有商品</el-menu-item>
        <el-menu-item
          v-for="item in ItemClasses"
          v-bind:key="item.name"
          :index="item.name"
          @click="SelcetedClass = item.name"
        >{{ item.name }}</el-menu-item>
      </el-menu>
    </el-drawer>

    <!-- Shopping cart Drawer -->
    <el-drawer :visible.sync="shoppinCartDrawer" direction="rtl" size="300px">
      <shoppinCart :shoppingCart="shoppinCart"></shoppinCart>
    </el-drawer>

    <!-- container -->
    <el-row type="flex" justify="center" class="container">
      <el-col :xs="24" :sm="22" :md="20" :lg="18" :xl="16">
        <!-- 網頁 banner -->
        <img class="banner" src="images/banner.jpg" />

        <!-- banner 下方的四個主打商品分類（單行） -->
        <div class="hidden-sm-and-down specials">
          <el-row type="flex" justify="center" :gutter="20">
            <el-col
              :span="6"
              v-for="item in SpecialClasses"
              v-bind:key="item.key"
              @click="SelcetedClass = item.name"
            >
              <el-button @click="SelcetedClass = item.name" type="text">{{ item.name }}</el-button>
            </el-col>
          </el-row>
        </div>

        <!-- banner 下方的四個主打商品分類（雙行） -->
        <div class="hidden-md-and-up specials">
          <el-row type="flex" justify="center" :gutter="40">
            <el-col :span="11" v-for="item in FirstTwoSpecialClasses" v-bind:key="item.key">
              <el-button @click="SelcetedClass = item.name" type="text">{{ item.name }}</el-button>
            </el-col>
          </el-row>
          <el-row type="flex" justify="center" :gutter="40">
            <el-col :span="11" v-for="item in LastTwoSpecialClasses" v-bind:key="item.key">
              <el-button type="text" @click="SelcetedClass = item.name">{{ item.name }}</el-button>
            </el-col>
          </el-row>
        </div>

        <el-row :gutter="10">
          <!-- 左邊的所有商品分類列表 -->
          <el-col :span="6" class="hidden-sm-and-down specials">
            <el-menu class="el-menu-vertical-demo" style="text-align: left">
              <el-menu-item index="0" @click="SelcetedClass = 'all'">所有商品</el-menu-item>
              <el-menu-item
                v-for="item in ItemClasses"
                v-bind:key="item.name"
                :index="item.name"
                @click="SelcetedClass = item.name"
              >{{ item.name }}</el-menu-item>
            </el-menu>
          </el-col>

          <!-- 右邊的商品列表 -->
          <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
            <Itemtable :Items="Items" :SelcetedClass="SelcetedClass"></Itemtable>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>


<script>
import Itemtable from "./Itemtable.vue";
import shoppinCart from "./shoppingcart.vue";

export default {
  name: "ItemList",
  props: {},
  components: { Itemtable, shoppinCart},
  data: function() {
    return {
      SelcetedClass: "all",
      SpecialClasses: [
        {
          id: "class1",
          name: "預設商品分類 1 / Default 1"
        },
        {
          id: "class2",
          name: "預設商品分類 2 / Default 2"
        },
        {
          id: "class3",
          name: "預設商品分類 3 / Default 3"
        },
        {
          id: "class4",
          name: "預設商品分類 4 / Default 4"
        }
      ],
      ItemClasses: [
        {
          id: "class1",
          name: "預設商品分類 1 / Default 1"
        },
        {
          id: "class2",
          name: "預設商品分類 2 / Default 2"
        },
        {
          id: "class3",
          name: "預設商品分類 3 / Default 3"
        },
        {
          id: "class4",
          name: "預設商品分類 4 / Default 4"
        },
        {
          id: "class5",
          name: "預設商品分類 5 / Default 5"
        },
        {
          id: "class6",
          name: "預設商品分類 6 / Default 6"
        },
        {
          id: "class7",
          name: "預設商品分類 7 / Default 7"
        },
        {
          id: "class8",
          name: "預設商品分類 8 / Default 8"
        },
        {
          id: "class9",
          name: "預設商品分類 9 / Default 9"
        },
        {
          id: "class10",
          name: "預設商品分類 10 / Default 10"
        },
        {
          id: "class11",
          name: "預設商品分類 11 / Default 11"
        },
        {
          id: "class12",
          name: "預設商品分類 12 / Default 12"
        }
      ],
      Items: [
        {
          name: "範例商品1",
          id: 1,
          price: 250,
          class: "預設商品分類 1 / Default 1"
        },
        {
          name: "範例商品2",
          id: 1,
          price: 250,
          class: "預設商品分類 1 / Default 1"
        },
        {
          name: "範例商品3",
          id: 1,
          price: 250,
          class: "預設商品分類 1 / Default 1"
        },
        {
          name: "範例商品4",
          id: 1,
          price: 250,
          class: "預設商品分類 1 / Default 1"
        },
        {
          name: "範例商品5",
          id: 1,
          price: 250,
          class: "預設商品分類 1 / Default 1"
        },
        {
          name: "範例商品6",
          id: 1,
          price: 250,
          class: "預設商品分類 1 / Default 1"
        },
        {
          name: "範例商品7",
          id: 1,
          price: 250,
          class: "預設商品分類 1 / Default 1"
        },
        {
          name: "範例商品8",
          id: 1,
          price: 250,
          class: "預設商品分類 1 / Default 1"
        },
        {
          name: "範例商品9",
          id: 1,
          price: 250,
          class: "預設商品分類 1 / Default 1"
        },
        {
          name: "範例商品10",
          id: 1,
          price: 250,
          class: "預設商品分類 2 / Default 2"
        },
        {
          name: "範例商品11",
          id: 1,
          price: 250,
          class: "預設商品分類 2 / Default 2"
        },
        {
          name: "範例商品12",
          id: 1,
          price: 250,
          class: "預設商品分類 2 / Default 2"
        },
        {
          name: "範例商品13",
          id: 1,
          price: 250,
          class: "預設商品分類 2 / Default 2"
        },
        {
          name: "範例商品14",
          id: 1,
          price: 250,
          class: "預設商品分類 2 / Default 2"
        },
        {
          name: "範例商品15",
          id: 1,
          price: 250,
          class: "預設商品分類 2 / Default 2"
        },
        {
          name: "範例商品16",
          id: 1,
          price: 250,
          class: "預設商品分類 3 / Default 3"
        },
        {
          name: "範例商品17",
          id: 1,
          price: 250,
          class: "預設商品分類 3 / Default 3"
        },
        {
          name: "範例商品18",
          id: 1,
          price: 250,
          class: "預設商品分類 4 / Default 4"
        },
        {
          name: "範例商品19",
          id: 1,
          price: 250,
          class: "預設商品分類 4 / Default 4"
        },
        {
          name: "範例商品20",
          id: 1,
          price: 250,
          class: "預設商品分類 4 / Default 4"
        },
        {
          name: "範例商品21",
          id: 1,
          price: 250,
          class: "預設商品分類 5 / Default 5"
        },
        {
          name: "範例商品22",
          id: 1,
          price: 250,
          class: "預設商品分類 5 / Default 5"
        },
        {
          name: "範例商品23",
          id: 1,
          price: 250,
          class: "預設商品分類 5 / Default 5"
        },
        {
          name: "範例商品24",
          id: 1,
          price: 250,
          class: "預設商品分類 5 / Default 5"
        },
        {
          name: "範例商品25",
          id: 1,
          price: 250,
          class: "預設商品分類 5 / Default 5"
        },
        {
          name: "範例商品26",
          id: 1,
          price: 250,
          class: "預設商品分類 5 / Default 5"
        },
        {
          name: "範例商品27",
          id: 1,
          price: 250,
          class: "預設商品分類 5 / Default 5"
        },
        {
          name: "範例商品28",
          id: 1,
          price: 250,
          class: "預設商品分類 5 / Default 5"
        },
        {
          name: "範例商品29",
          id: 1,
          price: 250,
          class: "預設商品分類 6 / Default 6"
        },
        {
          name: "範例商品30",
          id: 1,
          price: 250,
          class: "預設商品分類 6 / Default 6"
        },
        {
          name: "範例商品31",
          id: 1,
          price: 250,
          class: "預設商品分類 5 / Default 5"
        },
        {
          name: "範例商品32",
          id: 1,
          price: 250,
          class: "預設商品分類 6 / Default 6"
        },
        {
          name: "範例商品33",
          id: 1,
          price: 250,
          class: "預設商品分類 6 / Default 6"
        }
      ],
      classesDrawer: false,
      shoppinCartDrawer: false
    };
  },
  computed: {
    FirstTwoSpecialClasses: function() {
      return [this.SpecialClasses[0], this.SpecialClasses[1]];
    },
    LastTwoSpecialClasses: function() {
      return [this.SpecialClasses[2], this.SpecialClasses[3]];
    },
    TotalItemAmount: function() {
      if (this.SelcetedClass == "all") {
        return this.Items.length;
      } else {
        var count = 0;
        for (var item in this.items) {
          if (item.class == this.SelcetedClass) {
            count++;
          }
        }
        return count;
      }
    }
  },
  methods: {
    changeSelectedClass: function(newClass) {
      this.SelcetedClass = newClass;
    }
  }
};
</script>

<style scoped>
.banner {
  width: 100%;
}
.specials {
  margin-top: 20px;
  font-size: 10px;
  text-align: center;
}
.container {
  margin-bottom: 50px;
}
img {
  margin-top: 50px;
}
.nav {
  background-color: white;
  z-index: 100;
  position: fixed;
  width: 100%;
}
</style>