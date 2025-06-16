document.addEventListener('DOMContentLoaded', function () {
    // Function to handle sticky header behavior on scroll
    function handleScroll() {
        const navbar = document.querySelector('.navbar');
        const navbarNav = document.querySelector('#navbarNav');
        const inviBefore = document.querySelector('.inviBefore');
        const lastNavEle = document.querySelector('.lastNavEle');
        const inviAfter = document.querySelector('.inviAfter');
        const navLink = document.querySelectorAll('.nav-link');
        const searchStick = document.querySelector('.searchStick');
        const navbarTogglerIcon = document.querySelector('.navbar-toggler-icon');
        const blogPageJs = document.querySelector(".blogPage");

        if( window.innerWidth > 992 ){
            navbar.classList.add('flex-column');
            searchStick.style.top = "0vh";
            searchStick.classList.remove('d-none');
            lastNavEle.classList.add('d-none');
            if(blogPageJs){
                blogPageJs.classList.remove('flex-column');
                blogPageJs.classList.add('m-5');
                blogPageJs.classList.remove('m-2');
            }
            if (window.scrollY > 50) {
                navbar.classList.add('d-flex');
                navbar.classList.add('justify-content-center');
                inviBefore.classList.add('d-none');
                inviAfter.classList.remove('d-none');
                navbarNav.classList.remove('navbar-collapse');
                navbarNav.classList.remove('collapse');
                navbarNav.classList.add('d-flex');
                navbarNav.classList.add('justify-content-between');
                navbarNav.classList.add('align-items-center');
                navbarNav.classList.add('ps-4');
                navLink.forEach((ele)=>{
                    ele.classList.remove('theColorForLusaNavBefore');
                    ele.classList.add('theColorForLusaNavAfter');
                });
            } else {
                navbar.classList.remove('d-flex');
                navbar.classList.remove('justify-content-center');
                inviBefore.classList.remove('d-none');
                inviAfter.classList.add('d-none');
                navbarNav.classList.add('navbar-collapse');
                navbarNav.classList.add('collapse');
                navbarNav.classList.remove('d-flex');
                navbarNav.classList.remove('justify-content-between');
                navbarNav.classList.remove('align-items-center');
                navbarNav.classList.remove('ps-4');
                navLink.forEach((ele)=>{
                    ele.classList.add('theColorForLusaNavBefore');
                    ele.classList.remove('theColorForLusaNavAfter');
                });
            }
        }else{
            if(blogPageJs){
                blogPageJs.classList.add('flex-column');
                blogPageJs.classList.remove('m-5');
                blogPageJs.classList.add('m-2');
            }
            navbar.classList.remove('flex-column');
            navLink.forEach((ele)=>{
                ele.classList.add('theColorForLusaNavBefore');
                ele.classList.remove('theColorForLusaNavAfter');
            });
            inviAfter.classList.add('d-none');
            searchStick.style.top = "10vh";
            searchStick.classList.add('d-none');
            lastNavEle.classList.remove('d-none');
        }
            const contentContainer = document.getElementById('contentContainer');
    const remainingHomeVid11 = document.querySelectorAll(".remainingHomeVid1");
    const remainingHomeVid21 = document.querySelectorAll(".remainingHomeVid2");
    const theRemainingHomeVid91 = document.querySelectorAll(".upar1");
    const theRemainingHomeVid92 = document.querySelectorAll(".upar2");
    const theRemainingHomeVid93 = document.querySelectorAll(".upar3");
    const theHeight = document.querySelector('.navbar');
    let totalHeight = 0; // Declare totalHeight in a wider scope.  Initialize to a default value.


    if (theHeight) {
            totalHeight = 0;
            totalHeight = theHeight.scrollHeight;
            contentContainer.style.marginTop = -totalHeight + "px";


        const totalHeight1 = remainingHomeVid11[0].scrollHeight;
        const totalHeight2 = remainingHomeVid21[0].scrollHeight;
        const totalHeight3 = remainingHomeVid21[1].scrollHeight;

        theRemainingHomeVid91.forEach((ele) => {
            ele.style.top = "calc(50% - " + totalHeight1 / 2 + "px)";
        });
        theRemainingHomeVid92.forEach((ele) => {
            ele.style.top = "calc(50% - " + totalHeight2 / 2 + "px)";
        });

        theRemainingHomeVid93.forEach((ele) => {
            ele.style.top = "calc(50% - " + totalHeight3 / 2 + "px)";
        });
    } else {
      console.warn("navbar not found during DOMContentLoaded");
    }
    }
    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // Call it once to set initial state

    const slide6rContainer = document.querySelector(".slide6r-container6");
    const slide6rWrapper = document.querySelector(".slide6r-wrapper6");
    const slide6s = document.querySelectorAll(".slide6");
    const slide6Width = slide6s[0].offsetWidth; // Get the width of one slide6
    const totalslide6s = slide6s.length;
    let currentPosition = 0;
    let intervalId; // Store the interval ID for pausing/resuming

    // Function to slide6 to the next item
    function slide6Next() {
      currentPosition -= slide6Width; // Move to the left
      if (currentPosition < -slide6Width * (totalslide6s - 1)) {
        // Reset to the beginning if we've reached the end
        currentPosition = 0;
      }
      slide6rWrapper.style.transform = `translateX(${currentPosition}px)`;
    }

    // Function to start the automatic sliding
    function startAutoslide6() {
      intervalId = setInterval(slide6Next, 2000); // Change slide6 every 2 seconds (adjust as needed)
    }

    // Function to stop the automatic sliding (for pause on hover if desired)
    function stopAutoslide6() {
      clearInterval(intervalId);
    }

    // Initialize the automatic sliding
    startAutoslide6();

    // Optional: Pause on hover and resume when mouse leaves
    slide6rContainer.addEventListener("mouseenter", stopAutoslide6);
    slide6rContainer.addEventListener("mouseleave", startAutoslide6);

    // Optional: Manual Navigation (add these if you uncommented the arrow buttons)
    /*
      const leftArrow = document.querySelector('.slide6r-arrow.left');
      const rightArrow = document.querySelector('.slide6r-arrow.right');

      leftArrow.addEventListener('click', () => {
         stopAutoslide6(); // Stop auto slide6 when using manual controls
         currentPosition += slide6Width;
         if (currentPosition > 0) {
             currentPosition = -slide6Width * (totalslide6s - 1);
         }
         slide6rWrapper.style.transform = `translateX(${currentPosition}px)`;
         startAutoslide6(); // Restart auto slide6 after manual navigation
      });

      rightArrow.addEventListener('click', () => {
          stopAutoslide6();
          currentPosition -= slide6Width;
          if (currentPosition < -slide6Width * (totalslide6s - 1)) {
              currentPosition = 0;
          }
          slide6rWrapper.style.transform = `translateX(${currentPosition}px)`;
          startAutoslide6();
      });
      */

});
function lusaFooter() {
  let onWhenScreenStore = document.querySelectorAll(".onWhenScreen");
  let offWhenScreenStore = document.querySelectorAll(".offWhenScreen");
  let dropAfter415 = document.querySelectorAll(".dropdown-menu");
  let allMsRemove = document.querySelectorAll(".allMsRemove");

  if (window.innerWidth <= 992) {
    // Small screen
    document
      .querySelector(".someAlignmentRequire")
      .classList.add("flex-column");
    document
      .querySelector(".someAlignmentRequire")
      .classList.add("flex-column-reverse");
    document.querySelector(".someAlignmentRequire").classList.remove("ms-5");
    document.querySelector(".someAlignmentRequire").classList.remove("me-5");
    document.querySelector(".someAlignmentRequire").classList.add("ms-3");
    document.querySelector(".someAlignmentRequire").classList.add("me-3");
    document
      .querySelector(".someAlignmentRequireTopPart")
      .classList.add("pb-2");
    document.querySelector(".someLessPaddingMob").classList.add("pt-2");
    document.querySelector(".someLessPaddingMob").classList.add("pb-3");
    document.querySelector(".subForMob").classList.add("pt-0");
    document.querySelector(".subForMob").classList.add("pb-0");

    dropAfter415.forEach((ele) => {
      ele.classList.add("dropdown-menu-end");
    });
    document.querySelectorAll(".justSideDropEnd").forEach((ele)=>{
        ele.classList.remove("dropend");
    });
    // Show only the first item
    onWhenScreenStore.forEach((ele) => {
      ele.classList.remove("d-none");
    });
    offWhenScreenStore.forEach((ele) => {
      ele.classList.add("d-none");
    });
  } else {
    document
      .querySelector(".someAlignmentRequire")
      .classList.remove("flex-column");
    document
      .querySelector(".someAlignmentRequire")
      .classList.remove("flex-column-reverse");
    document.querySelector(".someAlignmentRequire").classList.add("ms-5");
    document.querySelector(".someAlignmentRequire").classList.add("me-5");
    document.querySelector(".someAlignmentRequire").classList.remove("ms-3");
    document.querySelector(".someAlignmentRequire").classList.remove("me-3");
    document
      .querySelector(".someAlignmentRequireTopPart")
      .classList.remove("pb-2");
    document.querySelector(".someLessPaddingMob").classList.remove("pt-2");
    document.querySelector(".someLessPaddingMob").classList.remove("pb-3");
    document.querySelector(".subForMob").classList.remove("pt-0");
    document.querySelector(".subForMob").classList.remove("pb-0");

    dropAfter415.forEach((ele) => {
      ele.classList.remove("dropdown-menu-end");
    });
    document.querySelectorAll(".justSideDropEnd").forEach((ele)=>{
        ele.classList.add("dropend");
    });
    document
      .querySelectorAll(".add_dropdown_menu_end").forEach((ele)=>{
        ele.classList.add("dropdown-menu-end");
      });
    // Show only the first item
    onWhenScreenStore.forEach((ele) => {
      ele.classList.add("d-none");
    });
    offWhenScreenStore.forEach((ele) => {
      ele.classList.remove("d-none");
    });
  }

  if (window.innerWidth <= 650) {
    allMsRemove.forEach((ele)=>{
        ele.classList.add("d-none");
    });
  }else{
    allMsRemove.forEach((ele)=>{
        ele.classList.remove("d-none");
    });
  }
}

lusaFooter();
window.addEventListener("resize", lusaFooter);

document.addEventListener("DOMContentLoaded", function () {
  // Existing code for general dropdown handling...
  var dropdownSubmenus = document.querySelectorAll(".dropend");

  dropdownSubmenus.forEach(function (submenu) {
    submenu
      .querySelector(".dropdown-toggle")
      .addEventListener("click", function (e) {
        e.stopPropagation();
        var submenuDropdownMenu = submenu.querySelector(".dropdown-menu");
        if (submenuDropdownMenu.classList.contains("show")) {
          submenuDropdownMenu.classList.remove("show");
        } else {
          document
            .querySelectorAll(".dropend .dropdown-menu")
            .forEach(function (el) {
              el.classList.remove("show");
            });
          submenuDropdownMenu.classList.add("show");
        }
      });
  });

  document.addEventListener("click", function () {
    document.querySelectorAll(".dropend .dropdown-menu").forEach(function (el) {
      el.classList.remove("show");
    });
  });

  // NEW CODE END
});
window.onload = function () {
  if (!sessionStorage.getItem("modalShown")) {
    var myModal = new bootstrap.Modal(
      document.getElementById("subscribeModal"),
      {
        keyboard: false,
      }
    );
    myModal.show();

    sessionStorage.setItem("modalShown", "true");
  }
};

function showOverlay() {
  document.getElementById("pink-overlay").style.display = "block";
}

function hideOverlay() {
  document.getElementById("pink-overlay").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const searchResultsContainer = document.getElementById("search-results");

  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    searchResultsContainer.innerHTML = ""; // Clear previous results
    searchResultsContainer.style.display = "none"; // Hide the results container

    if (searchTerm.length < 3) {
      // Don't search for very short terms
      return;
    }

    // Get all anchor elements (links)
    const allLinks = document.body.querySelectorAll("a");

    const linkResults = [];

    allLinks.forEach((link) => {
      const linkText = link.innerText.toLowerCase();
      if (linkText.includes(searchTerm)) {
        linkResults.push({
          href: link.href,
          text: link.innerText,
        });
      }
    });

    if (linkResults.length > 0) {
      searchResultsContainer.style.display = "block"; // Show the results container
      const resultsList = document.createElement("ul");
      linkResults.forEach((result) => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = result.href;
        link.textContent = result.text;
        listItem.appendChild(link);
        resultsList.appendChild(listItem);
      });

      searchResultsContainer.appendChild(
        document.createElement("h3")
      ).textContent = `Found ${linkResults.length} matches:`;
      searchResultsContainer.appendChild(resultsList);
    } else {
      searchResultsContainer.style.display = "block"; // Show the results container
      searchResultsContainer.appendChild(
        document.createElement("p")
      ).textContent = "No results found.";
    }
  });
});

// Add the script to change the nav-item style on dropdown open
document.addEventListener("DOMContentLoaded", function () {
  const dropdownElements = document.querySelectorAll(".nav-item.dropdown"); // Select all dropdown nav-items

  dropdownElements.forEach(function (dropdown) {
    dropdown.addEventListener("shown.bs.dropdown", function () {
      // This function is called *after* the dropdown is shown.
      this.classList.add("active-dropdown"); // Add a class to the nav-item
      //this.style.backgroundColor = '#f0f0f0'; // Change background color, for example
    });

    dropdown.addEventListener("hidden.bs.dropdown", function () {
      // This function is called *after* the dropdown is hidden.
      this.classList.remove("active-dropdown"); // Remove the added class
      //this.style.backgroundColor = '';       // Reset the background color
    });
  });
});





document.addEventListener('DOMContentLoaded', function() {

    function blogOperations() {
      const theHeight = document.querySelector('.navbar');
      if (theHeight) {  // Check if the navbar element exists
        let totalHeight = 0;
        totalHeight = theHeight.scrollHeight; // Update totalHeight
        console.log("blogOperations totalHeight:", totalHeight);
        const fbFeedForBlog = document.getElementById('facebook-feed-container');
        if (fbFeedForBlog) { // Check if the facebook-feed-container element exists
          fbFeedForBlog.style.top = `${totalHeight}px`;
        } else {
          console.warn("facebook-feed-container not found"); // Important for debugging!
        }
      } else {
        console.warn("navbar not found"); // Important for debugging!
      }
    }


    window.addEventListener('scroll', blogOperations);
    window.addEventListener("resize", blogOperations);

    blogOperations(); // Call initially after DOMContentLoaded
});

let noOfInsaPics = 0;
if(window.innerWidth >= 640){
    noOfInsaPics = 8;
}else{
    noOfInsaPics = 4;
}

var userFeed = new Instafeed({
    get: 'user',
    target: "instafeed-container",
    resolution: 'low_resolution',
    accessToken: 'IGAARe6tZAbYZCZABZAE9ldV9hM21reXN6TVU4bUdZAZAGtCMk02VmNRNmRwblBTSHRMZADFXdUxjUkFHWmRxUnNMeU5ETV80eVRTcTBzRWZATaGdTeXllMm5NR0J1bHRYSlRULTZAJVDNzOXBpd1llc0k5dEhIdkhJaHdaVXhTeHdDQlMyWQZDZD',
    limit: noOfInsaPics,
    template: '<div class="instafeed-item"><a href="{{link}}" target="_blank"><img src="{{image}}" /></a></div>',
    after: function() {
    var container = document.getElementById('instafeed-container');
    container.classList.add('instafeed-grid'); //Add the class instafeed-grid to the container div
    }
});
userFeed.run();


document.addEventListener('DOMContentLoaded', function() { // Ensure the DOM is fully loaded

    const videos = document.querySelectorAll('.lusa-video');

    videos.forEach((video)=>{
    console.log(video)
        if (!video) {
            console.error('Video element with ID "myVideo" not found.');
            return; // Stop execution if the video element doesn't exist
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        video.play();
                    } else {
                        video.pause();
                    }
                });
            },
            {
                threshold: 0.3 // Adjust threshold as needed
            }
        );

        observer.observe(video); // Start observing the video element
    });

});


// slide

const slider = document.querySelectorAll('.slider');
const slides = document.querySelectorAll('.slide');
const sliderContainer = document.querySelectorAll('.slider-container');
let currentIndex = 0;
let startY = 0;
let intervalId; // Declare intervalId outside the functions

// Function to move the slider
function moveSlider() {
  slider.forEach((ele)=>{
    ele.style.transform = `translateY(-${currentIndex * 100}%)`;
  });
}

// Function to go to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  moveSlider();
}

// Function to start or restart the autoplay interval
function startAutoplay() {
  // Clear any existing interval to prevent multiple intervals running
  clearInterval(intervalId);
  intervalId = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

// Function to check if the container has content and restart after 1 second
function checkAndRestart() {
  //if (slides.length === 0) { // Check if there are NO slides
  if (slides.length === 0) {  // Replaced check to use existing slides.length
    setTimeout(() => { // Use arrow function for correct `this` context
       clearInterval(intervalId); // Clear existing auto play
       startAutoplay(); // Restart auto play
    }, 1000); // Wait 1 second
  }
}
// Swipe event listeners
sliderContainer.forEach((ele)=>{
    ele.addEventListener('touchstart', (e) => {
      startY = e.touches[0].clientY;
      clearInterval(intervalId); // Stop autoplay on touch
    });
});

sliderContainer.forEach((ele)=>{
    ele.addEventListener('touchmove', (e) => {
      const deltaY = e.touches[0].clientY - startY;
      const sensitivity = 50;

      if (deltaY > sensitivity) { // Swipe down
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        moveSlider();
        startY = e.touches[0].clientY; // Reset startY
      } else if (deltaY < -sensitivity) { // Swipe up
        currentIndex = (currentIndex + 1) % slides.length;
        moveSlider();
        startY = e.touches[0].clientY; // Reset startY
      }
    });
});


sliderContainer.forEach((ele)=>{
    ele.addEventListener('touchend', () => {
      // Restart autoplay
      startAutoplay();
    });
});


// Initial Autoplay and check
startAutoplay();
