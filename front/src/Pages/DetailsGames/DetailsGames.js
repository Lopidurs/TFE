import { useEffect, useRef, useState } from 'react'
import Form from './Form/FormGame.js'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { getGame } from '../../api.js'
import { useParams } from 'react-router-dom'

function DetailsGames() {
    const submitRef = useRef()

    const id = useParams().id

    const [game, setGame] = useState({})

    if (id) {
        useEffect(() => {
            getGame(id).then((data) => {
                if (data) {
                    setGame(data)
                }
            })
        }, [])
    }

    return (
        <div className="container">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={2}>
                    <Stack spacing={2}>
                        <Button
                            variant="contained"
                            type="submit"
                            onClick={() => submitRef.current.click()}>
                            Enregistrer
                        </Button>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={10}>
                    <Form submitRef={submitRef} game={game} />
                </Grid>
            </Grid>
        </div>
    )
}

export default DetailsGames
