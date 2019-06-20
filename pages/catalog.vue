<template>
  <v-layout>
    <v-flex>
      <v-layout justify-space-around align-start wrap>
        <v-flex v-for="i in 5" :key="`card-${i}`" xs12 sm5 md4 lg4 xl2 class="pa-2">
          <v-card>
            <div class="photo">
              <v-img :src="require(`@/assets/images/product/mini.jpg`)" class="image" contain></v-img>
            </div>
            <v-card-title class="headline py-0 pt-3 card-subtitle">Under Armour</v-card-title>
            <v-card-text class="display-1 py-0 card-title">UA HOVR SLK</v-card-text>
            <v-card-text class="price mt-2 py-0">4277 грн</v-card-text>
            <v-card-actions>
              <v-spacer/>
              <v-btn color="deep-purple lighten-2" round flat nuxt to="/inspire">Перейти</v-btn>
              <v-btn color="teal accent-3" flat icon nuxt to="/inspire">
                <v-icon dark>add</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      count: 3
    };
  },
  methods: {
    load() {
      this.count += 2;
    }
  }
};
</script>
<style lang='scss' scoped>
.photo {
  height: 200px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image {
  width: 100px;
  height: 100px;
}
.price {
  color: #fff9c4;
  line-height: 1.3em;
  font-size: 20px;
  // padding: 0px 16px 5px 16px;
}
.card-subtitle {
  color: #bdbdbd;
}
.card-title {
  color: #eeeeee;
}
</style>