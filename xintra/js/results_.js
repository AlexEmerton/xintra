(function JSON_process() {
	//setTimeout(function() {
		$.ajax( {
			url: 'lists/ism_list.json',
			type: 'GET',
			dataType: 'json',
			success: function(response){
				var out_HTML = '';
				
				$.each(response.ism, function(index) {
					
					/* if(response.ism[index].topic_name == request){
						//
					} */
					
					out_HTML += '<h2>' + response.ism[index].topic_name + '</h2>';
					$('#topic_name').html(out_HTML);
					$.each(response.ism[index].pdf_link, function(index_2){
						var options = {
							height: "400px",
							width: "700px",
							pdfOpenParams: { view: 'FitV', page: response.ism[index].pdf_link[index_2].page }
						};

						var output = document.getElementById('pdf_holder');
						if(!document.getElementById('append_holder' + index_2)) {
							var ele = document.createElement("div");
							ele.setAttribute("id","append_holder"+index_2);
							output.appendChild(ele);
							$('head').append( '<script>PDFObject.embed("/pdf/'  + response.ism[index].pdf_link[index_2].link + '.pdf", "#append_holder' +  index_2 + 
							'", { height: "400px", width: "700px", page: ' + response.ism[index].pdf_link[index_2].page+ '});</script>;');
						}
					});
				});
				//JSON_process();
			},
			error: function() {
				$('#info').html('<p>An error has occurred</p>'); 
			}
		});
	//}, 300);	
})();