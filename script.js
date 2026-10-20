document.documentElement.classList.add('js');
    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }); }, { threshold: .11, rootMargin: '0px 0px -35px 0px' });
      reveals.forEach(el => observer.observe(el));
    } else { reveals.forEach(el => el.classList.add('visible')); }
    const progress = document.querySelector('.scroll-progress');
    const updateProgress = () => { const max = document.documentElement.scrollHeight - innerHeight; progress.style.width = (max > 0 ? scrollY / max * 100 : 0) + '%'; };
    addEventListener('scroll', updateProgress, { passive: true }); updateProgress();
