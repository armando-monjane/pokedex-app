import { StatItem } from "./stat-item";
import { Type } from "./type";

export interface Pokemon {
    id: number;
    name: string;
    image: string;
    types: Type[];
    abilities: string[];
    stats: StatItem[];
    height: number;
    weight: number;
    url: string;
    sprites: {
        front_default: string;
        front_shiny: string;
    };
}
