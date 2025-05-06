/*──────────────────────────────────────────────────────────────────╗
│ Copyright © 2025 Marco De Groskovskaja, licensed under the MIT    |
| License, see https://mit-license.org for details.                 │
╚──────────────────────────────────────────────────────────────────*/

/* secondary-navbar.js:

  Relocates the secondary navbar between mobile and desktop slots based on screen width.
  - Handles dropdown toggling for mobile view.
  - Updates the navbar on window resize and sets up event listeners for dropdown behavior.
*/

document.addEventListener('DOMContentLoaded', () => {
    const secNav = document.querySelector('.secondary-navbar');
    const desktopSlot = document.getElementById('secondary-navbar-slot');
    const mobileSlot = document.getElementById('mobile-secondary-navbar-slot');
    const mq = window.matchMedia('(max-width: 799px)');
  
    function relocateSecondary(e) {
      if (e.matches) {
        mobileSlot.appendChild(secNav);
      } else {
        desktopSlot.appendChild(secNav);
      }
    }
  
    // Toggle dropdowns in mobile view
    function setupSecondaryDropdowns() {
      const dropdownLinks = secNav.querySelectorAll('li > a');
  
      dropdownLinks.forEach(link => {
        const parentLi = link.parentElement;
        const hasSub = parentLi.querySelector('ul');
  
        if (hasSub) {
          link.addEventListener('click', e => {
            // Only toggle in mobile view
            if (window.innerWidth < 800) {
              e.preventDefault();
              parentLi.classList.toggle('open');
            }
          });
        }
      });
    }
  
    relocateSecondary(mq);
    mq.addListener(relocateSecondary);
  
    setupSecondaryDropdowns();
  });
  