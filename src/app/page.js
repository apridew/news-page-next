import { getHealinesNews } from "@/helpers/apis";

export default async function Home() {

  try {
    const res = await getHealinesNews()
    const data =await  res.data
    console.log(data)
    
  } catch (error) {
    console.log(error.message)
  }

  return (
    <div>
      
    </div>
  );
}
