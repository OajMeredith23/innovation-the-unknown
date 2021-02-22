
export default function TileWall({ data }) {
    console.log({ data })

    return (
        <h1>Tile Wall</h1>
    )
}

export async function getStaticProps(context) {
    const res = await fetch(`http://localhost:3000/api`)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data: data }, // will be passed to the page component as props
    }
}