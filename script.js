//검색버튼을 클릭하면 나타나고 클릭하면 닫기
//
let nav_search = document.querySelector('.nav_search');
let search_box = document.getElementById('movie_search');
 nav_search.addEventListener('click',function(){
  if(search_box.classList.contains('hide')){
    search_box.classList.add('show')
    search_box.classList.remove('hide')
  } else{
    search_box.classList.add('hide')
    search_box.classList.remove('show')
  }

//document.querySelector('#movie_search').classList.add('show-modal')


//    if (search_box.style.display === 'none') {
//     console.log(1);
//      search_box.style.display = 'block';
//  } else {
//   console.log(2);
//      search_box.style.display = 'none';
//  }
  // /
 })

 
//검색창에서 입력하고 엔터치면 클릭 되도록 하기 
//키를 누를 때마다 엔터 키를 확인하고, 엔터 키가 눌렸을 때 검색 버튼에 대한 클릭 이벤트가 발생함.
//이렇게 하면 텍스트를 입력한 후 엔터 키를 누르면 검색 버튼이 클릭됨
//mdn https://developer.mozilla.org/ko/docs/Web/API/KeyboardEvent/key
document.querySelector('.search_txt').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    document.querySelector('.search_btn').click();
  }
});



/*TMDB설치*/ 
document.addEventListener("DOMContentLoaded", function () {
  let movie_url = 'https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&api_key=3508739bb6efd7ac5c0d7987f4f50eee';
  fetch(movie_url).then(res => res.json()).then(data => {
    let movie_list = data['results'];
    movie_list.forEach(movie_box => {
      let movie_title = movie_box['title'];
      let movie_overview = movie_box['overview'];
      let movie_rating = movie_box['vote_average'];
      let movie_poster = movie_box['poster_path'];

      let temp_html = `    <div class="card">
                            <p><img src="https://image.tmdb.org/t/p/original${movie_poster}"></p>
                            <h3 class="title">${movie_title}</h3>
                            <div class="txt">${movie_overview}</div>
                            <p class="rating">⭐ ${movie_rating}</p>
                          </div>`
      document.querySelector('#card_box').insertAdjacentHTML('beforeend', temp_html)
      // console.log(movie_poster);
    });//data['results'][0]['title'];
  })
});


document.querySelector('.search_btn').addEventListener('click', function () {
  let searchText = document.querySelector('.search_txt').value;
  // let 영화제목 = document.querySelector('.card .title').innerText;
  let 무비리스트 = document.querySelectorAll('.card .title'); //무비리스트.length의 길이가 '20'으로 출력됨을 확인함
  // 3. 만약에 영화제목(input 텍스트에 입력한 값이)랑 
  for(i = 0; i <= 무비리스트.length; i++){

    if(무비리스트[i].innerHTML.includes(searchText)){ 
     // console.log('반갑습니다');
      무비리스트[i].parentElement.style = 'display:block';
    }
    else{      
     무비리스트[i].parentElement.style = 'display:none';
      
    }
  }

  //console.log(document.querySelectorAll('.card .title').length);

})

