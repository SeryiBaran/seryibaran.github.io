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
  let; xDown = null;
  let; yDown = null;
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
    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;
    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;
    console.log(xDiff)
    console.log(Math.abs(xDiff))
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 14) {
        remAttr(html);
        remAttr(body);
      } else if (xDiff < -14) {
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
