import Header from "@/components/layout/Header";

const UsersPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Users Page</h1>
        <p className="mt-4">Here is a list of users.</p>
      </main>
    </div>
  );
};

export default UsersPage;
