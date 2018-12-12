const signIn = (email, password) => (
	fetch('http://192.168.1.32:8080/ShoppingApp/login.php',
	{
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify({ email, password })
	})
	.then(res => res.json())
);

module.exports = signIn;