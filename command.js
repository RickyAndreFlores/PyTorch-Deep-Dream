const shell = require("shelljs");
const fs    = require('fs'); 





var command = "python deep_dream.py "; //basic command; could be python3 on linux 
var folder = __dirname + "/images/"; // would be whereever images are stored
	


try{ 
   let os = process.argv[2];
   if(os == "linux") 
	{ 
		command = "python3 deep_dream.py ";	}
}
catch(error){ } 



var user_clicked = true; // this would somehow communicated from front end
if(user_clicked)
{ 
	
	fs.readdirSync(folder).forEach(file =>
	{

		let full_command = command + "--input_image " + "images/" + file; 
        	console.log(full_command);
		shell.exec(full_command);

	});


};
