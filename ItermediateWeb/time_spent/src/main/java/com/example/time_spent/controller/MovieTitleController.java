package com.example.time_spent.controller;


import com.example.time_spent.entity.MovieTitle;
import com.example.time_spent.entity.ShowTitle;
import com.example.time_spent.service.MovieTitleService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/movie")
public class MovieTitleController {
    private final MovieTitleService movieTitleService;

    public MovieTitleController(MovieTitleService movieTitleService) {
        this.movieTitleService = movieTitleService;
    }

    @PostMapping
    public ResponseEntity<MovieTitle> createNewMovie(@RequestBody MovieTitle movieTitle) {
        MovieTitle newMovie = movieTitleService.saveMovie(movieTitle);
        return new ResponseEntity<>(newMovie, HttpStatus.OK);
    }

    @GetMapping
    public List<MovieTitle> fetchShows() {
        return movieTitleService.fetchMovies();
    }

    @GetMapping("/{id}")
    public MovieTitle getMovieById(@PathVariable int id) {
        return movieTitleService.findMovieById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteMovie(@PathVariable int id) {
        movieTitleService.deleteMovie(id);
    }

//    @PutMapping("/{id}")
//    public ResponseEntity<MovieTitle> updateShow (@RequestBody MovieTitle movieTitle, @PathVariable int id) {
//        MovieTitle editMovie = movieTitleService.updateMovie(movieTitle, id);
//        return new ResponseEntity<>(editMovie, HttpStatus.OK);
//    }
}
