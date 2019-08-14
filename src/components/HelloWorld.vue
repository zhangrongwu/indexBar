<template>
  <div class="hello">
    <van-nav-bar title="indexBarDemo" />
    <van-index-bar :index-list="indexList" >
      <div v-for="(item, idx) in indexList" :key="idx">
        <van-index-anchor :index="idx">
          {{item}}
        </van-index-anchor>
        <van-cell v-for="obj in object[item]" :key="obj">{{obj}}
        </van-cell>
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import pinyin from "./pinyin"
export default {
  name: 'HelloWorld',
  data() {
    return {
      dataList: ["架构设计", "前端开发", "移动端开发", "&张荣武", "@全粘工程师", "美术设计", "删库跑路", "智慧投资", "商机投资", "后端开发", "区块链", "测试", "大数据", "java", "web", "vue", "鄂尔多斯", "北京", "人工智能", "家庭互联", "智能车辆"],
      indexList: [],
      object: {}
    }
  },
  created() {
    this.dataList.forEach(element => {
      var py = pinyin.getFirstCamelChars(element);
      if (!this.object[py]) {
        this.object[py] = [];
        this.indexList.push(py)
      }
      this.object[py].push(element);
    });
    // 添加数据排序
    this.indexList.sort();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
