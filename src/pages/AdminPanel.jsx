import {
  Box,
  Card,
  CardBody,
  Divider,
  Flex,
  Heading,
  Image,
  VStack,
} from "@chakra-ui/react";
import "./styles.css";
import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Api from "../api/Api";
import axios from "axios";
import { tab } from "@testing-library/user-event/dist/tab";
import Icon from "../components/Icon";

export function TableRow({ image, name, price, category, ratings, id,handleTable }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [ename, setename] = useState(name);
  const [eimage, seteimage] = useState(image);
  const [eprice, seteprice] = useState(price);
  const [eratings, seteratings] = useState(ratings);
  const [loading,setLoading]=useState(false)
  let api = new Api()

  const EditProduct =async()=>{
    setLoading(true)
    let res = await api.getProductsData(`/${category}`)
    console.log(res)

    let newData = res.map((el)=>{
        if(el.id==id){
            el.name=ename
            el.image=eimage
            el.price=+eprice
            el.ratings=+eratings
        }
        return el
    })

    console.log(newData)
    let res1 = await axios(
        process.env.REACT_APP_BASEURL +
          process.env.REACT_APP_PORT +
          process.env.REACT_APP_PRODUCTS +
          `/${category}`,
        {
          method: "patch",
          data: { items: newData },
        }
      );

      console.log(res1)
      setLoading(false)
      onClose()
      handleTable(category)


  }

  const deleteItem =async()=>{
    let res = await api.getProductsData(`/${category}`)
    console.log(res)

    let newData = res.filter((el)=>el.id!=id)

let res1 = await axios(
        process.env.REACT_APP_BASEURL +
          process.env.REACT_APP_PORT +
          process.env.REACT_APP_PRODUCTS +
          `/${category}`,
        {
          method: "patch",
          data: { items: newData },
        }
      );

      console.log(res1)
      handleTable(category)

  }

  return (
    <>
      <Tr>
        <Td>
          <Image src={image} w="60px" h="60px"></Image>
        </Td>
        <Td maxW="50px" overflow="hidden">
          {name}
        </Td>
        <Td>{price}</Td>
        <Td>{category}</Td>
        <Td>{ratings}</Td>
        <Td onClick={onOpen}>
          <Icon
            image="https://cdn-icons-png.flaticon.com/512/1827/1827933.png"
            size={16}
          ></Icon>
        </Td>
        <Td onClick={deleteItem}>
          <Icon
            image="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            size={16}
          ></Icon>
        </Td>
      </Tr>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit this item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <label>
              Product Name
              <Input value={ename} onChange={(e)=>setename(e.target.value)}></Input>
            </label>
            <label>
              Product Image
              <Input value={eimage} onChange={(e)=>seteimage(e.target.value)} ></Input>
            </label>
            <label>
              Product Price
              <Input value={eprice} onChange={(e)=>seteprice(e.target.value)}></Input>
            </label>
            <label>
              Product Ratings
              <Input value={eratings} onChange={(e)=>seteratings(e.target.value)}></Input>
            </label>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button isLoading={loading} onClick={EditProduct} variant="ghost">Edit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

let product = {
  name: "",
  image: "",
  price: null,
  delivery: "+0.99 /2 %",
  category: "",
  ratings: null,
};

export default function AdminPanel() {
  let api = new Api();

  const [value, setValue] = useState(""); // State to store the value of the input field
  const [cat, setCat] = useState([]);
  const [nproduct, setnPorcut] = useState(product);
  const [tableData, setTableData] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value); // Update the value of the input field when the user types
  };

  useEffect(() => {
    const getCat = async () => {
      let res = await api.getData(process.env.REACT_APP_PRODUCTS);
      setCat(res.data);
    };

    getCat();
  }, []);

  const handleSubmit = async (event) => {
    value.toLowerCase();
    event.preventDefault();
    let obj = {
      id: value,
      items: [],
    };
    let res = await api.setData(obj, process.env.REACT_APP_PRODUCTS);
    console.log(res);
  };

  const handleProSubmit = async (event) => {
    event.preventDefault();
    let res = await api.getProductsData(`/${nproduct.category}`);
    console.log(res);
    nproduct.id = Math.random() + Date.now();
    nproduct.price = Number(nproduct.price);
    nproduct.ratings = Number(nproduct.ratings);
    let res1 = await axios(
      process.env.REACT_APP_BASEURL +
        process.env.REACT_APP_PORT +
        process.env.REACT_APP_PRODUCTS +
        `/${nproduct.category}`,
      {
        method: "patch",
        data: { items: [...res, nproduct] },
      }
    );
    console.log(res1);
  };

  const handleFormData = (e) => {
    const val = e.target.value;

    setnPorcut({ ...nproduct, [e.target.name]: val });
  };

  const handleTable = async (value) => {
    let res = await api.getProductsData(`/${value}`);
    setTableData(res);
  };

  return (
    <Box className="container">
      <Flex>
        <VStack w="30%">
          <form onSubmit={handleSubmit}>
            <Flex direction="column" padding={8} m="auto">
              <Card>
                <CardBody>
                  <FormControl>
                    <FormLabel htmlFor="myInput">Add new category</FormLabel>
                    <Input
                      borderColor="black"
                      borderWidth="1px"
                      id="myInput"
                      type="text"
                      value={value}
                      onChange={handleChange}
                      placeholder="Enter new category"
                    />
                    <Button
                      variant="outline"
                      color="white"
                      bg="#202340"
                      type="submit"
                      mt={4}
                    >
                      Add
                    </Button>
                  </FormControl>
                </CardBody>
              </Card>
            </Flex>
          </form>

          <Divider />

          <Heading fontSize="medium">Add New Product</Heading>

          <form onSubmit={handleProSubmit}>
            <Flex
              m="auto"
              p={8}
              direction="column"
              boxShadow={
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
              }
            >
              <FormControl>
                <FormLabel htmlFor="imageLink">Image Link</FormLabel>
                <Input
                  type="text"
                  onChange={handleFormData}
                  id="imageLink"
                  name="image"
                  placeholder="Enter image link"
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="price">Price</FormLabel>
                <Input
                  type="number"
                  onChange={handleFormData}
                  id="price"
                  name="price"
                  placeholder="Enter price"
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  type="text"
                  onChange={handleFormData}
                  id="name"
                  name="name"
                  placeholder="Enter name"
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="ratings">Ratings</FormLabel>
                <Input
                  type="number"
                  onChange={handleFormData}
                  id="ratings"
                  name="ratings"
                  placeholder="Enter ratings"
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="category">Category</FormLabel>
                <Select id="category" name="category" onChange={handleFormData}>
                  <option value="">Select category</option>
                  {cat.map((el) => (
                    <option value={el.id}>{el.id}</option>
                  ))}
                </Select>
              </FormControl>

              <Button
                variant="outline"
                color="white"
                bg="#202340"
                mt={4}
                type="submit"
              >
                Submit
              </Button>
            </Flex>
          </form>
        </VStack>

        <Box w="70%" borderLeftColor="#202340" borderWidth="1px" m="16px">
          <Select w="20%" m="24px" onChange={(e)=>{
            handleTable(e.target.value)
          }}>
            <option value="">Select category</option>
            {cat.map((el) => (
              <option value={el.id}>{el.id}</option>
            ))}
          </Select>

          <TableContainer>
            <Table variant="simple">
              <TableCaption>Select category to edit products</TableCaption>
              <Thead>
                <Tr>
                  <Th>Image</Th>
                  <Th>Name</Th>
                  <Th>Price</Th>
                  <Th>Categrory</Th>
                  <Th>Ratings</Th>
                  <Th>Edit</Th>
                  <Th>Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {tableData?.map((el) => (
                  <TableRow {...el} handleTable={handleTable} />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Flex>
    </Box>
  );
}
