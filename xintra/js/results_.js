(function JSON_process() {
	
	function getUrlVars() {
		var vars = [], hash;
		var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		for(var i = 0; i < hashes.length; i++)
		{
			hash = hashes[i].split('=');
			vars.push(hash[1]);
			//vars[hash[0]] = hash[1];
		}
		return vars;
	}
	var jqString = getUrlVars();
	var mod = decodeURI(jqString[0]);
	var topic = decodeURI(jqString[1]);

	$.ajax( {
		url: 'lists/' + mod + '_list.json',
		type: 'GET',
		dataType: 'json',
		success: function(response) {
			
			$.each(response.ex, function(index) {

				if(response.ex[index].topic_name === topic){
					$.each(response.ex[index].pdf_link, function(index_2){
						var output = document.getElementById('pdf_holder');
						
						if(!document.getElementById('append_holder' + index_2)) {
							var ele = document.createElement("div");
							var ele_title = document.createElement("div");
							ele.setAttribute("id","append_holder"+index_2);
							ele_title.setAttribute("id","holder_title"+index_2);
							ele_title.innerHTML = '<p>Question number: ' + response.ex[index].pdf_link[index_2].question + '</p>';
							
							
							output.appendChild(ele_title);
							output.appendChild(ele);
							$('head').append( '<script>PDFObject.embed("/pdf/'  + response.ex[index].pdf_link[index_2].link + '.pdf", "#append_holder' +  index_2 + 
							'", { height: "400px", width: "700px", page: ' + response.ex[index].pdf_link[index_2].page+ '});</script>;');
						}
					});
				}
			});
		},
		error: function() {
			$('#info').html('<p>An error has occurred</p>'); 
		}
	});
})();