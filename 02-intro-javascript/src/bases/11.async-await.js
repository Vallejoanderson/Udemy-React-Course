// const getImagenPromesa = () => 
//     new Promise( resolve => resolve('https://asdasdsd.com') )

// getImagenPromesa().then( console.log );

const getImage = async() => {
    
    try {
        const apiKey = 'rXB7zcdpTY6dgwvemhscY81u0U5Uj9ge';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

        const { data } = await respuesta.json();
        const { url } = data.images.original;
        const img = document.createElement('img');

        img.src = url;
        document.body.appendChild(img);
    } catch ( error ) {
        console.error( error );
    }
}

getImage();

// const apiKey = 'rXB7zcdpTY6dgwvemhscY81u0U5Uj9ge';

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

// peticion
//     .then( response => response.json() )
//     .then( ({ data }) => {
//         const { url } = data.images.original;
        
//         const img = document.createElement('img');
//         img.src = url;

//         document.body.appendChild(img);

//     })
//     .catch( console.warn )