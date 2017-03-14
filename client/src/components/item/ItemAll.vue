<template>
<div class="">
    <el-button type="primary" @click.native="addItem">Add item</el-button>
    <br/>
    <br/>
    <el-table :data="items" :default-sort="{prop: 'name', order: 'descending'}" style="width: 100%">
        <el-table-column prop="name" label="Name" sortable width="180">
        </el-table-column>
        <el-table-column prop="price" label="Price" width="180">
        </el-table-column>
        <el-table-column prop="description" label="Description">
        </el-table-column>
        <el-table-column label="Operations">
            <template scope="scope">
        <el-button
          size="small"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
</template>
  </el-table-column>
</el-table>
  <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios';
let host = 'http://localhost:3000/api';

export default {
    data() {
        return {
            items: []
        }
    },
    created() {
        console.log('run');
        this.getItems()
    },

    methods: {
        getItems() {
            let self = this;
            axios.get(host + '/items')
                .then(response => {
                    // JSON responses are automatically parsed.
                    self.items = response.data
                })
                .catch(e => {
                    console.log(e);
                })
        },
        addItem() {
            this.$router.push('/items/new')
        },
        handleDelete(index, row) {
            this.items.slice(index, 1)
            let self = this
            axios.delete(host + '/items/' + row.id).then(response => {
                console.log(response);
                if (response.status) {
                    self.getItems()
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
            this.$router.push('/items/' + row.id + '/edit')
        },
        formatter(row, column) {
            return row.address;
        }
    }
}
</script>

<style>

</style>
