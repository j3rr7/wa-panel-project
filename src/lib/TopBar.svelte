<script>
    import {enhance} from "$app/forms";
    import {page} from "$app/stores";


    async function signOut() {
        try {
            const response = await fetch('/signout', { method: 'POST' });
            if (response.ok) {
                window.location.href = '/login'; // Redirect to login page
            } else {
                console.error('Sign-out failed');
            }
        } catch (error) {
            console.error('Sign-out failed', error);
        }
    }
</script>

<nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
    <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <a class="navbar-brand brand-logo mr-5" href="/">
            <img src="img/core-img/logo.jpg" class="mr-2" alt="logo"/>
        </a>
        <a class="navbar-brand brand-logo-mini" href="/"><img src="img/core-img/logo.jpg" alt="logo"/></a>
    </div>
    <div class="navbar-menu-wrapper d-flex align-items-center justify-content-between">
        <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="feather feather-menu">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
        </button>
        <ul class="navbar-nav mr-lg-2">
            <li class="nav-item app-search d-none d-md-block">
                <form role="search" class=""><input type="text" placeholder="Search..." class="form-control">
                    <button type="submit" class="search-btn mr-0"><i class="fa fa-search"></i></button>
                </form>
            </li>
        </ul>
        <ul class="top-navbar-area navbar-nav navbar-nav-right">
            <li class="nav-item nav-profile dropdown dropdown-animate">
                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                    <img src="img/member-img/contact-img.png" alt="profile"/>
                </a>
                <div class="dropdown-menu dropdown-menu-right navbar-dropdown profile-top"
                     aria-labelledby="profileDropdown">
                    <!--							<a href="#" class="dropdown-item"><i class="zmdi zmdi-account profile-icon" aria-hidden="true"></i> My profile</a>-->
                    <a href="#" class="dropdown-item"><i class="zmdi zmdi-email-open profile-icon"
                                                         aria-hidden="true"></i> Messages</a>
                    <a href="#" class="dropdown-item"><i class="zmdi zmdi-brightness-7 profile-icon"
                                                         aria-hidden="true"></i> Settings</a>
                    <a href={"#"} class="dropdown-item" on:click|preventDefault={signOut}><i class="ti-unlink profile-icon" aria-hidden="true"></i> Sign-out</a>
                </div>
            </li>
        </ul>
        <button class="navbar-toggler navbar-toggler-right d-xl-none align-self-center" type="button"
                data-toggle="offcanvas">
            <span class="ti-layout-grid2"></span>
        </button>
    </div>
</nav>