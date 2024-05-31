import Comment from "./Comment.jsx";

const comments = [
    {
        name: "문동민",
        comment: "안녕하세요 문동민입니다."
    },
    {
        name: "달달",
        comment: "안녕하세요 달달입니다."
    },
    {
        name: "토끼",
        comment: "안녕하세요 토끼입니다."
    },
]

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                )
            })}

        </div>
    )
}

export default CommentList;