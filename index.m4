<!--
  /*──────────────────────────────────────────────────────────────────╗
  │ Copyright © 2025 Marco De Groskovskaja, licensed under the MIT    |
  | License, see https://mit-license.org for details.                 │
  ╚──────────────────────────────────────────────────────────────────*/
-->
<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Florence Times</title>

  <!-- ==== lib/css ==== -->
  <link href="lib/css/bootstrap.min.css" rel="stylesheet">

  <!-- ==== common css ==== -->
  <link href="css/common.css" rel="stylesheet">

  <!-- ==== components css ==== -->
  <link href="css/navbar.css" rel="stylesheet">
  <link href="css/podcast-banner.css" rel="stylesheet">
  <link href="css/topics.css" rel="stylesheet">
  <link href="css/home-grid.css" rel="stylesheet">
  <link href="css/home-grid-left-column.css" rel="stylesheet">
  <link href="css/home-grid-center-column.css" rel="stylesheet">
  <link href="css/home-grid-right-column.css" rel="stylesheet">
  <link href="css/info-bar.css" rel="stylesheet">
  <link href="css/pre-footer.css" rel="stylesheet">
  <link href="css/footer.css" rel="stylesheet">

  <!-- ==== js injected components css ==== -->
  <link href="css/secondary-navbar.css" rel="stylesheet">
  <link href="css/site-search.css" rel="stylesheet">

  <!-- ==== mobile css ==== -->
  <link href="css/mobile-header.css" rel="stylesheet">
  <link href="css/mobile-nav-left.css" rel="stylesheet">
  <link href="css/mobile-nav-right.css" rel="stylesheet">
</head>
<body>
include(`src/mobile-header.html')
include(`src/navbar.html')
<!-- Injection point -->
<div id="secondary-navbar-slot"></div>
include(`src/podcast-banner.html')
include(`src/topics.html')
<div class="homecontainer">
  <div class="home-grid">
    include(`src/home-grid-center-column.html')
    include(`src/home-grid-left-column.html')
    include(`src/home-grid-right-column.html')
  </div>
</div>
include(`src/pre-footer.html')
include(`src/footer.html')

<!-- Secondary navbar, will be injected via JS -->
include(`src/secondary-navbar.html')
include(`src/site-search.html')

  <script src="js/mobile-header.js"></script>
  <script src="js/secondary-navbar.js"></script>
  <script src="js/site-search.js"></script>
</body>
</html>
