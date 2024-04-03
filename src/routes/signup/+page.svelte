<script>
    import { enhance } from '$app/forms';

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>Signup</title>
</svelte:head>

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
            <div class="col-md-8 col-lg-6">
                <!-- Middle Box -->
                <div class="middle-box">
                    <div class="card">
                        <div class="card-body p-4">
                            <h4 class="font-24 mb-30">Create account.</h4>

                            <form method="post" use:enhance>

                                <div class="form-group">
                                    <label for="emailaddress">Email address/Username</label>
                                    <input class="form-control" type="text" name="username" id="emailaddress" required placeholder="Enter username">
                                </div>

                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input class="form-control" type="password" name="password" required id="password" placeholder="Enter password">
                                </div>

                                <div class="form-group mb-0 mt-15">
                                    <button class="btn btn-primary btn-block" type="submit">Create my account</button>
                                </div>

                                <div class="text-center mt-15"><span class="mr-2 font-13">Already have an account?</span>
                                    <a class="font-13" href="/login">Sign in</a>
                                </div>

                                <input type="hidden" name="random-key" value={data.props.keyFromServer}>
                            </form>
                            <!-- end card -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>