import { PropertyCard } from ".";
import { H3 } from "../TailwindComponents/Typorgraphy/Headings";
import useFetch from "../hooks/useFetch";
import { HomeContainer } from "./HOC";

const FeaturedProperties = () => {
  const { data, loading } = useFetch("/api/hotels?featured=true&limit=3");
  console.log("Feature ", data);
  return (
    <div className="w-full">
      <H3 classes="">Home Guests Love</H3>
      <div className="mt-[20px] flex gap-[20px] justify-between">
        {
          data?.map((item:any)=>{
            return <PropertyCard  item={item} key={item._id}/>
          })
        }
      </div>
    </div>
  );
};

export default HomeContainer(FeaturedProperties);
