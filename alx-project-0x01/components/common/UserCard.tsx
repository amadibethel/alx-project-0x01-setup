// components/common/UserCard.tsx
import { FC } from 'react';
import { UserProps } from '../../interfaces';

const UserCard: FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p className="text-sm text-gray-500">@{user.username}</p>
      <p>Email: <a href={`mailto:${user.email}`} className="text-blue-500">{user.email}</a></p>
      <p>Phone: {user.phone}</p>
      <p>Website: <a href={`https://${user.website}`} target="_blank" rel="noreferrer" className="text-blue-500">{user.website}</a></p>
      <div className="mt-2">
        <h3 className="font-semibold">Company:</h3>
        <p>{user.company.name}</p>
        <p className="text-sm italic">"{user.company.catchPhrase}"</p>
      </div>
      <div className="mt-2">
        <h3 className="font-semibold">Address:</h3>
        <p>{user.address.street}, {user.address.city}</p>
      </div>
    </div>
  );
};

export default UserCard;
