<template>
<div class="">
    <el-button type="primary" @click.native="backToList">back to list</el-button>
    <br/>
    <br/>
    <h2>Edit an item</h2>
    <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Name">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="Price">
            <el-input placeholder="Price" v-model="form.price">
                <template slot="prepend">Rp.
                </template>
              </el-input>
      </el-form-item>
        <el-form-item label="Image URL">
            <el-input placeholder="Image URL" v-model="form.pictlink">
                <template slot="prepend">Http://
                </template>
              </el-input>
      </el-form-item>

  <el-form-item label="Description">
    <el-input type="textarea" v-model="form.description"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">Update item</el-button>
    <el-button @click.native="backToList">Cancel</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
import axios from 'axios';
let host = 'http://localhost:3000/api';
export default {
    data() {
        return {
            form: {
                name: '',
                price: '',
                pictlink: '',
                description: ''
            }
        }
    },
    created() {
      this.getItem()
    },
    methods: {
        backToList() {
            this.$router.push('/items/')
        },
        onSubmit() {
          let self = this
          axios.put(host + '/items/' + self.$route.params.id + '/update', self.form).then(x => {
            console.log(x);
              if(x.status){
                self.$router.push('/items')
              } else {
                console.log('something wrong');
              }
          })
          console.log('submit!');
        },
        getItem(){
          let self = this
          axios.get(host + '/items/' + self.$route.params.id + '/edit').then(item => {
            self.form = item.data
          })
        }
    }
}
</script>
