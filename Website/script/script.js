AOS.init({
    easing: 'ease-in-quad',
    delay: 400,
  });


  // Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Circle(container, {
  color: '#aaa',
  // This has to be the same size as the maximum width to prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1900,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#fbff00', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    //var value = Math.round(circle.value() * 100);
    //if (value === 0) {
      //circle.setText('');
    //} else {
      //circle.setText(value);
    //}

  }
});
//bar.text.style.fontFamily = '"Poppins", Helvetica, sans-serif';
//bar.text.style.fontSize = '2rem';
bar.animate(1.0);  // Number from 0.0 to 1.0


$('.carousel').carousel()