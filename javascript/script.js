$(function(){
  const owl = $('.owl-carousel')
  const owlImg = $('.fade-img')
  const owlDetail = $('.fade-detail')
  console.log(owlImg)
 
  owl.hide()

  $(window).scroll(function(){
    owl.fadeIn()
    owl.owlCarousel({
    items:1,
    margin:60,
    stagePadding:30,
    autoplay:true,
    autoplayTimeout: 5000,
    loop:true,
    center:true,
  })
})

  owl.on('translated.owl.carousel', function() {
    owlImg.fadeIn(1500)
    owlDetail.fadeIn(500)
  })
  owl.on('translate.owl.carousel', function() {
    owlImg.hide()
    owlDetail.hide()
  })


  $('#next').click(function() {
    owl.trigger('next.owl.carousel')
  })
  $('#prev').click(function() {
    owl.trigger('prev.owl.carousel')
  })
})