// Work Object

var work = {
	"jobs" : [
		{
			"employer" : "Church of the Cross San Diego",
			"title" : "Volunteer Web Designer/Developer",
			"location" : "San Diego, CA (remote)",
			"dates" : "2015-2016",
			"description" : "Create wireframes, mockups, and visual design of the church website, as well as develop the site in HTMl, CSS, JS, and PHP."
		},
		{
			"employer" : "First Delivery Services",
			"title" : "Amazon Delivery Attendent",
			"location" : "San Jose, CA",
			"dates" : "2015-2016",
			"description" : "Ensure the secure delivery of packages to Amazon customers throughout the South Bay."
		},
		{
			"employer" : "Five Guys Burgers and Fries",
			"title" : "General Manager",
			"location" : "San Diego, CA",
			"dates" : "2012-2015",
			"description" : "Oversee general operations of the restaurant. Hire, train, retain, and lead a team to provide excellent food and customer service in a clean environment. Handle financials and inventory."
		}
	]
}

// for(var indexCount = 0; indexCount < work["jobs"].length; indexCount++) {	
// 		$("#workExperience").append(HTMLworkStart);

// 		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[indexCount]["employer"]);
// 		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[indexCount]["title"]);
// 		var formattedEmployerTitle = formattedEmployer + formattedTitle;
// 		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[indexCount]["dates"]);
// 		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[indexCount]["location"]);
// 		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[indexCount]["description"]);
// 		var formattedWorkInfo = formattedWorkDates + formattedWorkLocation + formattedWorkDescription;

// 		$(".work-entry:last").append(formattedEmployerTitle);
// 		$(".work-entry:last").append(formattedWorkInfo);
// }

function displayWork() {
	for(var indexCount = 0; indexCount < work["jobs"].length; indexCount++) {	
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[indexCount]["employer"]);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[indexCount]["title"]);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[indexCount]["dates"]);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[indexCount]["location"]);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[indexCount]["description"]);
		var formattedWorkInfo = formattedWorkDates + formattedWorkLocation + formattedWorkDescription;

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedWorkInfo);
		}
}

// function displayWork() {
// 	for(job in work.jobs) {
// 		$("#workExperience").append(HTMLworkStart);

// 		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
// 		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
// 		var formattedEmployerTitle = formattedEmployer + formattedTitle;
// 		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
// 		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
// 		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
// 		var formattedWorkInfo = formattedWorkDates + formattedWorkLocation + formattedWorkDescription;
		
// 		$(".work-entry:last").append(formattedEmployerTitle);
// 		$(".work-entry:last").append(formattedWorkInfo);


// 	}
// }

displayWork();

// Click Log
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});



// Projects Object

var projects = {
	"projects" : [
		{
			"title": "Responsive Portfolio",
			"dates": "2016",
			"description": "A one page, responsive portfolio used to showcase projects. Built using HTML5 semantic tags and a custom CSS grid system.",
			"images": ["images/portfolio1.png"]
		}

	]
}

// projects.display = function() {
// 	for(var indexCount = 0; indexCount < projects["projects"].length(); indexCount ++) {
// 		$("#projects").append(HTMLprojectStart);

// 		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[indexCount]["title"]);
// 		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[indexCount]["dates"]);
// 		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[indexCount]["description"]);
// 		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[indexCount]["images"]);
// 		var formattedProjectInfo = formattedProjectDates + formattedProjectDescription + formattedProjectImage;
// 		$(".project-entry:last").append(formattedProjectTitle);
// 		$(".project-entry:last").append(formattedProjectInfo);
// 	}
// }

projects.display = function(){
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project]["title"]);
		$(".project-entry:last").append(formattedProjectTitle);

		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project]["dates"]);
		$(".project-entry:last").append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project]["description"]);
		$(".project-entry:last").append(formattedProjectDescription);

		if (projects.projects[project].images.length > 0) {
			for(image in projects.projects[project].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project]["images"]);
				$(".project-entry:last").append(formattedProjectImage);
			}
		}

		// var formattedProjectInfo = formattedProjectDates + formattedProjectDescription + formattedProjectImage;
	}
}

// Bio Object

var bio = {
		"name": "Zach Nagatani",
		"role": "Front-End Web Developer",
		"welcomeMessage": "Hey! I'm Zach Nagatani. Thanks for taking some time to learn a little bit about me. I hope you find this resume informative!",
		"contacts": {
			"mobile": "408-509-4390",
			"email": "zachnagatani@gmail.com",
			"github": "zachnagatani",
			"twitter": "@zachnagatani"
		},

		"skills": ["HTML5", "CSS3", "JavaScript", "PHP", "Web Design"]
	}


// Internationalize Button

function inName() {
	
	var splitName = bio.name.trim().split(" ");
	console.log(splitName); 

	// var firstLetter = splitName[0].slice(0, 1);

	// firstLetter = firstLetter.toUpperCase();

	// var restOfFirstName = splitName[0].slice(1);

	// restOfFirstName = restOfFirstName.toLowerCase();

	// var lastName = splitName[1].toUpperCase();

	// var internationalName = firstLetter + restOfFirstName + " " + lastName;

	var firstName = splitName[0].slice(0,1).toUpperCase() + splitName[0].slice(1).toLowerCase();

	var lastName = splitName[1].toUpperCase();

	var internationalName = firstName + " " + lastName;

	return internationalName;

}

$("#main").append(internationalizeButton);

// function locationizer(work_obj) {
//     var locationArray = [];
    
//     for (var indexCount = 0; indexCount < work_obj.length; indexCount++) {
//         var newLocation = work_obj[indexCount].location;
//         locationArray.push(newLocation);
//     }
    
//     return locationArray;
// }

// Education Object
var education = {
	"schools": [
		{
			"name" : "Udacity",
			"location" : "San Jose, CA",
			"degree" : "Front-End Web Developer Nanodegree",
			"majors" : ["Front-End Web Development"],
			"dates" : "2016",
			"url" : "https://www.udacity.com/"
		}
	],

	"onlineCourses": [
		
		{
			"title" : "Bootstrap to WordPress",
			"school" : "Udemy",
			"dates" : "2015",
			"url" : "https://www.udemy.com/bootstrap-to-wordpress/"
		},
		{
			"title" : "Practical PHP: Master the Basics and Code Dynamic Websites",
			"school" : "Udemy",
			"dates" : "2016",
			"url" : "https://www.udemy.com/code-dynamic-websites/"
		},
		{
			"title" : "The Complete Web Developer Course",
			"school" : "Udemy",
			"dates" : "2015-2016",
			"url" : "https://www.udemy.com/complete-web-developer-course/"
		},
		{
			"title" : "Ultimate Web Designer & Developer Course: Build 23 Projects!",
			"school" : "Udemy",
			"dates" : "2015-2016",
			"url" : "https://www.udemy.com/web-developer-course/"
		},
		{
			"title" : "JavaScript Basics",
			"school" : "Udacity",
			"dates" : "2016",
			"url" : "https://www.udacity.com/courses/ud804"
		}
	]
}


// Header

var formattedHeaderName = HTMLheaderName.replace("%data%", "Zach Nagatani");

$("#header").append(formattedHeaderName);

// Skills

if(bio.skills.length > 0 ) {
	$("#header").append(HTMLskillsStart);
	
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#header").append(formattedSkill);
	
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#header").append(formattedSkill);
	
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#header").append(formattedSkill);
	
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#header").append(formattedSkill);
	
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#header").append(formattedSkill);
}







