

<template>

<div class="">
    <el-button type="primary" @click.native="backToList">back to list</el-button>
    <br/>
    <br/>
    <h2>Add new blogpost</h2>
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
            <el-switch v-model="form.published" on-text="" off-text="">
            </el-switch>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit" name="post blogpost">Posting blogpost</el-button>
            <el-button @click.native="backToList()">Cancel</el-button>
        </el-form-item>
    </el-form>
</div>

</template>

<script>

import axios from 'axios';
import slug from 'slug'
let host = 'http://localhost:3000/api';
export default {
    data() {
            return {
                form: {
                    title: '',
                    body: '',
                    slug: '',
                    published: true
                }
            }
        },
        methods: {
            backToList() {
                    this.$router.push('/posts/')
                },
                slugIt() {
                    this.form.slug = slug(this.form.title, {
                        lower: true
                    })
                },
                onSubmit() {
                    let self = this
                    axios.post(host + '/posts/', self.form).then(x => {
                        if (x.status) {
                            self.$router.push('/posts')
                        } else {
                            console.log('something wrong');
                        }
                    })
                    console.log('submit!');
                }
        }
}

</script>
