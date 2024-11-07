import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Page = () => {
  const { id } = useParams();

  const getUrl = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/urls/${id}`);
      if (response.data && response.data.url) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.error("Error fetching URL:", error);
    }
  };

  useEffect(() => {
    getUrl();
  }, [id]);

  return (
    <div>Redirecting...</div>
  );
};

export default Page;
