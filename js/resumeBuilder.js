// Create the bio object

var bio = {
		"name": "Zach Nagatani",
		"role": "Front-End Web Developer",
		"welcomeMessage": "Hey! I'm Zach Nagatani. Thanks for taking some time to learn a little bit about me. I hope you find this resume informative!",
		"contacts": {
			"mobile": "408-509-4390",
			"email": "zachnagatani@gmail.com",
			"github": "zachnagatani",
			"twitter": "@zachnagatani",
			"location": "San Jose, CA"
		},

		"skills": ["HTML5", "CSS3", "JavaScript", "PHP", "Web Design"],

		"biopic": "images/me-beach.jpg"
	}

// Create and encapsulate the function used to display bio's info on the page
bio.display = function(){

	// Create and append formatted variables for all bio info
	var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedHeaderRole);

	var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedHeaderName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedBioPic);

	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);


	// Skills

	// Check if skills exist within bio and if so create variables and append them to the page
	if(bio.skills.length > 0 ) {
		// Append the h3 for the skills section to the page
		$("#header").append(HTMLskillsStart);

		// Create formatted variable for each skill and append to the page
		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
		}
	}
}

bio.display();

// Create work object

var work = {
	"jobs" : [
		{
			"employer" : "Church of the Cross San Diego",
			"title" : "Volunteer Web Designer/Developer",
			"location" : "San Diego, CA (remote)",
			"dates" : "2015-2016",
			"description" : "Create wireframes, mockups, and visual design of the church website, as well as develop the site in HTMl, CSS, JS, and PHP.",
			"url" : "http://www.churchofthecrosssd.com/"
		},
		{
			"employer" : "First Delivery Services",
			"title" : "Amazon Delivery Attendent",
			"location" : "San Jose, CA",
			"dates" : "2015-2016",
			"description" : "Ensure the secure delivery of packages to Amazon customers throughout the South Bay.",
			"url" : "http://www.firstdeliveryservice.com/"
		},
		{
			"employer" : "Five Guys Burgers and Fries",
			"title" : "General Manager",
			"location" : "San Diego, CA",
			"dates" : "2012-2015",
			"description" : "Oversee general operations of the restaurant. Hire, train, retain, and lead a team to provide excellent food and customer service in a clean environment. Handle financials and inventory.",
			"url" : "http://www.fiveguys.com/"
		}
	]
}


// Create function to display info in the work object, and encapsulate function within work
work.display = function() {
	for(var indexCount = 0; indexCount < work.jobs.length; indexCount++) {

		// Append the .work-entry div for each job for correct formatting
		$("#workExperience").append(HTMLworkStart);

		// Create formatted variables for the info in the work object
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[indexCount].employer).replace("#", work.jobs[indexCount].url);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[indexCount].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[indexCount].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[indexCount].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[indexCount].description);

		// Concantenate variables for DRY code
		var formattedWorkInfo = formattedWorkDates + formattedWorkLocation + formattedWorkDescription;

		// Append the title to the last .work-entry created
		$(".work-entry:last").append(formattedEmployerTitle);

		// Append the concantenated workInfo variable to the last .work-entry
		$(".work-entry:last").append(formattedWorkInfo);
		}
}

work.display();


// Create the Projects Object

var projects = {
	"projects" : [
		{
			"title": "Responsive Portfolio",
			"dates": "2016",
			"description": "A one page, responsive portfolio used to showcase projects. Built using HTML5 semantic tags and a custom CSS grid system.",
			"images": ["images/portfolio1.png"],
			"url" : "#"
		}

	]
}

// Create the function to display projects' info and encapsulate the function within projects
projects.display = function(){
	for(project in projects.projects) {
		// Append a .project-entry for each project
		$("#projects").append(HTMLprojectStart);

		// Create and append formatted variables for all project info
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("#", projects.projects[project].url);
		$(".project-entry:last").append(formattedProjectTitle);

		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);

		// Check to see if a project image is present, and if so format and append the image to the last .project-entry
		if (projects.projects[project].images.length > 0) {
			for(image in projects.projects[project].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
				$(".project-entry:last").append(formattedProjectImage);
			}
		}
	}
}

projects.display();

// Create the education object

var education = {
	"schools": [
		{
			"name" : "Udacity",
			"location" : "San Jose, CA",
			"degree" : "Nanodegree",
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

// Create and encapsulate the function used to display education's info
education.display = function(){
	for(var indexCount = 0; indexCount < education.schools.length; indexCount++) {

		// Append an .education-entry div for each school in education
		$("#education").append(HTMLschoolStart);

		// Creat formatted variables for all the info in each school
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[indexCount].name).replace("#", education.schools[indexCount].url);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[indexCount].degree);
		// Concantenate name and degree for proper styling
		var formattedSchoolHeader = formattedSchoolName + formattedSchoolDegree;
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[indexCount].location);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[indexCount].dates);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[indexCount].majors);

		// Append the info the last .education-entry
		$(".education-entry:last").append(formattedSchoolHeader);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolMajor);
	}

	// Append the h3 to the #education div. Must come after the above code for correct formatting
	$("#education").append(HTMLonlineClasses);

	for(var indexCount = 0; indexCount < education.onlineCourses.length; indexCount++) {

		// Append an education entry for each onlineCourse in education
		$("#education").append(HTMLschoolStart);

		// Create variables for the info in each onlineCourse
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[indexCount].title).replace("#", education.onlineCourses[indexCount].url);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[indexCount].school);
		// Concatenate title and school for proper styling
		var formattedOnlineHeader = formattedOnlineTitle + formattedOnlineSchool;
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[indexCount].dates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[indexCount].url).replace("#", education.onlineCourses[indexCount].url);
		var formattedSchoolInfo = formattedSchoolLocation + formattedSchoolDegree + formattedSchoolMajor + formattedSchoolDates;

		// Append the various info the page
		$(".education-entry:last").append(formattedOnlineHeader);
		$(".education-entry:last").append(formattedOnlineDates);
		$(".education-entry:last").append(formattedOnlineURL);
	}
}

education.display();

// Internationalize Button

// Create function to internationalize the name (capital first letter of first name and all caps last name)
function inName() {

	// Split the full name string into two strings at the space and return as an array
	var splitName = bio.name.trim().split(" ");
	console.log(splitName);

	// Create variable for the first name
	// Access the first name in splitName, slice the first letter and make it uppercase
	// Slice the rest of the name and make it lowercase
	var firstName = splitName[0].slice(0,1).toUpperCase() + splitName[0].slice(1).toLowerCase();

	// Create variable for last name
	// Access the last name in splitName and make it uppercase
	var lastName = splitName[1].toUpperCase();

	//  Concantenate firstName and lastName with a space in between
	var internationalName = firstName + " " + lastName;

	return internationalName;

}

// Append the button used to modify the header name/internationalName
$("#header").prepend(internationalizeButton);

// On the click event, create function that passes jQuery's location object as a parameter
// Store loc.pageX as x
// Store loc.pageY as y
// Pass that info as paramaters for the logClicks function found in helper.js
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

// Append the interactive googleMap to the screen
$("#mapDiv").append(googleMap);