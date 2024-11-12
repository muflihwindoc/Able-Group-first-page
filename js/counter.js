document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.stat-number');
    let observerOptions = {
      threshold: 0.3
    };
  
    const animateCounters = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 200; 
  
            if (count < target) {
              counter.innerText = Math.ceil(count + increment);
              setTimeout(updateCounter, 10);
            } else {
              counter.innerText = target;
            }
          };
          updateCounter();
          observer.unobserve(counter); 
        }
      });
    };
  
    const observer = new IntersectionObserver(animateCounters, observerOptions);
  
    counters.forEach(counter => {
      observer.observe(counter);
    });
  });