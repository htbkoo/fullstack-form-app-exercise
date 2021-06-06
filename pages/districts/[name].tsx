import { useRouter } from 'next/router'

const District = () => {
  const router = useRouter()
  const { name } = router.query

  return <p>District: {name}</p>
}

export default District

// export async function getStaticProps(){
//
// }
