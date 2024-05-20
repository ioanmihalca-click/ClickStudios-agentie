document.addEventListener('DOMContentLoaded', function() {
    const card = document.getElementById('animated-card');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          card.classList.remove('opacity-0', 'translate-y-8');
          observer.unobserve(card); // Stop observing after animation is triggered
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the card is in view

    observer.observe(card);
  });