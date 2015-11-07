
var confirmation= confirm("Are you sure you want to unfollow all users on Twitter?");
if (confirmation){
	
	alert("Refresh the page when you want to stop!");
	alert("It is advised that you do not unfollow large quantities of users in one day, according to the twitter guidelines. Use with caution. Cheers!");	

	setInterval(function () {
		
		var inputs=document.getElementsByClassName('button-text unfollow-text');
		
		for(var i=0; i<inputs.length; i++){		
			inputs[i].click();
			//Change the class name avoid double clicking
			inputs[i].className="Changed"
		}
		
		window.scrollTo(document.body.scrollWidth,document.body.scrollHeight);
		
	}, 1500);
}
	
