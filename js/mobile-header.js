/*──────────────────────────────────────────────────────────────────╗
│ Copyright © 2025 Marco De Groskovskaja, licensed under the MIT    |
| License, see https://mit-license.org for details.                 │
╚──────────────────────────────────────────────────────────────────*/

/* mobile-header.js:

  Controls mobile navigation with left and right slide-out panels.
  - Toggles panels and closes the opposite one.
  - Manages accordion submenus and panel closure via Escape or close button.
  - Updates ARIA attributes for accessibility.
*/

const leftBtn = document.querySelector('.hamburger-left');
const rightBtn = document.querySelector('.hamburger-right');
const leftNav = document.getElementById('mobile-nav-left');
const rightNav = document.getElementById('mobile-nav-right');

function toggle(btn, panel) {
  const opening = !panel.classList.contains('is-open');

  // close the other panel
  if (panel === leftNav) {
    rightNav.classList.remove('is-open');
    rightNav.setAttribute('aria-hidden', 'true');
    rightBtn.setAttribute('aria-expanded', 'false');
  } else {
    leftNav.classList.remove('is-open');
    leftNav.setAttribute('aria-hidden', 'true');
    leftBtn.setAttribute('aria-expanded', 'false');
  }

  // toggle this one
  panel.classList.toggle('is-open');
  panel.setAttribute('aria-hidden', opening ? 'false' : 'true');
  btn.setAttribute('aria-expanded', opening ? 'true' : 'false');
}

leftBtn.addEventListener('click', () => toggle(leftBtn, leftNav));
rightBtn.addEventListener('click', () => toggle(rightBtn, rightNav));

// accordions in main nav
document.querySelectorAll('.main-nav-list .has-sub > a')
  .forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      a.parentElement.classList.toggle('open');
    });
  });

// close on ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    [leftNav, rightNav].forEach(nav => {
      nav.classList.remove('is-open');
      nav.setAttribute('aria-hidden', 'true');
    });
    [leftBtn, rightBtn].forEach(btn => {
      btn.setAttribute('aria-expanded', 'false');
    });
    document.querySelectorAll('.main-nav-list .has-sub.open')
      .forEach(li => li.classList.remove('open'));
  }
});

// close on click “X”
document.querySelectorAll('#mobile-nav-left .close-button, #mobile-nav-right .close-button')
  .forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
      const panel = closeBtn.closest('nav');
      const btn = panel === leftNav ? leftBtn : rightBtn;

      // reuse your toggle to close it
      toggle(btn, panel);

      // (optional) collapse any open accordions inside that panel
      panel.querySelectorAll('.has-sub.open').forEach(li => li.classList.remove('open'));
    });
  });
