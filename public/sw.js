const cacheName = 'Medot';

// Cache all the files to make a PWA
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      // Our application only has two files here index.html and manifest.json
      // but you can add more such as style.css as your app grows
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './Auth/Login.html',
        './Auth/SignIn.html',
        './Auth/web/js/login.js',
        './Auth/web/js/signin.js',
        './Dashboard/Home/PhaseIntro/PhaseIntro.html',
        './Dashboard/Home/PhaseIntro/web/js/phaseintro.js',
        './Dashboard/Home/PhaseIntro/web/img/arrow-left.svg',
        './Dashboard/Home/PhaseIntro/web/img/phase-background-1.png',
        './Dashboard/Home/PhaseIntro/web/img/phase-background-2.png',
        './Dashboard/Home/PhaseIntro/web/img/phase-background-3.png',
        './Dashboard/Home/PhaseSummary/web/js/phasesummary.js',
        './Dashboard/Home/PhaseSummary/PhaseSummary.html',
        './Dashboard/Home/PhaseTest/web/js/phasetest.js',
        './Dashboard/Home/PhaseTest/PhaseTest.html',
        './Dashboard/Home/PhaseTimer/PhaseTimer.html',
        './Dashboard/Home/PhaseTimer/web/js/phaseTimer.js',
        './Dashboard/Home/web/img/arrow-right.svg',
        './Dashboard/Home/web/img/simulation2.png',
        './Dashboard/Home/web/img/simulation3.png',
        './Dashboard/Home/web/js/home.js',
        './Dashboard/Profile/Profile.html',
        './Dashboard/Profile/web/js/profile.js',
        './Dashboard/Statistics/Charts/Charts.html',
        './Dashboard/Statistics/Charts/web/js/charts.js',
        './Dashboard/Statistics/Simulations/Simulations.html',
        './Dashboard/Statistics/Simulations/web/js/simulations.js',
        './Dashboard/Statistics/Simulations/web/img/arrow-right.svg',
        './Dashboard/Statistics/Statistics.html',
        './Dashboard/Statistics/web/js/statistics.js',
        './Dashboard/Dashboard.html',
        './Dashboard/web/icons/chart-filled.svg',
        './Dashboard/web/icons/chart.svg',
        './Dashboard/web/icons/home-filled.svg',
        './Dashboard/web/icons/home.svg',
        './Dashboard/web/icons/profile-filled.svg',
        './Dashboard/web/icons/profile.svg',
        './Dashboard/web/js/dashboard.js',
        './web/js',
        './web/js/auth.js',
        './web/js/chart-time-errors.js',
        './web/js/firebaseconfig.js',
        './web/js/initializer.js',
        './web/js/jquery.timer.js',
        './web/js/phaseManager.js',
        './web/js/storage.js',
        './web/js/timer.js',
        './web/js/.js',
        './web/js/.js',
        './web/css/auth.css',
        './web/css/components.css',
        './web/css/home.css',
        './web/css/phases.css',
        './web/css/profile.css',
        './web/css/statistics.css',
        './web/assets/auth_background.png',
        './web/assets/logo-1.png',
        './web/assets/logo.png',
        './web/assets/Avatars/avatar1.PNG',
        './web/assets/Avatars/avatar2.PNG',
        './web/assets/Avatars/avatar3.PNG',
        './web/assets/Avatars/avatar4.PNG',
        './web/assets/Avatars/avatar5.PNG',
        './web/assets/Avatars/avatar6.PNG'
      ]);
    })
  );
});

// Our service worker will intercept all fetch requests
// and check if we have cached the file
// if so it will serve the cached file
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, { ignoreSearch: true }))
      .then(response => {
        return response || fetch(event.request);
      })
  );
});