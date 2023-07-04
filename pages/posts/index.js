import Link from "next/link"

export default function Posts(props) {
    return (

        <div style={{ backgroundColor: 'black' }}> postss page
            {props.posts.map(post => (
                <Link href={`/posts/${post.post_id}`}>
                    <div key={post.post_id}>
                        {post.post_title}
                    </div>
                </Link>
            ))}
        </div>
    )
}


export async function getStaticProps() {
    const res = await fetch('http://localhost/todolist-api/proximaapi.php?route=posts')
    const data = await res.json()

    return {
        props: {
            posts: data
        }
    }
}



