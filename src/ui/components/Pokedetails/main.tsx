import React from "react";
import * as S from "./styles";
import UseFetchPokemonDetails from "../../../hooks/UseFectchPokemonDetails";

type PokeDetailsProps = {
    isOpen: boolean;
    name: string;
};

const PokeDetails = ({ isOpen, name }: PokeDetailsProps) => {
    const [pokemonDetails] = UseFetchPokemonDetails(name);
    const { abilities, sprites, weight } = pokemonDetails;
    const abilitiesList = abilities?.map((item) => {
        return <h2 key={item?.ability?.name}>{item?.ability?.name.toUpperCase()}</h2>
    });

    const closeModal = () => {
        return !isOpen;
    };
    console.log('pokemonDetails', pokemonDetails);

    return (
        <S.Container>
            <S.TitleDetails>{name}</S.TitleDetails>
            <S.Image src={sprites?.front_default} alt={`Pokemon ${name}`} />
            <S.Caracteristics>
                <S.AbilitiesCaracteristics>
                    <S.AbilitiesLabel>Habilidades</S.AbilitiesLabel>
                    {abilitiesList}
                </S.AbilitiesCaracteristics>
                <S.WeightCaracteristics>
                    <S.WeightLabel>Peso</S.WeightLabel>
                    <h2>{weight}</h2>
                </S.WeightCaracteristics>
            </S.Caracteristics>
            <S.CloseButton onClick={closeModal}>X</S.CloseButton>
        </S.Container>
    )
};

export default PokeDetails;