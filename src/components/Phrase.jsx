
const Phrase = ({ phraseSelected }) => {

    console.log(phraseSelected)

  return (
    <p className="italic" text-white>{phraseSelected.phrase}</p>
  )
}

export default Phrase
