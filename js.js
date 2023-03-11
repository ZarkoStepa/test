
// const projectName = 'technical-docs-page';
// localStorage.setItem('example_project', 'Technical Docs Page');

const form = document.querySelector('form');
const username = document.querySelector('input[name="username"]');
const password = document.querySelector('input[name="password"]');

form.addEventListener('submit', e => {
	e.preventDefault();

	if (username.value === 'admin' && password.value === 'admin') {
		window.location.href = 'home.html';
	} else {
		alert('Invalid username or password!');
	}
});
