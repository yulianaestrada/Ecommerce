import Item from "../Item/Item"
import hocFilterProducts from "../../hoc/hocFilterProducts"

const ItemList = ({products = []}) => {
    return (
        <div className="items-wrapper">
            {products.map(product => (
                <Item key={product.id} product={product} />
            ))}
        </div>
    )
}

const ItemListWithSearch = hocFilterProducts(ItemList);
export {ItemList, ItemListWithSearch}
