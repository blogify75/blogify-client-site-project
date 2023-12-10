import Image from 'next/image';
import React from 'react';
import kids from './kidsProducts.module.css';
import getProducts from '../libs/getProducts';
import AffiliatedImage from '../component/AffiliatedImage';

const KidsProducts = async() => {

    const response = await getProducts();
    const getAllData = await response?.data?.data;

    const bfData = getAllData?.filter(f => {
        return f?.categories === 'kidsProducts';
    })
  

    return (
        <div className={`${kids.main}`}>
           <div className={`${kids.container}`} >
            {
                bfData?.map(data => {
                    return (
                        <div className={`${kids.productsMain}`} key={data?.id}>
                             <AffiliatedImage img={data?.img} id={data?._id} affiliate={data?.affiliateLink} />
                            <br />
                            <div style={{width:'220px', margin:'auto'}}>
                                <span style={{color:'white', backgroundColor:'red', padding:'2px 8px', borderRadius:'3px'}}> 30%</span>
                                <span style={{color:'red', marginLeft:'15px'}}>Deal</span>
                                <br />
                                <p style={{fontSize:'11px', marginTop:'5px', fontWeight:'bold'}}>$ <span style={{fontSize:'20px'}}>{data?.price}</span> </p>
                                <br />
                                <div dangerouslySetInnerHTML={{__html:data?.description?.slice(0, 50) }}></div>
                            </div>
                        </div>  
                    )
                })
            }            
           </div>
        </div>
    );

}

export default KidsProducts;