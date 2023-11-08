import Link from 'next/link'
import type PostType from '~/types/post'

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: PostType) => {
  return (
    <div>
      <div className='mb-5'>[image: {coverImage}]</div>
      <h3 className='mb-3 text-3xl leading-snug'>
        <Link
          as={`/posts/${slug}`}
          href='/posts/[slug]'
          className='hover:underline'
        >
          {title}
        </Link>
      </h3>
      <div className='mb-4 text-lg'>{date}</div>
      <p className='mb-4 text-lg leading-relaxed'>{excerpt}</p>
      {author.name}
    </div>
  )
}

export default PostPreview
