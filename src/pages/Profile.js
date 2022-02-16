import { useParams } from "react-router-dom";

export default function Profile(){
    const{name}=useParams();
    return(
        <div>
            <h3>Desde Profile, con el nombre de {name}</h3>
        </div>
    );
}