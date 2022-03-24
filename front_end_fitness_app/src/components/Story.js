const Story = ({story}) => {
    return (
        <div className="stories-item">
            <img className="stories-img" src={story.picture} alt={story.name} width="200" />
            <h2>{story.name}</h2>
            <p className="story-text">{story.text}</p>
        </div>
    )
}

export default Story;