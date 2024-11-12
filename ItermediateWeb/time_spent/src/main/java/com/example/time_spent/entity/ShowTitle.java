package com.example.time_spent.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="shows")

public class ShowTitle {
    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private int episodeRunTime;
    private int numberOfSeasons;
    private int numberOfSeasonsWatched;
    private int numberOfEpisodes;
    private String posterPath;
}
