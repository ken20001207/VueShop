<template>
  <div v-loading="Loding"
              element-loading-text="正在為您查看最新的商品"
              element-loading-background="rgba(0, 0, 0, 0.8)">
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
              <i class="el-icon-notebook-1" /> 商品分類
            </el-button>
            <el-button
              type="text"
              style="float:right; margin: 10px; font-size: 16px"
              @click="shoppinCartDrawer = true"
            >
              <i class="el-icon-shopping-cart-full" /> 購物車
            </el-button>
            <el-button type="text" style="float:right; margin: 10px; font-size: 16px">
              <i class="el-icon-s-order" />訂單查詢
            </el-button>
          </el-row>
        </el-col>
      </el-row>
    </div>

    <!-- Item classes Drawer -->
    <el-drawer :visible.sync="classesDrawer" direction="ltr" size="300px">
      <el-menu
        class="el-menu-vertical-demo"
        style="text-align: left"
      >
        <el-menu-item index="0" @click="SelcetedClass = 'all'">所有商品</el-menu-item>
        <el-menu-item
          v-for="item in ItemClasses"
          v-bind:key="item.name"
          :index="item.name"
          @click="SelcetedClass = item.id"
        >{{ item.name }}</el-menu-item>
      </el-menu>
    </el-drawer>

    <!-- Shopping cart Drawer -->
    <el-drawer :visible.sync="shoppinCartDrawer" direction="rtl" size="300px">
      <shoppincart :shoppingCarts="shoppingCarts"></shoppincart>
    </el-drawer>

    <!-- container -->
    <el-row type="flex" justify="center" class="container" align="center">
      <el-col :xs="24" :sm="22" :md="20" :lg="18" :xl="16">
        <!-- 網頁 banner -->
        <img class="banner" src="images/banner.jpg" />

        <!-- banner 下方的四個主打商品分類（單行） -->
        <div class="hidden-sm-and-down specials">
          <el-row type="flex" justify="center" :gutter="20">
            <el-col
              :span="6"
              v-for="item in SpecialClasses"
              v-bind:key="item.id"
              @click="SelcetedClass = item.id"
            >
              <el-button @click="SelcetedClass = item.id" type="text">{{ item.name }}</el-button>
            </el-col>
          </el-row>
        </div>

        <!-- banner 下方的四個主打商品分類（雙行） -->
        <div class="hidden-md-and-up specials">
          <el-row type="flex" justify="center" :gutter="40">
            <el-col :span="11" v-for="item in FirstTwoSpecialClasses" v-bind:key="item.id">
              <el-button @click="SelcetedClass = item.id" type="text">{{ item.name }}</el-button>
            </el-col>
          </el-row>
          <el-row type="flex" justify="center" :gutter="40">
            <el-col :span="11" v-for="item in LastTwoSpecialClasses" v-bind:key="item.id">
              <el-button type="text" @click="SelcetedClass = item.id">{{ item.name }}</el-button>
            </el-col>
          </el-row>
        </div>

        <el-row :gutter="10" type="flex" justify="center" align="center">
          <!-- 左邊的所有商品分類列表 -->
          <el-col :span="6" class="hidden-sm-and-down specials">
            <el-menu
              class="el-menu-vertical-demo"
              style="text-align: left"
            >
              <el-menu-item index="0" @click="SelcetedClass = 'all'">所有商品</el-menu-item>
              <el-menu-item
                v-for="item in ItemClasses"
                v-bind:key="item.name"
                :index="item.name"
                @click="SelcetedClass = item.id"
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
import shoppincart from "./shoppingcart.vue";
export default {
  name: "ItemList",
  props: {},
  components: { Itemtable, shoppincart },
  data: function() {
    return {
      SelcetedClass: "all",
      ItemClasses: [
        {
          id: "class1",
          name: "預設商品分類 1 / Default 1",
          special: 1
        },
        {
          id: "class2",
          name: "預設商品分類 2 / Default 2",
          special: 1
        },
        {
          id: "class3",
          name: "預設商品分類 3 / Default 3",
          special: 1
        },
        {
          id: "class4",
          name: "預設商品分類 4 / Default 4",
          special: 1
        },
        {
          id: "class5",
          name: "預設商品分類 5 / Default 5",
          special: 0
        },
        {
          id: "class6",
          name: "預設商品分類 6 / Default 6",
          special: 0
        },
        {
          id: "class7",
          name: "預設商品分類 7 / Default 7",
          special: 0
        },
        {
          id: "class8",
          name: "預設商品分類 8 / Default 8",
          special: 0
        },
        {
          id: "class9",
          name: "預設商品分類 9 / Default 9",
          special: 0
        },
        {
          id: "class10",
          name: "預設商品分類 10 / Default 10",
          special: 0
        },
        {
          id: "class11",
          name: "預設商品分類 11 / Default 11",
          special: 0
        },
        {
          id: "class12",
          name: "預設商品分類 12 / Default 12",
          special: 0
        }
      ],
      classesDrawer: false,
      shoppinCartDrawer: false,
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
        }
      ],
      Loding: true,
      shoppingCarts: {}
    };
  },
  computed: {
    FirstTwoSpecialClasses: function() {
      var firsttwo = [];
      if (typeof this.SpecialClasses[0] !== "undefined")
        firsttwo.push(this.SpecialClasses[0]);
      if (typeof this.SpecialClasses[1] !== "undefined")
        firsttwo.push(this.SpecialClasses[1]);
      return firsttwo;
    },
    LastTwoSpecialClasses: function() {
      var lasttwo = [];
      if (typeof this.SpecialClasses[2] !== "undefined")
        lasttwo.push(this.SpecialClasses[2]);
      if (typeof this.SpecialClasses[3] !== "undefined")
        lasttwo.push(this.SpecialClasses[3]);
      return lasttwo;
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
    },
    SpecialClasses: function() {
      return this.ItemClasses.filter(function(theclass) {
        return theclass.special == 1;
      });
    }
  },
  methods: {
    changeSelectedClass: function(newClass) {
      this.SelcetedClass = newClass;
    }
  },
  created: function() {
    this.$http
      .get("http://sgp1.linyuanlin.com:3000/backend/classes")
      .then(function(res) {
        this.ItemClasses = res.body.classes;
      })
      .then(
        this.$http
          .get("http://sgp1.linyuanlin.com:3000/backend/items")
          .then(function(res) {
            this.Loding = false;
            this.Items = res.body.items;
          })
      );
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
  padding-bottom: 50px;
}
i {
  margin-right:8px;
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