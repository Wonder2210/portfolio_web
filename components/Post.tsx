import React from 'react'

export type props = {
  id?: number
  title: string
  description: string
  date: string
  url: string
  cover_image: string
  positive_reactions_count: number
  tag_list: Array<string>
}

const Post: React.FC<props> = ({
  title,
  description,
  date,
  tag_list,
  url,
  cover_image,
  positive_reactions_count,
}) => (
  <div className="post">
    <img src={cover_image} alt="" />
    <div className="post__content">
      <div className="post__header">
        <a href={url}>
          <h2>{title}</h2>
        </a>
        <div className="post__tags">
          {tag_list.map((i) => (
            <span className="post__tag">{i}</span>
          ))}
        </div>
      </div>
      <div className="post__body">
        <p>{description}</p>
        <span className="post__date">{date}</span>
      </div>
      <div className="post__footer">
        <svg
          aria-hidden="true"
          focusable="false"
          width="1em"
          height="1em"
          transform="rotate(360deg)"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 48 48"
        >
          <path
            fill="#F44336"
            d="M34 9c-4.2 0-7.9 2.1-10 5.4C21.9 11.1 18.2 9 14 9C7.4 9 2 14.4 2 21c0 11.9 22 24 22 24s22-12 22-24c0-6.6-5.4-12-12-12z"
          />
        </svg>
        {positive_reactions_count}
      </div>
    </div>
  </div>
)

export default Post
