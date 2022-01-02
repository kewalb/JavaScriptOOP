// class defination for Movie.
class Movie{
    // constructor to initialize title, studio and rating for a movie instance.
    constructor(title, studio, rating="PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    getPG(arr){
        // returning movies in array with PG rating.
        let newarr = []
        for(let i=0; i<arr.length; i++){
            if(arr[i].rating === "PG"){
                newarr.push(arr[i])
            }
        }
        return newarr;
    }
}

// creating instance of class movie.
const movie1 = new Movie("Casino Royale", "Eon Productions", "PG13")
