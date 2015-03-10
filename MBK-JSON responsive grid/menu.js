
jQuery(document).ready(function($) {


menuJson = JSON.parse('[{"type":"menu","text":"HOME","link":"index_no.html"},{"type":"menu","text":"HIRE","link":"hire.html"},{"type":"menu_2","text":"PROJECTS","link":"#", "sub1":"FEATURED", "sub_link_1":"projects/featured.html", "sub2":"VIDEO", "sub_link_2":"projects/video.html", "sub3":"DIGITAL", "sub_link_3":"projects/digital.html", "sub4":"ALL", "sub_link_4":"projects/all.html"},{"type":"menu","text":"BLOG","link":"http://made-by-kyle.tumblr.com"},{"type":"menu","text":"CONTACT","link":"contact.html"}]');

	menuTemplate = _.template(
		'<ul class="drop_menu">'
			+'<% _.each(data, function(x){ %>'
				
					+'<% if (x.text == "PROJECTS") { %>'
						+'<li><a href="<%= x.link %>"><%= x.text %></a>'
							+'<% console.log("tryin bitch"); %>'
								+'<ul>'
								+'<li><a href="<%= x.sub_link_1 %>"><%= x.sub1 %></a></li>'
								+'<li><a href="<%= x.sub_link_2 %>"><%= x.sub2 %></a></li>'
								+'<li><a href="<%= x.sub_link_3 %>"><%= x.sub3 %></a></li>'
								+'<li><a href="<%= x.sub_link_4 %>"><%= x.sub4 %></a></li>'
								+'</ul>'	
								+'</li>'	
						+'<% } %>'
						+'<% if (x.type == "menu") { %>'
						+'<% if (x.text == "HIRE") { %>'
						+'<li><a href="<%= x.link %>" style="color:#919191;" title ="COMING SOON"><%= x.text %><img src="soon!.png"></a>'
					+'<% } else { %>'
						+'<li><a href="<%= x.link %>"><%= x.text %></a></li>'
					+'<% } %>'
				+'<% } %>'
			+'<% }); %>'
		+'</ul>'
		
		);

$('#top_menu').html(menuTemplate({data:menuJson}));

});

