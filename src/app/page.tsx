import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HomePage = () => {
  return (
    <>
      <div className="p-5 border-red-500 border rounded-xl m-2">
        <h1 className="text-red-600 text-5xl">Hello world!</h1>
        <Input placeholder="Bora la " />
        <Button>Clique aqui</Button>
      </div>
    </>
  );
};

export default HomePage;
