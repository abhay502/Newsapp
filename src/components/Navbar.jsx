import './style.css'
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
const Navbar = () => {
    const navigate = useNavigate()
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary p-4">
                <div class="container-fluid pl-5">
                <h2 class="fw-bold text-danger " onClick={()=>navigate("/")}>Buletin </h2>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <h2 class="text-end">‎ ‎ ‎ |‎ ‎ ‎ </h2>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 font-black">
                            <li class="nav-item">
                                <a class="nav-link " aria-current="page" href="/">Stories</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Creator</a>
                            </li>
                            <li class="nav-item">
                                <a href="/" class="nav-link ">Community</a>
                            </li>
                            <li class="nav-item">
                                <a href="/" class="nav-link ">Subscribe</a>
                            </li>
                        </ul>
                        <div class="d-flex">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 font-black">
                            <li class="nav-item">
                            <i class="far fa-pen-to-square"></i>
                            <span class="icon-text-gap">write</span>
                            </li>
                            <li class="nav-item icon-text-gap">
                            <i class="far fa-bell"></i>
                            </li>
                            <li class="nav-item icon-text-gap">
                            <img src="/reactapp/public/logo.jpg"  alt="ProfilePicture"  />
                            </li>
                        </ul>
                        
 
                           
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;