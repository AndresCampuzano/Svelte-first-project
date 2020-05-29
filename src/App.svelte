<script>

	import About from './components/About.svelte';
	import Text from './components/Text.svelte';
	import Person from './components/Person.svelte';
	import Skills from './components/Skills.svelte';
	import Input from './components/Input.svelte';

	export let name;
	export let lastName;
	let svelteLogo = "https://arepa.s3.amazonaws.com/svelte-logo.png";


	const data = {
		name: "Andres",
		lastName: "Campuzano",
		age: 21
	};
</script>

<style>
	:global(body) {
		background-color: #f2eee2;
		/* background-color: #343739; */
		color: #0084f6;
	}

	:global(:root) {
		--theme-color-light: #a75ca7;
		--theme-color-dark: #bfc2c7;
	}

	:global(body.dark-mode) {
		background-color: #1d3040;
		color: var(--theme-color-dark);
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		font-weight: bold;
	}

	main img {
		width: 30%;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 300;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<main>
	<h1>Hello {name} {lastName}!</h1>
	<About />
	<Text anotherText="Hola"/>
	<Text />
	<!-- <Person name={data.name} lastName={data.lastName} age={data.age}/> -->
	<Person {...data}/>
	<Skills />
	<Input />
	<img src={svelteLogo} alt="Svelte logo" />
</main>