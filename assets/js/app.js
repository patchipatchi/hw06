// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import css from "../css/app.scss"

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import dependencies
//
import "phoenix_html"
import jQuery from 'jquery';
window.jQuery = window.$ = jQuery; // Bootstrap requires a global "$" object.
import "bootstrap";

// Import local files
//
// Local files can be imported directly using relative paths, for example:
// import socket from "./socket"



function init(){

var start_time = "";
var end_time = "";

        $('#start_button').click((ev) => {
                console.log("clicked button");
                start_time = new Date();
		console.log(start_time)
        });

	$('#stop_button').click((ev) => {
		console.log("clicked button");
		if (start_time != ""){
			end_time = new Date();
			let task_id = $(ev.target).data('task-id')
	                if(Object.prototype.toString.call(start_time) === '[object Date]'){
	                        if(Object.prototype.toString.call(end_time) === '[object Date]'){
	                                        let data = JSON.stringify({
  	                                                time_block: {
	                                                        start_time: new Date(start_time),
        	                                                end_time: new Date(end_time),
                	                                        task_id: task_id,
                        	                        }
						});
	
	                                        $.ajax("/ajax/timeblock/",{
        	                                        method: "post",
                	                                dataType: "json",
                        	                        contentType: "application/json; charset=UTF-8",
                                	                data: data,
                                        	        success: (resp) => {
                                                        console.log("Sent create timeblock successfully");
                                                        location.reload();
                                                },
                                        });

				  }
			  }

		}
	});



	$('#new_button').click((ev) => {
		console.log("clicked button");
		let start_d = $('#start_d').val().toString();
		let start_t = $('#start_t').val().toString();
		start_time = new Date(start_d + " " + start_t);
		console.log(start_time);
                let end_d = $('#end_d').val().toString();
                let end_t = $('#end_t').val().toString();
                end_time = new Date(end_d + " " + end_t);
                console.log(end_time);
		let task_id = $(ev.target).data('task-id');
		if(Object.prototype.toString.call(start_time) === '[object Date]'){
			if(Object.prototype.toString.call(end_time) === '[object Date]'){
				if(start_time < end_time){
					let data = JSON.stringify({
						time_block: {
							start_time: new Date(start_time),
							end_time: new Date(end_time),
							task_id: task_id,
						}
					});

					$.ajax("/ajax/timeblock/",{
						method: "post",
						dataType: "json",
						contentType: "application/json; charset=UTF-8",
						data: data,
						success: (resp) => {
							console.log("Sent create timeblock successfully");
							location.reload();
						},
					});
				}
			}
		}
	});

        $('#update_button').click((ev) => {
                console.log("clicked button");
                let start_d = $('#start_d').val().toString();
                let start_t = $('#start_t').val().toString();
                start_time = new Date(start_d + " " + start_t);
                console.log(start_time);
                let end_d = $('#end_d').val().toString();
                let end_t = $('#end_t').val().toString();
                end_time = new Date(end_d + " " + end_t);
                console.log(end_time);
                let time_block_id = $(ev.target).data('timeblock-id');
                let task_id = $(ev.target).data('task-id');
                if(Object.prototype.toString.call(start_time) === '[object Date]'){
                        if(Object.prototype.toString.call(end_time) === '[object Date]'){
                                if(start_time < end_time){
                                        let data = JSON.stringify({
                                                time_block: {
                                                        start_time: new Date(start_time),
                                                        end_time: new Date(end_time),
                                                        task_id: task_id,
                                                }
                                        });

                                        $.ajax("/ajax/timeblock/" + time_block_id,{
                                                method: "update",
                                                dataType: "json",
                                                contentType: "application/json; charset=UTF-8",
                                                data: data,
                                                success: (resp) => {
                                                        console.log("Sent update timeblock successfully");
							location.reload();
                                                },
                                        });
                                }
                        }
                }
        });


        $('#delete_button').click((ev) => {
                console.log("clicked button");
                let time_block_id = $(ev.target).data('timeblock-id')
                                        $.ajax("/ajax/timeblock/" + time_block_id,{
                                                method: "delete",
                                                dataType: "json",
                                                contentType: "application/json; charset=UTF-8",
                                                success: (resp) => {
                                                        console.log("Sent create timeblock successfully");
							location.reload();
                                                },
                                        });
        });

}


$(init);
