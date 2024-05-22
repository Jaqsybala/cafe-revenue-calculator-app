'use client'

import { Button, Form, InputNumber, notification } from 'antd';
import React, { useState, useEffect } from 'react';
import { CalculatorFilled } from "@ant-design/icons";
import Link from 'next/link';

type RequestForm = {
  total: number;
  fromKaspi?: number;
  fromOther?: number;
  fromCash?: number;
};

const CalculatorPage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      };
      setCurrentTime(now.toLocaleDateString('ru-RU', options));
    };

    updateCurrentTime();
    const intervalId = setInterval(updateCurrentTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const onFinish = async (values: RequestForm) => {
    setLoading(true);
    try {
      const response = await fetch('/api/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        notification.success({
          message: 'Все расчеты верны.',
        });
      } else {
        notification.error({
          message: 'Прошу проверить введенные данные.',
        });
      }
    } catch (error) {
      notification.error({
        message: 'Something went wrong. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="absolute top-4 left-4 text-gray-600">
        {currentTime}
      </div>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <Form
          form={form}
          name="calculator"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <h1 className="text-center font-medium text-2xl mb-4">Калькулятор выручки</h1>

          <Form.Item
            label="Общая сумма выручки за день"
            name="total"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите общую сумму выручки за день",
              },
            ]}
            className="mb-2"
          >
            <InputNumber
              addonAfter="₸"
              size="large"
              className="w-full"
            />
          </Form.Item>

          <Form.Item
            label="Сумма дохода с Каспи Банка"
            name="fromKaspi"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите сумму дохода от Каспи Банка",
              },
            ]}
            className="mb-2"
          >
            <InputNumber
              addonAfter="₸"
              size="large"
              className="w-full"
            />
          </Form.Item>

          <Form.Item
            label="Сумма дохода с других банков"
            name="fromOther"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите сумму дохода от других банков",
              },
            ]}
            className="mb-2"
          >
            <InputNumber
              addonAfter="₸"
              size="large"
              className="w-full"
            />
          </Form.Item>

          <Form.Item
            label="Сумма дохода с наличными"
            name="fromCash"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите сумму наличных",
              },
            ]}
            className="mb-2"
          >
            <InputNumber
              addonAfter="₸"
              size="large"
              className="w-full"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full"
              icon={<CalculatorFilled />}
              loading={loading}
            >
              Рассчитать
            </Button>
          </Form.Item>
          <Link href="/">
            <Button type="default" className="w-full">
              Назад на главную страницу
            </Button>
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default CalculatorPage;
