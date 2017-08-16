 $(function changeMod() {
	$("#module").change(function() {
		
		$("#search").html('<input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for topics.."><ul id="myUL"></ul>');
		
		var opt = $("#module option:selected").val() ;
		//$('#search').load('lists/' + $(this).val() + '.html');
		//console.log(opt);
		
		$.ajax( {
			url: 'lists/' + $(this).val() +'_list.json',
			type: 'GET',
			dataType: 'json',
			success: function(response) {
				
				var list_HTML = '';
				
				$.each(response.ex, function(index) {
					list_HTML += '<li><a href="result.html?mod=' + opt  + '&topic=' + encodeURI(response.ex[index].topic_name) + '">' + 
					response.ex[index].topic_name +'</a></li>';
				});
				
				$('#myUL').html(list_HTML);
				list_HTML = '';
			},
			error: function() {
				$('#info').html('<p>An error has occurred</p>'); 
			}
			
		});
	});
});
 
function myFunction() {
	// Declare variables
	var input, filter, ul, li, a, i;
	input = document.getElementById('myInput');
	filter = input.value.toUpperCase(); // Keep case-sensitive or not?
	ul = document.getElementById("myUL");
	li = ul.getElementsByTagName('li');

	// Loop through all list items, and hide those who don't match the search query
	
	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0];
		if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}
}