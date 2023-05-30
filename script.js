function scrollToSection(event, sectionId) {
    event.preventDefault();
  
    const section = document.getElementById(sectionId);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
  
  

 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});