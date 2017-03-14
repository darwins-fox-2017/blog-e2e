var app = new Vue({
  el:'#root',
  data:{
    title:"",
    content:"",
    category:"",
    created_at:"",
    slug:"",
    articles: []
  },
  methods:{
    getData: function () {
      axios.get('http://localhost:3000/api/article')
        .then(function (result) {
          app.articles = result.data
        })
    },
    deleteData: function (slug) {
      swal({
        title: "Are you sure?",
        text: "You will not be able to recover this story !",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: false
      },
      function(){
        axios.delete('http://localhost:3000/api/article/'+slug)
          .then(function (result) {
            swal(result.data.title +", Your Article has been deleted.", "success");
            app.getData()
          })
      });
    },
    updateButton:function (slug) {
      axios.get('http://localhost:3000/api/article/'+slug)
        .then(function (result) {
          app.title = result.data.title
          app.content = result.data.content
          app.category = result.data.category
          app.slug = result.data.slug
        })
    },
    updateArticle:function (slug) {
      axios.put('http://localhost:3000/api/article/'+slug,{
        title: app.title,
        content: app.content,
        category: app.category
      }).then(function (result) {
        swal("Good job! ," + result.data.title + ", success updated")
        app.getData()
      })
    }
  }
})

var article = new Vue({
  el:'#input',
  data:{
    title:"",
    content:"",
    category:""
  },
  methods:{
    createArticle: function () {
      axios.post('http://localhost:3000/api/article',{
        title: article.title,
        content: article.content,
        category: article.category
      }).then(function (result) {
          app.articles.push(result.data)
          article.emptyField()
          app.getData()
      })
    },
    emptyField: function () {
      article.title = ""
      article.content = ""
      article.category = ""
    }

  }
})

app.getData()
