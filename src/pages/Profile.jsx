import { useEffect, useState } from "react";
import CardProfile from "../components/CardProfile";
import { Spinner } from "flowbite-react";

export default function Profile() {

    const [profile, setProfile] = useState([])

    const [loading, setLoading] = useState(true);

    async function getDataProfile() {
  const url = "https://api.escuelajs.co/api/v1/users/1";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    setProfile(result);
    setLoading(false);
  } catch (error) {
    console.error(error.message);
  }
}

useEffect(() => {
    getDataProfile();
  }, []);

  // jik loading true return pake ini
    if (loading == true) {
      return (
        <div className="block mx-auto mt-50 w-100">
          <Spinner /> sedang memuat data...
        </div>
      )
    }
  
    return (
        <div className="min-h-screen w-full bg-gray-100">
            <CardProfile item={profile}/>
        </div>
    )
}