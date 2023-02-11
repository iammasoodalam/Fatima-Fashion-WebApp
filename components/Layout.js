import Head from "next/head";

export default function Layout({children}) {
  return (
    <>
      <Head>
        <title>Fatima Fashion</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Manage your boutique by managing customers, their sizes, their appointments, turn over date. In this app you can create new customer, or add new assignment for preparing attire is just made easy. You can also manage your requirements for completing the assignments."  />
        
      </Head>
      <div>
        {children}
      </div>
    </>
  ) 
}