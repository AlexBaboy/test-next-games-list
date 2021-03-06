import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useEffect, useRef, useState} from "react";
import Link from "next/link";
import {StyledGrid} from "../components/ui/StyledGrid";
import {StyledCard} from "../components/ui/StyledCard";
import OrderList from "../components/OrderList";
import {APP_BASE_URL} from "../constants/ui/routes";
import {APP_KEY} from "../constants/ui/keys";
import Search from "../components/Search";
import PlatformsList from "../components/PlatformsList";
import {StyledFiltersContainer} from "../components/ui/StyledFiltersContainer";
import {StyledButton} from "../components/ui/StyledButton";
import {StyledButtonWrapper} from "../components/ui/StyledButtonWrapper";
import {StyledError} from "../components/ui/StyledError";
import {StyledErrorContainer} from "../components/ui/StyledErrorContainer";

export default function Catalog ({gamesList, platforms}) {

    const [games, setGames] = useState(gamesList?.results || [])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const searchInput = useRef();
    const orderSelect = useRef();
    const filterSelect = useRef();

    const nextUrlRef = useRef(gamesList?.next);

    const defaultUrl = `${APP_BASE_URL}/api/games?key=${APP_KEY}`

    useEffect(() => {

        // почистить куки
        document.cookie = 'gameId=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';

    },[])

    const loadMoreGames = (url) => {
        setLoading(true)
        async function loadData () {
            const response = await fetch(url)
            const data = await response.json()

            setGames(prevState => ([
                        ...prevState,
                        ...data.results
                        ])
            )

            nextUrlRef.current = data.next
            setLoading(false)
        }
        loadData()
    }

    const saveIdOfGame = (id) => {
        document.cookie = `gameId=${id}`
    }

    const fetchGames = (url) => {

        async function loadData () {
            setLoading(true)
            try {

                const response = await fetch(url)
                const data = await response.json()

                setGames(data.results)
                nextUrlRef.current = data.next


            } catch(e) {
                setError(e.message)
            }
            setLoading(false)
        }
        loadData()
    }

    const orderChangeHandler = (value) => {

        if (!value) return

        searchInput.current.value = ''
        filterSelect.current.value = 0

        switch (value) {
            case '0':
                return fetchGames(defaultUrl);
            case '1':
                return fetchGames(`${APP_BASE_URL}/api/games?ordering=rating&key=${APP_KEY}`);
            case '2':
                return fetchGames(`${APP_BASE_URL}/api/games?ordering=-rating&key=${APP_KEY}`);
            case '3':
                return fetchGames(`${APP_BASE_URL}/api/games?ordering=released&key=${APP_KEY}`);
            case '4':
                return fetchGames(`${APP_BASE_URL}/api/games?ordering=-released&key=${APP_KEY}`);
            default:
                return fetchGames(defaultUrl);
        }
    }

    const searchHandler = (e) => {

        if (e.key === 'Enter') {

            const nameGame = e.target.value

            filterSelect.current.value = 0
            orderSelect.current.value = 0

            fetchGames(
                nameGame
                    ? `${APP_BASE_URL}/api/search?search=${nameGame}&key=${APP_KEY}`
                    : defaultUrl
            )
        }
    }

    const onChangePlatformHandler = (platformId) => {

        if (!platformId) return

        searchInput.current.value = ''
        orderSelect.current.value = 0

        fetchGames(
            platformId > 0
                ? `${APP_BASE_URL}/api/games?parent_platforms=${platformId}&key=${APP_KEY}`
                : defaultUrl
        )
    }

    if (error) {
        return (
            <StyledErrorContainer>
                <StyledError>
                    <img
                        src={'/error.jpg'}
                        width='100%'
                        height='100%'
                        alt={error}
                    />
                    <div className='errorMessage'>{error}</div>
                </StyledError>
            </StyledErrorContainer>
        )
    }

    return (
    <div className={styles.container}>
          <Head>
                <title>Catalog games</title>
                <meta name="description" content="Catalog games" />
                <link rel="icon" href="/favicon.ico" />
          </Head>

          <StyledFiltersContainer>
              <Search disabled={loading} searchHandler={searchHandler} ref={searchInput}/>
              <OrderList disabled={loading} onChange={orderChangeHandler} ref={orderSelect}/>
              <PlatformsList disabled={loading} platforms={platforms} onChange={onChangePlatformHandler} ref={filterSelect}/>
          </StyledFiltersContainer>

        <main className={styles.main}>
            <h1 className={styles.title}>
                Games list
            </h1>

        {loading && (
            <div className={styles.spinnerContainer}>
                <div className={styles.loadingSpinner} />
            </div>
        )}

        <StyledGrid>
            { games && games.length && games.map((game) => (
                <StyledCard key={game.id}>
                    <Link href={`/game/${game.slug}`}
                        key={game.id} className='gameCard'
                    >
                        <a onClick={() => saveIdOfGame(game.id)}>
                            <div className='gamePoster'>
                                <img
                                    src={game.background_image ?? '/image-not-found.png'}
                                    width={'100%'}
                                    height={'100%'}
                                    alt={game.name}
                                />
                            </div>
                            <div className='gameName'> {game.name} </div>
                            <div className='gameDate'> released: {game.released} </div>
                            <div className='gameRating'> rating: {game.rating} </div>
                        </a>
                    </Link>
                </StyledCard>
            ))}

            </StyledGrid>
            { nextUrlRef && nextUrlRef.current && (
                <StyledButtonWrapper>
                    <StyledButton type='button' disabled={loading} onClick={() => loadMoreGames(nextUrlRef.current)}>load more</StyledButton>
                </StyledButtonWrapper>
            )}
          </main>
    </div>
  )
}


export async function getServerSideProps () {

    // получить игры !!!
    const responseGames = await fetch(`${APP_BASE_URL}/api/games?key=${APP_KEY}`)
    const gamesList = await responseGames.json()

    if(!gamesList) {
        return {
            notFound: true
        }
    }

    // получить платформы !!!
    const responsePlatforms = await fetch(`${APP_BASE_URL}/api/platforms/lists/parents?key=${APP_KEY}`)
    const platforms = await responsePlatforms.json()

    return {
        props: {
            gamesList,
            platforms
        }
    }
}
