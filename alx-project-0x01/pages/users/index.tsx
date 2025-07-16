// pages/users/index.tsx
import { GetStaticProps } from 'next';
import { UserProps } from '../../interfaces';
import UserCard from '../../components/common/UserCard';

interface UsersPageProps {
  posts: UserProps[];
}

const Users = ({ posts }: UsersPageProps) => {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
};

export default Users;
