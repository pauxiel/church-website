import initTilt from './js/tilt';
import initSr from './js/sr';
import ScrollAnimations from './js/scrolle'

import './style/main.scss';

// $('a[href^="#"]').on('click', function(event) {
//   var target = $(this.getAttribute('href'));
//   if (target.length) {
//     event.preventDefault();
//     $('html, body')
//       .stop()
//       .animate(
//         {
//           scrollTop: target.offset().top
//         },
//         1000
//       );
//   }
// });

const scrollAnimations = new ScrollAnimations()
scrollAnimations.init()

initSr();
initTilt();


