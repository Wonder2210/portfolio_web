import Post, { props as PostType } from './Post'
import { Icon } from '@iconify/react'
import Dev from '@iconify/icons-logos/dev-icon'

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
          readable_publish_date,
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
              readable_publish_date={readable_publish_date}
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

    <a href="" className="icon-btn">
      <div>
        View more on <span></span>
      </div>
    </a>
  </section>
)

export default Posts
