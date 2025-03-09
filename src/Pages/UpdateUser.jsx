import React, { useState } from "react";
import assets from "../assets/assets";

const UpdateUser = () => {
  const [image, setImage] = useState(false);
  return (
    <div className="min-h-[100vh] cover flex items-center justify-center bglogin">
      <div className="bg-white flex items-center justify-between min-w-[700px] rounded-lg">
        <form className="flex flex-col gap-4 p-8">
          <h3 className="font-[500]">Profile Details</h3>
          <label
            htmlFor="avatar"
            className="flex items-center gap-2 text-gray-300 cursor-pointer"
          >
            <input
              type="file"
              id="avatar"
              accept=".png, .jpg, .jpeg"
              hidden
              onChange={(e) => setImage(e.target.files[0])}
            />
            <img
              src={image ? URL.createObjectURL(image) : assets.avatar_icon}
              className="w-[50px] aspect-square rounded-[50%]"
            />
            Upload Profile Image
          </label>
          <input
            type="text"
            placeholder="Ypur Name"
            required
            className="p-2 min-w-[300px] border-2 border-[#c9c9c9]  outline-[#077eff]"
          />
          <textarea
            placeholder="Write profile bio"
            className="p-2 min-w-[300px] border-2 border-[#c9c9c9]  outline-[#077eff]"
          ></textarea>
          <button
            type="submit"
            className="border-none text-white bg-[#077eff] p-1.5 text-lg rounded-lg cursor-pointer"
          >
            Save
          </button>
        </form>
        <img
          src={image ? URL.createObjectURL(image) : assets.logo_icon}
          className="max-w-[160px] flex aspect-square mt-5 mb-5 ml-auto mr-auto rounded-[50%]"
        />
      </div>
    </div>
  );
};

export default UpdateUser;
