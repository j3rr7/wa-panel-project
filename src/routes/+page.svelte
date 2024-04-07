<script>
    import SideMenu from "$lib/SideMenu.svelte";
    import TopBar from "$lib/TopBar.svelte";
    import Footer from "$lib/Footer.svelte";

    /** @type {import('./$types').PageData} */
    export let data;

    let showQRCode = false;
    let whatsappQRSrc = "";

    async function fetchWhatsappQRCode() {
        try {
            const QRCodeResp = await fetch("/api/wa/create", {
                method: "POST",
            });

            if (QRCodeResp.status !== 200) {
                console.error(`Failed to fetch QR code: ${QRCodeResp.status} ${QRCodeResp.statusText}`);
                showQRCode = false;
                whatsappQRSrc = "/img/core-img/error.png"
                return;
            }

            const QRCodeBlob = await QRCodeResp.blob();
            showQRCode = true;
            whatsappQRSrc = URL.createObjectURL(QRCodeBlob);

        } catch (error) {
            console.error(error);
        }
    }
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app"/>
</svelte:head>

<section>
    <div class="main-container-wrapper">
        <!-- Top bar area -->
        <TopBar/>

        <div class="container-fluid page-body-wrapper">
            <!-- Side Menu area -->
            <SideMenu/>

            <!-- Main Page -->
            <div class="main-panel">
                <div class="content-wrapper">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                <div class="card mb-30">
                                    <div class="card-body pb-0">
                                        <h6 class="card-title">Whatsapp Bot</h6>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="single-clint-area-content">
                                                    <!-- Single Clint Content -->
                                                    <div class="single-clint-content">
                                                        <h5>Login to Whatsapp</h5>
                                                        <p class="mb-20">Login to whatsapp using QR Code</p>
                                                        <button type="button"
                                                                class="btn btn-rounded btn-whatsapp waves-effect mb-2 mr-2"
                                                                data-toggle="collapse" data-target="#collapseQR"
                                                                aria-expanded="false" aria-controls="collapseQR"
                                                                on:click={fetchWhatsappQRCode}>
                                                            <i class="fa fa-whatsapp"></i>
                                                            Show QR
                                                        </button>

                                                        <div class="collapse mt-20" id="collapseQR">
                                                            <div class="card card-body">
                                                                {#if whatsappQRSrc}
                                                                    <img class="mx-auto w-25 h-auto" src={whatsappQRSrc} alt="Whatsapp QR Code" />
                                                                {:else}
                                                                    <p>Loading image...</p>
                                                                {/if}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Footer Area -->
                    <Footer/>
                </div>
            </div>
        </div>
    </div>
</section>
