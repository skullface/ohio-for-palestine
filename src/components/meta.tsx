import Head from 'next/head'

export const SiteMeta = () => {
  return (
    <Head>
      <title>Ohio for Palestine</title>
      <meta
        name='description'
        content='Events and resources for Ohioans in solidarity with Palestinian justice.'
      />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}
