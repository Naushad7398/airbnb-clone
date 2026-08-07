import PropertyCard from "../../components/PropertyCard/PropertyCard";
import { useState, useEffect } from 'react'
import SectionSlider from "../../components/SectionSlider/SectionSlider";
import { northGoa } from "../../data/northGoa";
import { southGoa } from "../../data/southGoa"
import { mumbai } from "../../data/mumbai"
import { pune } from "../../data/pune"
import { delhi } from "../../data/delhi"
import { lonavala } from "../../data/lonavala"



const Home = () => {

  const [likedProperties, setLikedProperties] = useState([]);
  const [search, setSearch] = useState("");


  const handleLike = (id) => {
    setLikedProperties(
      likedProperties.includes(id)
        ? likedProperties.filter((propertyId) => propertyId !== id)
        : [...likedProperties, id]
    )
  }


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


  return (
    <div className="mx-auto max-w-[1600px] px-12 py-8">
      <SectionSlider
        title="Popular homes in North Goa"
        data={northGoa}
      />

      <SectionSlider
        title="Stay in South Goa"
        data={southGoa}
      />

      <SectionSlider
        title="Explore Mumbai"
        data={mumbai}
      />

      <SectionSlider
        title="Weekend in Pune"
        data={pune}
      />

      <SectionSlider
        title="Discover Delhi"
        data={delhi}
      />

      <SectionSlider
        title="Escape to Lonavala"
        data={lonavala}
      />
    </div>
  )
}

export default Home
