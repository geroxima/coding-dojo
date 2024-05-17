'use client';
import { Button } from 'flowbite-react';
import { Card } from 'flowbite-react';

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mt-20">Ahoy, Pirate 🏴‍☠️🦜!</h1>
      <a href="/pirates" class="mt-5 font-medium text-blue-600 dark:text-blue-500 hover:underline">Let's check the crew! </a>
    </main>
  );
}
