import React from 'react';
class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price:999,
            title:"Mobile Phone",
            qty:1,
            img:""
        }
    }
    render(){
        const{price,title,qty}=this.state;
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} src="" alt="cart-pic" />
    
                </div>
                <div className='right-block'>
                    <div style={{fontSize:20}}>{title}</div>
                    <div style={{color:"lightgrey"}}>Rs {price}</div>
                    <div style={{color:"lightgrey"}}>Qty:{qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons*/}
                        <img alt="increase" className="action-icons" src="https://www.flaticon.com/premium-icon/icons/svg/2740/2740600.svg" />
                        <img alt="decrease" className="action-icons" src="https://www.flaticon.com/premium-icon/icons/svg/2740/2740679.svg" />
                        <img alt="delete" className="action-icons" src="https://www.flaticon.com/premium-icon/icons/svg/3106/3106916.svg" />

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