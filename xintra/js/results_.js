(function JSON_process() {
		$.ajax( {
			url: 'lists/ism_list.json',
			type: 'GET',
			dataType: 'json',
			success: function(response) {
				var out_HTML = '';
				
				$.each(response.ism, function(index) {
					//$('#topic_name').html('<h2>' + response.ism[index].topic_name + '</h2>');
					$.each(response.ism[index].pdf_link, function(index_2){
						var output = document.getElementById('pdf_holder');
						
						if(!document.getElementById('append_holder' + index_2)) {
							var ele = document.createElement("div");
							var ele_title = document.createElement("div");
							ele.setAttribute("id","append_holder"+index_2);
							ele_title.setAttribute("id","holder_title"+index_2);
							//'<h2>' + response.ism[index].topic_name + '</h2>
							ele_title.innerHTML = '<p>Question number: ' + response.ism[index].pdf_link[index_2].question + '</p>';
							output.appendChild(ele_title);
							output.appendChild(ele);
							$('head').append( '<script>PDFObject.embed("/pdf/'  + response.ism[index].pdf_link[index_2].link + '.pdf", "#append_holder' +  index_2 + 
							'", { height: "400px", width: "700px", page: ' + response.ism[index].pdf_link[index_2].page+ '});</script>;');
						}
						
					});
				});
			},
			error: function() {
				$('#info').html('<p>An error has occurred</p>'); 
			}
		});
})();