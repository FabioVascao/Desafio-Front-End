import { Container } from "./styles";
import { Tag } from "../Tag";

export function NoteFilm({data, ...rest}){
    return (
        <Container {...rest}>
            <h1>{data.title}</h1>
            <div>
                <img src="star.color.svg" alt=""/>
                <img src="star.color.svg" alt=""/>
                <img src="star.color.svg" alt=""/>
                <img src="star.color.svg" alt=""/>
                <img src="star-transparent.svg" alt=""/>
            </div>
            <p>{data.content}</p>
            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                    }
                </footer>
            }
        </Container>
    )
}