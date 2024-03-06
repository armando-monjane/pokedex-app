import CircularProgress from '@mui/material/CircularProgress';

import * as S from './styles';

const Loader = () => {
    return (
        <S.Container>
            <CircularProgress />
        </S.Container>
    );
}

export default Loader;