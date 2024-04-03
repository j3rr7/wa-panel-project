<script lang="ts">
  import { enhance } from "$app/forms";

  /** @type {import('./$types').ActionData} */
  export let form;
</script>

<svelte:head>
    <title>Login</title>
</svelte:head>

<section>
    <!-- Preloader -->
    <div id="preloader-area">
        <div class="lds-ripple">
            <div></div>
            <div></div>
        </div>
    </div>
    <!-- Preloader -->

    <div class="main-content- h-100vh">
        <div class="container h-100">
            <div class="row h-100 align-items-center justify-content-center">
                <div class="hero">
                    <div class="cube"></div>
                    <div class="cube"></div>
                    <div class="cube"></div>
                    <div class="cube"></div>
                    <div class="cube"></div>
                    <div class="cube"></div>
                </div>
                <div class="col-sm-10 col-md-8 col-lg-5">
                    <!-- Middle Box -->
                    <div class="middle-box">
                        <div class="card">
                            <div class="card-body p-4">

                                <!-- Logo -->
                                <h4 class="font-24 mb-30">Login.</h4>

                                <form method="post" use:enhance>
                                    <div class="form-group">
                                        <input class="form-control login" type="text" name="username" id="emailaddress" required placeholder="Enter registered email/username">
                                    </div>

                                    <div class="form-group">
                                        <input class="form-control login" type="password" name="password" required id="password" placeholder="Enter registered password">
                                    </div>

                                    <div class="form-group d-flex justify-content-between align-items-center mb-3">
                                        <div class="checkbox d-inline mb-0">
                                            <input type="checkbox" name="checkbox-remember" id="checkbox-remember">
                                            <label for="checkbox-remember" class="cr mb-0 font-13">Remember me</label>
                                        </div>
                                    </div>

                                    <div class="form-group mb-0">
                                        <button class="btn btn-primary btn-block" type="submit"> Log In </button>
                                    </div>

                                    <div class="text-center mt-15">
                                        <span class="mr-2 font-12">{form?.message ?? ""}</span>
                                    </div>

                                </form>

                                <!-- end card -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>