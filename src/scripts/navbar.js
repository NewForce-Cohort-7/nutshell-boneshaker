//Created by Kiersten

// Navbar using Bootstrap v4.0
export const Navbar = () => {
    const html = `
        <nav class="navbar sticky-top navbar-light bg-light">
        <a class="navbar-brand" href="#"><img src="https://i.imgur.com/Zde5NQE.png" alt="Nutshell Boneshaker Logo" height="100" width="auto"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Events</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Articles</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Photos</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Tasks</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Messages</a>
            </li>
            </ul>
        </div>
        </nav>

`
return html
}