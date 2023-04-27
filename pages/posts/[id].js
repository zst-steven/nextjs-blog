import Head from 'next/head'
import Date from '../../components/date'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Layout from '../../components/layout'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <p>{postData.title}</p>
      <p>{postData.id}</p>
      <p><Date dateString={postData.date} /></p>
      <br/>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  )
}
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: { postData }
  }
}
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}