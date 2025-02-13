import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
    providedIn: 'root'
})
export class PostService {
    private apiUrl = 'http://127.0.0.1:8000/posts';

    constructor(private http: HttpClient) {}

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this.apiUrl);
    }

    getPost(id: number): Observable<Post> {
        return this.http.get<Post>(`${this.apiUrl}/${id}`);
    }

    createPost(post: Post): Observable<Post> {
        return this.http.post<Post>(this.apiUrl, post);
    }

    updatePost(id: number, post: Partial<Post>): Observable<Post> {
        return this.http.put<Post>(`${this.apiUrl}/${id}`, post);
    }

    deletePost(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
