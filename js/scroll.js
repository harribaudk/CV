/*function scrollIt(destination, duration = 100, easing = "linear", callback) {
    const easings = {
      linear(t) {
        return t;
      },
      easeOutQuad(t) {
        return t * (2 - t);
      }
    };
  
    const start = window.pageYOffset;
    const startTime =
      "now" in window.performance ? performance.now() : new Date().getTime();
  
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
    const windowHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.getElementsByTagName("body")[0].clientHeight;
    const destinationOffset =
      typeof destination === "number" ? destination : destination.offsetTop;
    const destinationOffsetToScroll = Math.round(
      documentHeight - destinationOffset < windowHeight
        ? documentHeight - windowHeight
        : destinationOffset
    );
  
    if ("requestAnimationFrame" in window === false) {
      window.scroll(0, destinationOffsetToScroll);
      if (callback) {
        callback();
      }
      return;
    }
  
    function scroll() {
      const now =
        "now" in window.performance ? performance.now() : new Date().getTime();
      const time = Math.min(1, (now - startTime) / duration);
      const timeFunction = easings[easing](time);
      window.scroll(
        0,
        Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start)
      );
  
      if (window.pageYOffset === destinationOffsetToScroll) {
        if (callback) {
          callback();
        }
        return;
      }
  
      requestAnimationFrame(scroll);
    }
  
    scroll();
  }

  */

function unblockbody(){
    document.body.classList.remove("bodyfix");
}

  document.getElementById("lien1").addEventListener("click", function(){
          unblockbody();
					quisuisje.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
				});

				document.getElementById("lien2").addEventListener("click", function(){
          unblockbody();
					parcours.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
				});

				document.getElementById("lien3").addEventListener("click", function(){
          unblockbody();
					contact.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
				});

        const navbar = document.getElementById("navbar");
        window.onscroll = function(){
          if(window.scrollY>100){
            navbar.classList.add("scrolled");
          }else{
            navbar.classList.remove("scrolled");
          }
        }