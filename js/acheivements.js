function animateCounter(id, end, suffix = '', duration = 2000) {
      const el = document.getElementById(id);
      if (el.dataset.animated === "true") return;
      el.dataset.animated = "true";
    
      let start = 0;
      const increment = end / (duration / 20);
    
      const update = () => {
        start += increment;
        if (start < end) {
          el.textContent = Math.floor(start) + suffix;
          requestAnimationFrame(update);
        } else {
          el.textContent = end + suffix;
        }
      };
      update();
    }
    
    function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    }
    
    function checkAndAnimateCounters() {
      const counters = [
        { id: 'universities', end: 100, suffix: '+' },
        { id: 'courses', end: 200, suffix: '+' },
        { id: 'admissions', end: 1500, suffix: '+' },
        { id: 'satisfaction', end: 99, suffix: '%' }
      ];
    
      counters.forEach(counter => {
        const el = document.getElementById(counter.id);
        if (isInViewport(el)) {
          animateCounter(counter.id, counter.end, counter.suffix);
        }
      });
    }
    
    window.addEventListener('scroll', checkAndAnimateCounters);
    window.addEventListener('load', checkAndAnimateCounters);
    