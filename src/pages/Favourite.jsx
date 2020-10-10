import React from 'react';
import Layout from '../components/layout/Layout';
import { connect } from 'react-redux';
import { removeFromFavourite } from '../redux/actions/favourite';
import { Link } from 'react-router-dom';
import './cart/Cart.css';
import { ReactComponent as Close} from '../assets/icons/close.svg';

function Favourite(props) {
    return(
        <Layout>
            <div className="cart-page container-fluid container-min-max-width
                d-inline-flex flex-column justify-content-center align-items-center">
                {
                    props.products.length
                    ? <div className="w-100 d-flex flex-row">
                        {
                            props.products.map(product => {
                                return <div className="d-flex flex-row" key={product.id}>
                                    <div className="w-100 d-flex flex-column justify-content-center align-items-center mr-3">
                                        <img src={product.image} alt="Produs"/>
                                        <p>{ product.name }</p>
                                        <p>{ product.price } { product.currency }</p>
                                        <div onClick={() => props.removeFromFavourite({id: product.id})}>
                                            <Close />
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                        
                    </div>
                    : <div className="d-flex flex-column align-items-center">
                        <p className="h3">No items added as favourite!</p>
                        <Link to="/"><button className="btn btn-outline-dark">Back home</button></Link>
                    </div>
                }
            </div>
        </Layout>
    );
}

function mapStateToProps(state) {
    return {
        products: state.favourite.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromFavourite: (payload) => dispatch(removeFromFavourite(payload))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);