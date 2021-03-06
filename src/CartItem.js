import React from 'react';
const CartItem=(props)=>{
    
    // testing(){
    //     const promise=new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             resolve('done');
    //         },5000);
    //        })
    //        //setState acts like a synchronous call
    //        promise.then(()=>{
    //            this.setState({qty:this.state.qty+10});
    //            this.setState({qty:this.state.qty+10});
    //            this.setState({qty:this.state.qty+10});
    //            console.log('State',this.state);
    //        });
    // }
    //increaseQuantity(){
        // this.state.qty+=1;
         //console.log("this",this.state);
        // setState form 1(when we do not require previous state such as for changing title)
        // this.setState({
        //     qty:this.state.qty + 1
        // });
        // setState form2 (used when we require previous state)
    //     this.setState((prevState)=>{
    //             return{
    //                 qty:prevState.qty + 1
    //             } 
    //         },()=>{
    //             console.log("this.state",this.state);
    //         });
    // }
    // decreaseQuantity(){
        // this.state.qty+=1;
        // console.log("this",this.state);
        // setState form 1(when we do not require previous state)
        // this.setState({
        //     qty:this.state.qty - 1
        // });
        // setState form2 (used when we require previous state)
        
    //     this.setState((prevState)=>{
    //         if(prevState.qty>0){
    //             return{
    //                 qty:prevState.qty - 1
    //             } 
    //         }
    //         },()=>{
    //             console.log("this.state",this.state);
    //         });
        
    // }
    console.log('this.props',props);
    const{price,title,qty}=props.product;
    const {product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct}=props; 
        return(
            
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} src={product.img} />
    
                </div>
                <div className='right-block'>
                    <div style={{fontSize:20}}>{title}</div>
                    <div style={{color:"lightgrey"}}>Rs {price}</div>
                    <div style={{color:"lightgrey"}}>Qty:{qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons*/}
                        <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://www.flaticon.com/premium-icon/icons/svg/2740/2740600.svg" 
                        onClick={()=>onIncreaseQuantity(product)}
                        />
                        <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://www.flaticon.com/premium-icon/icons/svg/2740/2740679.svg" 
                        onClick={()=>onDecreaseQuantity(product)}
                        />
                        <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://www.flaticon.com/premium-icon/icons/svg/3106/3106916.svg" 
                        onClick={()=>onDeleteProduct(product.id)}
                        />

                    </div>
                </div>
           </div>
        );
    }
const styles={
    image:{
        height:120,
        width:120,
        borderRadius:5,
        background:'grey'
    }
}
export default CartItem;