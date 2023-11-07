import { SiteMeta } from '~/components/meta'

export default function Page() {
  return (
    <div className='body'>
      <SiteMeta />

      <header>
        <div>
          <h1>Ohio for Palestine</h1>
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
