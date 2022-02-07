import App from './App.svelte';

const app = new App({
	target: document.body,
	intro: true,
	props: {
		name: 'test name'
	}
});

export default app;
