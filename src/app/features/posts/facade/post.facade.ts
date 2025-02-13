import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PostFacade {
    private postsSubject = new BehaviorSubject<Post[]>([]);
    posts$ = this.postsSubject.asObservable();

    constructor(private postService: PostService) {}

    loadPosts(): void {
        this.postService.getPosts().pipe(
            tap(posts => this.postsSubject.next(posts))
        ).subscribe();
    }

    getPost(id: number): Observable<Post> {
        return this.postService.getPost(id);
    }

    createPost(post: Post): void {
        this.postService.createPost(post).subscribe(() => this.loadPosts());
    }

    updatePost(id: number, post: Partial<Post>): void {
        this.postService.updatePost(id, post).subscribe(() => this.loadPosts());
    }

    deletePost(id: number): void {
        this.postService.deletePost(id).subscribe(() => this.loadPosts());
    }
}
