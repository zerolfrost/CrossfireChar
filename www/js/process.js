// Dom7
var $ = Dom7;
var routes = [
  // Index page
  {
    path: '/',
    url: './index.html',
    name: 'home',
  },

  {
    path: '/images/',
    componentUrl: './pages/images.html',
  },  
];
//galing sa routes.js


// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  root: '#app',
  theme: theme,
  data: function () {
    return {
      user: {
        firstName: 'Juvan',
        lastName: 'Urbano',
      },
    };
  },
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  routes: routes,
});
function play(){
  document.getElementById('ost').play();
  }
function stop(){
document.getElementById('ost').pause(); 
document.getElementById('ost').currentTime = 0;
}
//galing sa app.js
var rooted = document.getElementById('root');
var dom =

         <div class="page-content">
    
       <div class="column">

      <a href="/images/"><button class="col button button-fill color-orange button-round ">Browse Characters</button></a>
       <center><img src="img/main.png" width="100%" class="pic"></img></center>     
<p>Lets Browse.!!<div/>
This app is about the characters in crossfire...</p>

      </div>
      </div>
ReactDOM.render(dom,rooted);

var rooted = document.getElementById('b');
var dom =

       <div class="page-content">
    
       <div class="column">
       <center><img src="img/main.png"  width="100%" height="400px"></img>
   <audio id="ost" src="ost/cf.mp3" loop></audio>
      <button className="col button button-fill color-orange button-round" onClick={play}>Play OST</button><div></div>
<button className="col button button-fill color-orange button-round" onClick={stop}>Stop OST</button>
</center>
      </div>
      </div>
    ReactDOM.render(dom,rooted);

function clock(){
  let element = <h1>{new Date().toLocaleTimeString()}</h1>;
  ReactDOM.render(element, document.getElementById('a'));
}

setInterval(function(){
  clock();
},1000);

ReactDOM.render(dom,_root);
