import Form from "~/components/Form";
import Header from "~/components/Header";

export default function Index() {
  return (
    <div className="w-full min-h-screen bg-slate-800 flex flex-col justify-center items-center">
      <Header />
      <Form />
    </div>
  );
}
