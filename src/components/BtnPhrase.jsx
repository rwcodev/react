import getRandomNumber from "../utils/getRandomNumber"
import quotes from '../data/phrases.json'
import photos from '../data/photos.json'

const BtnPhrase = ({ setPhraseSelected, setBgSelected }) => {  

    const changePhrase = () => {
        const indexRandom = getRandomNumber(quotes.length)
        const phaseRandom = quotes[indexRandom]
        setPhraseSelected(phaseRandom)
        setBgSelected(photos[getRandomNumber(photos.length)])
    }

    return (
        <button className="ml-auto block cursor-pointer bg-violet-950 py-2 px-4 text-white rounded-md text-sm hover:brightness-200" onClick = {changePhrase}>Ver otra</button>
    )
}

export default BtnPhrase
