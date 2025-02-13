import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  posts = [
    {
      id: 1,
      title: "eum et est occaecati",
      description: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque...",
      date: "3 hours ago",
      likes: 100,
      dislikes: 13
    },
    {
      id: 2,
      title: "eum et est occaecati",
      description: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque...",
      date: "2 days ago",
      likes: 8,
      dislikes: 0
    },
    {
      id: 3,
      title: "eum et est occaecati",
      description: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque...",
      date: "2 moths ago",
      likes: 95,
      dislikes: 41
    },
    {
      id: 4,
      title: "eum et est occaecati",
      description: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque...",
      date: "2 hours ago",
      likes: 35,
      dislikes: 10
    },
    {
      id: 5,
      title: "eum et est occaecati",
      description: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque...",
      date: "5 hours ago",
      likes: 22,
      dislikes: 8
    },
    {
      id: 6,
      title: "eum et est occaecati",
      description: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque...",
      date: "10 hours ago",
      likes: 111,
      dislikes: 46
    },
    {
      id: 7,
      title: "eum et est occaecati",
      description: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque...",
      date: "3 weeks ago",
      likes: 8,
      dislikes: 6
    },
    {
      id: 8,
      title: "eum et est occaecati",
      description: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque...",
      date: "2 days ago",
      likes: 40,
      dislikes: 32
    },
    {
      id: 9,
      title: "eum et est occaecati",
      description: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque...",
      date: "2 days ago",
      likes: 1,
      dislikes: 3
    },
    {
      id: 10,
      title: "eum et est occaecati",
      description: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque...",
      date: "1 year ago",
      likes: 20,
      dislikes: 3
    },
    {
      id: 11,
      title: "eum et est occaecati",
      description: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque...",
      date: "1 month ago",
      likes: 224,
      dislikes: 16
    },
    {
      id: 12,
      title: "eum et est occaecati",
      description: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque...",
      date: "1 hour ago",
      likes: 80,
      dislikes: 44
    },
    {
      id: 13,
      title: "eum et est occaecati",
      description: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque...",
      date: "21 days ago",
      likes: 9,
      dislikes: 1
    },
    {
      id: 14,
      title: "eum et est occaecati",
      description: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque...",
      date: "3 weeks ago",
      likes: 800,
      dislikes: 10
    },
    {
      id: 15,
      title: "eum et est occaecati",
      description: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque...",
      date: "1 week ago",
      likes: 13,
      dislikes: 20
    },
  ];
}
