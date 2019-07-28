<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" href="/css/tweet.css">
<script type="text/javascript" src="/js/tweet.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Enter title here</title>
<h1>TAKING TO GET MY TWEET!!</h1>
</head>
<body>
	<div class="topnav">
		<a href="tweet.jsp">TWEET</a> 
		<a href="friendstweet.jsp">FRIENDS</a> 
		<a id=toptweet href="toptweet.jsp">TOP-TWEET</a>
	   <a href="#about"></a>
		<div id="fb-root"></div>
		<div align="right">
			<div class="fb-login-button" data-max-rows="1" data-size="large"
				data-button-type="login_with" data-show-faces="false"
				data-auto-logout-link="true" data-use-continue-as="true"
				scope="public_profile,email" onlogin="checkLoginState();"></div>
		</div>
	</div>
<form id="storegae" action="GaeStore" method="get" name="storegae"  >
<td><textarea id="text_content" name="text_content" class="textarea"
							placeholder="TYPE YOUR MESSAGE TO GET THE TWEET :)"></textarea></td>
<input type=hidden id=user_id name= user_id />
<input type=hidden id=first_name name=first_name  />
<input type=hidden id=last_name name=last_name  />
<input type=hidden id=picture name=picture  />
<script>

console.log(document.getElementById("first_name")+" "+document.getElementById("last_name")+" "+document.getElementById("picture"));
</script>
<td><input type="submit" id=submit name=save class="button" />
</form>
<br><input type="button"  id="create_tweet" class="button" value="Create Tweet!!" />

<form action="getmytweet.jsp" method="GET">
<input type=hidden id=user_ids name=user_ids  />
<br><input type="submit"  class="button" value="Display the Tweets :)" name="view_tweet" />
</form>
</td>
</tr>
</table>
</div>

<div align="center">

<div id="mypopup" class="popup">
<div  class="popup-content">
<span class="close">&times;</span>
<input type="button"  class="button" value="Share your own Tweet" name="share_tweet" onclick=shareTweet() />
<input type="button"  class="button" value="Deliver Immediate Message ;)" name="send_direct_msg" onclick=sendDirectMsg() />
</div>
</div>

</div>


<script>

var modal = document.getElementById('mypopup');
var btn = document.getElementById("create_tweet");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
};
span.onclick = function() {
    modal.style.display = "none";
};
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
document.getElementById("user_ids").value       = getCookie('user_id');
document.getElementById("user_id").value       = getCookie('user_id');
document.getElementById("first_name").value = getCookie('first_name');
document.getElementById("first_names").value = getCookie('first_name');
document.getElementById("last_name").value  = getCookie('last_name');
document.getElementById("picture").value    = getCookie('picture');
document.getElementById("toptweet").href="toptweet.jsp?name="+getCookie("first_name");

</script>




<div id="shareBtn" class="btn btn-success clearfix">Share Dialog</div>


<!--
  Below we include the Login Button social plugin. This button uses
  the JavaScript SDK to present a graphical Login button that triggers
  the FB.login() function when clicked.
-->

<fb:login-button scope="public_profile,email,user_birthday" onlogin="checkLoginState();">
</fb:login-button>






</body>
</html>

