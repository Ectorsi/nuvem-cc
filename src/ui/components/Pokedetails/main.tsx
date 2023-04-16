import React from "react";
import * as S from "./styles";
import { GetPokemonDetailReturn } from "../../../domains/pokemon/pokemonDomain";

type PokeDetailsProps = {
    pokemonDetails: GetPokemonDetailReturn | null;
};

const PokeDetails = ({ pokemonDetails }: PokeDetailsProps) => (
    <S.Container>
        <S.TitleDetails>{pokemonDetails?.name}</S.TitleDetails>
        <S.Image src={pokemonDetails?.sprites?.front_default} alt={`Pokemon ${pokemonDetails?.name}`} />
        <S.Caracteristics>
            <S.AbilitiesCaracteristics>
                <S.AbilitiesLabel>Habilidades</S.AbilitiesLabel>
                {pokemonDetails?.abilities?.map((item) => <h2 key={item?.ability?.name}>{item?.ability?.name.toUpperCase()}</h2>)}
            </S.AbilitiesCaracteristics>
            <S.WeightCaracteristics>
                <S.WeightLabel>Peso</S.WeightLabel>
                <h2>{pokemonDetails?.weight}</h2>
            </S.WeightCaracteristics>
        </S.Caracteristics>
    </S.Container>
);

export default PokeDetails;