import { SiteMeta } from '~/components/meta'
import Events from '~/components/events'
import { getAllPosts } from '~/lib/api'

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}

export default function Index({ allPosts }: { allPosts: never[] }) {
  const morePosts = allPosts
  const dateParts =
    process.env.NEXT_PUBLIC_LAST_UPDATED_AT?.split('-').map(Number) ?? []
  const year = dateParts[0] ?? 0
  const month = dateParts[1] ? dateParts[1] - 1 : 0
  const day = dateParts[2] ?? 0
  const dateObj = new Date(year, month, day)

  return (
    <div className='body'>
      <SiteMeta />

      <header>
        <div>
          <h1 className='text-7xl font-semibold tracking-tighter'>
            Ohio <span className='font-light'>for</span> Palestine
          </h1>

          <p className='text-base font-normal'>
            Events and resources for Ohioans in solidarity with Palestinian
            justice.{' '}
            {process.env.NEXT_PUBLIC_LAST_UPDATED_AT && (
              <span>
                Last updated on{' '}
                <time
                  dateTime={dateObj.toISOString()}
                  title={dateObj.toLocaleString('en-US', {
                    timeZone: 'America/New_York',
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                >
                  {dateObj.toLocaleString('en-US', {
                    timeZone: 'America/New_York',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
                .
              </span>
            )}
          </p>
        </div>
      </header>

      <div>filter</div>

      <main className='main'>
        <Events posts={morePosts} />
      </main>

      <footer>
        <p>footer</p>
      </footer>
    </div>
  )
}
