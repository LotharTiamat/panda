<template>
  <div class="realspace">
    <header>
      <div class="title"></div>
      <div class="icon"></div>
    </header>
    <!-- 大容器 -->
    <section class="container">
      <!-- 左容器 -->
      <section class="itemLeft">
        <ItemPage>
          <ItemOne />
        </ItemPage>
        <ItemPage>
          <ItemTwo />
        </ItemPage>
      </section>
      <!-- 中容器 -->
      <section class="itemCenter">

        <MapPage />
      </section>
      <!-- 右容器 -->
      <section class="itemRight">
        <ItemPage>
          <ItemThree />
        </ItemPage>
        <ItemPage>
          <ItemFour />
        </ItemPage>
      </section>
    </section>
  </div>
</template>

<script>
import ItemPage from "@/components/itemPage.vue";

import ItemOne from "@/components/itemOne.vue"
import ItemTwo from "@/components/itemTwo.vue"
import ItemThree from "@/components/itemThree.vue"
import ItemFour from "@/components/itemFour.vue"
import MapPage from "@/components/mapPage.vue"

import { inject } from "vue"
export default {
  components: {
    ItemPage, ItemOne, ItemTwo, ItemThree, ItemFour, MapPage
  },
  setup() {
    let $echarts = inject("echarts")
    let $http = inject("axios")
    console.log($echarts)
    console.log($http)
  }
};
</script>

<style lang="less">
.realspace {
  margin: 5vh 7vw;
}

.title {
  background: url("@/assets/title.png") no-repeat;
  background-size: contain;
  height: 100%;
  width: 8rem;
}

.icon {
  background: url("@/assets/airplane.png") no-repeat;
  background-size: contain;
  height: 100%;
  width: 2rem;
}

header {
  height: 1.25rem;
  width: 100%;
  padding: 0.125rem;

  display: flex;
  justify-content: space-between;
  /* 将子元素推到容器的两边 */
}

// 大容器的样式
.container {
  // 容器样式
  // background: rgba(255, 255, 255, .5);
  // box-shadow: 0 0 20px rgba(0, 0, 0, .25);
  // border-radius: 10px;

  padding: 0.125rem;
  // background-color: gray;
  display: flex;

  // 设置左右在页面的份数
  .itemLeft,
  .itemRight {
    flex: 3;
  }

  .itemCenter {
    flex: 5;
    height: 9rem;
    margin: .25rem;

    //设置边框样式
    border: 30px solid red;
    border-width: 0.85rem .2rem .2rem .2rem;
    border-image-source: url("@/assets/border2.png");
    border-image-slice: 140 60 85 85;
  }
}
</style>