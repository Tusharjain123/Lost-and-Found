import React from 'react'

const Navbar = () => {
  return (
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Searcher</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/lostitem">Lost Item</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/founditem">Found Item</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/history">History</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
