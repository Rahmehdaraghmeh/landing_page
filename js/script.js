 function NavSection() {const unorder=document.getElementsByClassName('unorder')[0];
 const list=[
  {  Name:'Section1', Link:'#section1'},
  {  Name:'Section2', Link:'#section2'},
  {  Name:'Section3', Link:'#section3'},
  {  Name:'Section4', Link:'#section4'}
  ]
list.forEach((item)=>{
const li=document.createElement('li')
const anchor=document.createElement('a')
anchor.href=item.Link;
anchor.innerHTML=item.Name; 
anchor.classList.add('menu_list')
anchor.addEventListener('click',( event)=>{
    event.preventDefault(); 
    const target=event
    const targetSection = document.querySelector(item.Link); 
    const sectionPosition = targetSection.offsetTop;
    window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
      });
})
li.appendChild(anchor)
unorder.appendChild(li)
})}
NavSection();
function activeSection(){

    const linkItem=document.querySelectorAll('.menu__link')
       
        for (let  i = 0; i < linkItem.length; i++) {
            linkItem[i].addEventListener("click", function() {
           let current = document.getElementsByClassName("active");
            if (current.length > 0) { 
              current[0].className = current[0].className.replace("active", "");
            }
            this.className += " active";
            });
         }
    }
    activeSection();
    function setActiveSection() {
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.menu__link');
    
        let currentSection = '';
    
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            
            // Add 'active' class to the section when it is near the top of the viewport
            if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                currentSection = section.id;
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    
        // Remove 'active' class from all nav items
        navItems.forEach(nav => nav.classList.remove('active'));
    
        // Add 'active' class to the corresponding nav item
        const activeNavItem = Array.from(navItems).find(nav => nav.getAttribute('href') === `#${currentSection}`);
        if (activeNavItem) {
            activeNavItem.classList.add('active');
        }
    }
    window.addEventListener('scroll', setActiveSection);

    let isScrolling;
    const navBar = document.querySelector('header'); 

    function hideNavBar() {
        navBar.style.opacity = '0';  
        navBar.style.pointerEvents = 'none';  
    }
    function showNavBar() {
        navBar.style.opacity = '1';  
        navBar.style.pointerEvents = 'auto'; 
    }

    window.addEventListener('scroll', function() {
        showNavBar();
    
        clearTimeout(isScrolling);
    
        isScrolling=setTimeout(() => {
            hideNavBar(); 
        }, 2000);
    
    });
    showNavBar();
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', ()=> {
    if (window.scrollY > window.innerHeight / 2) {
        scrollToTopBtn.style.display = 'block'; 
    } else {
        scrollToTopBtn.style.display = 'none';  
    }
});

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});
const sections = document.querySelectorAll('section');

sections.forEach((section) => {
    // Create the collapse/expand button
    const toggleButton = document.createElement('button');
    toggleButton.className = 'collapse-toggle';
    toggleButton.textContent = 'Collapse Section';

    // Insert the button at the top of each section
    section.insertBefore(toggleButton, section.firstChild);

    // Add a wrapper div for the section content
    const sectionContent = document.createElement('div');
    sectionContent.className = 'section-content';

    // Move all child nodes of the section (except the toggle button) into the content wrapper
    while (section.childNodes.length > 1) {
        sectionContent.appendChild(section.childNodes[1]);
    }
    section.appendChild(sectionContent);

    // Event listener for toggling collapse/expand
    toggleButton.addEventListener('click', function() {
        // Toggle the 'collapsed' class to show/hide content
        sectionContent.classList.toggle('collapsed');

        // Update button text based on the state
        if (sectionContent.classList.contains('collapsed')) {
            toggleButton.textContent = 'Expand Section';
        } else {
            toggleButton.textContent = 'Collapse Section';
        }
    });
});
const style = document.createElement('style');
style.textContent = `
    /* Initially, the content is visible */
    .section-content {
        overflow: hidden;
        transition: max-height 0.4s ease-out;
        max-height: 1000px; /* A large enough value to display all content */
    }

    /* When collapsed, set max-height to 0 to hide the content */
    .section-content.collapsed {
        max-height: 0;
    }

    /* Styling for the collapse/expand button */
    .collapse-toggle {
        display: inline-block;
        background-color: #cccc11;
        color: white;
        border: none;
        padding: 5px 10px;
        margin-bottom: 10px;
        cursor: pointer;
        border-radius: 3px;
    }

    .collapse-toggle:hover {
        background-color: #5c5c28 ;
    }
`;
document.head.appendChild(style)