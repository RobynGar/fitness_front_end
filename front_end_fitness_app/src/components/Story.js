const Story = ({story}) => {
    return (
        <div className="stories-item">
            <img className="stories-img" src={story.picture} alt={story.name} width="200" />
            <div className="vertical-stories-item">
                <h2>{story.name}</h2>
                <p className="story-text">{story.text}</p>
            </div>
        </div>
    )
}

export default Story;