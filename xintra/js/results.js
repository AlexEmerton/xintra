function get_JSON(callback) {	
	var data = [];
	var temp = [];
	$.ajax({
		url: 'lists/ism_list.json',
		type: 'GET',
		dataType: 'json',
		success: function(response){
			$.each(response.ism, function(index) { 
				temp.push(response.ism[index].topic_name);
				data.push(temp);
				temp = [];
				$.each(response.ism[index].pdf_link, function(index_2){
						temp.push(response.ism[index].pdf_link[index_2].id,response.ism[index].pdf_link[index_2].link, response.ism[index].pdf_link[index_2].page, 
						response.ism[index].pdf_link[index_2].question,);
						data.push(temp);
						temp = [];
					});
			});
		//return callback(data);
		},	
		error: function() {
			$('#info').html('<p>An error has occurred</p>');  
		}
	});
}

function loadPDF(link, page_, section) {		
	var options = {
		height: "400px",
		width: "700px",
		pdfOpenParams: { view: 'FitV', page: page_ }
	};
	if (link) {
	PDFObject.embed("/pdf/" + link, section, options); }
}

function proc_JSON() {
	get_JSON(function (data) {
		$('#info').html('<h2>' + data[0] + '</h2>');
		
		var i = 1;
		var j = 0;
		var temp = [];
		
		while(i < data.length){
			while(j < data[i].length){
				temp.push((data[i])[j]);
				j++;
			}
			i++;
			j = 0;
		}
	});
}
