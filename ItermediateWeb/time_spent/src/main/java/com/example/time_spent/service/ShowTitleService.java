package com.example.time_spent.service;


import com.example.time_spent.entity.ShowTitle;
import com.example.time_spent.repo.ShowTitleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShowTitleService {
    @Autowired
    private ShowTitleRepo showTitleRepo;


    public ShowTitle saveShow(ShowTitle showTitle) {
        return showTitleRepo.save(showTitle);
    }

    public List<ShowTitle> fetchShows() {
        return showTitleRepo.findAll();
    }

    public void deleteShow(int id) {
        showTitleRepo.deleteById(id);
    }

    public ShowTitle findShowById(int id) {
        return showTitleRepo.findById(id).get();
    }

    public ShowTitle updateShow(ShowTitle showTitle, int id) {
        ShowTitle edit = showTitleRepo.findById(id).orElse(showTitle);
        edit.setNumberOfSeasonsWatched(showTitle.getNumberOfSeasonsWatched());
        return showTitleRepo.save(edit);
    }
}
