// Show the first tab and hide the rest
$('#tabs-navs li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-navs li').mouseenter(function(){
  $('#tabs-navs li').removeClass('active');
 $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});



// $(document).ready(function(){
//   $(".testimonial-carousel").owlCarousel({
//     loop:true,
//     margin:10,
//     responsiveClass:true,
//     responsive:{
//         0:{
//             items:1,
//             nav:true
//         },
//         600:{
//             items:3,
//             nav:false
//         },
//         1000:{
//             items:5,
//             nav:true,
//             loop:false
//         }
//     }
// })

// $('.testimonial-carousel').owlCarousel({
//   loop:true,
//   margin:10,
//   responsiveClass:true,
//   responsive:{
//       0:{
//           items:1,
//           nav:true
//       },
//       600:{
//           items:2,
//           nav:false
//       },
//       1000:{
//           items:2,
//           nav:true,
//           loop:false
//       }
//   }
// })
$('.testimonial-carousel').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  margin:10,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
  slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});