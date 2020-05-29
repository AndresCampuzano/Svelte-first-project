import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Andres',
		lastName: 'Campuzano'
	}
});

export default app;