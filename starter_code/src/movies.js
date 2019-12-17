//const movies = require("./data");

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

    const howManyMovies = movies.filter(movie => {
        if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {
            return movie;
        };
    })
    return howManyMovies.length;
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

    let titlesOfMovies = [];
    moviesByTitle.map((movie) => {
        titlesOfMovies.push(movie.title);

    })
    return titlesOfMovies.splice(0, 20);
}

//orderAlphabetically(movies);

const ratesAverage = (movies) => {
    if (!movies.length) return 0
    const ratesOfMovies = movies.map((movie) => {
            return movie.rate;
        })
        //console.log(ratesOfMovies);
    const averageMovies = ratesOfMovies.reduce((acc, current) => {
        if (!current || current === " ") {
            return acc;
        }
        return acc + current;

    }, 0)
    return parseFloat((averageMovies / ratesOfMovies.length).toFixed(2));
}

//ratesAverage(movies);

const dramaMoviesRate = (movies) => {
        const dramaMovies = movies.filter((movie) => {
            if (movie.genre.includes("Drama")) return movie;
        })
        if (!dramaMovies.length) return 0;

        const suma = dramaMovies.reduce((acc, current) => {
            return acc + current.rate;
        }, 0)

        return parseFloat((suma / dramaMovies.length).toFixed(2));
    }
    //dramaMoviesRate(movies);

const bestYearAvg = (movies) => {

    if (!movies.length) return null;


    const moviesYears = movies.map(movie => {
        return movie.year;
    })

    const uniqueYears = [...new Set(moviesYears)];

    const avrMoviesByYear = uniqueYears.map((year) => {
        const movieByYear = movies.filter((movie) => {
            if (movie.year === year) {
                return movie;
            }
        })
        const sumation = movieByYear.reduce((acc, movie) => {
            if (!movie || !movie.rate || movie === "") {
                return acc.rate
            }
            return acc + movie.rate;
        }, 0)
        const avr = sumation / movieByYear.length;
        return { year, rate: avr };
    })
    const moviesByAvr = avrMoviesByYear.sort((a, b) => {
        if (a.rate < b.rate) return 1;
        if (a.rate > b.rate) return -1;
        if (a.year < b.year) return -1;
        else return 1
    })

    return `The best year was ${moviesByAvr[0].year} with an average rate of ${moviesByAvr[0].rate}`

}

bestYearAvg(movies);