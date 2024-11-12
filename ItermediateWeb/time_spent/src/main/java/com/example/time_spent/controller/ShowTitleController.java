package com.example.time_spent.controller;


import com.example.time_spent.entity.ShowTitle;
import com.example.time_spent.service.ShowTitleService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/show")
public class ShowTitleController {
    private final ShowTitleService showTitleService;

    public ShowTitleController(ShowTitleService showTitleService) {
        this.showTitleService = showTitleService;
    }

    @PostMapping
    public ResponseEntity<ShowTitle> createNewShow(@RequestBody ShowTitle showTitle) {
        ShowTitle newShow = showTitleService.saveShow(showTitle);
        return new ResponseEntity<>(newShow, HttpStatus.OK);
    }

    @GetMapping
    public List<ShowTitle> fetchShows() {
        return showTitleService.fetchShows();
    }

    @GetMapping("/{id}")
    public ShowTitle getShowById(@PathVariable int id) {
        return showTitleService.findShowById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteShow(@PathVariable int id) {
        showTitleService.deleteShow(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ShowTitle> updateShow (@RequestBody ShowTitle showTitle, @PathVariable int id) {
        ShowTitle editShow = showTitleService.updateShow(showTitle, id);
        return new ResponseEntity<>(editShow, HttpStatus.OK);
    }
}
