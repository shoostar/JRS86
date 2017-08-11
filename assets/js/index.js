// Widows
// $('p').each(function() {
//   $(this).html($(this).html().replace(/\s([^\s<]+)\s*$/,'&nbsp;$1'));
// });



// Glitch
var Glitch = function() {
  function Glitch() {
    this._text = document.querySelector('.heading');
    this._filter = document.querySelector('.svg-filters');
    this._turb = this._filter.querySelector('#filter feTurbulence');
    this._turbVal = {
      val: 0.000001
    };
    this._turbValX = {
      val: 0.000001
    };
    this.createTimeline();
  }
  Glitch.prototype.createTimeline = function() {
    var _this = this;
    this.timeline = new TimelineMax({
      repeat: 9999,
      onUpdate: function() {
        _this._turb.setAttribute('baseFrequency', _this._turbVal.val + ' ' + _this._turbValX.val);
      }
    });

    this.timeline.to(this._turbValX, 0.1, {
      val: 0.3,
      ease: Power0.easeNone
    }, 0.25);


  };
  return Glitch;
}();
new Glitch();



// .portfolio-item background colors
$('figcaption').hover( function() {
    $(this).css({ "background-color" : $(this).attr('data-color') });
});



// SO MUCH ROOM FOR ACTIVITIES!!!
function Quote(text, author) {
  this.text = text;
  this.author = author;
}

var quotes = [];
quotes.push(new Quote("thinking about what to eat for lunch", "Will work for homemade apple pie"));
quotes.push(new Quote("keeping his suey chopped", "He doesn't really care for Chinese food"));
quotes.push(new Quote("listening to obnoxiously loud music", "Very metalhead, but listens to anything"));

var getNewRandomQuote = function() {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

$(document).ready(function() {
  var displayNewQuote = function() {
    var newQuote = getNewRandomQuote();

    $("#text").html(newQuote.text);
    $("#author").html(newQuote.author);
  };

  displayNewQuote();
});



// Lazy load backgrounds
function lazyLoadBg(el, imageSource) {
  $('<img/>').attr('src', imageSource).on({
    load: function() {
      $(this).remove();
      $(el).css('backgroundImage', 'url(' + imageSource + ')');
      $(el).css('opacity', '1');
    },
    error: function() {
      $(this).remove();
    }
  });
}

$('.lazy').each(function(index, el) {
  lazyLoadBg(el, $(el).data('src'));
});



// Simple ticker
jQuery(document).ready(function($) {
  var ticker = function() {
    var window_width = window.innerWidth;
    var speed = 12 * window_width;
    $("#ticker li:first").animate(
      { left: "-980px" },
      speed,
      "linear",
      function() {
        $(this)
          .detach()
          .appendTo("#ticker ul")
          .css("left", "100%");
        ticker();
      }
    );
  };
  if ($("#ticker li").length > 1) {
    ticker();
  }
});



// User agent blocks parallax script (add other shit here if/when needed)
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  $('header').removeClass('.parallax');
} else {

  // Simple parallax background
  var cover = document.querySelector('.parallax'),
    coverHeight = Math.round(cover.offsetHeight),
    translate,
    parallaxThreshold = 3;

  function parallax() {
    if (window.scrollY < coverHeight) {
      translate = Math.round(window.scrollY / parallaxThreshold);
      window.requestAnimationFrame(function() {
        cover.style.transform = 'translateY(' + translate + 'px)';
      });
    }
  }

  parallax();

  window.addEventListener('scroll', parallax, false);

  window.addEventListener('resize', debounce(function() {
    coverHeight = Math.round(cover.offsetHeight);
  }, 800));

  function debounce(fn, wait) {
    var timeout;
    return function() {
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        fn.apply(this, arguments)
      }, (wait || 1));
    }
  }
}
