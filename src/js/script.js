window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 60) { // Scroll pozisyonunu kontrol ederek blur sınıfını ekleyin veya kaldırın
      navbar.classList.add('blur');
    } else {
      navbar.classList.remove('blur');
    }
  });
  