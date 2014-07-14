var args = arguments[0] || {};
var title = args.title;
var image = args.image;
var loginId = args.loginId;
var password = args.password;
$.itemTitle.setText(title);
$.itemImage.setImage(image);

function exhibit(){
	var url='http://beak.sakura.ne.jp/freecycle/wp-admin/admin-ajax.php';
	var exhibitClient = Ti.Network.createHTTPClient({
		onload: function(e){
			var dialog = Ti.UI.createAlertDialog({
				message: this.responseText
			});
			dialog.addEventListener('click', function(e){
				$.confirmationWindow.close();
			});
			dialog.show();
		},
		timeout: 5000
	});
	exhibitClient.open('POST', url);
	exhibitClient.send({
		'action': 'exhibit_from_app',
		'exhibitor_id': loginId,
		'password': password,
		'item_name': title,
		'image_url': image
	});
}

function cancel(){
	$.confirmationWindow.close();
}
