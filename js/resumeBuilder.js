var model = {

	bio: {
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
	},

	work: {
		"jobs": [{
			"employer": "Church of the Cross San Diego",
			"title": "Volunteer Web Designer/Developer",
			"location": "San Diego, CA (remote)",
			"dates": "2015-2016",
			"description": "Create wireframes, mockups, and visual design of the church website, as well as develop the site in HTMl, CSS, JS, and PHP.",
			"url": "http://www.churchofthecrosssd.com/"
		}, {
			"employer": "First Delivery Services",
			"title": "Amazon Delivery Attendent",
			"location": "San Jose, CA",
			"dates": "2015-2016",
			"description": "Ensure the secure delivery of packages to Amazon customers throughout the South Bay.",
			"url": "http://www.firstdeliveryservice.com/"
		}, {
			"employer": "Five Guys Burgers and Fries",
			"title": "General Manager",
			"location": "San Diego, CA",
			"dates": "2012-2015",
			"description": "Oversee general operations of the restaurant. Hire, train, retain, and lead a team to provide excellent food and customer service in a clean environment. Handle financials and inventory.",
			"url": "http://www.fiveguys.com/"
		}],
	},

	projects: {
		"projects": [{
				"title": "Responsive Portfolio",
				"dates": "2016",
				"description": "A one page, responsive portfolio used to showcase projects. Built using HTML5 semantic tags and a custom CSS grid system.",
				"images": ["images/portfolio1.png"],
				"url": "#"
			}

		]
	},

	education: {
		"schools": [{
			"name": "Udacity",
			"location": "San Jose, CA",
			"degree": "Nanodegree",
			"majors": ["Front-End Web Development"],
			"dates": "2016",
			"url": "https://www.udacity.com/"
		}],

		"onlineCourses": [

			{
				"title": "Bootstrap to WordPress",
				"school": "Udemy",
				"date": "2015",
				"url": "https://www.udemy.com/bootstrap-to-wordpress/"
			}, {
				"title": "Practical PHP: Master the Basics and Code Dynamic Websites",
				"school": "Udemy",
				"date": "2016",
				"url": "https://www.udemy.com/code-dynamic-websites/"
			}, {
				"title": "The Complete Web Developer Course",
				"school": "Udemy",
				"date": "2015-2016",
				"url": "https://www.udemy.com/complete-web-developer-course/"
			}, {
				"title": "Ultimate Web Designer & Developer Course: Build 23 Projects!",
				"school": "Udemy",
				"date": "2015-2016",
				"url": "https://www.udemy.com/web-developer-course/"
			}, {
				"title": "JavaScript Basics",
				"school": "Udacity",
				"date": "2016",
				"url": "https://www.udacity.com/courses/ud804"
			}
		]
	},

}; // end model

var octopus = {
	init: function(){

		headerView.render();
		workView.render();
		projectsView.render();
		educationView.render();
		mapView.render();

	},

	getBio: function(){
		return model.bio;
	},

	getWork: function(){
		return model.work;
	},

	getProjects: function(){
		return model.projects;
	},

	getEducation: function(){
		return model.education;
	},

};

var headerView = {

	render: function(){
		var bio = octopus.getBio();
		var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);

		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

		$("#header").prepend(formattedHeaderRole).prepend(formattedHeaderName);

		$("#topContacts").append(formattedMobile)
			.append(formattedEmail)
			.append(formattedGithub)
			.append(formattedTwitter)
			.append(formattedLocation);

		$("#footerContacts").append(formattedMobile)
			.append(formattedEmail)
			.append(formattedGithub)
			.append(formattedTwitter)
			.append(formattedLocation);

		$("#header").append(formattedBioPic)
			.append(formattedWelcomeMsg);

		// Skills

		// Check if skills exist within bio and if so create variables and append them to the page
		if (bio.skills.length > 0) {
			// Append the h3 for the skills section to the page
			$("#header").append(HTMLskillsStart);

			// Create formatted variable for each skill and append to the page
			var len = bio.skills.length;
			for (var i = 0; i < len; i++) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
				$("#skills").append(formattedSkill);
			}
		}
	},
};

var workView = {

	render: function(){
		var work = octopus.getWork();
		var len = work.jobs.length;
		for (var indexCount = 0; indexCount < len; indexCount++) {

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
			// Append the concantenated workInfo variable to the last .work-entry
			$(".work-entry:last").append(formattedEmployerTitle)
				.append(formattedWorkInfo);
		}

	},
};

var projectsView = {

	render: function(){
		var projects = octopus.getProjects();
		var len = projects.projects.length;
		for (var indexCount = 0; indexCount < len; indexCount++) {
			// Append a .project-entry for each project
			$("#projects").append(HTMLprojectStart);

			// Create and append formatted variables for all project info
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[indexCount].title).replace("#", projects.projects[indexCount].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[indexCount].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[indexCount].description);
			$(".project-entry:last").append(formattedProjectTitle)
				.append(formattedProjectDates)
				.append(formattedProjectDescription);

			// Check to see if a project image is present, and if so format and append the image to the last .project-entry
			if (projects.projects[indexCount].images.length > 0) {
				for (var image in projects.projects[indexCount].images) {
					var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[indexCount].images);
					$(".project-entry:last").append(formattedProjectImage);
				}
			}
		}
	},
};

var educationView = {
	render: function(){
		var education = octopus.getEducation();
		var len = education.schools.length;
		for (var indexCount = 0; indexCount < len; indexCount++) {

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
			$(".education-entry:last").append(formattedSchoolHeader)
				.append(formattedSchoolLocation)
				.append(formattedSchoolDates)
				.append(formattedSchoolMajor);
		}

		// Append the h3 to the #education div. Must come after the above code for correct formatting
		$("#education").append(HTMLonlineClasses);

		var len = education.onlineCourses.length;
		for (var indexCount = 0; indexCount < len; indexCount++) {

			// Append an education entry for each onlineCourse in education
			$("#education").append(HTMLschoolStart);

			// Create variables for the info in each onlineCourse
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[indexCount].title).replace("#", education.onlineCourses[indexCount].url);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[indexCount].school);
			// Concatenate title and school for proper styling
			var formattedOnlineHeader = formattedOnlineTitle + formattedOnlineSchool;
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[indexCount].date);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[indexCount].url).replace("#", education.onlineCourses[indexCount].url);
			var formattedSchoolInfo = formattedSchoolLocation + formattedSchoolDegree + formattedSchoolMajor + formattedSchoolDates;

			// Append the various info the page
			$(".education-entry:last").append(formattedOnlineHeader)
				.append(formattedOnlineDates)
				.append(formattedOnlineURL);
		}
	},
};

var mapView = {
	render: function(){
		$("#mapDiv").append(googleMap);
	}
};

octopus.init();

// Log x and y cooridinates of page clicks
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x, y);
});