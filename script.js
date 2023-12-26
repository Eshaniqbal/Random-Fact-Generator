const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2d4696ebc0mshc91b0f5482a0790p17c40djsnb36e013ea98e',
		'X-RapidAPI-Host': 'facts-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://facts-by-api-ninjas.p.rapidapi.com/v1/facts', options)
    .then(response => response.json())
    .then(response => {
       fact.innerHTML = response[0].fact;
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });
    document.getElementById('reloadButton').addEventListener('click', function() { 
        location.reload();
    });
