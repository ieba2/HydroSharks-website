$(window).scroll(function () {
    const scrollTop = $(window).scrollTop();
    const documentHeight = $(document).height();
    const windowHeight = $(window).height();
  
    const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
    const $circle = $('.white');
    
    growAnimation($circle, scrollPercent);
  });
  
  function growAnimation($element, animationPercentage) {
    const animationDecimal = easeInOutQuad(animationPercentage / 100);
  
    const finishSizePercent = 300;
    const finishPositionPercent = -100;
    const startPositionPercent = 50;
    const currentSizePercent = getProgressFromTo(0, finishSizePercent, animationDecimal);
    const currentPositionPercent = getProgressFromTo(startPositionPercent, finishPositionPercent, animationDecimal);
    
    
    $element.css({
        width: `${currentSizePercent}%`,
        height: `${currentSizePercent}%`,
        top: `${currentPositionPercent}%`,
        left: `${currentPositionPercent}%`
    });
  }
  
  function getProgressFromTo(from, to, animationDecimal) {
    return from + (to - from) * animationDecimal;
  }
  function easeInOutQuad(t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t }