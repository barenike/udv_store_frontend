import {
    Add,
    FavoriteBorderOutlined, Remove,
    SearchOutlined,
    ShoppingCartOutlined,
} from '@mui/icons-material';
import styled from "styled-components";
import React, {useEffect, useState} from "react";
import axios from "../api/axios";
import {Modal} from "./Modal";
import {addProduct, removeProduct} from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  max-height: 60%;
  max-width: 100%;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
    max-height: 60%;
  }
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const Title = styled.h1`
  font-size: 16px;
  margin: 5px;
  font-weight: normal;
`;

const Desc = styled.p`
  font-size: 14px;
  text-align: center;
  margin: 10px;
`;

const Button = styled.button`
  
`;
const InfoContainer = styled.div`
  color: black;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  max-height: 40%;
  background-color: whitesmoke;
`;
const ImgContainer = styled.div`
 justify-items: center;
  align-items: center;
display: flex;
  flex-direction: column;
  max-height: 60%;
  padding: 0.5em;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Product = ({ item }) => {
    const [modalActive, setModalActive] = useState(false);
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch();


    useEffect(async ()=>{
        const response=await axios.get(`/products/${item.id}`)
        console.log("Product",response.data)
        setProduct(response.data);
    },[item])
    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 0 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
        return quantity;
    };
    const handleAdd = () => {
        dispatch(
            addProduct({...product, quantity })
        );
    };
    const handleRemove = () => {
        if (quantity>0) {
            dispatch(
                removeProduct({...product, quantity})
            );
        }
        else {
            alert('Нечего удалять');
        }
    };

    return (
        <Container>
            <Wrapper>
                <ImgContainer>
                    <div><Image alt='товар' onClick={() => setModalActive(true)} src={item.imageUrl}/></div>
                </ImgContainer>
                <InfoContainer>
                    <div>
                        <Title>{item.name}</Title>
                        <Desc>{item.price}🪙</Desc>
                    </div>
                    <div>
                        <Button className='custom-btn'>Купить</Button>
                    </div>
                </InfoContainer>

                <Modal active={modalActive} setActive={setModalActive}>
                    <Container>
                        <Wrapper>
                            <ImgContainer>
                                <Image src={product.imageUrl}></Image>
                            </ImgContainer>
                            <InfoContainer>
                                <Title>{product.name}</Title>
                                <AmountContainer>
                                    <Remove onClick={() => handleQuantity("dec")} />
                                    <Amount>{quantity}</Amount>
                                    <Add onClick={() => handleQuantity("inc")} />
                                </AmountContainer>
                                <Desc>
                                    <div>{product.description}</div>
                                    <div>{product.price}🪙</div>
                                    <div>Осталось: {product.amount} шт</div>
                                </Desc>
                                <div>
                                    <Button onClick={handleAdd} className='custom-btn'>Купить</Button>
                                    <Button onClick={handleRemove}>Удалить</Button>
                                </div>
                            </InfoContainer>
                        </Wrapper>
                    </Container>
                </Modal>

            </Wrapper>
        </Container>
    );
};

export default Product;