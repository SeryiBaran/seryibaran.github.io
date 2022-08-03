// $(function() {
//   let x = null;
//   const setAttr = (el) => el.setAttribute("sidebar-display", true);
//   const remAttr = (el) => el.removeAttribute("sidebar-display");
//   const [html, body] = [document.querySelector("html"), document.querySelector("body")];
//   document.addEventListener('touchstart', e => x = e.touches[0].clientX);
//   document.addEventListener('touchmove', e => {
//       if (!x) return;
//       x = x - e.touches[0].clientX < 0 ? 0 : -1;
//       console.log(x);
//       console.log(e.touches);
//       if (x === 0) {
//         setAttr(html);
//         setAttr(body);
//       } else {
//         remAttr(html);
//         remAttr(body);
//       }
//       x = null;
//   });
// })

$(function () {
  const setAttr = (el) => el.setAttribute("sidebar-display", true);
  const remAttr = (el) => el.removeAttribute("sidebar-display");
  const [html, body] = [
    document.querySelector("html"),
    document.querySelector("body"),
  ];
  document.addEventListener("touchstart", handleTouchStart, false);
  document.addEventListener("touchmove", handleTouchMove, false);
  var xDown = null;
  var yDown = null;
  function getTouches(evt) {
    return (
      evt.touches || // browser API
      evt.originalEvent.touches
    ); // jQuery
  }
  function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  }
  function handleTouchMove(evt) {
    if (!xDown || !yDown) {
      return;
    }
    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;
    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        remAttr(html);
        remAttr(body);
      } else {
        setAttr(html);
        setAttr(body);
      }
    } else {
      if (yDiff > 0) {
        /* down swipe */
      } else {
        /* up swipe */
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  }
});
