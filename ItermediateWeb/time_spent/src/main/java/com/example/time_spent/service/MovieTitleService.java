package com.example.time_spent.service;


import com.example.time_spent.entity.MovieTitle;
import com.example.time_spent.repo.MovieTitleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieTitleService {
    @Autowired
    private MovieTitleRepo movieTitleRepo;


    public MovieTitle saveMovie(MovieTitle movieTitle) {
        return movieTitleRepo.save(movieTitle);
    }

    public List<MovieTitle> fetchMovies() {
        return movieTitleRepo.findAll();
    }

    public void deleteMovie(int id) {
        movieTitleRepo.deleteById(id);
    }

    public MovieTitle findMovieById(int id) {
        return movieTitleRepo.findById(id).get();
    }

//    public MovieTitle updateShow(MovieTitle movieTitle, int id) {
//        MovieTitle edit = movieTitleRepo.findById(id).orElse(movieTitle);
//        edit.setNumberOfSeasons(showTitle.getNumberOfSeasons());
//        return showTitleRepo.save(edit);
//    }
}
