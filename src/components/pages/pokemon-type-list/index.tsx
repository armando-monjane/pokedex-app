import PokemonTypeListSection from "@components/organisms/PokemonTypeListSection";
import MainTemplate from "@components/templates/MainTemplate";
import { useCustomNavigate } from "@hooks/useCustomNavigate";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const PokemonTypeListPage = () => {
    const [title, setTitle] = useState('Detail');

    const { type } = useParams<{ type: string }>();

    const { goBack } = useCustomNavigate();

    useEffect(() => {
        if (type) {
            setTitle(type || 'Type');
        }
    }, [type]);


    return (
        <MainTemplate title={title} withBackButton onGoBack={goBack}>
            {type && <PokemonTypeListSection type={type} />}
        </MainTemplate>
    );
}

export default PokemonTypeListPage;