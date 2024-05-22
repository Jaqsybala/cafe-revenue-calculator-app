import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Добро пожаловать на наш сайт!</h1>
        <p className="text-lg mb-8 text-gray-600">
          На нашем сайте вы можете ознакомиться с информацией о нашем калькуляторе и перейти к его использованию.
        </p>
        <div className="flex flex-col gap-2">
          <Link href="/about">
            <Button type="primary" size="large">
              Узнать о калькуляторе
            </Button>
          </Link>
          <Link href="/calculator">
            <Button type="primary" size="large">
              Использовать калькулятор
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
