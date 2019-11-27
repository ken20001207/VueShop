<template>
  <div>
    <el-row style="text-align: center">
      <ItemPreview 
        style="display:inline-block;"
        v-for="i in PageItemAmount"
        :item="getIteminSelectedClass[i + ((CurrentPage-1) * 12) - 1]"
        v-bind:key="getIteminSelectedClass[i + ((CurrentPage-1) * 12) - 1].name"
      ></ItemPreview>
    </el-row>
    <el-row type="flex" justify="center" style="margin-top:20px">
      <el-pagination
        layout="prev, pager, next"
        :total="TotalItemAmount"
        :current-page.sync="CurrentPage"
      ></el-pagination>
    </el-row>
  </div>
</template>

<script>
import ItemPreview from "./ItemPreview.vue";
export default {
  name: "Itemtable",
  data: function() {
    return {
      CurrentPage: 1
    };
  },
  props: ["SelcetedClass", "Items"],
  components: { ItemPreview },
  computed: {
    // return the amount of items which should display on the table.
    PageItemAmount: function() {
      if (this.TotalItemAmount - (this.CurrentPage - 1) * 12 > 12) {
        return 12;
      } else {
        return this.TotalItemAmount - (this.CurrentPage - 1) * 12;
      }
    },

    // return the amount of items which belongs to selected class.
    TotalItemAmount: function() {
      if (this.SelcetedClass == "all") {
        return this.Items.length;
      } else {
        var count = 0;
        for (var i = 0; i < this.Items.length; i++) {
          if (this.Items[i].class == this.SelcetedClass) {
            count++;
          }
        }
        return count;
      }
    },

    // return the array of items which belongs to the selected class.
    getIteminSelectedClass: function() {
      var sc = this.SelcetedClass;
      if (this.SelcetedClass == "all") {
        return this.Items;
      } else {
        return this.Items.filter(function(u) {
          return u.class == sc;
        });
      }
    }
  },

  watch: {
    // back to page one when the selected class changed.
    SelcetedClass: function() {
      this.CurrentPage = 1;
    }
  }
};
</script>