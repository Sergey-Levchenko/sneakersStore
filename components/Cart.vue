<template>
  <div>
    <v-card class="cart" transition="slide-y-transition" v-if="cart">
      <v-toolbar color="pink" dark>
        <v-toolbar-title>Сумма</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-title>70000 грн</v-toolbar-title>
      </v-toolbar>
      <v-list two-line>
        <template v-for="(item, index) in items">
          <v-list-tile :key="index" avatar ripple>
            <v-list-tile-content>
              <v-list-tile-title>Какой-то длинный текст</v-list-tile-title>
              <!--<v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>-->
            </v-list-tile-content>
            <v-card-actions>
              <v-btn class="amount-btn ma-0 pa-0" flat icon @click="changeAmount(index,false)">-</v-btn>
              <input type="num" class="amount" v-model="count[index]">
              <v-btn class="amount-btn ma-0 pa-0" flat icon @click="changeAmount(index,true)">+</v-btn>
            </v-card-actions>
          </v-list-tile>
          <v-divider v-if="index + 1 < items.length" :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-card>
  </div>
</template>
<script>
export default {
  props: ["cart"],
  data: () => ({
    edit: false,
    count: [],
    items: [
      {
        icon: "apps",
        title: "Главная",
        to: "/",
        amount:5
      },
      {
        icon: "bubble_chart",
        title: "Каталог",
        to: "/catalog",
        amount:1
      },
      {
        icon: "bubble_chart",
        title: "Контакты",
        to: "/contacts",
        amount:3
      }
    ]
  }),
  methods: {
    changeAmount(index,val){
      if(!val && this.count[index]>0){
        this.$set(this.count, index,--this.count[index]);
      }
      if(val){
        this.$set(this.count, index,++this.count[index]);
      }
    }
  },
  mounted(){
    this.items.forEach(item=>{
      this.count.push(item.amount)
    })
  }
};
</script>
<style lang='scss' scoped>
.cart {
  position: fixed;
  top: 100%;
  right: 0px;
  width: 400px;
}
.amount {
  width: 36px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 20px;
  overflow: hidden;
  white-space:nowrap;
}
.amount-btn {
  font-size: 30px;
  line-height: 100%;
}
</style>