import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-2">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-500">@{username}</p>
      </div>

      <div className="text-gray-600 space-y-1 text-sm">
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Phone:</strong> {phone}
        </p>
        <p>
          <strong>Website:</strong>{" "}
          <a
            href={`https://${website}`}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {website}
          </a>
        </p>
      </div>

      <div className="mt-3 text-gray-700 text-sm">
        <p>
          <strong>Company:</strong> {company.name}
        </p>
        <p className="italic">“{company.catchPhrase}”</p>
      </div>

      <div className="mt-3 text-gray-500 text-xs">
        <p>
          <strong>Address:</strong> {address.suite}, {address.street},{" "}
          {address.city}, {address.zipcode}
        </p>
        <p>
          Geo: {address.geo.lat}, {address.geo.lng}
        </p>
      </div>

      <div className="mt-3 text-gray-400 text-xs">User ID: {id}</div>
    </div>
  );
};

export default UserCard;
