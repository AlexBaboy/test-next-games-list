import {StyledCardDetail} from "../../components/ui/StyledCardDetail";
import Head from "next/head";

export default function  GameDetails ({details}) {

    return (
        <>
            <Head>
                <title>{details.data.name}</title>
                <meta name="description" content={details.data.description_raw || details.data.description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <StyledCardDetail>
                <div className='gameCardPosterDetail'>
                    <img
                        src={details.data.background_image ?? '/image-not-found.png'}
                        width='100%'
                        height='100%'
                        alt={details.data.name}
                    />
                </div>

                <div className='gameCardNameDetails'>
                    {details.data.name}
                </div>
                <div className='gameCardDescriptionDetails'>
                    {details.data.description_raw || details.data.description}
                </div>

                <div className='gameCardDescriptionDetails'>
                    <b>rating:</b> {details.data.rating}
                </div>
                <div className='gameCardDescriptionDetails'>
                    <b>released:</b> {details.data.released}
                </div>

                <div className='gameCardWebsiteDetails'>
                    <b>website:</b> <a href={details.data.website} target='_blank' rel="noopener noreferrer">
                                {details.data.website}
                            </a>
                </div>
            </StyledCardDetail>
        </>
    )
}

export async function getServerSideProps ({req}) {

    if(!req)
        return {post: null}

    const response = await fetch(`https://api.rawg.io/api/games/${req.cookies.gameId}?key=3dc5c45166e74b9e8df58aa5d4344d90`)
    const data = await response.json()

    if(!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            details: {
                data
            }
        }
    }
}
