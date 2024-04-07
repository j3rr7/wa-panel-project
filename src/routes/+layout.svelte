<script>
	import {page} from '$app/stores'
	import {goto} from '$app/navigation'

</script>

<svelte:head>
	<link rel="stylesheet" href="/css/default-assets/mini-event-calendar.min.css">
	<link rel="stylesheet" href="/style.css">
</svelte:head>

<div class="app">
	<main>
		<slot />
	</main>

	<!-- Inject Javascript -->
	<div>
		<!-- Plugins Js -->
		<script src="/js/jquery.min.js"></script>
		<script src="/js/popper.min.js"></script>
		<script src="/js/bootstrap.min.js"></script>
		<script src="/js/bundle.js"></script>
		<script src="/js/default-assets/fullscreen.js"></script>

		<!-- Active JS -->
		<script src="/js/canvas.js"></script>
		<script src="/js/collapse.js"></script>
		<script src="/js/settings.js"></script>
		<script src="/js/template.js"></script>
		<script src="/js/default-assets/active.js"></script>

		<!-- Inject JS -->
		<script src="/js/default-assets/mini-event-calendar.min.js"></script>
		<script src="/js/default-assets/mini-calendar-active.js"></script>
		<script src="/js/default-assets/apexchart.min.js"></script>
		<script src="/js/default-assets/dashboard-active.js"></script>
	</div>
</div>
