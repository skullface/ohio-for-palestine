import PostPreview from '~/components/post-preview'
import type Post from '~/types/post'

type Props = {
  posts: Post[]
}

const Events = ({ posts }: Props) => {
  return (
    <div className='mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32'>
      {posts.map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      ))}
    </div>
  )
}

export default Events
