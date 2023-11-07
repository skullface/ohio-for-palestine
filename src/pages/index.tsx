import { SiteMeta } from '~/components/meta'

export default function Page() {
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
          <h1>Ohio for Palestine</h1>

          {process.env.NEXT_PUBLIC_LAST_UPDATED_AT && (
            <span>
              Last updated on{' '}
              <time dateTime={dateObj.toISOString()}>
                {dateObj.toLocaleString('en-US', {
                  timeZone: 'America/New_York',
                  month: 'short',
                  day: 'numeric',
                })}
              </time>
            </span>
          )}
        </div>
      </header>

      <div>filter</div>

      <main className='main'>main content</main>

      <footer>
        <p>footer</p>
      </footer>
    </div>
  )
}
