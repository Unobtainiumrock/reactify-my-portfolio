
/**
 * @param  {Object} portfolioArray is an array of urls for generating each project to be displayed
 */
const renderPortfolio = (portfolioArray) => {
  // // Empty current view
  //   $('#app').html('');
    
  //   // Create a row which will hold images
  //   let master = $('<div class="row" id="master">');
  //   let leftCol = $('<div class="col-md-5 animated fadeIn" id="left">');
  //   let rightCol = $('<div class="col-md-6 animated fadeIn" id="right">');
  //   let imgRow = $('<div class="row" id="image-row">');
  //   let btnRow = $('<div class="row" id="button-row">');


  //   portfolioArray.forEach((project) => {
  //     const { projectName, tags } = project;
  //     populateImageColumn(project);
  //   })

  //   let projectsDescription = $('<p class="animated fadeIn paragraph-format"></p>');
    
  //   projectsDescription.text(`
  //     These are some of the projects I have completed over the past few weeks
  //     --please click on any to see their deployed version on GitHub pages.
  //     They showcase some of my skills, which include: reading and writing data from Firebase, implementing API calls using
  //     JQuery's AJAX method, and other random Javascript features such promises and async await.
  //     The project with the most polished front-end is an app called Weeklypedia, which allows
  //     users have a randomly generated plan based on their saved interests and geographic location.
  //     This was all accomplished by using HTML5 geolocation Eventbrite API, and Firebase.
  //     Weeklypedia was completed as a group effort with other programmers.
  //   `)

  //   // Populate the left column with buttons
  //   $(leftCol).append(projectsDescription);
  //   // Populate The right column with the images
  //   $(rightCol).append(imgRow);
  //   // Populate master row with the left and right columns
  //   $(master).append(leftCol);
  //   $(master).append(rightCol);

  //   // Render the entire desired output to the user
  //   $('#app').append(master);

  //   function populateImageColumn(project) {
  //     let imgHolder = $('<div class=col-md-6>');
  //     let img = $(`<img class=${JSON.stringify(project.class)} data-url=${project.deployedUrl} src=${project.imgPath} height=${project.dimensions} length=${project.dimensions}>`);
    
  //     imgHolder.append(img);
  //     imgRow.append(imgHolder);
  //   }

  //   function populateButtonColumn(project,tags) {
  //     console.log(project);
  //     let buttonHolder = $('<div class="col-md-6">');
  //     let button = $('<button class="btn button-default nav-button"></button');
  //     button.text(project);
  //     buttonHolder.append(button);
  //     btnRow.append(buttonHolder);
  //   }

  };
  
export default renderPortfolio;
