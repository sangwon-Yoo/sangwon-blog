import {dehydrate, QueryClient} from "@tanstack/react-query";

export default function Contents() {
    // Render data...
}

// This gets called on every request
export async function getServerSideProps() {
    const queryClient = new QueryClient()

    const user = await queryClient.prefetchQuery({
        queryKey: ['user'],
        queryFn: () => null,
    })

    // For Remix:
    // return json({ dehydratedState: dehydrate(queryClient) })
    return { props: { dehydratedState: dehydrate(queryClient) } }
}