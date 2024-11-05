import { StarIcon } from '@heroicons/react/20/solid';
import React from 'react';

interface Props {
  image: string;
  name: string;
  role: string;
}

const ClientReview = ({ name, role, image }: Props) => {
  return (
    <div className="flex flex-col text-center justify-center">
      <img
        src={image}
        alt={name}
        width={100}
        height={100}
        className="mx-auto mb-[2rem] rounded-full object-contain"
      />
      <div className="flex items-center mx-auto">
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
      </div>
      <h1 className="text-[25px] text-white mt-[1rem]">{name}</h1>
      <p className="text-[15px] text-white opacity-75 mt-[0.5rem] mb-[1.4rem]">
        {role}
      </p>
      <p className="text-[16px] text-white opacity-50 w-[90%] md:w-[50%] mx-auto">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad maiores libero ex
        dignissimos culpa sed adipisci reiciendis voluptate, quos, repellendus quam fugit
        voluptatibus. Unde cum autem dicta ipsum dolor ab!
      </p>
    </div>
  );
};

export default ClientReview;
