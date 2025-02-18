import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HomePage = () => {
  return (
    <div className="m-2 rounded-xl border border-red-500 bg-gray-800 p-5">
      <h1 className="text-5xl text-red-600">Hello world!</h1>
      <Input placeholder="Bora la " />
      <Button>Clique aqui</Button>
    </div>
  );
};

export default HomePage;
