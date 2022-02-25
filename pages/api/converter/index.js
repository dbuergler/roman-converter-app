import { romanNumerals } from "../../../data/roman";


export default function handler(req, res){
    res.status(200).json(romanNumerals)
}