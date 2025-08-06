function filterMenu(category) {
    const items = document.querySelectorAll('.menu-item');
    const buttons = document.querySelectorAll('.filter-btn');
  
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
  
    items.forEach(item => {
      if (category === 'all') {
        item.style.display = 'block';
      } else {
        item.style.display = item.classList.contains(category) ? 'block' : 'none';
      }
    });
  }
  
