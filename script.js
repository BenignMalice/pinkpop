window.addEventListener("load", function () {
  // Code executed when the window has finished loading

  const popContainer = document.querySelector(".pop-container");
  const body = document.querySelector("body");
  const popSound = document.getElementById("popSound");
  const images = document.querySelectorAll(".pop-image");

  // Set a timeout to start the animation after 0.5 seconds
  setTimeout(function () {
    popContainer.style.animation = "";
    body.classList.add("standard-bg");
    playAnimation(images, 0);
  }, 500);

  // Function to play the image animation
  function playAnimation(images, index) {
    if (index < images.length) {
      const image = images[index];
      image.classList.add("show");

      // Set a timeout to hide the current image after 2 seconds
      setTimeout(function () {
        image.classList.remove("show");

        // Set a timeout to play the next image animation after 0.5 seconds
        setTimeout(function () {
          playAnimation(images, index + 1);
        }, 500);
      }, 1500);
    } else {
      // All images have been animated
      popSound.play(); // Play the sound after the image animations have finished

      // Set a timeout to remove the image container after 0.5 seconds
      setTimeout(function () {
        popContainer.classList.add("hide-image");

        // Set a timeout to completely remove the image container after 0.5 seconds
        setTimeout(function () {
          popContainer.remove();

          // Redirect to the home page after the animation is finished
          window.location.href = "home.html";
          // Replace 'home.html' with the URL of your home page
        }, 250);
      }, 250);
    }
  }
});
