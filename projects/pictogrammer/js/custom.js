'use strict';

window.onscroll = function () {scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 460 || document.documentElement.scrollTop > 460) {
    document.getElementById('myBtn').style.display = 'block';
  } else {
    document.getElementById('myBtn').style.display = 'none';
  }

}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  $('html, body').animate({ scrollTop: 0 }, 'fast');
}
