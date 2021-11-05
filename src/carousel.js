const text1_options = [
    "POCO Cafe",
    "Card Validation",
    "Studio Ghibli",
    "Traveler.pe",
    "Md-links",
    "Burger Queen"
  ];
  const text2_options = [
    "Web development for a Cafe",
    "Validating Card Numbers with the Luhn Check Algorithm",
    "Studio ghibli web where you can search, filter and order movies information",
    "Social Network for travelers in Peru",
    "It is a library that allows you to read and analyze files in Markdown format, verifying and obtaining statistics of the links within.",
    "PWA made for a fast food restaurant. In this app, you can know whats happening with the orders."
  ];
  const button_options = [
    "https://absorbing-ice.surge.sh/", 
    "https://pauladriana.github.io/LIM015-card-validation/src/", 
    "https://pauladriana.github.io/LIM015-data-lovers/src/", 
    "https://pauladriana.github.io/LIM015-social-network/src/",
    "https://www.npmjs.com/package/pau-mdlinks-lab",
    "https://burgerqueen-apiclient.herokuapp.com/#/"
  ];
  const image_options = [
    "https://firebasestorage.googleapis.com/v0/b/portafolio-bca12.appspot.com/o/project1.png?alt=media&token=1155846f-4d73-407d-a0fb-89cdf570e009",
    "https://firebasestorage.googleapis.com/v0/b/portafolio-bca12.appspot.com/o/project2.png?alt=media&token=7fe07df4-6255-46fb-ad39-db15e2ae217e",
    "https://firebasestorage.googleapis.com/v0/b/portafolio-bca12.appspot.com/o/project3.png?alt=media&token=b3d1f9dc-f551-4bba-bddf-cb1fbf824c2c",
    "https://firebasestorage.googleapis.com/v0/b/portafolio-bca12.appspot.com/o/project5.png?alt=media&token=2f61c266-d3a7-44e2-a5b2-837ad0163e1a",
    "https://firebasestorage.googleapis.com/v0/b/portafolio-bca12.appspot.com/o/project4.png?alt=media&token=b44b0a93-8a20-4fa4-a38b-4e42a8324b91",
    "https://firebasestorage.googleapis.com/v0/b/portafolio-bca12.appspot.com/o/project6.png?alt=media&token=e427220b-553b-4a7f-b0d8-e52c91056376"
  ];
  let i = 0;
  const currentOptionText1 = document.getElementById("projectName");
  const currentOptionText2 = document.getElementById("projectInfo");
  const currentOptionImage = document.getElementById("image");
  const buttonUrl = document.getElementById("buttonUrl");
  const optionPrevious = document.getElementById("previous-option");
  const optionNext = document.getElementById("next-option");
  
  currentOptionText1.innerText = text1_options[i];
  currentOptionText2.innerText = text2_options[i];
  buttonUrl.href = button_options[i];
  currentOptionImage.src = image_options[i];

  
  optionNext.onclick = function () {
    i = i + 1;
    i = i % text1_options.length;
    currentOptionText1.dataset.nextText = text1_options[i];
  
    currentOptionText2.dataset.nextText = text2_options[i];

    buttonUrl.href = button_options[i];
  
    
    setTimeout(() => {
      currentOptionImage.src = image_options[i];
    }, 100);
    
    setTimeout(() => {
      currentOptionText1.innerText = text1_options[i];
      currentOptionText2.innerText = text2_options[i];

    }, 100);
  };
  
  optionPrevious.onclick = function () {
    if (i === 0) {
      i = text1_options.length;
    }
    i = i - 1;
    currentOptionText1.dataset.previousText = text1_options[i];
  
    currentOptionText2.dataset.previousText = text2_options[i];
  
    buttonUrl.href = button_options[i];


  
    setTimeout(() => {
      currentOptionImage.src = image_options[i];
    }, 100);
    
    setTimeout(() => {
      currentOptionText1.innerText = text1_options[i];
      currentOptionText2.innerText = text2_options[i];

    }, 100);
  };
  