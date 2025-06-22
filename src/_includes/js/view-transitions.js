// Enhanced View Transitions with JavaScript
if ('startViewTransition' in document) {
  // Native support
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]');
    if (link && link.href && new URL(link.href).origin === location.origin) {
      e.preventDefault();
      document.startViewTransition(() => {
        location.href = link.href;
      });
    }
  });
  
  // Add CSS classes for smooth transitions
  document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.classList.add('view-transitions-enabled');
  });
} else {
  // Fallback for browsers without support
  console.log('View Transitions API not supported');
  
  // Add fade effect as fallback
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]');
    if (link && link.href && new URL(link.href).origin === location.origin) {
      e.preventDefault();
      document.body.style.opacity = '0.8';
      setTimeout(() => {
        location.href = link.href;
      }, 150);
    }
  });
}