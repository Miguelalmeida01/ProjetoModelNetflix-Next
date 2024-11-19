'use client';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Image from 'next/image';
import api from '@/app/api/axios'
import { Star } from 'phosphor-react';
import { Button } from "@/components/ui/button"

type Rating = {
  Source: string;
  Value: string;
};
 


export function BodyHome() {

  const [showData, setShowData] = useState([]);
  const [selectedRating, setSelectedRating] = useState<Rating | null>(null); // Estado para armazenar o rating específico


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('http://localhost:3000/api.json');
        setShowData(response.data);

        const rating = response.data.Ratings.find((r: Rating) => r.Source === 'Internet Movie Database');
        setSelectedRating(rating);
      } catch (error) {
        setShowData([]);
      }
    };
    fetchData();
  }, []);


  return (
    <>
      <div className='flex '>
        <div
          className="flex bg-gradient-to-b from-gray-400 from-1%  to-transparent  
        dark:bg-gradient-to-b dark:from-gray-800 dark:from-1%  dark:to-transparent 
        h-96 w-3/5 mt-32 rounded-2xl truncate mx-10 hover:bg-gray-400
         hover:dark:bg-gray-800" >
          <div className=''>
            <Image
              src={showData.Poster}
              height={100}
              width={259}
              alt={showData.Title}
              quality={100}
            />
          </div>
          <div className='mx-6 mt-14 space-y-1 '>
            <h1 className='text-2xl'> {showData.Title} </h1>

            <p className='text-xs'>{showData.Released}</p>

            {selectedRating ? (
              <div className='flex  text-base gap-x-1 items-center'>
                <Star size={18} color='yellow' /> {selectedRating.Value}
              </div>

            ) : (
              <p>Rating não encontrado</p>
            )}

            <p className='text-lg'>Diretor: {showData.Director}</p>
            <p className='text-wrap text-lg'>Atores: {showData.Actors}</p>
            <p className='text-wrap text-lg'>Roteristas: {showData.Writer}</p>
            <p className='text-lg'>Genero: {showData.Genre}</p>
            <p className='flex pt-5 text-lg'>
              <Button
                className='text-lg border-black  text-black
               hover:bg-gray-300 dark:hover:bg-black dark:bg-gray-900
               dark:text-white'
                color='yellow'
                variant="secondary">
                Assistir</Button>
            </p>
          </div>

        </div>

        {/* Segundo container */}
        <div
          className="flex bg-gradient-to-b from-gray-400 from-1%  to-transparent  
        dark:bg-gradient-to-b dark:from-gray-800 dark:from-1%  dark:to-transparent 
        h-96 w-2/5 mt-32 rounded-2xl truncate mr-10 hover:bg-gray-400
         hover:dark:bg-gray-800" >

          <div className='mx-6 mt-14 space-y-3'>
            <h1 className='text-2xl'> {showData.Title} </h1>


            <p className='text-wrap text-lg'>{showData.Plot}</p>

            <h1 className='text-2xl'>Indicações </h1>

            <p className='text-wrap text-lg'>{showData.Awards}</p>
          </div>

        </div>


      </div>
    </>
  )
}