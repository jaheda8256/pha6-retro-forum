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
        console.log(post);
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






retroForum();