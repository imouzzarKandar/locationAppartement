var nav = document.getElementById('navbar')

var navbar = `<nav class="navbar navbar-expand-lg bg-light">
<div class="container-fluid arabe">
  <a class="navbar-brand" href="../">إيموزار كندر</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="navbar-collapse collapse show" id="navbarSupportedContent" style="">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="margin-right: 9px !important;margin-left: auto;">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="appartementRif.html">شقة الريف</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="appartementNour.html">شقة النور</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="aboutNous.html">معلومات حولنا</a>
      </li>
    </ul>
  </div>
</div>
</nav>
`
nav.innerHTML = navbar