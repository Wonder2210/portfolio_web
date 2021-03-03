import Post, { props as PostType } from './Post'

export type PostsArray = Array<PostType>

const Posts = ({ posts }: { posts: PostsArray }) => (
  <section className="posts" id="posts">
    <div className="heading">
      <h2>My Latest Post</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div className="content">
      {posts.map(
        ({
          cover_image,
          date,
          description,
          id,
          positive_reactions_count,
          tag_list,
          title,
          url,
        }) => {
          return (
            <Post
              key={id}
              cover_image={cover_image}
              date={date}
              tag_list={tag_list}
              description={description}
              url={url}
              positive_reactions_count={positive_reactions_count}
              title={title}
            />
          )
        }
      )}
    </div>

    <a href="" className="btn">
      View more
    </a>
  </section>
)

export default Posts
