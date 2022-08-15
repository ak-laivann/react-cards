
import '../components/card.css';

function Paragraph (props) {
    return(
        <div className="card">
            <div className="card-body">
                <h1 className="card-text text-danger">Read&nbsp;&nbsp;{props.name}</h1>
            </div>
            <div>
                <a href={props.link} className='btn'>OK</a>&nbsp;&nbsp;&nbsp;<a href='#' className='btn'>Cancel</a>
            </div>
        </div>
    );
}

function Card () {
    return (
        <div>
            <div>
                <Paragraph name='JS' link='www.google.com'/>
            </div>
            <div>
                <Paragraph name='HTML' link='www.yahoo.com' />
            </div>
            <div>
                <Paragraph name='React' link='www.bing.com'/>
            </div>
        </div>
    );
}
export default Card;