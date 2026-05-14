// Step 1: Accept `joke` and `loading` as props
const JokeDisplay = ({ joke, loading }) => {
  return (
    <div className="joke-container">
      {/* Step 2 + 3: conditional rendering */}
      <p>{loading ? "Loading..." : joke}</p>
    </div>
  )
}

export default JokeDisplay