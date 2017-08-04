<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>DEMO</h2>
    <ul>
      <li><router-link to="/routerddForm" target="_blank">新增表单</router-link></li><br>
      <li><router-link to="/list" target="_blank">列表内容</router-link></li><br>
      <li><router-link to="/readMe" target="_blank">操作说明</router-link></li><br>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '欢迎来到华夏信财'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
