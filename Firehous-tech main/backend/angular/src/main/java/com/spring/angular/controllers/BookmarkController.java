package com.spring.angular.controllers;

import com.spring.angular.models.Bookmark;
import com.spring.angular.services.BookmarkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("api/bookmarks")

public class BookmarkController {
    @Autowired
    private BookmarkService bookmarkService;

    @PostMapping
    public ResponseEntity<Bookmark>create (@RequestBody Bookmark bookmark){
        Bookmark savedBookmark = bookmarkService.save(bookmark);
        return ResponseEntity.created(URI.create("/api/bookmarks/" + savedBookmark.getId())).body(savedBookmark);
    }

    @GetMapping
    public Iterable<Bookmark> findAll(){
        return bookmarkService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Bookmark> findById(@PathVariable Long id){
        Optional<Bookmark> bookmark = bookmarkService.findById(id);
        if(bookmark.isPresent()){
            return ResponseEntity.ok(bookmark.get());
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id){
        Optional<Bookmark>existingBookmark = bookmarkService.findById(id);
        if(existingBookmark.isPresent()){
            bookmarkService.deleteById(id);
            return ResponseEntity.noContent().build();
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("{id}")
    public ResponseEntity<Bookmark> update(@PathVariable Long id, @RequestBody Bookmark bookmark){
        Optional<Bookmark>existingBookmark = bookmarkService.findById(id);
        if(existingBookmark.isPresent()){
            Bookmark updatedBookmark = bookmarkService.save(bookmark);

            return ResponseEntity.ok(updatedBookmark);
        }else{
            return ResponseEntity.notFound().build();
        }
    }
}

