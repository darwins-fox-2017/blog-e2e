<template>
<div class="">
    <el-button type="primary" @click.native="backToList">back to list</el-button>
    <br/>
    <br/>
    <h2>Edit an item</h2>
    <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Title">
            <el-input v-model="form.title" @blur="slugIt()" name="title"></el-input>
        </el-form-item>
        <el-form-item label="Content Body">
            <el-input type="textarea" :rows="2" placeholder="Please input" v-model="form.body" name="body">
            </el-input>
        </el-form-item>
        <el-form-item label="Slug URL">
            <el-input placeholder="Slug URL" v-model="form.slug" name="slug">
                <template slot="prepend">Http://dikyarga.com/
                </template>
            </el-input>
        </el-form-item>

        <el-form-item label="Publised ?">
            <el-switch v-model="form.published" on-text="" off-text="" name="published">
            </el-switch>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit" name="update blogpost">Update blogpost</el-button>
            <el-button @click.native="backToList()">Cancel</el-button>
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
      this.getPost()
    },
    methods: {
        backToList() {
            this.$router.push('/posts/')
        },
        onSubmit() {
          let self = this
          axios.put(host + '/posts/' + self.$route.params.id, self.form).then(x => {
            console.log(x);
              if(x.status){
                self.$router.push('/posts')
              } else {
                console.log('something wrong');
              }
          })
          console.log('submit!');
        },
        getPost(){
          let self = this
          axios.get(host + '/posts/' + self.$route.params.id).then(item => {
            self.form = item.data
          })
        }
    }
}
</script>
