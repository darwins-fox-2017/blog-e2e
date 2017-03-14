<template>
<div class="">
    <el-button type="primary" @click.native="addItem" title="create new post" id="create-new-post">Create post</el-button>
    <br/>
    <br/>
    <el-table :data="posts" :default-sort="{prop: 'createdAt', order: 'descending'}" style="width: 100%">
        <el-table-column prop="title" label="Title" sortable width="180">
        </el-table-column>
        <el-table-column prop="body" label="Body" width="180">
        </el-table-column>
        <el-table-column prop="slug" label="Slug">
        </el-table-column>
        <el-table-column prop="createdAt" label="Created At">
        </el-table-column>
        <el-table-column label="Operations">
            <template scope="scope">
        <el-button
          size="small"
          title="edit blogpost"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="small"
          type="danger"
          title="delete blogpost"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
</template>
  </el-table-column>
</el-table>
  <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios';
import _ from 'lodash'
let host = 'http://localhost:3000/api';

export default {
    data() {
        return {
            posts: []
        }
    },
    created() {
        console.log('run');
        this.getPosts()
    },

    methods: {
        getPosts() {
          console.log('running');
            let self = this;
            axios.get(host + '/posts')
                .then(response => {
                    // JSON responses are automatically parsed.
                    self.posts = response.data
                })
                .catch(e => {
                    console.log(e);
                })
        },
        addItem() {
            this.$router.push('/posts/new')
        },
        handleDelete(index, row) {
            this.posts.slice(index, 1)
            let self = this
            axios.delete(host + '/posts/' + row.id).then(response => {
                console.log(response);
                if (response.status) {
                    self.getPosts()
                } else {
                    self.$notify({
                        title: 'Error',
                        message: 'Something wrong while trying to delete this item',
                        duration: 6000
                    })
                }
            })
        },
        handleEdit(index, row) {
            this.$router.push('/posts/' + row.id + '/edit')
        },
        formatter(row, column) {
            return row.address;
        }
    }
}
</script>

<style>

</style>
