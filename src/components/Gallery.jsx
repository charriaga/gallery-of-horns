function Gallery() {

    function HornedBeasts({ title, imageURL, description }) {

        return (
            <>
                <h2>{title}</h2>
                <img src={imageURL} alt={title} title={title} />
                <p>{description}</p>
            </>
        );
    }

    return (
        <>
            <HornedBeasts
                title={"Cyberpunk Chick"}
                imageURL={"src/components/img/Perspective.png"}
                description={"A Cyberpunk Chick"}
            />
            <HornedBeasts
                title={"Self Portrait"}
                imageURL={"src/components/img/Self portrait.png"}
                description={"A Self Portrait"}
            />
        </>
    )
}

export default Gallery