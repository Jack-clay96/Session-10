var notification_count=0;

$(document).on('pageinit', function() {

	$('#messageButton').on('click', function() {
		createMessage("The first message!", 3000);
	});
	
	$('#dialogButton').on('click', function() {
		createDialog();
	});


	$('#notificationButton').on('click', function() {
		createNotification();
	});

	$('#messageButton2').on('click', function() {
		createMessage2();
	});
});



function createMessage(var message, var timer){		
	//phoneGap and jQueryMobile do not support toast messages directly
    //so we can add this using toast.js
    new Toast({content: message, duration: timer});
    //new Toast({content: 'This is a message for you, user!', duration: 3000}); -- the second message here will only be displayed
}
        
function createMessage2(){
    new Toast({content: 'Testing a second message at the same time!', duration: 10000});
}

function createDialog() {

	//phonegap supports native dialog boxes.
	//here's a simple example
      
	 navigator.notification.confirm(
    	'Are you hungry?',  // message
        dialogDismissed,         // callback
        'An example dialog!',            // title
        ['Yes!', 'No']                  // buttons
    );

}
        	
        	
        	
function dialogDismissed(buttonIndex) {
	
	if(buttonIndex==1) createMessage("Take a break, go get foood!", 3000);  // new Toast({content: "Take a break and eat fooooooood!", duration: 3000});
   	else if(buttonIndex==2) createMessage("Carry on working", 3000);

}

   
   
function createNotification() {
        		
	//
    //generate a time to post notification
    //
    var currentTime = new Date().getTime(); //current time
    var notificationTime = new Date(currentTime + 3000); //delayed time  - add 1 second
    			
    //
    //setup notification
    //
    
    cordova.plugins.notification.local.schedule({ 
    	id: 		1,
        title: 		"Hey you",
        message: 	"This is an example notification",
        date: 		notificationTime, 
        badge: 		notification_count++
        
        
   	});
    
}