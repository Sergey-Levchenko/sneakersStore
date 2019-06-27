<template>
  <v-app dark>
    <v-navigation-drawer
      temporary
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-tile v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar :clipped-left="clipped" fixed app>
      <v-toolbar-side-icon @click="drawer = !drawer"/>

      <v-toolbar-title v-text="title"/>
      <v-spacer/>
      <v-badge left overlap color="teal accent-3">
        <template v-slot:badge>
          <span :style="{color:'#212121', fontWeight:500}">6</span>
        </template>
        <v-btn flat icon @click="cart = !cart">
          <v-icon>shopping_cart</v-icon>
        </v-btn>
      </v-badge>

      <cart :cart="cart"></cart>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>

    <v-footer :fixed="fixed" app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import cart from "~/components/Cart.vue";
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      cart:false,
      items: [
        {
          icon: "apps",
          title: "Главная",
          to: "/"
        },
        {
          icon: "bubble_chart",
          title: "Каталог",
          to: "/catalog"
        },
        {
          icon: "bubble_chart",
          title: "Контакты",
          to: "/contacts"
        }
      ],
      miniVariant: false,
      title: "Vuetify.js"
    };
  },
  components:{
    cart
  },
  mounted(){
    
  }
};
</script>
<style lang="scss" scoped>
.cart {
  position: fixed;
  top: 100%;
  right: 0px;
  width: 300px;
}
</style>

