document.querySelectorAll('.nav_list li a').forEach(item => {
    item.addEventListener('click', function(event) {
    
      document.querySelectorAll('.nav_list li a').forEach(link => {
        link.classList.remove('active');
      });
     
      this.classList.add('active');
    });
  });

  document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav_container').classList.toggle('show');
});