function menuOneShow(){
    document.getElementById('menu-1').classList.add('show');
    document.getElementById('menu-2').classList.remove('show');
    document.getElementById('menu-3').classList.remove('show');
    document.getElementById('menu-4').classList.remove('show');
  }
  
  /* Show second menu when your mouse enters the second button */
  /* Hide tooltip 1 and 3 if they are open */
  function menuTwoShow(){
    document.getElementById('menu-1').classList.remove('show');
    document.getElementById('menu-2').classList.add('show');
    document.getElementById('menu-3').classList.remove('show');
    document.getElementById('menu-4').classList.remove('show');
  }
  
  /* Show third menu when your mouse enters */ 
  /* Hide tooltip 1 and 2 if they are open */
  function menuThreeShow(){
    document.getElementById('menu-1').classList.remove('show');
    document.getElementById('menu-2').classList.remove('show');
    document.getElementById('menu-3').classList.add('show');
    document.getElementById('menu-4').classList.remove('show');
  }
  function menuFourShow(){
    document.getElementById('menu-1').classList.remove('show');
    document.getElementById('menu-2').classList.remove('show');
    document.getElementById('menu-3').classList.remove('show');
    document.getElementById('menu-4').classList.add('show');
  }
  
  /* Just hides all the menus when we're through hovering on them */
  function menusHide() {
    document.getElementById('menu-1').classList.remove('show');
    document.getElementById('menu-2').classList.remove('show');
    document.getElementById('menu-3').classList.remove('show');
    document.getElementById('menu-4').classList.remove('show');
  }
  
  /* Trigger hover event for each dropdown menu */
  document.getElementById('menu-1-button').addEventListener('mouseover', menuOneShow);
  document.getElementById('menu-2-button').addEventListener('mouseover', menuTwoShow);
  document.getElementById('menu-3-button').addEventListener('mouseover', menuThreeShow);
  document.getElementById('menu-4-button').addEventListener('mouseover', menuFourShow);
  
  
  
  
  /* Hides all menus by selecting all elements and listening to their hover states */
  document.getElementById('menu-1').addEventListener('mouseleave', menusHide);
  document.getElementById('menu-2').addEventListener('mouseleave', menusHide);
  document.getElementById('menu-3').addEventListener('mouseleave', menusHide);
  document.getElementById('menu-4').addEventListener('mouseleave', menusHide);
  
  
  /**
   * SIDE MENU
   * If somebody clicks on the menu icon, let the fireworks begin...
   * We're listening to the 'menu-trigger' ID for some action, then we fire 'sideMenuAppears'
   * Likewise, we're listening to the 'menu-close' ID for a click, then we fire 'sideMenuDisappears' when that happens
   */
  document.getElementById('menu-trigger').addEventListener('click', sideMenuAppears);
  document.getElementById('menu-close').addEventListener('click', sideMenuDisappears);
  
  // This adds a show-menu class from the CSS that ALREADY exists, we're adding it in here
  // This creates the animation because of the interplay of adding the CSS class via JS
  // The browser then interprets the CSS Animations as the classes change
  // Go look at the .show-menu code and notes in the CSS
  function sideMenuAppears() {
    // console.log('sideMenuAppears() is active'); - if you want to test the function, uncomment this
    document.getElementById('side-menu').classList.add('show-menu');
  }
  
  /* When you click menu close, it puts the hide-menu class onto #side-menu, reversing what just happened */
  function sideMenuDisappears() {
    // console.log('sideMenuDisappears() is active'); - if you want to test the function, uncomment this
    document.getElementById('side-menu').classList.remove('show-menu');
  }
  
  //Post a tip
  // Get the modal
  var modal = document.getElementById('id01');
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
  
  
