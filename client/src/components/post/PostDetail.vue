<template>
<div class="">
    <el-button type="primary" @click.native="">back to home</el-button>
    <br/>
    <br/>
    <h2>Detail Item</h2>
    <h3>{{ item }}</h3>
  </div>
</template>
<script>
export default {
  data() {
    return {
      item: 'fsafs'
    }
  },

  methods: {

  }
}
</script>
