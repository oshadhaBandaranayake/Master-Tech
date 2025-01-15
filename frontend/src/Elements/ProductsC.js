import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import ProCard from './ProCard'
import {listProducts,ListproductbyCg, Listproductbyfiter} from '../function/productActions'
import {BsFilter,IoMdClose} from 'react-icons/all'
import HashLoader from "react-spinners/HashLoader";
import { Link} from 'react-router-dom'
const ProductsC = ({match,history}) => {


    let Cg = window.location.search ? window.location.search.split('=')[1] : null
    const keyword = window.location.pathname.split('/')[2] 
    const dispatch = useDispatch()
    const productList = useSelector((state) => state.productList)
    const productbycg = useSelector((state)=>{
        return state.ListproductbyCg
    })
  
    const productbyprice = useSelector((state)=>{
        return state.Listproductbyprice
    })
    
    const {loading,error,products} = productbycg ? productbycg : productList ? productList : productbyprice ;
    useEffect(()=>{
 
        if(Cg){
            console.log(window.location.search.split('=')[0])
            if(window.location.search.split('=')[0] === '?cg'){
                dispatch(ListproductbyCg(Cg))
                console.log(products)

            }else{
                dispatch(Listproductbyfiter(Cg))

            }
        }else{
            dispatch(listProducts(keyword))
        }

    },[dispatch,Cg,keyword])
    const [showfilter,setshowfilter] = useState(false);
    const [showsearch,setshowsearch] = useState(false);
    const filterfunc = () =>{
        setshowfilter(!showfilter);
        if(showsearch){
            setshowsearch(false)
        }
 
    }


    return (
        <>
        <div className = 'Cgfilter'>
            <h1>{Cg ? Cg : keyword ?  "" + keyword + " -Search" : 'All'} Products</h1>
            <div className = 'filtersbtn '>
            <button className = {`filterbtn ${showfilter ? 'activebtn' : ''}` }  
            onClick = {filterfunc} > {showfilter ?  <IoMdClose  size = '20'/>: <BsFilter size = '20'/> } 
            ProductFilter
            </button>
            </div>
        
            <div className = 'filters'> 
            <ul>
                    <Link className = 'lined' to = '?cg'>All</Link>
                    <Link className = 'lined'  to = '?cg=Dekstop'>Dekstop</Link>
                    <Link className = 'lined'  to = '?cg=Laptop'>Laptops</Link>
                    <Link className = 'lined'  to = '?cg=UsedPart'>Used Parts</Link>
                    <Link className = 'lined' to = '?cg=Software'>Software</Link>
                    <Link to = '?cg=Accessories' className = 'lined'>Accessories</Link>
            </ul>
            </div>
        </div>
        <div className = {`filterarea ${showfilter ? 'filter' : 'filteroff' }`}>
        <div className = 'sortbydiv'>
            <h1> Sort By</h1>
            <ul>
                <Link onClick = {()=>(setshowfilter(false))} className = 'lined' to = '?filter=highprice'>Low to high price</Link>
                <Link onClick = {()=>(setshowfilter(false))} className = 'lined' to = '?filter=lowprice'>high to low price</Link>
            </ul> 
        </div>
 
    </div>
            {loading ?
               <div className='loading'>
                          <HashLoader   color={"#fff"}  loading={loading} size={40} />
                     </div> 
            : error ? <h2>{error} </h2> 
            : products.length === 0 ? 
            <h1 className = 'nothingfound'>Nothing Found !!!</h1> : <div className='cardsProduct'>
                       {products.map((product) =>(
                               <ProCard key={product._id} product={product} />

                          )  )} 
                 </div> }
                   
        </> 
    )
}

export default ProductsC
