import PropertyCard from "../../components/PropertyCard/PropertyCard";
import { useState, useEffect } from 'react'
import SectionSlider from "../../components/SectionSlider/SectionSlider";
import { northGoa } from "../../data/northGoa";




const Home = () => {

  const [likedProperties, setLikedProperties] = useState([]);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");


  const filteredProducts = product.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesCategory =
      category === "all" || product.category === category;

    return matchesSearch && matchesCategory
  });

  const sortedProducts = [...filteredProducts];

  if (sortBy === "lowToHigh") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }
  if (sortBy === "highToLow") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }
  if (sortBy === "rating") {
    sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
  }


  const handleLike = (id) => {
    setLikedProperties(
      likedProperties.includes(id)
        ? likedProperties.filter((propertyId) => propertyId !== id)
        : [...likedProperties, id]
    )
  }

  const fetchProducts = async () => {

    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProduct(data);
    }
    catch (error) {
      setError("Something went wrong!");
    }
    finally {
      setLoading(false);
    }

  }


  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const savedLikes = localStorage.getItem("likedProperties");

    if (savedLikes) {
      setLikedProperties(JSON.parse(savedLikes));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      "likedProperties",
      JSON.stringify(likedProperties)
    );
  }, [likedProperties]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }




  return (
    <div className="max-auto max-w-7xl p-8">

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's Clothing">Women's Clothing</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>

      </select>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="default">Default</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
        <option value="rating">Rating</option>
      </select>

      {/* {sortedProducts.map((product) => (
        <PropertyCard
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          rating={product.rating.rate}
          location={product.category}
          liked={likedProperties.includes(product.id)}
          onLike={handleLike}
        />


      ))} */}

      <SectionSlider
        title="Popular homes in North Goa"
        data={northGoa}
      />
    </div>
  )
}

export default Home
