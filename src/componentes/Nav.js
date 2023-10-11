import React, { useState  } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../context/AuthContext";
import { Button } from "../Button";



  const Navb = styled.nav`
    .navbar-lists {
      display: flex;
      gap: 4.8rem;
      align-items: center;
      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.3rem;
          font-weight: 500;
          text-transform: uppercase;
          color: white;
          transition: color 0.3s linear;
        }
        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }
    
.nav-item {
  margin-right: 20px;
}

.dropdown {
  position: relative;
}

.dropbtn {
  background-color: inherit;
  color: blue;
  border: none;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  // background-color: #333;
  min-width: 160px;
  z-index: 1;
}

.dropdown-content a {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
  color: black;
}

.dropdown:hover .dropdown-content {
  display: block;
}
    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }
    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }
    .close-outline {
      display: none;
    }
    .cart-trolley--link {
      position: relative;
      .cart-trolley {
        position: relative;
        font-size: 3.2rem;
      }
      .cart-total--item {
        width: 2.4rem;
        height: 2.4rem;
        position: absolute;
        background-color: #000;
        color: #000;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -20%;
        left: 70%;
        background-color: ${({ theme }) => theme.colors.helper};
      }
    }
    .user-login--name {
      text-transform: capitalize;
    }
    .user-logout,
    .user-login {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        border: ${({ theme }) => theme.colors.black};
        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }
      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }
      .active .close-outline {
        display: inline-block;
      }
      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        /* transform-origin: top; */
        transition: all 3s linear;
      }
      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 3s linear;
        .navbar-link {
          font-size: 4.2rem;
        }
      }
      .cart-trolley--link {
        position: relative;
        .cart-trolley {
          position: relative;
          font-size: 5.2rem;
        }
        .cart-total--item {
          width: 4.2rem;
          height: 4.2rem;
          font-size: 2rem;
        }
      }
      .user-logout,
      .user-login {
        font-size: 2.2rem;
        padding: 0.8rem 1.4rem;
      }
    }
  `;
  const Nav = () => {
    
    // const { isAuthenticated, logout,user } = useAuth(); // Use useAuth hook to access context
    const [menuIcon, setMenuIcon] = useState();
    const { isAuthenticated, logout } = useAuth();
    // const { isAuthenticated, logout,user } = useAuth();

 
   
  
  return (
    <Navb>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              Home
            </NavLink>
          </li>
          
<li>

{isAuthenticated ? (
          //    <button
             
          //    className="navbar-link "
          //     onClick={logout}>
          //    {/* // onClick={() => setMenuIcon(false)}
          //   //  onClick={handleLogout} */}
          //    Logout cart-trolley--link cg pro className="cart-trolley"
          //  </button>
          <div className="nav-item dropdown">
           <Button onClick={logout}>Lagout</Button>
           
           
            </div>
          
       ): ( 
        <>
       
        <NavLink
              to="/register"
              className="navbar-link ">
                
              Sign Up
            </NavLink>
           
&nsbp; &nsbp; 
            <NavLink to="/login"
              className="navbar-link ">
                
              Login
            </NavLink>
          
            </>
       )} 
</li>
 
          
        </ul>
{/* 
       
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div> */}
      </div>
    </Navb>
  );
};

 export default Nav;
 
