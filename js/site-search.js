/*──────────────────────────────────────────────────────────────────╗
│ Copyright © 2025 Marco De Groskovskaja, licensed under the MIT    |
| License, see https://mit-license.org for details.                 │
╚──────────────────────────────────────────────────────────────────*/

/* site-search.js:

  Relocates the site search form between mobile and desktop slots based on screen width.
  - Updates the form position on window resize using a media query.
*/

document.addEventListener('DOMContentLoaded', () => {
  const form       = document.getElementById('site-search');
  const mobileSlot = document.getElementById('search-slot-mobile');
  const deskSlot   = document.getElementById('search-slot-desktop');
  const mq         = window.matchMedia('(max-width: 799px)');

  // Move the form into the correct container
  function relocate(e) {
    if (e.matches) {
      // mobile
      mobileSlot.appendChild(form);
    } else {
      // desktop
      deskSlot.appendChild(form);
    }
  }

  // initial
  relocate(mq);
  // on resize across the breakpoint
  mq.addListener(relocate);
});
