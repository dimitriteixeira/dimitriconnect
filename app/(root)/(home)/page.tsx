'use client'
import { useState, useEffect } from 'react';
import MeetingTypeList from '@/components/MeetingTypeList';

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Atualiza a cada segundo

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, []); // Executa apenas uma vez ao montar o componente

  // Ajusta o tempo para -3 horas
  const adjustedTime = new Date(currentTime.getTime() - 3 * 60 * 60 * 1000);
  const hours = adjustedTime.getHours().toString().padStart(2, '0');
  const minutes = adjustedTime.getMinutes().toString().padStart(2, '0');
  //const seconds = adjustedTime.getSeconds().toString().padStart(2, '0');
  const time = `${hours}:${minutes}`;//add :${seconds} se quiser

  // Formatação da data
  const date = (new Intl.DateTimeFormat('pt-BR', { dateStyle: 'full' })).format(adjustedTime);

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-end max-md:px-5 max-md:py-8 lg:p-11">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;