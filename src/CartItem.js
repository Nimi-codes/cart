import React from 'react';
class CartItem extends React.Component{
    render(){
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} src="" alt="cart-pic" />
    
                </div>
                <div className='right-block'>
                    <div style={{fontSize:20}}>Phone</div>
                    <div style={{color:"lightgrey"}}>Rs 999</div>
                    <div style={{color:"lightgrey"}}>Qty:1</div>
                    <div className="cart-item-actions">
                        {/* Buttons*/}
                    </div>
                </div>
           </div>
        );
    }
}
const styles={
    image:{
        height:100,
        width:100,
        borderRadius:5,
        background:'grey'
    }
}
export default CartItem;