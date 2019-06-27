<template>
  <v-layout>
    <v-flex>
      <v-layout justify-start align-start wrap>
        <v-flex v-for="(item,i) in items" :key="`card-${i}`" xs12 sm5 md4 lg4 xl2 class="pa-2">
          <v-card :class="{sale: item.sale}" nuxt to="/">
            <div class="photo">
              <v-img :src="item.imgUrl" class="image" contain></v-img>
              <div class="top-block">
                <v-icon large color="teal accent-3" v-if="item.new">fiber_new</v-icon>
                <v-icon x-large color="red accent-3" v-if="item.sale">star</v-icon>
              </div>
            </div>
            <v-card-title class="font-weight-bold py-0 pt-3 card-subtitle">{{item.mark}}</v-card-title>
            <v-card-text
              class="title py-1 card-title font-weight-thin text-truncate"
            >{{item.model}}</v-card-text>
            <v-card-text class="price mt-2 py-0">
              <div class="price__now">{{item.price}} грн</div>
              <div class="price__old">{{item.oldPrice}} грн</div>
            </v-card-text>
            <v-card-actions>
              <v-spacer/>
              <v-btn color="teal accent-3" round flat nuxt to="/inspire">Перейти</v-btn>
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
      count: 3,
      items: [
        {
          mark: "Under Armour1",
          model: "UA HOVR SLK UA HOVR SLKUA HOVR SLK",
          price: 9700,
          oldPrice: 99000,
          sale: true,
          new: true,
          imgUrl: require(`@/assets/images/product/mini.jpg`)
        },
        {
          mark: "Under Armour2",
          model: "UA HOVR SLK UA HOVR SLKUA HOVR SLK",
          price: 2700,
          oldPrice: 79000,
          sale: false,
          new: true,
          imgUrl: require(`@/assets/images/product/mini.jpg`)
        },
        {
          mark: "Under Armour3",
          model: "UA HOVR SLK UA HOVR SLKUA HOVR SLK",
          price: 97454,
          oldPrice: 99453,
          sale: false,
          new: false,
          imgUrl: require(`@/assets/images/product/mini.jpg`)
        },
        {
          mark: "Under Armour4",
          model: "UA HOVR SLK UA HOVR SLKUA HOVR SLK",
          price: 9700,
          oldPrice: 99000,
          sale: true,
          new: true,
          imgUrl: require(`@/assets/images/product/mini.jpg`)
        },
        {
          mark: "Under Armour5",
          model: "UA HOVR SLK UA HOVR SLKUA HOVR SLK",
          price: 9700,
          oldPrice: 99000,
          sale: false,
          new: true,
          imgUrl: require(`@/assets/images/product/mini.jpg`)
        },
        {
          mark: "Under Armour6",
          model: "UA HOVR SLK UA HOVR SLKUA HOVR SLK",
          price: 9700,
          oldPrice: 99000,
          sale: false,
          new: false,
          imgUrl: require(`@/assets/images/product/mini.jpg`)
        },
        {
          mark: "Under Armour7",
          model: "UA HOVR SLK UA HOVR SLKUA HOVR SLK",
          price: 9700,
          oldPrice: 99000,
          sale: true,
          new: true,
          imgUrl: require(`@/assets/images/product/mini.jpg`)
        },
        {
          mark: "Under Armour8",
          model: "UA HOVR SLK UA HOVR SLKUA HOVR SLK",
          price: 9700,
          oldPrice: 99000,
          sale: false,
          new: true,
          imgUrl: require(`@/assets/images/product/mini.jpg`)
        },
        {
          mark: "Under Armour9",
          model: "UA HOVR SLK UA HOVR SLKUA HOVR SLK",
          price: 9700,
          oldPrice: 99000,
          sale: false,
          new: false,
          imgUrl: require(`@/assets/images/product/mini.jpg`)
        }
      ]
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
$accent: #ef5350;
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
  display: flex;
  // padding: 0px 16px 5px 16px;
  &__now {
    font-size: 24px;
    align-self: flex-end;
    letter-spacing: 0.05em;
    width: 50%;
    & {
      // color: #f4511e;
    }
  }
  &__old {
    font-size: 18px;
    align-self: flex-end;
    line-height: 18px;
    color: #eeeeee;
    font-family: "Roboto";
    font-weight: 400;
    position: relative;
    display: none;
    &::after {
      display: block;
      content: "";
      width: 100%;
      height: 4px;
      width: 110%;
      left: -5%;
      bottom: 8px;
      position: absolute;
      background-color: $accent;
      opacity: 0.7;
      border-radius: 2px;
    }
  }
}
.card-subtitle {
  color: #bdbdbd;
}
.card-title {
  color: #eeeeee;
}
.top-block {
  position: absolute;
  right: 0;
  top: 0;
  // display: flex;
  // width: 100%;
  // justify-content: flex-end;
  // user-select: none;
}
.sale__icon {
  color: $accent;
}
.sale {
  .price {
    color: $accent;
    &__old {
      display: block;
    }
    &__new {
    }
  }
}
</style>