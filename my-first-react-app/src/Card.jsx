import pp from './assets/avaMbGitHub.jpg'

function Card()
{
    return(
        <div className="card">
            <img className="card-image" src={pp}></img>
            <h2 className="card-title" >pinK0der</h2>
            <p className="card-text" >Internal pointer variable</p>
        </div>
    );
}

export default Card