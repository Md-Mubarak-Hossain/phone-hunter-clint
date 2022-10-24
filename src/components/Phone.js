import { Link } from 'react-router-dom';
import './Phone.css'



const Phone = ({ ph }) => {

    const { name, price, image, description } = ph;
    // const [des, setDes] = useState();

    return (
        <div className='phone'>
            <img src={image} alt="imag" />

            <h2 className='name'>{name}</h2>
            <p>Details:{description.slice(0, 150)}<Link to={`/description/${ph.id}`}>...more</Link></p>
            <h5>Price:${price}</h5>
            <Link to={`/description/${ph.id}`}> <button className='btn'>Details</button></Link>

        </div >
    );
};

export default Phone;