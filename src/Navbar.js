import { findByLabelText } from '@testing-library/react';
import React from 'react';
const Navbar=(props)=>{
    return(
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src='https://www.flaticon.com/svg/static/icons/svg/1170/1170627.svg' alt='cart-icon' />
                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
    )
}

const styles={
    cartIcon:{
            height:50,
            marginRight:20
    },
    nav:{
        height:70,
        backgroundColor:'#4267b2',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    cartIconContainer:{
        position:'relative'
    },
    cartCount:{
        backgroundColor:'Yellow',
        borderRadius:'50%',
        padding:'4px 8px',
        position:'absolute',
        right:0,
        top:-9
    }
}
export default Navbar;