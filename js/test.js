document.getElementById("nav").innerHTML = 
`          <a class="navbar-brand" href="index.html"> LOGO </a>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
              <span class="navbar-toggler-icon" style="color: background-color: rgba(177,18,38, 0.65);"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav mr-auto col-6">
                  <li class="nav-item align-center">
                      <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                  </li>

                  <li class="nav-item dropdown">
                    <a class="nav-link" href="#" id="navbardrop" data-toggle="dropdown">
                      Compras
                    </a>
                    <div class="dropdown-menu" style="background-color: brown; color: white;">
                      <a class="dropdown-item" href="tickets.html"> Seus Tickets </a>
                      <a class="dropdown-item" href="sessions.html"> Suas Sessões </a>
                    </div>
                  </li>

                  <li class="nav-item">
                      <a class="nav-link" href="search.html"> Buscar </a>
                  </li>
              </ul>

              <ul class="navbar-nav">
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" style="color: transparent;" href="#" id="navbardrop" data-toggle="dropdown">
                      <i class="fa-solid fa-user"></i>
                    </a>
                    <div class="dropdown-menu" style="background-color: brown; color: white;">
                      <a class="dropdown-item" href="cinemas.html"> Seus Cinemas </a>
                      <a class="dropdown-item" href="sessions.html"> Suas Sessões </a>
                      <a class="dropdown-item" href="#"> Configurações </a>
                      <a class="dropdown-item" href="#"> Sair </a>
                    </div>
                  </li>
              </ul>
          </div>`;