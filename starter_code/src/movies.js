const movies = require("./data");

//NO PUEDO HACER UN DOBLE SORT?LO HE INTENTADO Y NADA, TIENE QUE VER CON ASYNC AWAIT?TB LO INTENTADO Y NADA.
const orderByYear = (movies) => {
        const moviesByYear = movies.sort((a, b) => {
            yearA = a.year;
            yearB = b.year;
            titleA = a.title;
            titleB = b.title;

            if (yearA < yearB) {
                return -1
            }
            if (yearA > yearB) {
                return 1
            } else {
                if (titleA < titleB) {
                    return -1
                }
                if (titleA > titleB) {
                    return 1
                } else return 0;
            }
        })

        return moviesByYear;
    }
    //orderByYear(movies);



const howManyMovies = (movies) => {
        let stevenMovies = [];
        movies.map((movie, index) => {
            //const genero = movie.genre;
            if (movie.genre.find(e => e === "Drama")) {
                if (movie.director === "Steven Spielberg") {
                    stevenMovies.push(movie);
                }
            }
        })
        if (stevenMovies.length > 0) {
            return parseInt(stevenMovies.length);
        } else {
            return 0;
        }
    }
    //howManyMovies(movies);




const orderAlphabetically = (movies) => {
        const moviesByTitle = movies.sort((a, b) => {
                let titleA = a.title;
                let titleB = b.title;
                if (titleA < titleB) {
                    return -1;
                }
                if (titleA > titleB) {
                    return 1;
                } else return 0;
            })
            //Esto siempre hay que declarar la constante o se puede poner asi?¿
            /* const titlesOfMovies = moviesByTitle.map((movie) => {
                titlesOfMovies.push(movie.title);

            }) */

        const titlesOfMovies = [];
        moviesByTitle.map((movie) => {
            titlesOfMovies.push(movie.title);

        })
        return titlesOfMovies.splice(0, 20);


    }
    //orderAlphabetically(movies);




const ratesAverage = (movies) => {
    const ratesOfMovies = [];

    movies.map((movie) => {
        ratesOfMovies.push(movie.rate);
    })
    ratesOfMovies.reduce((acc, current) => {
        acc + current
    })

    /* movies.reduce((acc, current) => {
    let accRate = acc.rate ? acc.rate : 0;
    let currentRate = current.rate ? current.rate : 0;
    console.log(accRate);
    console.log(currentRate);

    accRate + currentRate; */





    // console.log(reducer);

}

console.log(ratesAverage(movies));