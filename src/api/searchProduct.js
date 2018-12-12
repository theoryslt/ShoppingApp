const searchProduct = (key) => {
	const url = `http://192.168.1.32:8080/ShoppingApp/search.php?key=${key}`;
	return fetch(url)
	.then(res => res.json())
};

module.exports = searchProduct;