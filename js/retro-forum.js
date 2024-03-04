
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
        postCard.classList = `card card-compact w-96 bg-base-100 shadow-xl p-4 rounded-3xl`;
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
console.log(allPosts);
const allPostContainer = document.getElementById('allPosts-container');
allPostContainer.innerHTML = '';

 allPosts.forEach(allPost =>{
    // console.log(allPost);
    // create a div
   const allPostCard = document.createElement('div');
   allPostCard.classList = `card card-side bg-[#F3F3F5] shadow-xl`;
//  set inner html

   allPostCard.innerHTML = `
   
   <div class="lg:p-5 p-1">
      <div class="indicator">
 <span class="indicator-item badge ${allPost.isActive?"bg-green-500":"bg-red-500"}"></span> 
            <div class="grid w-14 lg:w-32 h-14 lg:h-32 bg-base-300 place-items-center">
            <img class="rounded-xl" src="${allPost.image}" alt="post" />
            </div>
   </div>
        </div>
        <!-- indicator end -->
      <div class="card-body">
         <div class="flex lg:mr-20">
          <p># ${allPost.category}</p>
          <p>Author: ${allPost.author.name}</p>
         </div>
        <h2 class="text-lg font-bold">${allPost.title}</h2>
        <p>${allPost.description}</p>
        <br>
       <hr class="w-52 lg:w-[500px]">
        <div class="flex mr-14 gap-10 mt-4">
             <div class="flex gap-1 lg:gap-3">
              <img src="./images/mss.png" alt="">
              <p>${allPost.comment_count}</p>
             </div>
             <div class="flex gap-1 lg:gap-3">
              <img src="./images/eye.png" alt="">
              <p>${allPost.view_count}</p>
             </div>
             <div class="flex gap-1 lg:gap-3">
              <img src="./images/clock.png" alt="">
              <p>${allPost.posted_time}</p>
             </div>
        </div>
        <div class="card-actions justify-end mr-10 lg:mr-1">
          <button  class="add-btn btn btn-ghost btn-circle flex justify-center items-center" data-tip="add">
              <img src="./images/email 1.png" alt="">
        </div>
      </div>
   `;
  
// append child
allPostContainer.appendChild(allPostCard);





// create div
const allBtn = document.getElementsByClassName('add-btn');
for(const btn of allBtn){
  btn.addEventListener('click',(event) =>{
   const title = event.target.parentNode.parentNode.parentNode.childNodes[3].innerText;
// const titleVw = event.target.parentNode.parentNode.parentNode.childNodes[11].childNodes[3].childNodes[3].innerText;

// const allTitle = document.getElementById('all-title');
// const div = document.createComment('div');
// const h2 = document.createElement('h2');
// h2.classList =`text-lg font-bold`;
// const p = document.createElement('p');
// h2.innerText = title;
// p.innerText = titleVw;
// div.appendChild(h2);
// div.appendChild(p);
// allTitle.appendChild(div);

    console.log(event.target.parentNode.parentNode.parentNode.childNodes[11].childNodes[3].childNodes[3].innerText);

  })
}

 });
}



const loadDiscussCategory = async(searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
    const data = await res.json();
    console.log(data);
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
// loadDiscussCategory();

