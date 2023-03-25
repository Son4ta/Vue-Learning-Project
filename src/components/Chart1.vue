<template>
  <div id="char1">
    <div id="chart1" class="chart"></div>
  </div>
</template>

<script>
import { color } from 'echarts';
import Link from '../api/Link'
import Url from '../api/url'

export default {
  name:'char1',
  mounted(){
    let chart = this.$echarts.init(document.getElementById('chart1'), 'dark');
    Link(Url.charDataOne).then((response)=>{
      let data = response.data
      let y = data.map(v=>v.title)
      let x = data.map(v=>v.num)
      console.log(y)
      console.log(x)

      /** @type EChartsOption */
      var option = {
        title: {
          text: '人数统计'
        },
        tooltip: {},
        xAxis: {
        },
        yAxis: {
          data: y
        },
        series: [
          {
            type: 'bar',
            data: x,
            itemStyle:{
              barBorderRadius:[0,20,20,0],
              color:new this.$echarts.graphic.LinearGradient(0,0,1,0,[
                {
                  offset:0,
                  color:'#005eaa'
                },
                {
                  offset:0.5,
                  color:'#339ca8'
                },
                {
                  offset:1,
                  color:'#cda819'
                }
              ])
            }
          }
        ]
      };
      chart.setOption(option)
    })
  },
}
</script>

<style>
  h2{
    height: 0.6rem;
  }
  #char1{
    height: 100%;
  }
  .chart{
    display: block;
    height: 100%;
    width: 100%;
  }
</style>