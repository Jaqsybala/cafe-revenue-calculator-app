import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-600">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">О нашем калькуляторе</h1>
        <p className="text-lg mb-8 text-gray-600">
            На нашем сайте вы можете воспользоваться калькулятором для расчета выручки.
          Введите данные о вашей выручке, и мы поможем вам рассчитать ее с разбивкой по источникам.
        </p>
        <div className="flex flex-col gap-2">
          <Link href="/calculator">
            <Button type="primary" size="large">
              Использовать калькулятор
            </Button>
          </Link>
          <Link href="/">
            <Button type="primary" size="large">
              Перейти на главную страницу
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
