(function($) {

  // Init Wow
  wow = new WOW({
    animateClass: 'animated',
    offset: 100
  });
  wow.init();

  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  // Navigation scrolls
  $('.navbar-nav li a').bind('click', function(event) {
    $('.navbar-nav li').removeClass('active');
    $(this).closest('li').addClass('active');
    var $anchor = $(this);
    var nav = $($anchor.attr('href'));
    if (nav.length) {
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');

      event.preventDefault();
    }
  });

  // About section scroll
  $(".overlay-detail a").on('click', function(event) {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function() {
      window.location.hash = hash;
    });
  });

  //jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
    if ($(".navbar-default").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });

  $('.show-gallery').on('click', function(event) {
    var galleryId = $(this).attr('data-button-gallery');

    $('.gallery--holder.active').fadeOut(600).promise().done(function(){
      $('[data-gallery="'+galleryId+'"]').fadeIn().addClass('active');
    });
  });

  mountChart();

})(jQuery);

function moveDivisor(n) {
  var divisor = document.getElementById("divisor" + n),
  slider = document.getElementById("slider" + n); 

  console.log(divisor);

  divisor.style.width = slider.value+"%";
}

function mountChart(){
  Highcharts.chart('data-chart', {
    chart: {
      type: 'column',
      options3d: {
        enabled: true,
        alpha: 10,
        beta: 25,
        depth: 70
      }
    },
    title: {
      text: 'Arctic mass over the years'
    },
    subtitle: {
      text: ''
    },
    plotOptions: {
      column: {
        depth: 25
      }
    },
    xAxis: {
      categories: arctictMassYears,
      labels: {
        skew3d: true,
        style: {
          fontSize: '16px'
        }
      }
    },
    yAxis: {
      title: {
        text: null
      }
    },
    series: [{
      name: 'Mass',
      data: arctictMassData
    }]
  });
}