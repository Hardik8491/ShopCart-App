  import { useNavigate } from "react-router-dom";
import "./Category.scss";
import cat1 from '../../../assets/category/cat-1.jpg'
import cat2 from '../../../assets/category/cat-2.jpg'
import cat3 from '../../../assets/category/cat-3.jpg'
import cat4 from '../../../assets/category/cat-4.jpg'


const Category = ({ categories }) => {
    const navigate = useNavigate();
    return (
        <div className="shop-by-category">
            <div className="categories">
                {categories?.data?.map((item)=>(
                    <div key={item.id} onClick={()=>navigate(`/category/${item.id}`)} className="category">
                        <img src={ process.env.REACT_APP_DEV_URL +  item.attributes.img.data.attributes.url } alt="" />
                         
                    </div>
                ))}
            </div>
           </div>
    );
};

export default Category;