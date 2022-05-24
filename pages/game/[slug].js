import styles from "../../styles/Home.module.css";

export default function  GameDetails ({details}) {

    return (
        <main className={styles.main}>
            <div className={styles.gameCardDetailWrapper}>
                <div className={styles.gameCardDetail}>
                    <div className={styles.gameCardNameDetails}>
                        {details.data.name}
                    </div>
                    <div className={styles.gameCardDescriptionDetails}>
                        {details.data.description_raw || details.data.description}
                    </div>
                    <div className={styles.gameCardWebsiteDetails}>
                        website: {details.data.website}
                    </div>
                </div>
            </div>
        </main>
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
