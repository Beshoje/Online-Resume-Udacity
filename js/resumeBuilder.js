var bio = {
	"name": "Bashaer Mohammad",
	"role": "Web Developer",
    "contacts": {
        "mobile": "05555555555",
        "email": "b.homoddah@gmail.com",
        "github": "beshoje",
        "twitter": "@beshoje",
        "location": "Makkah"
	},
    "welcomeMessage": "Welcome All!", 
    "skills": [	"Programming", "UI/UX desinger", "design", "Drawing" ],
	"biopic": "images/logo.svg" }
    bio.display = function(){ 
		var headerName = HTMLheaderName.replace("%data%", bio.name);				
		var headerRole = HTMLheaderRole.replace("%data%", bio.role);
		var welcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		var bioPic = HTMLbioPic.replace("%data%", bio.biopic);
		
		
		var contactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile); 
		var contactEmail = HTMLemail.replace("%data%", bio.contacts.email); 
		var contactGethub = HTMLgithub.replace("%data%", bio.contacts.github); 
		var contactTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter); 
		var contactLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		
		$("#header").prepend(headerRole);
		$("#header").prepend(headerName);
		
		$("#topContacts, #footerContacts").append(contactMobile);
		$("#topContacts, #footerContacts").append(contactEmail);
		$("#topContacts, #footerContacts").append(contactGethub);
		$("#topContacts, #footerContacts").append(contactTwitter);
		$("#topContacts, #footerContacts").append(contactLocation);
					
		$("#header").append(bioPic);
		$("#header").append(welcomeMsg);
		
		if(bio.skills.length >0){
			$("#header").append(HTMLskillsStart);
			bio.skills.forEach(function(mySkills){
				$("#skills").append(HTMLskills.replace("%data%", mySkills));
			});
		}		
	}

var education = {
	"schools": [
		{
           "name": "Umm-AlQura University",
           "location": "Saudi Arabia, Makkah",
           "degree": "Bachelor",
           "majors": ["CS"],
           "dates": "3-2017",
			"url": "https://uqu.edu.sa/"		
		}],
    "onlineCourses": [
		{
           "title": "Java programming language",
           "school": "Rwaq",
           "dates": "8-2016",
           "url": "https://www.rwaq.org/courses/java_programing/sections"
		},
		{
           "title": "HTML5, CSS3 and Javascript",
           "school": "Rwaq",		
		   "dates": "10-2015",
           "url": "https://www.rwaq.org/courses/html5-css3-js/sections"
		}]};
    education.display = function(){
		if(education.schools.length >0){
			education.schools.forEach(function(mySchool){
				$("#education").append(HTMLschoolStart);
				var schoolName = HTMLschoolName.replace("%data%", mySchool.name).replace("#",mySchool.url);		
				var schoolLocation = HTMLschoolLocation.replace("%data%", mySchool.location);
				var schoolDegree = HTMLschoolDegree.replace("%data%", mySchool.degree);
				var schoolDates = HTMLschoolDates.replace("%data%", mySchool.dates);
							
				$(".education-entry:last").append(schoolName + schoolDegree);
				//$(".education-entry:last").append(schoolName);
				$(".education-entry:last").append(schoolLocation);
				$(".education-entry:last").append(schoolDates);
				
				mySchool.majors.forEach(function(myMajor){
				$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", myMajor));
					
				});								
			});
		}
		
		if(education.onlineCourses.length >0){
			$("#education").append(HTMLonlineClasses);
			education.onlineCourses.forEach(function(myCourses){
				var onlineTitle = HTMLonlineTitle.replace("%data%", myCourses.title);			
				var onlineSchool = HTMLonlineSchool.replace("%data%", myCourses.school);		
				var onlineDates = HTMLonlineDates.replace("%data%", myCourses.dates);
				var onlineURL = HTMLonlineURL.replace("%data%", myCourses.url).replace("#",myCourses.url);
				$("#education").append(HTMLschoolStart);
				$(".education-entry:last").append(onlineTitle + onlineSchool);
				//$(".education-entry:last").append(onlineSchool);
				$(".education-entry:last").append(onlineDates);
				$(".education-entry:last").append(onlineURL + "<br>");
			});
		}		
	}

var work = {
	"jobs": [
		{
           "employer": "Training Institute", 
           "title": "Computer Trainer",
           "location": "Jeddah",
           "dates": "2017-September 18",
           "description":"Training students on computer skills, programming and design" 
		},
	]};
      work.display = function(){
		  if(work.jobs.length >0){
			work.jobs.forEach(function(myJob){
			$("#workExperience").append(HTMLworkStart);
			var workEmployer = HTMLworkEmployer.replace("%data%", myJob.employer);							
			var workTitle = HTMLworkEmployer.replace("%data%", myJob.title);							
			var workLocation = HTMLworkLocation.replace("%data%", myJob.location);							
			var workDates = HTMLworkDates.replace("%data%", myJob.dates);							
			var workDescription = HTMLworkDescription.replace("%data%", myJob.description);
			
			//put workEmployer + workTitle in the same line not work
			$(".work-entry:last").append(workEmployer + workTitle);
			//$(".work-entry:last").append(workEmployer);
			//$(".work-entry:last").append(workTitle);
			$(".work-entry:last").append(workLocation);
			$(".work-entry:last").append(workDates);
			$(".work-entry:last").append(workDescription + "<br>");
			});
		}
	} 

var projects = {
	 "projects": [
		{
            "title": "Build a Portfolio Site", 
            "dates": "13-8-2017",
            "description": " building a portfolio website develop a responsive website"+
							"that will display images, descriptions and links to each of the" +
							"portfolio projects you will complete through the course of your Nanodegree program",
            "images": ["images/projectPic.jpg", "images/projectPic.jpg"]
		},
		{
            "title": "Animal Trading Cards", 
            "dates": "2-9-2017",
            "description": "Animal Trading Cards project, , this project combines the skills"+
							"you mastered in the problem set and asks you to re-create a webpage"+
							"from a design prototype.",
            "images": ["images/projectPic2.jpg"]
		}] };
      projects.display = function(){
		  if(projects.projects.length >0){
			projects.projects.forEach(function(myProject){
				$("#projects").append(HTMLprojectStart);
				var projectTitle = HTMLprojectTitle.replace("%data%", myProject.title);
				var projectDates = HTMLprojectDates.replace("%data%", myProject.dates);
				var projectDescription = HTMLprojectDescription.replace("%data%", myProject.description);
				
				$(".project-entry:last").append(projectTitle);
				$(".project-entry:last").append(projectDates);
				$(".project-entry:last").append(projectDescription);
								
				myProject.images.forEach(function(myImages){
				var projectImage = HTMLprojectImage.replace("%data%", myImages);
				
				$(".project-entry:last").append(projectImage);
				});	  
			});
		}
	}

//write function calls in the end for easily debugging purpose	
bio.display();
education.display();
work.display();
projects.display();

//Map
$("#mapDiv").append(googleMap);