import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {byPrefixAndName} from '../Utils';
export default function Footer()
{
    return(
        <>
            <div className="parent">
                <div className="part-1">
                    <h2>LOCATION
                    </h2>
                    <p>2215 John Daniel Drive
                    </p>
                    <p>Clark, MO 65243</p>
                </div>
                <div className="part-2">
                    <h1>AROUND THE WEB</h1>
                    <FontAwesomeIcon icon={byPrefixAndName.fab['facebook']} />
                    <FontAwesomeIcon icon={byPrefixAndName.fab['twitter']} />
                    <FontAwesomeIcon icon={byPrefixAndName.fab['linkedin-in']} />
                    <FontAwesomeIcon icon={byPrefixAndName.fas['globe']} />
                </div>
                <div className="part-3"></div>
            </div>
        </>
    )

}