import Header from "@/components/layout/Header";

const PostsPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Posts Page</h1>
        <p className="mt-4">Here are some awesome posts!</p>
      </main>
    </div>
  );
};

export default PostsPage;
