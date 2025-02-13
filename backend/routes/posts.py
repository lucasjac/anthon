from fastapi import APIRouter

router = APIRouter()

posts = [
    {"id": 1, "title": "Primer Post", "body": "Este es el primer post"},
    {"id": 2, "title": "Segundo Post", "body": "Este es el segundo post"},
]

@router.get("/")
def get_posts():
    """Get all the posts"""
    return posts

@router.get("/{post_id}")
def get_post(post_id: int):
    """Get an specific post by the ID"""
    post = next((p for p in posts if p["id"] == post_id), None)
    return post or {"error": "Post not found"}

@router.post("/")
def create_post(post: dict):
    """Create a new post"""
    new_id = len(posts) + 1
    post["id"] = new_id
    posts.append(post)
    return post

@router.put("/{post_id}")
def update_post(post_id: int, post: dict):
    """Modify an existing post"""
    for p in posts:
        if p["id"] == post_id:
            p.update(post)
            return p
    return {"error": "Post not found"}

@router.delete("/{post_id}")
def delete_post(post_id: int):
    """Delete a post by the ID"""
    global posts
    posts = [p for p in posts if p["id"] != post_id]
    return {"message": "Post deleted"}
