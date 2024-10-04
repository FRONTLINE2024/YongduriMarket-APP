import styled from "styled-components";
import {Product} from "@/types/Product";
import {FaRegComments, FaRegHeart} from "react-icons/fa";
type ProductItemProps = {
    product: Product;
}

function ProductItem({ product }:ProductItemProps){
    return (
        <ProductItemContainer>
            <ProductImage src={product.imageUrl}/>
            <TextContainer>
                <CategoryTitle>{product.categoryText}</CategoryTitle>
                <DateTitle>{`${product.productTitle} * ${product.productDate}`}</DateTitle>
                <PriceTitle>{`${product.price}원`}</PriceTitle>
                <MsHeartContainer>
                    <FaRegHeart size = {20}/>
                    <MsHeartText>{product.heart}</MsHeartText>
                    <FaRegComments size = {20}/>
                    <MsHeartText>{product.message}</MsHeartText>
                </MsHeartContainer>
            </TextContainer>
        </ProductItemContainer>
    );
}

const ProductItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 120px;
    border-bottom: 1px solid black;
    padding: 0 10px;
`;

const ProductImage = styled.img`
    width: 120px;
    height: 100px;  
    border-radius: 20%;
    object-fit: cover;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 10px;
    padding-top: 20px;
`;
const MsHeartContainer = styled.div`
    display: flex;
    justify-content: flex-end;

`;

const CategoryTitle = styled.div`
    font-size: 14px;
    font-weight: bold;
`;

const DateTitle = styled.div`
    font-size: 16px;
    font-weight: bold;
`;

const PriceTitle = styled.div`
    font-size: 16px;
`;
const MsHeartText = styled.div`
    font-size: 15px;
    font-weight: bold;
    padding: 0 5px;
`;

export default ProductItem;
