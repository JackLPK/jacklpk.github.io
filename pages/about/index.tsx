import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="pkljack.github.io About page." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      <div className="container px-2 pt-4">
        <h1 className="mb-4 text-4xl font-bold">About</h1>
        <h2 className="mb-2 text-2xl font-bold">This is an About page.</h2>
        <p>Thanks for coming!</p>
      </div>
    </>
  )
}
