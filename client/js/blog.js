$(document).ready(function () {
  loadData()
})

function loadData () {
  $.ajax({
    url: 'http://localhost:3000/api/articles',
    type: 'GET',
    success: (articles) => {
      $('#blogs').empty()
      articles.forEach((article) => {
        $('#blogs').append(
          `<div class="col-lg-3 col-md-3 col-sm-4" style="margin-right: 50px;">
        </div>
        <div class="article">
          <div class="col-lg-6 entry">
            <div class="title">
              <h2 id = "title-${article.slug}">${article.title}</h2>
            </div>
            <div class="POST">
              <figure data-orig-width="2280" data-orig-height="1144" class="tmblr-full" style="margin-bottom:30px">
                <img id= "img-${article.slug}" src="${article.image}" alt="image" width="540" height="271">
              </figure>
              <p id="content-${article.slug}">${article.content}
                <br>
              </p>
              </div>
          </div>
          <div class="col-lg-2">
            <div id="createdAt-${article.slug}" class="date">${article.createdAt}</div>
            <div class="tweet share-link clearfix">
              <button class="btn-default" id="btn-edit-article" style="border: 1px solid transparent;"  data-toggle="modal" data-target="#editArticle" onclick="getOneArticle('${article.slug}')">Edit</button>
              <button class="btn-info" id="btn-delete-article" style="border: 1px solid transparent;" onclick="removeArticle('${article.slug}')">Delete</button>
            </div>
          </div>
        </div>
        <div class="row" style="margin-top:50px; margin-bottom:50px"><hr></div>
      </div>`)
      })
    }
  })
}

let getOneArticle = (slug) => {
  $.ajax({
    url: 'http://localhost:3000/api/article/' + slug,
    type: 'GET',
    success: (article) => {
      $('#edit_title').val(article.title)
      $('#edit_category').val(article.category)
      $('#edit_content').val(article.content)
      $('#edit_image').val(article.image)
      $('#edit_slug').val(article.slug)
      $('#edit_button').attr('onclick', `updateArticle('${slug}')`)
    }
  })
}

let newArticle = () => {
  $.ajax({
    url: 'http://localhost:3000/api/article/',
    type: 'POST',
    data: {
      title: $('#title').val(),
      image: $('#image').val(),
      content: $('#content').val(),
      category: $('#category').val(),
      slug: $('#slug').val()
    },
    success: (article) => {
      $('#blogs').prepend(
        `<div class="col-lg-3 col-md-3 col-sm-4" style="margin-right: 50px;">
          </div>
          <div class="article">
            <div class="col-lg-6 entry">
              <div class="title">
                <h2 id = "title-${article.slug}">${article.title}</h2>
              </div>
              <div class="POST">
                <figure data-orig-width="2280" data-orig-height="1144" class="tmblr-full" style="margin-bottom:30px">
                  <img id="img-${article.slug}" src="${article.image}" alt="image" width="540" height="271">
                </figure>
                <p id="content-${article.slug}">${article.content}
                  <br>
                </p>
                </div>
            </div>
            <div class="col-lg-2">
              <div id="createdAt-${article.slug}"  class="date">${article.createdAt}</div>
              <div class="tweet share-link clearfix">
                <button class="btn-default" style="border: 1px solid transparent;"  data-toggle="modal" data-target="#newArticle">Edit</button> <button class="btn-info" style="border: 1px solid transparent;" onclick="removeArticle('${article.slug}')">Delete</button>
              </div>
            </div>
          </div>
          <div class="row" style="margin-top:50px; margin-bottom:50px"><hr></div>
        </div>`)
    }
  })
}

let updateArticle = (slug) => {
  console.log(slug)
  $.ajax({
    url: 'http://localhost:3000/api/article/' + slug,
    type: 'PUT',
    data: {
      title: $('#edit_title').val(),
      image: $('#edit_image').val(),
      content: $('#edit_content').val(),
      category: $('#edit_category').val(),
      slug: $('#edit_slug').val()
    },
    success: (article) => {
      $(`#title-${slug}`).html(article.title)
      $(`#content-${slug}`).html(article.content)
      $(`#img-${slug}`).html(article.image)
      $(`#createdAt-${slug}`).html(article.createdAt)
      $(`#slug-${slug}`).html(article.slug)
      loadData()
    }
  })
}

let removeArticle = (slug) => {
  swal({
    title: 'Delete this post',
    text: 'This action will delete this post permanently',
    type: 'warning',
    showCancelButton: true,
    closeOnConfirm: false,
    showLoaderOnConfirm: true
  },
    function () {
      $.ajax({
        url: 'http://localhost:3000/api/article/' + slug,
        type: 'DELETE',
        success: () => {
          swal('Article was deleted')
          loadData()
        }
      })
    })
}
