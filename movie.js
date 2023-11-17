let moviframe = document.querySelector('.vid-frame')
let vidty='movie'

let ids=prompt('enter')
let url =`https://www.omdbapi.com/?apikey=1b4b2c27&t=${ids}`

fetch(url, {
})
  .then(resp => resp.json())
  .then(function(movies) {

    let types = movies.Type

    if( types == 'series' )
    {

      let coll = document.querySelector('.coll')
      let collvid= document.createElement('div')
      collvid.innerHTML=`
      <section class="movie-detail">
      <div class="container">
      
        <figure class="movie-detail-banner">
      
          <img src="${movies.Poster}" alt="${movies.Title}">
      
          <button class="play-btn">
            <ion-icon name="play-circle-outline"></ion-icon>
          </button>
      
        </figure>
      
        <div class="movie-detail-content">
      
          <p class="detail-subtitle">${movies.Type}</p>
      
          <h1 class="h1 detail-title">
          ${movies.Title}
          </h1>
      
          <div class="meta-wrapper">
      
            <div class="badge-wrapper">
              <div class="badge badge-outline" style="background-color: blueviolet;padding: 5px;border-radius: 10%;color:black;">${movies.imdbRating}</div>
      
              <div class="badge badge-outline" style="background-color: blueviolet;padding: 5px;border-radius: 10%;color:black;">HD</div>
            </div>
      
           
      
            <div class="date-time">
      
             <div>
               <ion-icon>Genre :</ion-icon>
                <time>${movies.Genre}</time>
             </div>
      
              <div>
                <ion-icon name="calendar-outline">Released Date :</ion-icon>
      
                <time datetime="${movies.Released} ">  ${movies.Released}  </time>
              </div>
      
              <div>
                <ion-icon name="time-outline">Time :</ion-icon>
      
                <time datetime="PT${movies.Runtime}">${movies.Runtime}</time>
              </div>
      
        <div>
          <ion-icon name="time-outline">BoxOffice :</ion-icon>
      
           <time >${movies.BoxOffice}</time>
           </div>
      
           <div>
           <ion-icon>Director :</ion-icon>
            <time>${movies.Director}</time>
         </div>
      
         <div>
         <ion-icon>Writer :</ion-icon>
          <time>${movies.Writer}</time>
       </div>
      
       <div>
         <ion-icon>Actors :</ion-icon>
          <time>${movies.Actors}</time>
       </div>
      
      
            </div>
      
          </div>
      
          <p class="storyline">
          ${movies.Plot}
          </p>
      
        </div>
      
      </div>    
      </section>
      
      
      <iframe allowtransparency="true" src="https://vidsrc.to/embed/tv/${movies.imdbID}/${prompt('season')}" frameborder="0" scrolling="no" allowfullscreen="" style="background-color: black;"
      class="vid-frame">
      </iframe> 
      `
      
      coll.appendChild(collvid)

    }else{

    let coll = document.querySelector('.coll')
let collvid= document.createElement('div')
collvid.innerHTML=`
<section class="movie-detail">
<div class="container">

  <figure class="movie-detail-banner">

    <img src="${movies.Poster}" alt="${movies.Title}">

    <button class="play-btn">
      <ion-icon name="play-circle-outline"></ion-icon>
    </button>

  </figure>

  <div class="movie-detail-content">

    <p class="detail-subtitle">${movies.Type}</p>

    <h1 class="h1 detail-title">
    ${movies.Title}
    </h1>

    <div class="meta-wrapper">

      <div class="badge-wrapper">
        <div class="badge badge-outline" style="background-color: blueviolet;padding: 5px;border-radius: 10%;color:black;">${movies.imdbRating}</div>

        <div class="badge badge-outline" style="background-color: blueviolet;padding: 5px;border-radius: 10%;color:black;">HD</div>
      </div>

     

      <div class="date-time">

       <div>
         <ion-icon>Genre :</ion-icon>
          <time>${movies.Genre}</time>
       </div>

        <div>
          <ion-icon name="calendar-outline">Released Date :</ion-icon>

          <time datetime="${movies.Released} ">  ${movies.Released}  </time>
        </div>

        <div>
          <ion-icon name="time-outline">Time :</ion-icon>

          <time datetime="PT${movies.Runtime}">${movies.Runtime}</time>
        </div>

  <div>
    <ion-icon name="time-outline">BoxOffice :</ion-icon>

     <time >${movies.BoxOffice}</time>
     </div>

     <div>
     <ion-icon>Director :</ion-icon>
      <time>${movies.Director}</time>
   </div>

   <div>
   <ion-icon>Writer :</ion-icon>
    <time>${movies.Writer}</time>
 </div>

 <div>
   <ion-icon>Actors :</ion-icon>
    <time>${movies.Actors}</time>
 </div>


      </div>

    </div>

    <p class="storyline">
    ${movies.Plot}
    </p>

  </div>

</div>    
</section>


<iframe allowtransparency="true" src="https://vidsrc.to/embed/movie/${movies.imdbID}" frameborder="0" scrolling="no" allowfullscreen="" style="background-color: black;"
class="vid-frame">
</iframe> 
`

coll.appendChild(collvid)
}


})
