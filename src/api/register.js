const register = (email, name, password) => (
	fetch('http://192.168.1.32:8080/ShoppingApp/register.php',
	{
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify({ email, name, password })
	})
	.then(res => res.text())
);

module.exports = register;