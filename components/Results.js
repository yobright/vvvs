import Thumbnail from './Thumbnail'
import FlipMove from 'react-flip-move'

export default function Result({results}) {
    return (
        <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 flex-wrap 3xl:flex justify-center">
            {results.map((result) => (
                <Thumbnail key={result.id} result={result}/>
            ))}
        </FlipMove>
    )
}