import { Link } from "react-router-dom";
import React,{useState} from 'react';
import logo from '../../assets/images/logo.png';
import userImg from '../../assets/images/userImg.jpg';
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBox from "../SearchBox";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';

import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';









const Header=()=>{
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpennotificationDrop,setisOpennotificationDrop]=useState(false);
  const openMyAcc = Boolean(anchorEl);
  const openNotifications = Boolean(isOpennotificationDrop);

  const handleOpenMyAccDrop = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMyAccDrop = () => {
    setAnchorEl(null);
  };
  const handleOpennotificationsDrop=()=>{
    setisOpennotificationDrop(true)

  }
  const handleClosenotificationsDrop=()=>{
    setisOpennotificationDrop(false)

  }

    
    return(
        <>
        <header className="d-flex align-items-center">
            <div className="container-fluid w-100">
                <div className="row d-flex align-items-center w-100">
                    <div className="col-sm-2 part1">
                        <Link to={'/'} className="d-flex align-items-center logo"><img src={logo} className="logo"/>
                        <span className="ml-2">Adina</span>
                        </Link>
                    </div>
                    <div className="col-sm-3 d-flex align-items-center part2 pl-4">

                        <Button className="rounded-circle mr-3"><MdMenuOpen/></Button>
                        <SearchBox/>
                    </div>
                    <div className="col-sm-7 d-flex align-items-center justify-content-end part3 ">

                    <Button className="rounded-circle mr-3"><CiLight /></Button>

                    <Button className="rounded-circle mr-3"><MdOutlineMailOutline/></Button>

                    <Button className="rounded-circle mr-3" onClick={handleOpennotificationsDrop}><FaRegBell/></Button>
             <div className="dropdownWrapper position-relative">
             <Menu
        anchorEl={isOpennotificationDrop}
        className="notifications dropdown_list"
        id="notifications"
        open={openNotifications}
        onClose={handleClosenotificationsDrop}
        onClick={handleClosenotificationsDrop}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <div className="head pl-3 pb-0">
        <h4>Order (12)</h4>
        </div>
        <Divider className="mb-3" />

        
        <MenuItem onClick={handleClosenotificationsDrop}>
        <div>
        <div className="userImg">
                        <span className="rounded-circle">
                            <img src={userImg}/>
                        </span>
                    </div>
        </div>
                    <div className="dropdownInfo">
                      <h4><span><b>Sachin</b>Added to this Favorite ListItemIcon
                     <b>Leathe Belt steve madden</b> 
                      </span></h4>
                    </div>
        </MenuItem>
      </Menu>
             </div>
             


                   <div className="myAccWrapper">
                   <Button className="myAcc d-flex align-items-center" onClick={handleOpenMyAccDrop}>
                    <div className="userImg">
                        <span className="rounded-circle">
                            <img src={userImg}/>
                        </span>
                    </div>
                    <div className="userInfo">
                        <h4>Seema Haider</h4>
                        <p className="mb-0">@seema47</p>

                    </div>
                   </Button>
                   <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={openMyAcc}
        onClose={handleCloseMyAccDrop}
        onClick={handleCloseMyAccDrop}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        
        <MenuItem onClick={handleCloseMyAccDrop}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          My Account
        </MenuItem>
        <MenuItem onClick={handleCloseMyAccDrop}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Reset Password
        </MenuItem>
        <MenuItem onClick={handleCloseMyAccDrop}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
                   </div>

                    </div>
                </div>
                     </div>
        </header>
        </>
    )
}
export default Header;