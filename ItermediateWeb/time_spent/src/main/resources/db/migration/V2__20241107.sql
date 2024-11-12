DROP TABLE IF EXISTS movies;
CREATE TABLE movies
(
    id          INTEGER NOT NULL,
    title       VARCHAR(255),
    run_time    INTEGER NOT NULL,
    poster_path VARCHAR(255),
    CONSTRAINT pk_movies PRIMARY KEY (id)
);

DROP TABLE IF EXISTS shows;
CREATE TABLE shows
(
    id                 INTEGER                                  NOT NULL,
    name               VARCHAR(255),
    episode_run_time   INTEGER                                  NOT NULL,
    number_of_seasons  INTEGER                                  NOT NULL,
    number_of_seasons_watched  INTEGER                      NOT NULL,
    number_of_episodes INTEGER                                  NOT NULL,
    poster_path        VARCHAR(255),
    CONSTRAINT pk_shows PRIMARY KEY (id)
);