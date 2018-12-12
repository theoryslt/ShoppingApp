const changeInfo = (email, name, address, phone) => (
	fetch('http://192.168.1.32:8080/ShoppingApp/change_info.php',
	{
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify({ email, name, address, phone })
	})
	.then(res => res.json())
);

module.exports = changeInfo;