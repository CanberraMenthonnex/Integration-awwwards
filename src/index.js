const firstIncre = document.getElementById("first-incre");
const secondIncre = document.getElementById("second-incre");
const thirdIncre = document.getElementById("third-incre");
const section = document.getElementById('data-section');




function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
}

let observer = new IntersectionObserver(function(){
    animateValue(firstIncre, 1, 57, 2000);
    animateValue(secondIncre, 1, 5, 2000);
    animateValue(thirdIncre, 1, 60, 2000);
},{

});

observer.observe(section);



//animateValue(obj, 1, 35, 2000);