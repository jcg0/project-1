const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a1e0ee4284mshd4935eda2ae1e5bp1efdf4jsnf6a5c60bb746',
		'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
	}
};

fetch('https://the-cocktail-db.p.rapidapi.com/search.php?s=vodka', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));