from fastapi import APIRouter

router = APIRouter()

comments = [
    {"id": 1, "postId": 1, "body": "Comentario del post 1"},
    {"id": 2, "postId": 1, "body": "Otro comentario del post 1"},
]

@router.get("/")
def get_comments():
    """Get all the comments"""
    return comments

@router.get("/{comment_id}")
def get_comment(comment_id: int):
    """Get a commentary by the ID"""
    comment = next((c for c in comments if c["id"] == comment_id), None)
    return comment or {"error": "Comment not found"}

@router.get("/post/{post_id}")
def get_comments_by_post(post_id: int):
    """Get comments by the post ID"""
    return [c for c in comments if c["postId"] == post_id]
