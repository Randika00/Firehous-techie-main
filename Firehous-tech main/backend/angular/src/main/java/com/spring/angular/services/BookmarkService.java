package com.spring.angular.services;

import com.spring.angular.models.Bookmark;
import com.spring.angular.repository.BookmarkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BookmarkService {
    @Autowired
    private BookmarkRepository bookmarkRepository;

    public Iterable<Bookmark> findAll(){
        return bookmarkRepository.findAll();
    }

    public Optional<Bookmark> findById(Long id){
        return bookmarkRepository.findById(id);
    }

    public Bookmark save(Bookmark bookmark) {
        return bookmarkRepository.save(bookmark);
    }

    public void deleteById(Long id){
        bookmarkRepository.deleteById(id);
    }
}
