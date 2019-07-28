var first_name;
var last_name;
var picture;

function callme(){
window.fbAsyncInit = function() {
    FB.init({
      appId      : '439608523129634',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.11	'
    });
    FB.AppEvents.logPageView(); 
    loadsdk();
    checkLoginState();
};
}


function onLogin(response) {
	  if (response.status == 'connected') {
	    FB.api('/me?fields=first_name', function(data) {
	      var welcomeBlock = document.getElementById('fb-welcome');
	      welcomeBlock.innerHTML = 'Hello, ' + data.first_name + '!';
	    },{scope:'user_location, email, user_birthday, publish actions'});
	  }
	  else{
			  var welcomeBlock = document.getElementById('fb-welcome');
		      welcomeBlock.innerHTML = 'cant get data, ' + response.status + '!';
		  
		   }
};

	
function loadsdk(){
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
};



function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
};

var user_id;

function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    if (response.status === 'connected') {
      user_id = response.authResponse.userID;
      console.log(user_id);
      extractInfo();
      console.log("Already LoggedIn");
    } else {
      console.log("Please login");
      FB.login();
    }
  };

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9&appId=439608523129634";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function shareTweet(){
	checkLoginState();
	FB.ui({method: 'share',
		href: document.getElementById("status").value,
		quote: document.getElementById('text_content').value,
		},function(response){
		if (!response || response.error)
		{
			console.log(response.error);
			alert('Posting error occured');
		}
	});
	
};

function shareDirectTweet(){
	checkLoginState();
	FB.ui({method: 'share',
		href: "https://apps.facebook.com/439608523129634",
		quote: "https://apps.facebook.com/439608523129634",
		},function(response){
		if (!response || response.error)
		{
			console.log(response.error);
			alert('Posting error occured');
		}
	});
}


function extractInfo(){
	FB.api('/me', 
			'GET',
			{"fields":"id,first_name,last_name"},
			function(response){
				first_name = response.first_name;
				console.log(response);
				 document.cookie="user_id="+response.id;
				last_name = response.last_name;
				document.cookie="first_name="+first_name;
				localStorage.setItem('first_name',first_name);
				document.cookie="last_name="+last_name;
				localStorage.setItem('last_name',last_name);
				console.log(document.cookie);
			});
	 FB.api(
			  '/me/picture',
			  'GET',
			  {"height":"100"},
			  function(response) {
			      // Insert your code here
				  picture = "<img src='" + response.data.url + "'>";
				  document.cookie="picture="+picture;
				localStorage.setItem('picture',picture);
			  }
			);
	 document.getElementById("user_ids").value    = getCookie('user_id');
	document.getElementById("user_id").value    = getCookie('user_id');
	document.getElementById("first_name").value = getCookie('first_name');
	document.getElementById("last_name").value  = getCookie('last_name');
	document.getElementById("picture").value    = getCookie('picture');
	//document.getElementById("toptweet").href   ="toptweet.jsp?id="+localStorage.getItem("first_name");
	console.log(document.getElementById("first_name").value);
	console.log(document.getElementById("last_name").value);
	console.log(document.getElementById("picture").value);
};


function getCookie(cname) {
	var re = new RegExp(cname + "=([^;]+)");
	var value = re.exec(document.cookie);
	return (value != null) ? unescape(value[1]) : null;
}


function sendDirectMsg(){
	checkLoginState();
	FB.ui({method:  'send',
		  link: "https://apps.facebook.com/439608523129634",});
	console.log(document.getElementById("status"));
};


