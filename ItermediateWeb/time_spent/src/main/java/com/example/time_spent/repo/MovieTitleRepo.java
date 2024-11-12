package com.example.time_spent.repo;

import com.example.time_spent.entity.MovieTitle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieTitleRepo extends JpaRepository<MovieTitle, Integer> {
}