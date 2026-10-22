(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
  const targets = document.querySelectorAll('.section .eyebrow, .section h2, .section-heading p, .section-heading small, .service-body h3, .service-body p, .service-body .price, .studio p, .principle h3, .booking h2, .booking > div > p, .google-rating, .review-card, .location p, .service-detail h1, .service-detail p, .service-detail li, .other-services .service-tabs');
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.08, rootMargin: '0px 0px -18px 0px' });
  targets.forEach(element => {
    if (element.getBoundingClientRect().bottom < 0) return;
    element.classList.add('scroll-text');
    observer.observe(element);
  });
  addEventListener('pagehide', () => observer.disconnect(), { once: true });
})();
