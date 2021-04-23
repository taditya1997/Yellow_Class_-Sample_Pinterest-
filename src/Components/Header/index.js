import React from 'react';
import pinterest from './pinterest.png';
import { SearchOutlined } from '@material-ui/icons';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
const Header = (props) => 
{
    return (


        <div className="HeaderBar">
            <img src={pinterest} />

            <div className="searchcontainer">
                <SearchOutlined style={{ color: "black" }} />
                <input placeholder="Type to search for image" type="text" />
            </div>

            <div className="icons">
                < AttachFileIcon />
                < AccountCircleIcon />
                < SpeakerNotesIcon />
            </div>
        </div>
    );
};

export default Header;