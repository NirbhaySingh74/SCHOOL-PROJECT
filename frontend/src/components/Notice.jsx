import { useEffect, useState } from "react";

const Notice = () => {
  const [notices, setNotices] = useState([
    "1,2/8/2024,Dear students, Please be informed that the school timing has been changed from tomorrow, 9th February, 2024 (Friday). The new school timing will be from 8:30am to 1:35 pm.",
    "Note:- Dear students, if your mode of transport is school bus you are asked to get on your bus stops an hour (60 minutes) earlier than your usual timing.",
    "2,2/13/2024,Dear students, This is to inform you that our school will remain closed tomorrow on the occasion of Basant Panchami and will re-open on Thursday, 15th February, 2024 as usual timing.",
    "3,2/22/2024,,Owing to heavy traffic on account of the PMs advent to the city Varanasi, the School remains closed tomorrow on Friday, the 23rd February 2024 and the School remains closed on Saturday, the 24th February 2024 on the auspicious occasion of Shri Guru Ravidas Jayanti. The School will re-open on Monday, the 26th February 2024 as usual.",
    "Note: Fees counter will remain open on Saturday (24/2/24) from 9:00 am to 12:00 pm.",
    "Students from Nursery to class IX and XI please collect your admit card after clearing dues.",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setNotices((prevNotices) => {
        const [first, ...rest] = prevNotices;
        return [...rest, first];
      });
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-80 my-4 bg-gray-100">
      <h1 className="text-xl font-bold mb-4">Notice</h1>
      <div className="relative w-96 h-64 p-4 bg-white shadow-md overflow-hidden">
        <ul className="absolute inset-x-0 bottom-0 space-y-2 animate-slideUp">
          {notices.map((notice, index) => (
            <li key={index} className="p-2 bg-blue-100 rounded shadow">
              {notice}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notice;
