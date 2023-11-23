<template>
  <div class="map" id="map"></div>
</template>

<script>
import axios from "axios";
import { map } from "d3-array";
import { onMounted, reactive, inject } from "vue";
export default {
  setup() {
    let $echarts = inject("echarts");
    let mapData = reactive({});
    async function getState() {
      mapData = await axios.get("http://localhost:5173/map/world.json");
    }

    onMounted(() => {
      console.log("aa", mapData)
      getState().then(() => {
        console.log("map", mapData);
        $echarts.registerMap("world", mapData.data);
        let myChart = $echarts.init(document.getElementById("map"));
        myChart.setOption({

          tooltip: {
            trigger: "item"
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          // title: {
          //   text: "城市销量",
          //   left: "45%",
          //   textStyle: {
          //     color: "#fff",
          //     fontSize: 20,
          //     textShadowBlur: 10,
          //     textShadowColor: "#33ffff"
          //   }
          // },
          // visualMap: {
          //   show: true,
          //   left: 'left',
          //   top: 'bottom',
          //   seriesIndex: [0],
          //   type: 'piecewise',
          //   pieces: [
          //     { min: 20, color: 'rgb(254,57,101)' },
          //     { min: 10, max: 20, color: 'rgb(252,157,154)' },
          //     { min: 4, max: 10, color: 'rgb(249,205,173)' },
          //     { min: 2, max: 4, color: 'rgb(200,200,169)' },
          //     { min: 0, max: 2, color: 'rgb(131,175,155)' }
          //   ],
          //   textStyle: {
          //     color: '#000000'
          //   }
          // },
          geo: {
            show: true,
            map: "world",
            zoom: 1.1,
            label: {
              normal: {
                show: false,
                fontSize: 12,
              },
              emphasis: {
                show: false,
              },
              // regions: [
              //   {
              //     name: 'China', // 区域的名称，确保使用地图数据中定义的正确名称
              //     selected: true, // 设置为 true 表示该区域高亮显示
              //     itemStyle: {
              //       emphasis: {
              //         areaColor: '#FFD700' // 高亮显示时的区域颜色
              //       }
              //     }
              //   }
              // ]
            },
            roam: true,

            itemStyle: {
              normal: {
                areaColor: '#F6F6F6',
                borderColor: '#666666',
              },
              emphasis: {
                areaColor: '#0099CC',
                focus: "self",
              }
            },
            // projection: {
            //   project: point => [
            //     (point[0] / 180) * Math.PI,
            //     -Math.log(Math.tan((Math.PI / 2 + (point[1] / 180) * Math.PI) / 2))
            //   ],
            //   unproject: point => [
            //     (point[0] * 180) / Math.PI,
            //     ((2 * 180) / Math.PI) * Math.atan(Math.exp(point[1])) - 90
            //   ]
            // }
          },
        });
        myChart.off('click')
        myChart.on("click", function (args) {
          console.log(args);
        })
      });
    });
    return {
      getState,
      mapData,
    };
  },
};


</script>

<style>
.map {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
}
</style>
