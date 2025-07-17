// components/common/UserModal.tsx
import React, { useState } from "react";
import { UserData, UserModalProps } from "../../interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onAddUser }) => {
  const [formData, setFormData] = useState<UserData>({
    id: Date.now(),
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: { lat: "", lng: "" },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddUser(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" placeholder="Name" className="w-full border p-2" onChange={handleChange} required />
          <input name="username" placeholder="Username" className="w-full border p-2" onChange={handleChange} required />
          <input name="email" placeholder="Email" className="w-full border p-2" onChange={handleChange} required />
          <input name="phone" placeholder="Phone" className="w-full border p-2" onChange={handleChange} required />
          <input name="website" placeholder="Website" className="w-full border p-2" onChange={handleChange} required />

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add User
          </button>
          <button type="button" onClick={onClose} className="ml-2 text-gray-600 underline">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
