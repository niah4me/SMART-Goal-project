// Function to handle smooth scrolling
function smoothScroll(target, duration) {
    var targetElement = document.querySelector(target);
    var targetPosition = targetElement.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;
  
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
  
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
  
    requestAnimationFrame(animation);
  }
  
  // Add click event to the down arrow
  document.addEventListener('DOMContentLoaded', function() {
    var downArrow = document.querySelector('.down');
    if (downArrow) {
      downArrow.addEventListener('click', function() {
        smoothScroll('.yellow-log', 1000);
      });
    }
  });
  
  // Add hover effect to SMART goal sections
  document.addEventListener('DOMContentLoaded', function() {
    var smartSections = document.querySelectorAll('.overlap-group, .overlap-2, .overlap-3, .overlap-group-2, .overlap-6');
    smartSections.forEach(function(section) {
      section.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
      });
      section.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
      });
    });
  });
  //media queries
  const mq = window.matchMedia("(max-width: 768px)");

function handleWidthChange(e) {
  if (e.matches) {
    console.log("Viewport is 768px or smaller");
    // Optional: apply JS-based style changes or logic
  } else {
    console.log("Viewport is wider than 768px");
  }
}

mq.addEventListener("change", handleWidthChange);
handleWidthChange(mq); // Call once on load
