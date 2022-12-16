import { Box, CircularProgress, Grid } from "@chakra-ui/react";


export default function Loader(){


    return <Grid w="100%" placeItems="center" h="800px" position="absolute" bg="blackAlpha.800" zIndex={50}>
        <CircularProgress isIndeterminate color='green.300' />
    </Grid>
}