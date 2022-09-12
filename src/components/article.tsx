const  POST_ARTICLE = ({post}: any) => (
    <article className=" my-8">
    <h2 className="font-bold text-lg my-4">{post.title}</h2>
    <p className="mb-4">{post.content}</p>
  </article>
)
export default POST_ARTICLE;