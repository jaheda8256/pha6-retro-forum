
const retroForum = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    const posts = data;
    // console.log(posts);
    displayRetro(posts);
}

const displayRetro = posts =>{
    // console.log(posts);

    const postContainer = document.getElementById('post-container');

    posts.forEach(post =>{
        // console.log(post);
        // 2 create a div
        const postCard = document.createElement('div');
        postCard.classList = `card card-compact w-96 bg-base-100 shadow-2xl p-4 rounded-3xl`;
        // 3 set inner html 
        postCard.innerHTML = `
        <figure><img src="${post?.cover_image}" alt="Shoes" /></figure>
        <div class="card-body">
      <div class="flex items-center gap-1">
      <img class="w-8 h-8" src="./images/date.png" alt="post" />
      <p>${ post?.author?.posted_date || "No publish date"}</p>
      </div>
           <h2 class="card-title font-bold">${post?.description}</h2>
           <P>${post.title}</P>
       <div class="flex gap-2 items-center">
       <div>
       <img class="rounded-full w-10 h-10" src="${post?.profile_image}" alt="post" />
       </div>
       <div>
       <p class="text-lg font-bold">${post?.author?.name}</p>
       <p class="">${post?.author?.designation || "Unknown"}</p>
       </div>
       </div>
        </div>
         `;
        //  4 append child
        postContainer.appendChild(postCard);
    })
}



// discuss ................................
const loadDiscuss = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const allPosts = data.posts;
    // console.log(allPosts);
    displayAllPost(allPosts);
}

const displayAllPost = allPosts =>{
// console.log(allPosts);
const allPostContainer = document.getElementById('allPosts-container');
allPostContainer.innerHTML = '';

 allPosts.forEach(allPost =>{
    // console.log(allPost);
    // create a div
   const allPostCard = document.createElement('div');
   allPostCard.classList = `card card-side bg-[#F3F3F5] shadow-2xl`;
//  set inner html

   allPostCard.innerHTML = `
   
   <div class="lg:p-5 p-1">
      <div class="indicator">
 <span class="indicator-item badge ${allPost?.isActive?"bg-green-500":"bg-red-500"}"></span> 
            <div class="grid w-14 lg:w-32 h-14 lg:h-32 bg-base-300 place-items-center">
            <img class="rounded-xl" src="${allPost?.image}" alt="post" />
            </div>
   </div>
        </div>
        <!-- indicator end -->
      <div class="card-body">
         <div class="flex lg:mr-20">
          <p># ${allPost?.category}</p>
          <p>Author: ${allPost.author?.name}</p>
         </div>
        <h2 class="text-lg font-bold">${allPost?.title}</h2>
        <p>${allPost?.description}</p>
        <br>
       <img src="./images/Line 1.png" alt="">
        <div class="flex mr-14 gap-10 mt-4">
             <div class="flex gap-1 lg:gap-3">
              <img src="./images/mss.png" alt="">
              <p>${allPost?.comment_count}</p>
             </div>
             <div class="flex gap-1 lg:gap-3">
              <img src="./images/eye.png" alt="">
              <p>${allPost?.view_count}</p>
             </div>
             <div class="flex gap-1 lg:gap-3">
              <img src="./images/clock.png" alt="">
              <p>${allPost?.posted_time}</p>
             </div>
        </div>
        <div id="news-container" class="card-actions justify-end mr-10 lg:mr-1">
          <button id="news-count" onclick='newsContainer("${allPost.title}",${allPost.view_count})' class="add-btn btn btn-ghost btn-circle flex justify-center items-center" data-tip="add">
              <img src="./images/email 1.png" alt="">
        </div>
      </div>
   `;

  
// append child
allPostContainer.appendChild(allPostCard);



  })
}
let count = 0;
let newsCount = document.getElementById('news-count');
const newsContainer = (event,view) =>{
    // console.log(newsContainer);
    count = count +1;
    document.getElementById('count-title').innerText = count;
    const readNewsContainer = document.getElementById('all-title');
    const div = document.createElement('div');
    div.classList = `flex mt-3 p-4 mb-2 gap-2 justify-between bg-white rounded-2xl shadow-xl`;
    div.innerHTML = `
  <p class="flex font-bold">${event}</p>
  <div class="flex items-center">
    <div class="w-8">
    <img src="./images/eye.png" alt="">
    </div>
    <p>${view}</p>
    </div>
    `
    readNewsContainer.appendChild(div);
    // document.getElementById('news-count') = newsCount;
   
}

/* <div class="flex items-center gap-2"></div> */
// search list js......................................
const loadDiscussCategory = async(searchText) =>{
    document.getElementById('loading-spinner').classList.remove("hidden");
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
    const data = await res.json();
    console.log(data);
    document.getElementById('loading-spinner').classList.add("hidden");
    displayAllPost(data.posts);
}



const handleSearch = () =>{
const value = document.getElementById('search-box').value;
if(value){

    loadDiscussCategory(value);

}

else{

    alert('please a valid letter');
}
}





retroForum();
loadDiscuss();


